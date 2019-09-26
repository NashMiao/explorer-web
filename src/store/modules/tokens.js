import axios from 'axios'
import * as types from "../mutation-type"
import HelperTool from "./../../helpers/helper"
import $httpService from '../../common/utils'

export default {
  state: {
    List: {},
    Detail: {}
  },
  mutations: {
    [types.SET_TOKENS_DATA](state, payload) {
      state.List = payload.info
    },
    [types.SET_TOKEN_DATA](state, payload) {
      state.Detail = payload.info
    }
  },
  actions: {

    GetTokens({dispatch, commit}, $param) {

      return $httpService.get('/tokens/'+$param.contractType,{
        params: {
          page_size: $param.pageSize,
          page_number: $param.pageNumber
        }
      }).then(response => {
        commit({
          type: types.SET_TOKENS_DATA,
          info: {
            list: response.result.records,
            total: response.result.range_total
          }
        })
      }).catch(error => {
        console.log(error)
      })
    },

    GetToken({dispatch, commit}, $param) {

      return $httpService.get('/tokens/'+$param.contractType+'/'+$param.contractHash).then(response => {
        commit({
          type: types.SET_TOKEN_DATA,
          info: {
            list: response.result
          }
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
