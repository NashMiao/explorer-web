webpackJsonp([10],{"95SA":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Dd8w"),a=s.n(o),l=s("NYxO"),n={data:function(){return{block:{},nextFlag:!1,nextCheck:!1}},mounted:function(){this.getBlock(),document.body.scrollTop=document.documentElement.scrollTop=0},watch:{$route:function(){this.getBlock()},currentblock:function(){this.block=this.currentblock,console.log("bingo")}},computed:a()({},Object(l.b)({currentblock:function(t){return t.Blocks.Detail}}),{detailParams:function(){return[{name:this.$t("blockDetail.hash"),val:this.block.block_hash,rows:2},{name:this.$t("blockDetail.keeper"),val:this.block.BookKeeper,rows:2},{name:this.$t("blockDetail.merkle"),val:this.block.merkle_root,rows:2},{name:this.$t("blockDetail.Consensus"),val:this.block.consensus_data,rows:2}]},prevBlockUrl:function(){return void 0===this.block.PrevBlock?"Null":this.block.PrevBlock.substr(0,4)+"..."+this.block.PrevBlock.substr(60)},nextBlockUrl:function(){return void 0!==this.block.NextBlock&&""!==this.block.NextBlock?this.block.NextBlock.substr(0,4)+"..."+this.block.NextBlock.substr(60):"Null"}}),methods:{getBlock:function(){this.$store.dispatch("GetBlock",this.$route.params).then()},toBlockDetailPage:function(t){"testnet"===this.$route.params.net?this.$router.push({name:"blockDetailTest",params:{param:t,net:"testnet"}}):this.$router.push({name:"blockDetail",params:{param:t}})},toTransDetailPage:function(t){"testnet"===this.$route.params.net?this.$router.push({name:"TransactionDetailTest",params:{tx_hash:t,net:"testnet"}}):this.$router.push({name:"TransactionDetail",params:{tx_hash:t}})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"e-container container-margin-top"},[s("list-title",{attrs:{name:t.$t("blockDetail.nickname")}}),t._v(" "),s("detail-title",{attrs:{name:t.$t("blockDetail.name"),val:t.block.block_height}}),t._v(" "),s("detail-block-2",{attrs:{name1:t.$t("blockDetail.BlockTime"),val1:t.$HelperTools.getTransDate(t.block.block_time),rows1:"1.1",name2:t.$t("blockDetail.BlockSize"),val2:t.block.block_size+" bytes",rows2:"1.1"}}),t._v(" "),s("detail-block",{attrs:{params:t.detailParams,styleVal:"new"}}),t._v(" "),0!==t.block.tx_count?s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"detail-col"},[t._v("\n          "+t._s(t.block.tx_count)),s("span",{staticClass:"f-color"},[t._v(" "+t._s(t.$t("blockDetail.txOnBlock")))]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[s("thead",[s("tr",{staticClass:"f-color"},[s("th",{staticClass:"td-tx-head font-size18 font-Blod"},[t._v(t._s(t.$t("all.hash")))]),t._v(" "),s("th",{staticClass:"td-tx-head font-size18 font-Blod"},[t._v(t._s(t.$t("all.status")))]),t._v(" "),s("th",{staticClass:"td-tx-head font-size18 font-Blod"},[t._v(t._s(t.$t("all.time")))])])]),t._v(" "),s("tbody",t._l(t.block.txs,function(e){return s("tr",[s("td",{staticClass:"font-size14 important_color font-Regular pointer",on:{click:function(s){return t.toTransDetailPage(e.tx_hash)}}},[t._v("\n                  "+t._s(e.tx_hash.substr(0,4)+"..."+e.tx_hash.substr(60))+"\n                ")]),t._v(" "),!0===e.contract_exec_state?s("td",{staticClass:"font-size14 s-color font-Regular"},[t._v("\n                  Confirmed\n                ")]):s("td",{staticClass:"font-size14 f-color font-Regular"},[t._v("\n                  Failed\n                ")]),t._v(" "),s("td",{staticClass:"font-size14 normal_color font-Regular"},[t._v("\n                  "+t._s(t.$HelperTools.getTransDate(e.tx_time))+"\n                ")])])}),0)])])])])]):t._e()],1)},staticRenderFns:[]};var i=s("VU/8")(n,c,!1,function(t){s("DTOB")},"data-v-5de10f1f",null);e.default=i.exports},DTOB:function(t,e){}});
//# sourceMappingURL=10.b32b1451cc7cab606d6a.js.map