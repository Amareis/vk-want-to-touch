(this["webpackJsonpvk-want-to-touch"]=this["webpackJsonpvk-want-to-touch"]||[]).push([[0],{154:function(e,t,a){e.exports=a(242)},242:function(e,t,a){"use strict";a.r(t);a(155),a(182),a(184),a(185),a(187),a(188),a(189),a(190),a(191),a(192),a(193),a(194),a(196),a(197),a(198),a(199),a(200),a(201),a(202),a(203),a(204),a(205),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224);var n=a(0),c=a.n(n),r=a(32),i=a.n(r),o=a(13),l=a.n(o),u=a(56),s=a.n(u),p=a(80),m=a(42),b=a(11),d=(a(241),a(90)),f=a(91),h=a(95),v=a(92),E=a(96),O=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).vibrate=function(){navigator.vibrate?navigator.vibrate(200):l.a.supports("VKWebAppTapticImpactOccurred")&&l.a.sendPromise("VKWebAppTapticImpactOccurred",{style:"medium"})},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(b.h,{id:t},c.a.createElement(b.i,null,"\u041a\u043e\u0441\u043d\u0443\u0442\u044c\u0441\u044f"),n&&c.a.createElement(b.e,null,c.a.createElement(b.c,{before:n.photo_200?c.a.createElement(b.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(b.e,{title:"V: ".concat(!!navigator.vibrate,", T: ").concat(l.a.supports("VKWebAppTapticImpactOccurred"),", T2: ").concat(l.a.supports("VKWebAppTapticNotificationOccurred"))},c.a.createElement(b.d,null,c.a.createElement(b.b,{size:"xl",level:"2",onClick:function(){return a("search")}},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0437\u0435\u0439")),c.a.createElement(b.d,null,this.canVibrate&&c.a.createElement(b.b,{size:"xl",level:"2",onClick:this.vibrate},"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044f"))))}},{key:"canVibrate",get:function(){return!!navigator.vibrate||l.a.supports("VKWebAppTapticImpactOccurred")}}]),t}(c.a.Component),g=a(93),j=a.n(g),y=a(94),k=a.n(y),V=Object(b.l)(),A=function(e){return c.a.createElement(b.h,{id:e.id},c.a.createElement(b.i,{left:c.a.createElement(b.f,{onClick:function(){return e.go("home")}},V===b.g?c.a.createElement(j.a,null):c.a.createElement(k.a,null))},"\u041f\u043e\u0438\u0441\u043a"))},I=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),o=Object(m.a)(i,2),u=o[0],d=o[1],f=Object(n.useState)(c.a.createElement(b.j,{size:"large"})),h=Object(m.a)(f,2),v=h[0],E=h[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),E(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme||"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]),c.a.createElement(b.k,{activePanel:a,popout:v},c.a.createElement(O,{id:"home",fetchedUser:u,go:r}),c.a.createElement(A,{id:"search",go:r}))};l.a.send("VKWebAppInit"),i.a.render(c.a.createElement(I),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.9631759c.chunk.js.map