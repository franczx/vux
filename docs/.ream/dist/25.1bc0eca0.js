webpackJsonp([25],{152:function(s,a,t){s.exports=t(492)},328:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={head:{title:" 页面切换时显示loading"}}},492:function(s,a,t){var n=t(4)(t(328),t(637),null,null,null);n.options.__file="/Users/lizheng/workspace/vux-design/vux-doc/docs/node_modules/v-markdown-loader/_cache/vue-show-loading-128.vue",n.esModule&&Object.keys(n.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] vue-show-loading-128.vue: functional components are not supported with templates, they should use render functions."),s.exports=n.exports},637:function(s,a,t){s.exports={render:function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("h1",[s._v("页面切换显示loading")]),s._v(" "),t("p",[s._v("移动端如果使用异步组件加载那么还是需要一点等待时间的，在网络慢时等待时间会更长。显示"),t("code",[s._v("Loading")]),s._v("状态缓解一下用户等待情绪就十分重要。")]),s._v(" "),t("p",[s._v("如果你使用"),t("code",[s._v("vue-router")]),s._v("和"),t("code",[s._v("vuex")]),s._v("，那么可以很容易实现。")]),s._v(" "),t("p",[s._v("首先，注册一个"),t("code",[s._v("module")]),s._v("来保存状态")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" store = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vuex.Store({}) "),t("span",{staticClass:"hljs-comment"},[s._v("// 这里你可能已经有其他 module")]),s._v("\n\nstore.registerModule("),t("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v(", { "),t("span",{staticClass:"hljs-comment"},[s._v("// 名字自己定义")]),s._v("\n  state: {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("isLoading")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("mutations")]),s._v(": {\n    updateLoadingStatus (state, payload) {\n      state.isLoading = payload.isLoading\n    }\n  }\n})\n")])]),s._v(" "),t("p",[s._v("然后使用"),t("code",[s._v("vue-router")]),s._v("的"),t("code",[s._v("beforeEach")]),s._v("和"),t("code",[s._v("afterEach")]),s._v("来更改"),t("code",[s._v("loading")]),s._v("状态")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("router.beforeEach("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("to, from, next")]),s._v(") ")]),s._v("{\n  store.commit("),t("span",{staticClass:"hljs-string"},[s._v("'updateLoadingStatus'")]),s._v(", {"),t("span",{staticClass:"hljs-attr"},[s._v("isLoading")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("})\n  next()\n})\n\nrouter.afterEach("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("to")]),s._v(") ")]),s._v("{\n  store.commit("),t("span",{staticClass:"hljs-string"},[s._v("'updateLoadingStatus'")]),s._v(", {"),t("span",{staticClass:"hljs-attr"},[s._v("isLoading")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("})\n})\n")])]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("App.vue")]),s._v("里使用"),t("code",[s._v("loading")]),s._v("组件并从"),t("code",[s._v("vuex")]),s._v("获取"),t("code",[s._v("isLoading")]),s._v("状态")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("loading")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"isLoading"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("loading")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Loading } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { mapState } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vuex'")]),s._v("\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": {\n    Loading\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("computed")]),s._v(": {\n    ...mapState({\n      "),t("span",{staticClass:"hljs-attr"},[s._v("isLoading")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("state")]),s._v(" =>")]),s._v(" state.vux.isLoading\n    })\n  }\n}\n")])]),s._v(" "),t("p",[s._v("done.")]),s._v(" "),t("p",[s._v("如果你觉得在加载比较快时"),t("code",[s._v("Loading")]),s._v("组件一闪而过体验也不大好，那么你可以延迟设置"),t("code",[s._v("loading=false")]),s._v("。")])])}]},s.exports.render._withStripped=!0}});
//# sourceMappingURL=25.1bc0eca0.js.map