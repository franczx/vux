webpackJsonp([84],{115:function(s,a,t){s.exports=t(433)},269:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={head:{}}},433:function(s,a,t){var l=t(4)(t(269),t(596),null,null,null);l.options.__file="/Users/lizheng/workspace/vux-design/vux-doc/docs/node_modules/v-markdown-loader/_cache/scroller-92.vue",l.esModule&&Object.keys(l.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] scroller-92.vue: functional components are not supported with templates, they should use render functions."),s.exports=l.exports},596:function(s,a,t){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("h3",[s._v("Scroller_COM")]),s._v(" "),t("img",{attrs:{width:"100",src:"http://qr.topscan.com/api.php?text=https%3A%2F%2Fvux.li%2Fdemos%2Fv2%2F%23%2Fcomponent%2Fscroller"}}),s._v(" "),s._m(0),s._v(" "),t("hr"),s._v(" "),t("h4",[s._v("演示")]),s._v(" "),t("div",{staticStyle:{width:"377px",height:"667px",display:"inline-block",border:"1px dashed #ececec","border-radius":"5px",overflow:"hidden"}},[t("iframe",{attrs:{src:"https://vux.li/demos/v2/#/component/scroller",width:"375",height:"667",border:"0",frameborder:"0"}})],1),s._v(" "),t("h4",[s._v("demo 代码")]),s._v(" "),t("p",{staticClass:"tip"},[s._v("下面的$t是Demo的i18n使用的翻译函数，一般情况下可以直接使用字符串。另外，下面代码隐藏了i18n标签部分的代码。")]),s._v(" "),s._m(1),s._v(" "),t("h4",[s._v("Github Issue")])])},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("a",{staticStyle:{"font-size":"12px",color:"#888"},attrs:{href:"https://vux.li/demos/v2/#/component/scroller",target:"_blank"}},[s._v("demo 原始链接：https://vux.li/demos/v2/#/component/scroller")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("is-link")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"pullup"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("link")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"/component/pullup"')]),s._v(">")]),s._v("Pullup"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("is-link")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"pulldown"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("link")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"/component/pulldown"')]),s._v(">")]),s._v("Pulldown"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("is-link")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"pulldownpullup"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("link")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"/component/pulldown-pullup"')]),s._v(">")]),s._v("PulldownPullup"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),t("span",[s._v("{{")]),s._v(" $t('A Horizontal Scroller without Scrollbar') "),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("lock-y")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":scrollbar-x")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("false")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"box1"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"box1-item"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"i in 7"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),t("span",[s._v("{{")]),s._v("' ' + i + ' '"),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),t("span",[s._v("{{")]),s._v(" $t('A Horizontal Scroller with Scrollbar') "),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("lock-y")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("scrollbar-x")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"box1"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"box1-item"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"i in 7"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),t("span",[s._v("{{")]),s._v("' ' + i + ' '"),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),t("span",[s._v("{{")]),s._v(" $t('A Horizontal Scroller without bounce effect') "),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("lock-y")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("scrollbar-x")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":bounce")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("false")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"box1"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"box1-item"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"i in 7"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),t("span",[s._v("{{")]),s._v("' ' + i + ' '"),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),t("span",[s._v("{{")]),s._v(" $t('A Vertical Scroller') "),t("span",[s._v("}}")]),s._v(" scrollTop: "),t("span",[s._v("{{")]),s._v("scrollTop"),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("lock-x")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"200px"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-scroll")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"onScroll"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"scrollerEvent"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"box2"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"i in 80"')]),s._v(">")]),s._v("placeholder "),t("span",[s._v("{{")]),s._v("i"),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"$refs.scrollerEvent.reset({top:0})"')]),s._v(">")]),s._v("reset"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),t("span",[s._v("{{")]),s._v(" $t('event:on-scroll-bottom') "),t("span",[s._v("}}")]),s._v(" "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("lock-x")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"200px"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-scroll-bottom")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"onScrollBottom"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"scrollerBottom"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":scroll-bottom-offst")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"200"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"box2"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"i in bottomCount"')]),s._v(">")]),s._v("placeholder "),t("span",[s._v("{{")]),s._v("i"),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("load-more")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("tip")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"loading"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("load-more")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),t("span",[s._v("{{")]),s._v(" $t('A Vertical Scroller with scrollbar') "),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("lock-x")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("scrollbar-y")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"200px"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"scroller"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"box2"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"i in 20"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-if")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"showList1"')]),s._v(">")]),s._v("placeholder "),t("span",[s._v("{{")]),s._v(" i + '' + i "),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"i in 10"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-if")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"!showList1"')]),s._v(">")]),s._v("placeholder "),t("span",[s._v("{{")]),s._v(" i "),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"margin:10px 0;"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"onClickButton"')]),s._v(">")]),t("span",[s._v("{{")]),s._v(" $t('Button') "),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(">")]),s._v("\n          "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"onCellClick"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"Title"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"Value"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("scroller")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"changeList"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),t("span",[s._v("{{")]),s._v(" $t('show another list') "),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v("\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": {\n    Scroller,\n    Divider,\n    Spinner,\n    XButton,\n    Group,\n    Cell,\n    LoadMore\n  },\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("showList1")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("scrollTop")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("onFetching")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("bottomCount")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("20")]),s._v("\n    }\n  },\n  mounted () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$nextTick("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.scrollerEvent.reset({"),t("span",{staticClass:"hljs-attr"},[s._v("top")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("})\n    })\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$nextTick("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.scrollerBottom.reset({"),t("span",{staticClass:"hljs-attr"},[s._v("top")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("})\n    })\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    onScrollBottom () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".onFetching) {\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// do nothing")]),s._v("\n      } "),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".onFetching = "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n        setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n          "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".bottomCount += "),t("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("\n          "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$nextTick("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.scrollerBottom.reset()\n          })\n          "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".onFetching = "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n        }, "),t("span",{staticClass:"hljs-number"},[s._v("2000")]),s._v(")\n      }\n    },\n    onScroll (pos) {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".scrollTop = pos.top\n    },\n    onCellClick () {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".alert("),t("span",{staticClass:"hljs-string"},[s._v("'cell click'")]),s._v(")\n    },\n    onClickButton () {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".alert("),t("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(")\n    },\n    changeList () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".showList1 = "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$nextTick("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.scroller.reset({\n          "),t("span",{staticClass:"hljs-attr"},[s._v("top")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n        })\n      })\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("scoped")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".box1")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(": relative;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("1490px")]),s._v(";\n}\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".box1-item")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("200px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("#ccc")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("display")]),s._v(":inline-block;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("margin-left")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("15px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("float")]),s._v(": left;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("text-align")]),s._v(": center;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("line-height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100px")]),s._v(";\n}\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".box1-item")]),t("span",{staticClass:"hljs-selector-pseudo"},[s._v(":first-child")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("margin-left")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n}\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".box2-wrap")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("300px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("overflow")]),s._v(": hidden;\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n\n")])])}]},s.exports.render._withStripped=!0}});
//# sourceMappingURL=84.10e42f4c.js.map