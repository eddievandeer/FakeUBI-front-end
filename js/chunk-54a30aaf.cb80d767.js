(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54a30aaf"],{"553d":function(t,e,a){"use strict";var n=a("ec50"),r=a.n(n);r.a},b1a4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"game-item"},[a("img",{attrs:{src:t.item.game_pic,alt:"加载失败!"}}),a("div",{staticClass:"game-item-block"},[a("b",[t._v(t._s(t.item.game_name))]),a("p",[t._v("添加时间："+t._s(t.item.add_time))]),a("div",{staticClass:"buttons"},[a("button",{staticClass:"btn btn-success",on:{click:function(e){return t.doPurchase(t.item.game_id)}}},[t._v("购买")]),a("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.outofCart(t.item.game_id)}}},[t._v("移出购物车")])])])])},r=[],c=(a("96cf"),a("1da1")),i={name:"cartItem",props:["item"],methods:{outofCart:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=confirm("确认移出"),!n){a.next=7;break}return a.next=4,e.$http.get("/cart/outofCart",{params:{game_id:t}});case 4:r=a.sent,alert(r.data),location.reload();case 7:case"end":return a.stop()}}),a)})))()},doPurchase:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=confirm("确认购买"),!n){a.next=7;break}return a.next=4,e.$http.get("/warehouse/doPurchase",{params:{game_id:t}});case 4:r=a.sent,alert(r.data),location.reload();case 7:case"end":return a.stop()}}),a)})))()}}},s=i,o=(a("553d"),a("2877")),u=Object(o["a"])(s,n,r,!1,null,"331b4af3",null);e["default"]=u.exports},ec50:function(t,e,a){}}]);
//# sourceMappingURL=chunk-54a30aaf.cb80d767.js.map