(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-930bb682"],{"43de":function(e,t,a){"use strict";var r=a("e18a"),i=a.n(r);i.a},"451c":function(e,t,a){"use strict";var r=a("b840"),i=a.n(r);i.a},"72fd":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("MySidebar",{attrs:{head_index:"4"}}),a("a-layout",{staticClass:"pbbml"},[a("MyBread",{attrs:{first:"百科管理",second:"对应关系"}}),a("GCollection")],1)],1)},i=[],o=a("b8a9"),l=a("f594"),n=a("a92f"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"flextitle"},[a("div",[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.addItem(!0)}}},[e._v("添加")])],1),a("div",[a("a-input-group",{staticStyle:{width:"400px"}},[a("a-select",{staticStyle:{width:"25%"},attrs:{"default-value":"0"},on:{change:e.selectChange}},[a("a-select-option",{attrs:{value:"0"}},[e._v(" 手办名称 ")]),a("a-select-option",{attrs:{value:"1"}},[e._v(" 对应角色 ")])],1),a("a-input-search",{staticStyle:{width:"75%"},attrs:{placeholder:"请输入要搜索的关键词","allow-clear":"","enter-button":""},on:{search:e.searchModal}})],1)],1)]),a("collection-create-form",{ref:"collectionForm",attrs:{visible:e.visible,roleList:e.roleList,figureList:e.figureList},on:{cancel:e.handleCancel,create:e.handleCreate}}),a("div",[a("a-table",{attrs:{bordered:"",pagination:e.pagination,columns:e.columns,"data-source":e.data,loading:e.loading,rowKey:"ftrId"},scopedSlots:e._u([{key:"operation",fn:function(t,r){return[a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.updateModal(r)}}},[e._v("修改")]),e.data.length?a("a-popconfirm",{attrs:{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(){return e.onDelete(r.ftrId)}}},[a("a",{attrs:{href:"javascript:;"}},[e._v("删除")])]):e._e()]}}])}),a("update-form",{ref:"updateForm",attrs:{visible:e.updatevisible,roleList:e.roleList,figureList:e.figureList,recorder:e.updateRecorder},on:{cancel:e.updateCancel,create:e.updateCreate}})],1)],1)},c=[],u=(a("7db0"),a("2909")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{visible:e.visible,title:"添加新关联",okText:"添加",cancelText:"取消"},on:{cancel:function(){e.$emit("cancel")},ok:function(){e.$emit("create")}}},[a("a-form",{attrs:{layout:"vertical",form:e.form}},[a("a-form-item",{attrs:{label:"手办名称"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["fId",{rules:[{required:!0,message:"手办名称不能为空！"}],setFieldsValue:e.selectFigure}],expression:"[\n          'fId',\n          {\n            rules: [{ required: true, message: '手办名称不能为空！' }],\n            setFieldsValue: selectFigure,\n          },\n        ]"}],staticStyle:{width:"100%"},on:{change:e.selectChange}},e._l(e.figureList,(function(t){return a("a-select-option",{key:t.figureId,attrs:{value:t.figureId}},[e._v(e._s(t.figureName))])})),1)],1),a("a-form-item",{attrs:{label:"对应角色"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["rId",{rules:[{required:!0,message:"对应角色不能为空！"}],setFieldsValue:e.selectRole}],expression:"[\n          'rId',\n          {\n            rules: [{ required: true, message: '对应角色不能为空！' }],\n            setFieldsValue: selectRole,\n          },\n        ]"}],staticStyle:{width:"100%"},on:{change:e.selectChange1}},e._l(e.roleList,(function(t){return a("a-select-option",{key:t.roleId,attrs:{value:t.roleId}},[e._v(e._s(t.roleName))])})),1)],1)],1)],1)},f=[],m={props:["visible","roleList","figureList"],data:function(){return{selectFigure:"",selectRole:""}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"form_in_modal"})},methods:{selectChange:function(e){this.selectFigure=e},selectChange1:function(e){this.selectRole=e}}},g=m,h=a("2877"),p=Object(h["a"])(g,d,f,!1,null,null,null),v=p.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{visible:e.visible,title:"修改项目",okText:"修改",cancelText:"取消",destroyOnClose:""},on:{cancel:function(){e.$emit("cancel")},ok:function(){e.$emit("create")}}},[a("a-form",{attrs:{layout:"vertical",form:e.form}},[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"manuId"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ftrId",{initialValue:e.recorder.ftrId}],expression:"[\n            'ftrId',\n            { initialValue: recorder.ftrId },\n          ]"}],attrs:{type:"textarea"}})],1),a("a-form-item",{attrs:{label:"手办名称"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["fId",{rules:[{required:!0,message:"手办名称不能为空！"}],initialValue:e.recorder.figureId,setFieldsValue:e.selectFigure}],expression:"[\n            'fId',\n            {\n              rules: [{ required: true, message: '手办名称不能为空！' }],\n              initialValue: recorder.figureId,\n              setFieldsValue: selectFigure,\n            },\n          ]"}],staticStyle:{width:"100%"},on:{change:e.selectChange}},e._l(e.figureList,(function(t){return a("a-select-option",{key:t.figureId,attrs:{value:t.figureId}},[e._v(e._s(t.figureName))])})),1)],1),a("a-form-item",{attrs:{label:"对应角色"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["rId",{rules:[{required:!0,message:"对应角色不能为空！"}],initialValue:e.recorder.roleId,setFieldsValue:e.selectRole}],expression:"[\n            'rId',\n            {\n              rules: [{ required: true, message: '对应角色不能为空！' }],\n              initialValue: recorder.roleId,\n              setFieldsValue: selectRole,\n            },\n          ]"}],staticStyle:{width:"100%"},on:{change:e.selectChange1}},e._l(e.roleList,(function(t){return a("a-select-option",{key:t.roleId,attrs:{value:t.roleId}},[e._v(e._s(t.roleName))])})),1)],1)],1)],1)],1)},y=[],I={props:["visible","recorder","roleList","figureList"],data:function(){return{selectFigure:"",selectRole:""}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"update_form_in_modal2"})},methods:{selectChange:function(e){this.selectFigure=e},selectChange1:function(e){this.selectRole=e}}},_=I,C=Object(h["a"])(_,b,y,!1,null,null,null),F=C.exports,w=a("bc3a"),x=a.n(w),L={components:{CollectionCreateForm:v,UpdateForm:F},data:function(){return{pagination:{defaultPageSize:7,showTotal:function(e){return"共".concat(e,"条数据")}},columns:[{title:"手办名称",dataIndex:"figureName",key:"figureName",width:"40%"},{title:"对应角色",dataIndex:"roleName",key:"roleName"},{title:"操作",width:"10%",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],data:[],visible:!1,updatevisible:!1,loading:!1,searchType:0,updateRecorder:{},roleList:[],figureList:[]}},methods:{selectChange:function(e){this.searchType=e,console.log(this.searchType)},onCellChange:function(e,t,a){var r=Object(u["a"])(this.dataSource),i=r.find((function(t){return t.key===e}));i&&(i[t]=a,this.dataSource=r)},onDelete:function(e){var t=this;console.log(e),x.a.delete("/figuretorole/delete?ftrId="+e).then((function(e){console.log(e);var a=t;a.loading=!0,a.queryTable()}))},addItem:function(e){var t=this;x.a.get("/figure/selectAll").then((function(a){t.figureList=a.data,x.a.get("/role/selectAll").then((function(a){t.roleList=a.data,e?t.visible=!0:t.updatevisible=!0})).catch((function(e){console.log("role fail")}))})).catch((function(e){console.log("fail")}))},searchModal:function(e){if(e&&""!=e)if(0==this.searchType){console.log("searchType 0");var t={figureName:e};console.log(t);var a=this;a.loading=!0,x.a.get("/figuretorole/selectByFigureName?",{params:t}).then((function(e){a.data=e.data,a.loading=!1})).catch((function(e){alert(e)}))}else{console.log("searchType 1");var r={roleName:e};console.log(r);var i=this;i.loading=!0,x.a.get("/figuretorole/selectByRoleName?",{params:r}).then((function(e){console.log("selectByRoleName? ",e.data),i.data=e.data,i.loading=!1})).catch((function(e){alert(e)}))}else this.queryTable()},updateModal:function(e){console.log("record is ",e),this.updateRecorder=e,this.addItem(!1)},handleCancel:function(){this.visible=!1},updateCancel:function(){this.updatevisible=!1},updateCreate:function(){var e=this,t=this.$refs.updateForm.form;t.validateFields((function(a,r){if(!a){console.log("upodate ",r);var i={ftrId:r.ftrId,figureId:r.fId,roleId:r.rId};x.a.put("/figuretorole/update?",null,{params:i}).then((function(t){console.log(t);var a=e;a.loading=!0,a.queryTable()})),t.resetFields(),e.updatevisible=!1}}))},handleCreate:function(){var e=this,t=this.$refs.collectionForm.form;t.validateFields((function(a,r){if(!a){console.log("Received values of form: ",r);var i={figureId:r.fId,roleId:r.rId},o=e;x.a.post("/figuretorole/insert?",null,{params:i}).then((function(e){console.log(e),o.loading=!0,o.queryTable()})),t.resetFields(),o.visible=!1}}))},queryTable:function(){var e=this.$createElement,t=this;t.loading=!0,x.a.get("/figuretorole/selectAll").then((function(e){t.data=e.data,t.loading=!1})).catch((function(a){console.log("error case!"),t.$notification.open({message:"无法获取关系表格数据",icon:e("a-icon",{attrs:{type:"warning"},style:"color: #ff1820"}),description:"请检查后端是否正常运行，是否允许跨域；或修改main.js中的axios全局参数，以匹配后端Api",duration:10})}))}},created:function(){this.queryTable(),console.log(this.data)}},k=L,N=(a("451c"),Object(h["a"])(k,s,c,!1,null,null,null)),T=N.exports,R={components:{MyHeader:o["a"],MySidebar:l["a"],MyBread:n["a"],GCollection:T}},q=R,S=(a("43de"),Object(h["a"])(q,r,i,!1,null,null,null));t["default"]=S.exports},b840:function(e,t,a){},e18a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-930bb682.dc69e772.js.map