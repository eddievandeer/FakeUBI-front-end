(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c1f313e"],{"1e01":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.commentList,(function(e,s){return n("div",{key:s,staticClass:"game-comment-item",attrs:{align:"left"}},[n("div",{staticClass:"user_name"},[t._v(t._s(e.username)+" "),n("div",{staticClass:"comment-score"},[n("span",{staticClass:"star"},[n("span",{staticClass:"ystar",style:{width:23.2*e.score+"px"}})])])]),n("div",{staticClass:"postedDate"},[t._v("发布于："+t._s(e.comment_time))]),n("div",{staticClass:"content"},[t._v(t._s(e.comment))]),n("hr"),t._m(0,!0)])})),0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control_block"},[n("button",{staticClass:"btn btn-link",attrs:{type:"button"}},[t._v("👍赞")]),n("button",{staticClass:"btn btn-link",attrs:{type:"button"}},[t._v("👎踩")]),n("button",{staticClass:"btn btn-link",attrs:{type:"button"}},[t._v("评论")])])}],i=(n("96cf"),n("1da1")),c={name:"gameComments",props:["game_id"],data:function(){return{isEmpty:!0,commentList:[]}},mounted:function(){this.getComments()},methods:{getComments:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/comment/getComments",{params:{game_id:t.game_id}});case 2:n=e.sent,t.commentList=n.data,""==t.commentList||null==t.commentList?t.isEmpty=!0:t.isEmpty=!1;case 5:case"end":return e.stop()}}),e)})))()}}},r=c,m=(n("59ab"),n("2877")),o=Object(m["a"])(r,s,a,!1,null,"48767df9",null);e["default"]=o.exports},"59ab":function(t,e,n){"use strict";var s=n("d996"),a=n.n(s);a.a},d996:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4c1f313e.5eb1c861.js.map