import axios from 'axios'
import * as types from "../mutation-type"
import $httpService from '../../common/utils'

export default {
  state: {
    List: {},
    Ddo: {},
    Tx:{}
  },
  mutations: {
    [types.SET_ONT_ID_LIST_PAGE](state, payload) {
      state.List = payload.info
    },
    [types.SET_ONT_ID_DETAIL_DDO_PAGE](state, payload) {
      state.Ddo = payload.info
    },
    [types.SET_ONT_ID_DETAIL_TX_PAGE](state, payload) {
      state.Tx = payload.info
    }
  },
  actions: {
    GetOntIdList({dispatch, commit},$param) {
      return $httpService.get('/ontids',{
        params: {
          page_size: $param.pageSize,
          page_number: $param.pageNumber
        }
      }).then(response => {
        commit({
          type: types.SET_ONT_ID_LIST_PAGE,
          info: {
            list: response.result.records,
            total: response.result.range_total
          }
        })
      }).catch(error => {
        console.log(error)
      })
    },
    GetOntIdDdoDetail({dispatch, commit},$param) {
      return $httpService.get('/ontids/'+$param.ontid+'/ddo').then(response => {
        commit({
          type: types.SET_ONT_ID_DETAIL_DDO_PAGE,
          info: response.result,
        })
      }).catch(error => {
        console.log(error)
      })
    },
    GetOntIdTxDetail({dispatch, commit},$param) {
      return $httpService.get('/ontids/'+$param.ontid+'/transactions',{
        params: {
          page_size: $param.pageSize,
          page_number: $param.pageNumber
        }
      }).then(response => {
        let msg = response.data

        commit({
          type: types.SET_ONT_ID_DETAIL_TX_PAGE,
          info: response.result,
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
