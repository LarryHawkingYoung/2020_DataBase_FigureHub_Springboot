(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19ac65c9"],{"23be":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("MySidebar",{attrs:{head_index:"8"}}),a("a-layout",{staticClass:"pbbml"},[a("MyBread",{attrs:{first:"手办交易",second:"交易管理"}}),a("OrderSellCollection")],1)],1)},o=[],r=a("b8a9"),i=a("f594"),l=a("a92f"),s=a("bd0e"),c={name:"Work",components:{MyHeader:r["default"],MySidebar:i["a"],MyBread:l["a"],OrderSellCollection:s["a"]}},d=c,u=(a("6ec4"),a("2877")),m=Object(u["a"])(d,n,o,!1,null,null,null);t["default"]=m.exports},"6ec4":function(e,t,a){"use strict";var n=a("95c8"),o=a.n(n);o.a},"95c8":function(e,t,a){},bd0e:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"flextitle"}),a("div",[a("a-modal",{attrs:{title:"确认收货",visible:e.visible},on:{ok:function(t){return e.handleOk(1)},cancel:e.handleCancel}},[a("p",[e._v("要确认收货吗？确认后不可撤销！")])]),a("a-table",{attrs:{bordered:"",pagination:e.pagination,columns:e.columns,"data-source":e.data,loading:e.loading,rowKey:"dealId"},scopedSlots:e._u([{key:"operation",fn:function(t,n){return[0===n.status?a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.confirmModal(n)}}},[e._v("确认收货")]):1===n.status?a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.commentModal(n)}}},[e._v("我要评论")]):a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.showComModal(n)}}},[e._v("查看评论")]),e.data.length?a("a-popconfirm",{attrs:{title:"确定要取消此交易吗?","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(){return e.onDelete(n.dealId)}}},[a("a-button",{attrs:{type:"link",click:"javascript:;"}},[e._v("删除订单")])],1):e._e()]}}])}),a("update-form",{ref:"updateForm",attrs:{visible:e.updatevisible,recorder:e.updateRecorder},on:{cancel:e.updateCancel,create:e.updateCreate}})],1)])},o=[],r=(a("7db0"),a("2909")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{visible:e.visible,title:"创建新项目",okText:"创建",cancelText:"取消"},on:{cancel:function(){e.$emit("cancel")},ok:function(){e.$emit("create")}}},[a("a-form",{attrs:{layout:"vertical",form:e.form}},[a("a-form-item",{attrs:{label:"作品名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["workName",{rules:[{required:!0,message:"角色名称不能为空！"}]}],expression:"[\n          'workName',\n          {\n            rules: [{ required: true, message: '角色名称不能为空！' }],\n          },\n        ]"}]})],1),a("a-form-item",{attrs:{label:"作品类型"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["kind",{}],expression:"[\n          'kind',\n          {\n            // initialValue: '0',\n          },\n        ]"}]},[a("a-radio",{attrs:{value:"3"}},[e._v("小说")]),a("a-radio",{attrs:{value:"2"}},[e._v("游戏")]),a("a-radio",{attrs:{value:"1"}},[e._v("漫画")]),a("a-radio",{attrs:{value:"0"}},[e._v("动漫")])],1)],1),a("a-form-item",{attrs:{label:"作品介绍"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["intro"],expression:"['intro']"}],attrs:{type:"textarea"}})],1)],1)],1)},l=[],s={props:["visible"],beforeCreate:function(){this.form=this.$form.createForm(this,{name:"form_in_modal"})}},c=s,d=a("2877"),u=Object(d["a"])(c,i,l,!1,null,null,null),m=u.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{visible:e.visible,title:"我要评论",okText:"确认",cancelText:"取消",destroyOnClose:""},on:{cancel:function(){e.$emit("cancel")},ok:function(){e.$emit("create")}}},[a("a-form",{attrs:{layout:"vertical",form:e.form}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{rules:[{required:!0,message:"评价不能为空！"}]}],expression:"['content',\n          {\n            rules: [{ required: true, message: '评价不能为空！' }],\n          },]"}],attrs:{type:"textarea"}})],1)],1)],1)],1)},h=[],p={props:["visible"],beforeCreate:function(){this.form=this.$form.createForm(this,{name:"update_form_in_modal2"})}},v=p,b=Object(d["a"])(v,f,h,!1,null,null,null),g=b.exports,y=a("0c6d"),k={components:{CollectionCreateForm:m,UpdateForm:g},data:function(){return{pagination:{defaultPageSize:7,showTotal:function(e){return"共".concat(e,"条数据")}},columns:[{title:"单号",dataIndex:"dealId",key:"dealId",width:"5%"},{title:"卖家",dataIndex:"seller",key:"seller",width:"10%"},{title:"手办名称",dataIndex:"figureName",key:"figureName",width:"40%"},{title:"时间",dataIndex:"createTime",key:"createTime",width:"15%"},{title:"状态",dataIndex:"statusStr",key:"statusStr"},{title:"操作",width:"20%",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],data:[],visible:!1,updatevisible:!1,showvisible:!1,loading:!1,searchType:0,updateRecorder:{}}},methods:{showComModal:function(e){var t=this;y["a"].get("dealcomment/selectByDealId?dealId="+e.dealId,null).then((function(e){console.log(e[0]);var a=t.$createElement;t.$info({title:"查看评论",content:a("div",{},[a("p",e[0].content)]),onOk:function(){}})}))},formData:function(){for(var e=0;e<this.data.length;e++){var t=this.data[e].status;this.data[e].statusStr=2==t?"已完成":1==t?"待评价":"待收货"}},selectChange:function(e){this.searchType=e,console.log(this.searchType)},onCellChange:function(e,t,a){var n=Object(r["a"])(this.dataSource),o=n.find((function(t){return t.key===e}));o&&(o[t]=a,this.dataSource=n)},onDelete:function(e){var t=this;console.log(e),y["a"].delete_with_params(this.$store,"/deal/delete?dealId="+e,null).then((function(e){console.log(e);var a=t;a.loading=!0,a.$message.success("已取消订单"),a.queryTable()}))},addItem:function(){console.log("show"),this.visible=!0},commentModal:function(e){console.log("record is ",e),this.updateRecorder=e,this.updatevisible=!0},confirmModal:function(e){this.updateRecorder=e,this.visible=!0},handleCancel:function(){this.visible=!1},updateCancel:function(){this.updatevisible=!1},updateCreate:function(){var e=this,t=this.$refs.updateForm.form;t.validateFields((function(a,n){if(!a){var o={dealId:e.updateRecorder.dealId,content:n.content};y["a"].post_with_params(e.$store,"/dealcomment/insert?",o).then((function(t){console.log(t);var a=e;a.loading=!0,e.handleOk(2),a.queryTable()})),t.resetFields(),e.updatevisible=!1}}))},handleOk:function(e){var t=this;y["a"].put_with_params(this.$store,"/deal/update?",{dealId:this.updateRecorder.dealId,status:e,seller:this.updateRecorder.seller,merchandiseId:this.updateRecorder.merchandiseId}).then((function(e){console.log(e);var a=t;a.loading=!0,a.queryTable(),a.visible=!1}))},queryTable:function(){var e=this,t=this.$createElement,a=this;a.loading=!0,y["a"].get_with_params(this.$store,"/deal/selectByBuyer?buyer="+this.$store.state.user.userID,null).then((function(t){console.log(t),a.data=t,e.formData(),a.loading=!1})).catch((function(e){console.log("error case!"),a.$notification.open({message:"无法获取表格数据",icon:t("a-icon",{attrs:{type:"warning"},style:"color: #ff1820"}),description:"请检查后端是否正常运行，是否允许跨域；或修改main.js中的axios全局参数，以匹配后端Api",duration:10})}))}},created:function(){this.queryTable(),console.log(this.data)}},_=k,w=(a("dcc6"),Object(d["a"])(_,n,o,!1,null,null,null));t["a"]=w.exports},d352:function(e,t,a){},dcc6:function(e,t,a){"use strict";var n=a("d352"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-19ac65c9.323099ba.js.map