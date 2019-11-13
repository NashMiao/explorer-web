<template>
  <div class="e-container margin-top-15 explorer-detail-tab">
    <list-title :name="$t('tokens.detail.name')"></list-title>
    <detail-title :name="$t('tokens.detail.hash')" :val="$route.params.contractHash"></detail-title>

    <detail-block-2 v-if="tokenData" :name1="$t('tokens.detail.creator')" :val1="tokenData.creator" :rows1="'1.2'"
                    :params1="['address', tokenData.creator]"
                    :name2="$t('tokens.detail.createdTime')"
                    :val2="$HelperTools.getTransDate(tokenData.create_time)" :rows2="'1.1'">
    </detail-block-2>

    <div class="detail-col font-Regular detail-col-fix">
      <div class="row">
        <div class="col">
          <div class="d-flex" v-if="tokenData">
            <div style="width: 106px; height: 106px;">
              <img v-if="tokenData.logo !== ''" class="img-sc-detail" :src="tokenData.logo" alt="">
              <div v-else class="token-no-logo-detail">
                {{ $route.params.type === 'oep4' ? tokenData.symbol : tokenData.symbol }}
              </div>
            </div>

            <div class="token-detail-desc">
              <h4>{{ tokenData.name }}
                <span v-if="$route.params.type === 'oep4'">&nbsp;&nbsp;{{ '(' + tokenData.symbol + ')' }}</span>
              </h4>
              <div class="f-color word-break d-block height-100 font-size14">
                <p class="word-break-word">{{ tokenData.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--oep-8 资产-->
      <div class="row" v-if="$route.params.contractType === 'oep8'">
        <div class="b-detail-divider-line"></div>
        <div class="col-12 f-color">{{ $t('addressDetail.oep8Assets') }}</div>
        <div class="col-3 text-center symbol-top" v-for="(item, index) in tokenData.asset_list">
          <div class="font-blod">{{ item.symbol }}</div>
          <div class="important_color font-size24">{{ $HelperTools.toFinancialVal(item.total_supply) }}</div>
        </div>
      </div>

      <!--<div class="b-detail-divider-line"></div>-->

<!--       <div v-if="tokenData.contact_info" class="row font-size14" v-for="(scVal, scKey, scIndex) in tokenData.contact_info">
        <div v-if="scIndex !== tokenData.contact_info.length" class="sc-detail-divider-line"></div>

        <div class="col-2"><span class="normal_color">{{ scKey }}</span></div>
        <div class="col-10">
          <span class="f-color word-break d-block height-100 font-size14">
            <div class="height-100">{{ scVal }}</div>
          </span>
        </div>
      </div> -->
    </div>

    <!--total_supply & Decimals-->
    <detail-block-2 :name1="$t('tokens.detail.totalSupply')"
                    :val1="$HelperTools.toFinancialVal(tokenData.total_supply)"
                    :rows1="'1.3'"
                    :name2="$t('tokens.detail.decimals')"
                    :val2="tokenData.decimals"
                    :rows2="'1.3'">
    </detail-block-2>

    <!--addresses & transactions & volume-->
    <div class="row">
      <div class="vol-col">
        <div class="detail-col detail-col-left">
          <div class="f-color">{{ $t('tokens.list.tab.addressCount') }}&nbsp;
            <a href="#" data-toggle="tooltip" class="tooltip-style" :title="$t('tokens.detail.tip')">
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </a>
          </div>
          <div class="important_color font-size24 text-center line-height72">{{ $HelperTools.toFinancialVal(tokenData.address_count ) }}</div>
        </div>
      </div>
      <div class="vol-col">
        <div class="detail-col detail-col-middle">
          <div class="f-color">{{ $t('tokens.detail.txn') }}</div>
          <div class="important_color font-size24 text-center line-height72">{{ $HelperTools.toFinancialVal(tokenData.tx_count) }}</div>
        </div>
      </div>
      <div class="vol-col">
        <div class="detail-col detail-col-right">
          <div class="f-color">{{ $t('tokens.detail.volume') }}&nbsp;
            <a href="#" data-toggle="tooltip" class="tooltip-style" :title="$t('tokens.detail.tip')">
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </a>
          </div>
          <div  class="important_color  text-center volume-height font-size24 " >
            <div class="volume-font">{{ contractData.ont_sum + ' ONT'}}</div>
            <div class="volume-font">{{ contractData.ong_sum + ' ONG'}}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab Control -->
    <ul class="nav nav-tabs f-color" role="tablist" style="margin-top: 4px;">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#scTxn">{{ $t('all.txns') }}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#scCode">{{ $t('tokens.detail.code') }}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#scABI">{{ $t('tokens.detail.abi') }}</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div id="scTxn" class=" tab-pane active">
        <div class="row" v-if="contractTxList.Total !== 0">
          <div class="col ">
            <div class="detail-col">
              <ont-pagination :total="contractTxList.total"></ont-pagination>
              
              <o-load v-if="!(contractTxList.list && loadingFlag)" ></o-load>
              <div v-else class="table-responsive">
                <table class="table">
                  <thead>
                  <tr class="f-color">
                    <th class="td-tx-head font-size18 font-Blod">{{ $t('all.hash') }}</th>
                    <th class="td-tx-head font-size18 font-Blod">{{ $t('all.fee') }}</th>
                    <th v-if="$route.params.contractType === 'oep5'"
                         class="td-tx-head font-size18 font-Blod">{{ $t('tokens.detail.tokenLbl') }}</th>
                    <th v-if="$route.params.contractType === 'oep5'"
                        class="td-tx-head font-size18 font-Blod">{{ $t('tokens.detail.tokenImg') }}</th>
                    <th class="td-tx-head font-size18 font-Blod">{{ $t('all.status') }}</th>
                    <th class="td-tx-head font-size18 font-Blod">{{ $t('all.block') }}</th>
                    <th class="td-tx-head font-size18 font-Blod">{{ $t('all.time') }}</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="tx in contractTxList.list">
                    <td class="font-size14 important_color font-Regular pointer" @click="toTransDetailPage(tx.tx_hash)">
                      {{tx.tx_hash.substr(0,4) + '...' + tx.tx_hash.substr(60)}}
                    </td>
                    <td class="normal_color">{{Number(tx.fee).toString()}}</td>

<!--                     <td v-if="$route.params.contractType === 'oep5'"
                        class="normal_color">{{ typeof(tx.json_url) === 'undefined' ? '' : tx.json_url.name }}</td> -->
                    <td v-if="$route.params.contractType === 'oep5' " 
                        class="normal_color">{{ tx.detail.transfers[0].symbol }}</td>
                    <td v-if="$route.params.contractType === 'oep5' " 
                        class="normal_color">
                      <img width="100px" :src="tx.detail.transfers[0].logo" alt="">
                    </td>

                    <td class="font-size14 s-color font-Regular" v-if="tx.contract_exec_state === true">Confirmed</td>
                    <td class="font-size14 f-color font-Regular" v-else>Failed</td>

                    <td class="font-size14 normal_color font-Regular">{{tx.block_height}}</td>
                    <td class="font-size14 normal_color font-Regular">{{$HelperTools.getTransDate(tx.tx_time)}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <ont-pagination :total="contractTxList.total"></ont-pagination>
            </div>
          </div>
        </div>
      </div>
      <div id="scCode" class=" tab-pane">
        <div class="row">
          <div class="col ">
            <div class="detail-col">
              <div class="copy-bottom">
                <span class="pull-right pointer font-size14">
                  <i @click="copyDetailVal('scCodeData')"
                     data-clipboard-target="#scCodeData"
                     class="copy-success l-25px fa fa-clone"
                     aria-hidden="true"></i>
                </span>
                <span class="pull-right font-size14 font-Regular copied-right" v-show="showCodeCopied">Copied!</span>
              </div>
              <textarea id="scCodeData" readonly rows="6">{{ contractData.code }}</textarea>
            </div>
          </div>
        </div>
      </div>
      <div id="scABI" class=" tab-pane">
        <div class="row">
          <div class="col ">
            <div class="detail-col"><div class="copy-bottom">
                <span class="pull-right pointer font-size14">
                  <i @click="copyDetailVal('scABIData')"
                     data-clipboard-target="#scABIData"
                     class="copy-success l-25px fa fa-clone"
                     aria-hidden="true"></i>
                  </span>
              <span class="pull-right font-size14 font-ExtraLight copied-right" v-show="showABICopied">Copied!</span>
            </div>
              <textarea id="scABIData" readonly rows="6">{{contractData.abi}}</textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Clipboard from 'clipboard';
  import HelperTool from "./../../helpers/helper"

  export default {
    name: "Token-Detail",
    mounted() {
      this.getTokenData();
      this.getContractData();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    watch: {
      '$route': ['getTokenData','getContractData'],
      'token':function(){
        console.log("token",this.token);
        this.tokenData = this.token.list;
        this.contractData = this.contract.list;
      },
      'contract': function () {
        console.log("contract",this.contract);
        this.contractData = this.contract.list;
      },
      'contractTxList':function(){
        console.log("tokenTXList",this.contractTxList)
        this.loadingFlag = true
      }
    },
    computed: {
      ...mapState({
        token: state => state.Tokens.Detail,
        contract: state => state.Contracts.Detail,
        contractTxList: state => state.Contracts.TxList,
      })
    },
    data() {
      return {
        showCodeCopied: false,
        showABICopied: false,
        tokenData:{},
        contractData:{},
        tokenInfo:{},
        loadingFlag:false,
      }
    },
    methods: {
      getTokenData() {
        this.token.list = '';
        this.loadingFlag = false;
        this.$store.dispatch('GetToken', this.$route.params).then();
        this.$store.dispatch('GetContractTx', this.$route.params).then();
      },
      getContractData() {
        this.contract.list = '';
        this.$store.dispatch('GetContract', this.$route.params).then();
      },
      toTransDetailPage($TxnId) {
        if (this.$route.params.net === 'testnet') {
          this.$router.push({name: 'TransactionDetailTest', params: {tx_hash: $TxnId, net: 'testnet'}})
        } else {
          this.$router.push({name: 'TransactionDetail', params: {tx_hash: $TxnId}})
        }
      },
      copyDetailVal($id) {
        let clipboard = new Clipboard('.copy-success');

        clipboard.on('success', function(e) {
          e.clearSelection();
        });

        if($id === 'scCodeData') {
          this.showCodeCopied = true
        } else {
          this.showABICopied = true
        }
      },
      toJson(str){
        return JSON.parse(str)
      }
    }
  }
</script>

<style scoped>
  .tab-content > .container {
    padding: 0;
  }

  .tab-content > .container .detail-col {
    margin-top: 0;
  }

  .tab-content textarea {
    border: none;
    width: 100%;
    padding: 0 10px 0 0;
    font-size: 14px;
    color: #595757;
    background-color: #edf2f5;
  }

  .symbol-top {
    margin-top: 15px;
  }

  .detail-col-fix {
    padding: 32px 24px 34px !important;;
  }

  .height-100 {
    height: 100%;
  }

  .b-detail-divider-line {
    background: #e5e4e4;
    height: 1px;
    margin: 15px;
    width: 100%;
  }

  .img-sc-detail {
    height: 106px;
    width: 106px;
    border-radius: 53px;
  }

  .token-detail-desc {
    margin-left: 30px;
  }

  .token-no-logo-detail {
    width: 106px !important;
    height: 106px !important;
    border-radius: 53px;
    background-color: #32A4BE;
    color: white;
    font-size: 24px;
    font-weight: bold;
    line-height: 106px;
    text-align: center;
  }

  .sc-detail-divider-line {
    background: #e5e4e4;
    height: 1px;
    margin: 15px;
    width: 100%;
  }

  .copied-right {
    margin-right: 10px;
  }

  .copy-bottom {
    margin-bottom: 5px;
  }
.padding0{
  padding:0 !important;
}
</style>
