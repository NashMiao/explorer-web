webpackJsonp([12],{A5t5:function(t,s){},"fyg/":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Dd8w"),o=a.n(e),n=a("NYxO"),i=a("SaKR"),r={data:function(){return{current:1,showItem:5,allpage:1,allnum:"",size:0,loadingFlag:!1,listType:"littlelist"}},mounted:function(){this.getTransactions(),document.body.scrollTop=document.documentElement.scrollTop=0},watch:{$route:function(){this.getTransactions(),document.body.scrollTop=document.documentElement.scrollTop=0},transactions:function(){this.loadingFlag=!0,console.log(this.transactions)}},computed:o()({},Object(n.b)({transactions:function(t){return t.Transactions.List}})),methods:{getTransactions:function(){this.loadingFlag=!1,this.testNetPageSizeCheck(),this.$store.dispatch("GetTransactions",this.$route.params).then()},testNetPageSizeCheck:function(){if("testnet"==this.$route.params.net&&this.$route.params.pageSize>30)return this.$message({message:this.$t("error.pagesize")}),this.$route.params.pageSize=30,void this.$router.push({name:this.$route.name,params:this.$route.params})},toTransactionDetailPage:function(t){void 0==this.$route.params.net?this.$router.push({name:"TransactionDetail",params:{tx_hash:t}}):this.$router.push({name:"TransactionDetailTest",params:{tx_hash:t,net:"testnet"}})},getTransactionType:function(t){return i.a.getTransactionType(t)}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"e-container container-margin-top"},[a("list-title",{attrs:{name:t.$t("transList.name")}}),t._v(" "),a("ont-pagination",{attrs:{total:t.transactions.total}}),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col"},[t.transactions.list&&t.loadingFlag?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover"},[a("thead",[a("tr",[a("th",{staticClass:"trl-tab-border-top-none font-size18",attrs:{scope:"col"}},[t._v(t._s(t.$t("all.hash")))]),t._v(" "),a("th",{staticClass:"trl-tab-border-top-none font-size18",attrs:{scope:"col"}},[t._v(t._s(t.$t("all.status")))]),t._v(" "),a("th",{staticClass:"trl-tab-border-top-none font-size18",attrs:{scope:"col"}},[t._v(t._s(t.$t("all.height")))]),t._v(" "),a("th",{staticClass:"trl-tab-border-top-none font-size18",attrs:{scope:"col"}},[t._v(t._s(t.$t("all.fee")))]),t._v(" "),a("th",{staticClass:"trl-tab-border-top-none font-size18",attrs:{scope:"col"}},[t._v(t._s(t.$t("all.time")))])])]),t._v(" "),a("tbody",t._l(t.transactions.list,function(s){return a("tr",{staticClass:"font-size14 font-Regular"},[a("td",{staticClass:"important_color pointer",on:{click:function(a){return t.toTransactionDetailPage(s.tx_hash)}}},[t._v("\n              "+t._s(s.tx_hash.substr(0,8)+"..."+s.tx_hash.substr(56))+"\n            ")]),t._v(" "),a("td",{staticClass:"s-color"},[t._v(t._s(!0===s.contract_exec_state?"Confirmed":"Failed"))]),t._v(" "),a("td",{staticClass:"normal_color"},[t._v(t._s(s.block_height))]),t._v(" "),a("td",{staticClass:"normal_color"},[t._v(t._s(t.$HelperTools.toFinancialVal(s.fee)))]),t._v(" "),a("td",{staticClass:"normal_color"},[t._v(t._s(t.$HelperTools.getTransDate(s.tx_time)))])])}),0)])]):a("o-load",{attrs:{type:t.listType}})],1)]),t._v(" "),a("ont-pagination",{attrs:{total:t.transactions.total}})],1)},staticRenderFns:[]};var c=a("VU/8")(r,l,!1,function(t){a("A5t5")},"data-v-495229a3",null);s.default=c.exports}});
//# sourceMappingURL=12.cd3e94d57b415d79e055.js.map