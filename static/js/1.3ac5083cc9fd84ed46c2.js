webpackJsonp([1],{"R4/H":function(t,s){},eHwB:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Dd8w"),i=e.n(a),n=e("NYxO"),o=e("fZjL"),l=e.n(o),r=e("woOf"),c=e.n(r),d={name:"DownloadExcel",props:["address"],data:function(){return{excelFileName:"AllTxnData-"+this.address,isShow:!0}},mounted:function(){var t=new Date;this.excelFileName=this.excelFileName+"-"+t.toLocaleDateString()+".xlsx"},methods:{downloadExcel:function(){var t=this;this.isShow=!1,this.$store.dispatch("getAddressDetailAllData",{address:this.$route.params.address,pageSize:20,pageNumber:1}).then(function(s){!1!==s&&t.generatingExcelData(s)})},generatingExcelData:function(t){var s=this,e=t[0],a=[],i=[];for(var n in t.unshift({}),e)a.push(n),t[0][n]=n;t.map(function(t,e){return a.map(function(a,i){return c()({},{v:t[a],position:(i>25?s.getCharCol(i):String.fromCharCode(65+i))+(e+1)})})}).reduce(function(t,s){return t.concat(s)}).forEach(function(t,s){return i[t.position]={v:t.v}});var o=l()(i),r={SheetNames:["mySheet"],Sheets:{mySheet:c()({},i,{"!ref":o[0]+":"+o[o.length-1]})}};this.tmpDown=new Blob([this.s2ab(XLSX.write(r,{bookType:"xlsx",bookSST:!1,type:"binary"}))],{type:""});var d=URL.createObjectURL(this.tmpDown),p=document.getElementById("hf");p.href=d,p.click(),setTimeout(function(){URL.revokeObjectURL(this.tmpDown)},100)},s2ab:function(t){for(var s=new ArrayBuffer(t.length),e=new Uint8Array(s),a=0;a!==t.length;++a)e[a]=255&t.charCodeAt(a);return s},getCharCol:function(t){for(var s="",e=0;t>0;)e=t%26+1,s=String.fromCharCode(e+64)+s,t=(t-e)/26;return s}}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[e("button",{staticClass:"download-excel-btn",on:{click:function(s){return t.downloadExcel()}}},[e("i",{staticClass:"far fa-file-excel"})]),t._v(" "),e("a",{attrs:{href:"",download:t.excelFileName,id:"hf"}})])},staticRenderFns:[]};var v=e("VU/8")(d,p,!1,function(t){e("R4/H")},"data-v-d8fea1d8",null).exports,u={data:function(){return{Ddo:{},claimflag:!0,AssetBalance:[],nativeAssetBalance:[],oep4AssetBalance:[],oep5AssetBalance:[],oep8AssetBalance:[],otherAssetBalance:[],showOtherAssetBalance:[],havePumpkin:!1,haveOtherOep:!1,have4Oep:!1,have5Oep:!1,TxnList:[],info:[],tmpDown:"",showTxList:[],loadingFlag:!1}},mounted:function(){console.log(this.$route.params),"testnet"==this.$route.params.pageSize||"testnet"==this.$route.params.pageNumber||"testnet"==this.$route.params.assetName?(this.$route.params.net="testnet",this.toAddressDetailPage(this.$route.params.address)):void 0==this.$route.params.pageSize||void 0==this.$route.params.pageNumber||void 0==this.$route.params.assetName?this.toAddressDetailPage(this.$route.params.address):this.getAddressDetailData(),document.body.scrollTop=document.documentElement.scrollTop=0},watch:{$route:"getAddressDetailData",Oep4Balance:function(){this.oep4AssetBalance=[],this.oep4AssetBalance=this.oep4AssetBalance.concat(this.Oep4Balance.list),this.Oep4Balance.list.length>0&&(this.have4Oep=!0)},Oep5Balance:function(){this.oep5AssetBalance=[],this.oep5AssetBalance=this.oep5AssetBalance.concat(this.Oep5Balance.list),this.Oep5Balance.list.length>0&&(this.have5Oep=!0)},Oep8Balance:function(){this.oep8AssetBalance=this.oep8AssetBalance.concat(this.Oep8Balance.list),this.Oep8Balance.list.length>0&&(this.havePumpkin=!0)},NativeBalance:function(){this.nativeAssetBalance=this.nativeAssetBalance.concat(this.NativeBalance.list)},TxList:function(){this.showTxList=this.TxList,this.loadingFlag=!0},AssetTxList:function(){this.showTxList=this.AssetTxList,this.loadingFlag=!0}},computed:i()({},Object(n.b)({Oep4Balance:function(t){return t.Addresses.Oep4Balance},Oep5Balance:function(t){return t.Addresses.Oep5Balance},Oep8Balance:function(t){return t.Addresses.Oep8Balance},NativeBalance:function(t){return t.Addresses.NativeBalance},TxList:function(t){return t.Addresses.TxList},AssetTxList:function(t){return t.Addresses.AssetTxList}}),{nativeAssetsVal:function(){var t={};for(var s in this.nativeAssetBalance)t[this.nativeAssetBalance[s].asset_name]=this.$HelperTools.toFinancialVal(this.nativeAssetBalance[s].balance);return t},oep4AssetsVal:function(){var t={};for(var s in this.oep4AssetBalance)t[this.oep4AssetBalance[s].asset_name]=this.$HelperTools.toFinancialVal(this.oep4AssetBalance[s].balance);return t},oep5AssetsVal:function(){var t={};for(var s in this.oep5AssetBalance)t[this.oep5AssetBalance[s].asset_name]=this.$HelperTools.toFinancialVal(this.oep5AssetBalance[s].balance);return t},oep8AssetsVal:function(){var t={};for(var s in this.oep8AssetBalance)t[this.oep8AssetBalance[s].asset_name]=this.$HelperTools.toFinancialVal(this.oep8AssetBalance[s].balance);return t}}),methods:{getAddressDetailData:function(){this.loadingFlag=!1;var t=this.$route.params;t.contractType="native",this.$store.dispatch("GetAddressNativeDetail",t).then(),t.contractType="oep4",this.$store.dispatch("GetAddressOep4Detail",t).then(),t.contractType="oep5",this.$store.dispatch("GetAddressOep5Detail",t).then(),t.contractType="oep8",this.$store.dispatch("GetAddressOep8Detail",t).then(),"ALL"==t.assetName?this.$store.dispatch("GetAddressTX",t).then():this.$store.dispatch("GetAddressAssetTX",t).then()},zeroPlus:function(t){return t||0},toReturn:function(){this.$router.go(-1)},toTransactionDetailPage:function(t){void 0==this.$route.params.net?this.$router.push({name:"TransactionDetail",params:{tx_hash:t}}):this.$router.push({name:"TransactionDetailTest",params:{tx_hash:t,net:"testnet"}})},toAddressDetailPage:function(t){void 0==this.$route.params.net?this.$router.push({name:"AddressDetail",params:{address:t,assetName:"ALL",pageSize:20,pageNumber:1}}):this.$router.push({name:"AddressDetailTest",params:{address:t,assetName:"ALL",pageSize:20,pageNumber:1,net:"testnet"}})},goToPage:function(t){var s=this.$route.params.address;void 0==this.$route.params.net?this.$router.push({name:"AddressDetail",params:{address:s,pageSize:t.pageSize,pageNumber:t.pageNumber}}):this.$router.push({name:"AddressDetailTest",params:{address:s,pageSize:t.pageSize,pageNumber:t.pageNumber,net:"testnet"}}),this.getAddressDetailData()}},components:{ToExcel:v}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"e-container container-margin-top"},[e("list-title",{attrs:{name:t.$t("addressDetail.name")}}),t._v(" "),e("detail-title",{attrs:{name:t.$t("addressDetail.address"),val:t.$route.params.address}}),t._v(" "),t.NativeBalance.list?e("detail-block-2",{attrs:{name1:t.$t("addressDetail.ontBalance"),val1:t.nativeAssetsVal.ont,rows1:"1.3",name2:t.$t("addressDetail.ongBalance"),val2:t.nativeAssetsVal.ong,rows2:"1.3"}}):t._e(),t._v(" "),t.NativeBalance?e("div",{staticClass:"detail-col"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col table1_item_title"},[e("span",{staticClass:"f-color"},[t._v(t._s(t.$t("addressDetail.claimable")))]),t._v(" "),e("span",{staticClass:"important_color"},[t._v(t._s(t.nativeAssetsVal.unboundong))])])]),t._v(" "),e("div",{staticClass:"row table1_item_title"},[e("div",{staticClass:"col"},[e("span",{staticClass:"f-color"},[t._v(t._s(t.$t("addressDetail.unbound")))]),t._v(" "),e("span",{staticClass:"important_color"},[t._v(t._s(t.nativeAssetsVal.waitboundong))])])])]):t._e(),t._v(" "),t.havePumpkin?e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"detail-col"},[t._v("\n        "+t._s(t.$t("addressDetail.oep8Assets"))+"\n        "),e("div",{staticClass:"row pumpkin-color font-size14 text-center",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"col"},[e("div",[t._v(t._s(t.$t("assetName.pumpkin08")))]),t._v(" "),e("div",{staticClass:"font-size24"},[t._v(t._s(t.zeroPlus(t.oep8AssetsVal.pumpkin08)))])]),t._v(" "),e("div",{staticClass:"col"},[e("div",[t._v(t._s(t.$t("assetName.pumpkin01")))]),t._v(" "),e("div",{staticClass:"font-size24"},[t._v(t._s(t.zeroPlus(t.oep8AssetsVal.pumpkin01)))])]),t._v(" "),e("div",{staticClass:"col"},[e("div",[t._v(t._s(t.$t("assetName.pumpkin02")))]),t._v(" "),e("div",{staticClass:"font-size24"},[t._v(t._s(t.zeroPlus(t.oep8AssetsVal.pumpkin02)))])]),t._v(" "),e("div",{staticClass:"col"},[e("div",[t._v(t._s(t.$t("assetName.pumpkin03")))]),t._v(" "),e("div",{staticClass:"font-size24"},[t._v(t._s(t.zeroPlus(t.oep8AssetsVal.pumpkin03)))])])]),t._v(" "),e("div",{staticClass:"row pumpkin-color font-size14 text-center",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"col"},[e("div",[t._v(t._s(t.$t("assetName.pumpkin04")))]),t._v(" "),e("div",{staticClass:"font-size24"},[t._v(t._s(t.zeroPlus(t.oep8AssetsVal.pumpkin04)))])]),t._v(" "),e("div",{staticClass:"col"},[e("div",[t._v(t._s(t.$t("assetName.pumpkin05")))]),t._v(" "),e("div",{staticClass:"font-size24"},[t._v(t._s(t.zeroPlus(t.oep8AssetsVal.pumpkin05)))])]),t._v(" "),e("div",{staticClass:"col"},[e("div",[t._v(t._s(t.$t("assetName.pumpkin06")))]),t._v(" "),e("div",{staticClass:"font-size24"},[t._v(t._s(t.zeroPlus(t.oep8AssetsVal.pumpkin06)))])]),t._v(" "),e("div",{staticClass:"col"},[e("div",[t._v(t._s(t.$t("assetName.pumpkin07")))]),t._v(" "),e("div",{staticClass:"font-size24"},[t._v(t._s(t.zeroPlus(t.oep8AssetsVal.pumpkin07)))])])])])])]):t._e(),t._v(" "),t.have4Oep?e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"detail-col"},[e("span",{staticClass:"font-blod table1_item_title"},[t._v(t._s(t.$t("addressDetail.oep4Assets")))]),t._v(" "),t._l(t.oep4AssetBalance,function(s,a){return e("div",{staticClass:"row font-size14 oep-4-5-div"},[e("div",{staticClass:"table1_item_title font-Regular"},[e("span",{staticClass:"f-color"},[t._v(t._s(s.asset_name.toUpperCase()+": "))]),t._v(" "),e("span",{staticClass:"important_color"},[t._v(t._s(parseFloat(s.balance)))])])])})],2)])]):t._e(),t._v(" "),t.have5Oep?e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"detail-col"},[e("span",{staticClass:"font-blod table1_item_title"},[t._v(t._s(t.$t("addressDetail.oep5Assets")))]),t._v(" "),t._l(t.oep5AssetBalance,function(s,a){return e("div",{staticClass:"row font-size14 oep-4-5-div"},[e("div",{staticClass:"table1_item_title font-Regular"},[e("span",{staticClass:"f-color"},[t._v(t._s(s.asset_name.toUpperCase()+": "))]),t._v(" "),e("span",{staticClass:"important_color"},[t._v(t._s(parseFloat(s.balance)))])])])})],2)])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"detail-col"},[e("div",{staticClass:"row font-size18 font-blod normal_color"},[e("div",{staticClass:"col"},[t._v("\n            "+t._s(t.$t("addressDetail.txns"))+"\n          ")]),t._v(" "),e("div",{staticClass:"col"},[e("to-excel",{attrs:{address:t.$route.params.address}})],1)]),t._v(" "),t.loadingFlag?e("div",{staticClass:"row table-responsive"},[e("div",{staticClass:"col"},[0!==t.info.TxnTotal?e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{staticClass:"td-tx-head table3_head font-size18 font-blod normal_color"},[t._v(t._s(t.$t("all.hash")))]),t._v(" "),e("th",{staticClass:"td-tx-head table3_head font-size18 font-blod normal_color"},[t._v(t._s(t.$t("all.amount")))]),t._v(" "),e("th",{staticClass:"td-tx-head table3_head font-size18 font-blod normal_color"},[t._v(t._s(t.$t("all.status")))]),t._v(" "),e("th",{staticClass:"td-tx-head table3_head font-size18 font-blod normal_color"},[t._v(t._s(t.$t("all.time")))])])]),t._v(" "),e("tbody",t._l(t.showTxList.list,function(s){return e("tr",[e("td",{staticClass:"font-size14 font-Regular f-color pointer",on:{click:function(e){return t.toTransactionDetailPage(s.tx_hash)}}},[t._v("\n                  "+t._s(s.tx_hash.substr(0,16)+"...")+"\n                ")]),t._v(" "),e("td",{staticClass:"font-size14 font-Regular"},t._l(s.transfers,function(a,i){return e("span",[a.from_address===t.$route.params.address?e("span",{staticClass:"expenditure-color"},[a.symbol.indexOf("pumpkin")>-1?e("span",[t._v("\n                        "+t._s("-"+t.$HelperTools.toFinancialVal(a.amount)+" "+t.$t("assetName."+a.symbol))+"\n                      ")]):e("span",[t._v("\n                        "+t._s("-"+t.$HelperTools.toFinancialVal(a.amount)+" "+a.symbol.toUpperCase())+"\n                      ")])]):e("span",{staticClass:"income-color"},[a.symbol.indexOf("pumpkin")>-1?e("span",[t._v("\n                        "+t._s(t.$HelperTools.toFinancialVal(a.amount)+" "+t.$t("assetName."+a.symbol))+"\n                      ")]):e("span",[t._v("\n                        "+t._s(t.$HelperTools.toFinancialVal(a.amount)+" "+a.symbol.toUpperCase())+"\n                      ")])]),t._v(" "),i!==s.transfers.length-1?e("span",{class:a.from_address===t.$route.params.address?"expenditure-color":"income-color"},[t._v("\n                      "+t._s(", ")+"\n                    ")]):t._e()])}),0),t._v(" "),e("td",{staticClass:"font-size14 font-Regular s-color"},[t._v(t._s(!0===s.contract_exec_state?"Confirmed":"Failed"))]),t._v(" "),e("td",{staticClass:"font-size14 font-Regular normal_color"},[t._v(t._s(t.$HelperTools.getTransDate(s.tx_time)))])])}),0)]):t._e()])]):e("o-load"),t._v(" "),e("ont-pagination",{attrs:{total:t.showTxList.total}})],1)])])],1)},staticRenderFns:[]};var _=e("VU/8")(u,h,!1,function(t){e("hNXL")},"data-v-93cb0cd6",null);s.default=_.exports},hNXL:function(t,s){}});
//# sourceMappingURL=1.3ac5083cc9fd84ed46c2.js.map