(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{3408:function(e,t,a){},"34e8":function(e,t,a){"use strict";var n=a("c8e7"),o=a.n(n);o.a},"557f":function(e,t,a){"use strict";var n=a("3408"),o=a.n(n);o.a},"629c":function(e,t,a){"use strict";var n=a("e46f"),o=a.n(n);o.a},"6aa9":function(e,t,a){},"736d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("MySidebar",{attrs:{head_index:"1"}}),a("a-layout",{staticStyle:{padding:"0 24px 24px"},attrs:{id:"pbbml"}},[a("MyBread",{attrs:{first:"百科管理",second:"厂商信息"}}),a("MyCollection")],1)],1)},o=[],i=a("b8a9"),r=a("f594"),l=a("a92f"),s=a("83f3"),c={components:{MyHeader:i["a"],MySidebar:r["a"],MyBread:l["a"],MyCollection:s["a"]}},u=c,d=(a("98d2"),a("2877")),m=Object(d["a"])(u,n,o,!1,null,null,null);t["default"]=m.exports},"83f3":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"flextitle"},[a("div",[a("a-button",{attrs:{type:"primary"},on:{click:e.showModal}},[e._v("添加")])],1),a("div",[a("a-input-group",{staticStyle:{width:"400px"}},[a("a-select",{staticStyle:{width:"18%"},attrs:{"default-value":"0"},on:{change:e.selectChange}},[a("a-select-option",{attrs:{value:"0"}},[e._v(" 名称 ")]),a("a-select-option",{attrs:{value:"1"}},[e._v(" 主页 ")])],1),a("a-input-search",{staticStyle:{width:"82%"},attrs:{placeholder:"请输入要搜索的关键词","allow-clear":"","enter-button":""},on:{search:e.searchModal}})],1)],1)]),a("collection-create-form",{ref:"collectionForm",attrs:{visible:e.visible},on:{cancel:e.handleCancel,create:e.handleCreate}}),a("div",[a("a-table",{attrs:{bordered:"",pagination:e.pagination,columns:e.columns,"data-source":e.data,loading:e.loading,rowKey:"manuId"},scopedSlots:e._u([{key:"operation",fn:function(t,n){return[a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.updateModal(n.manuId,n.manuName,n.manuLink)}}},[e._v("修改")]),e.data.length?a("a-popconfirm",{attrs:{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(){return e.onDelete(n.manuId)}}},[a("a",{attrs:{href:"javascript:;"}},[e._v("删除")])]):e._e()]}}])}),a("update-form",{ref:"updateForm",attrs:{visible:e.updatevisible},on:{cancel:e.updateCancel,create:e.updateCreate}})],1)],1)},o=[],i=(a("7db0"),a("2909")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{visible:e.visible,title:"创建新项目",okText:"创建",cancelText:"取消"},on:{cancel:function(){e.$emit("cancel")},ok:function(){e.$emit("create")}}},[a("a-form",{attrs:{layout:"vertical",form:e.form}},[a("a-form-item",{attrs:{label:"厂商名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["manuName",{rules:[{required:!0,message:"厂商名称不能为空！"}]}],expression:"[\n            'manuName',\n            {\n              rules: [{ required: true, message: '厂商名称不能为空！' }],\n            },\n          ]"}]})],1),a("a-form-item",{attrs:{label:"厂商主页"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["manuLink"],expression:"['manuLink']"}],attrs:{type:"textarea"}})],1)],1)],1)},l=[],s={props:["visible"],beforeCreate:function(){this.form=this.$form.createForm(this,{name:"form_in_modal"})}},c=s,u=a("2877"),d=Object(u["a"])(c,r,l,!1,null,null,null),m=d.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{visible:e.visible,title:"修改项目",okText:"修改",cancelText:"取消",destroyOnClose:""},on:{cancel:function(){e.$emit("cancel")},ok:function(){e.$emit("create")}}},[a("a-form",{attrs:{layout:"vertical",form:e.form}},[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"manuId"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["manuId",{initialValue:this.$store.state.mId}],expression:"[\n            'manuId',\n            { initialValue: this.$store.state.mId },\n          ]"}],attrs:{type:"textarea"}})],1),a("a-form-item",{attrs:{label:"厂商名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["manuName",{rules:[{required:!0,message:"厂商名称不能为空！"}],initialValue:this.$store.state.mName}],expression:"[\n            'manuName',\n            {\n              rules: [{ required: true, message: '厂商名称不能为空！' }],\n              initialValue: this.$store.state.mName,\n            },\n          ]"}]})],1),a("a-form-item",{attrs:{label:"厂商主页"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["manuLink",{initialValue:this.$store.state.mLink}],expression:"[\n            'manuLink',\n            { initialValue: this.$store.state.mLink },\n          ]"}],attrs:{type:"textarea"}})],1)],1)],1)],1)},p=[],h={props:["visible"],beforeCreate:function(){this.form=this.$form.createForm(this,{name:"update_form_in_modal1"})}},v=h,g=Object(u["a"])(v,f,p,!1,null,null,null),b=g.exports,y=a("bc3a"),x=a.n(y),k={components:{CollectionCreateForm:m,UpdateForm:b},data:function(){return{pagination:{defaultPageSize:7,showTotal:function(e){return"共".concat(e,"条数据")}},columns:[{title:"厂商名称",dataIndex:"manuName",key:"manuName",width:"20%"},{title:"厂商主页",dataIndex:"manuLink",key:"manuLink",width:"55%"},{title:"操作",width:"15%",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],data:[],visible:!1,updatevisible:!1,loading:!1,searchType:0}},methods:{selectChange:function(e){this.searchType=e,console.log(this.searchType)},onCellChange:function(e,t,a){var n=Object(i["a"])(this.dataSource),o=n.find((function(t){return t.key===e}));o&&(o[t]=a,this.dataSource=n)},onDelete:function(e){var t=this;console.log(e),x.a.delete("/manufacturer/delete?manuId="+e).then((function(e){console.log(e);var a=t;a.loading=!0,x.a.get("/manufacturer/selectAll").then((function(e){a.data=e.data,console.log(a.data),a.loading=!1})).catch((function(e){alert(e)}))}))},showModal:function(){console.log("show"),this.visible=!0},searchModal:function(e){if(e&&""!=e)if(0==this.searchType){console.log("searchType 0");var t={manuName:e};console.log(t);var a=this;a.loading=!0,x.a.get("/manufacturer/selectByName?",{params:t}).then((function(e){a.data=e.data,a.loading=!1})).catch((function(e){alert(e)}))}else{console.log("searchType 1");var n={manuLink:e};console.log(n);var o=this;o.loading=!0,x.a.get("/manufacturer/selectByLink?",{params:n}).then((function(e){o.data=e.data,o.loading=!1})).catch((function(e){alert(e)}))}else console.log("search undefined"),this.queryTable()},updateModal:function(e,t,a){console.log("update"),this.$store.commit("updateItemId",e),this.$store.commit("updateItemName",t),this.$store.commit("updateItemLink",a),this.updatevisible=!0},handleCancel:function(){this.visible=!1},updateCancel:function(){this.updatevisible=!1},updateCreate:function(){var e=this;console.log("update up");var t=this.$refs.updateForm.form;t.validateFields((function(a,n){if(!a){var o={manuId:n.manuId,manuName:n.manuName,manuLink:n.manuLink};console.log("Update values of form: ",n),x.a.put("/manufacturer/update?",null,{params:o}).then((function(t){console.log(t);var a=e;a.loading=!0,x.a.get("/manufacturer/selectAll").then((function(e){a.data=e.data,console.log(a.data),a.loading=!1})).catch((function(e){alert(e)}))})),t.resetFields(),e.updatevisible=!1}}))},handleCreate:function(){var e=this,t=this.$refs.collectionForm.form;t.validateFields((function(a,n){if(!a){console.log("Received values of form: ",n);var o={manuName:n.manuName,manuLink:n.manuLink};x.a.post("/manufacturer/insert?",null,{params:o}).then((function(t){console.log(t);var a=e;a.loading=!0,x.a.get("/manufacturer/selectAll").then((function(e){a.data=e.data,console.log(a.data),a.loading=!1})).catch((function(e){alert(e)}))})),t.resetFields(),e.visible=!1}}))},queryTable:function(){var e=this.$createElement;console.log("init");var t=this;t.loading=!0,x.a.get("/manufacturer/selectAll").then((function(e){t.data=e.data,t.loading=!1})).catch((function(a){console.log("error case!"),t.$notification.open({message:"无法获取表格数据",icon:e("a-icon",{attrs:{type:"warning"},style:"color: #ff1820"}),description:"请检查后端是否正常运行，是否允许跨域；或修改main.js中的axios全局参数，以匹配后端Api",duration:10})}))}},created:function(){this.queryTable(),console.log(this.data)}},w=k,_=(a("629c"),Object(u["a"])(w,n,o,!1,null,null,null));t["a"]=_.exports},"98d2":function(e,t,a){"use strict";var n=a("6aa9"),o=a.n(n);o.a},c8e7:function(e,t,a){},e46f:function(e,t,a){},e88b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("MyHeader",{attrs:{head_index:"2"}}),a("a-layout",{staticClass:"back"},[a("div",{staticClass:"s-skin-container"}),a("div",{staticClass:"heroContent"},[a("div",{staticStyle:{"font-size":"200px"}},[e._v("还没写呢")])])])],1)},o=[],i=a("b8a9"),r={components:{MyHeader:i["a"]}},l=r,s=(a("34e8"),a("2877")),c=Object(s["a"])(l,n,o,!1,null,null,null);t["default"]=c.exports},f74b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("MyHeader",{attrs:{head_index:"3"}}),a("a-layout",{staticClass:"a-layout"},[a("router-view")],1)],1)},o=[],i=a("b8a9"),r=a("f594"),l=a("a92f"),s=a("83f3"),c={components:{MyHeader:i["a"],MySidebar:r["a"],MyBread:l["a"],MyCollection:s["a"]}},u=c,d=(a("557f"),a("2877")),m=Object(d["a"])(u,n,o,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=about.170ad25f.js.map