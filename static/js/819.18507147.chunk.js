"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[819],{819:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(861),i=t(439),c=t(757),s=t.n(c),u=t(791),o=t(857),a=t(187),f="Reviews_reviewsWrapper__tp4FN",l="Reviews_reviewsList__Rp7LW",d="Reviews_reviewsElem__wFVe+",v="Reviews_reviewsTitle__-5Hqk",h="Reviews_reviewsText__XySzo",p=t(689),m=t(184),_=function(){var e=(0,u.useState)(null),n=(0,i.Z)(e,2),t=n[0],c=n[1],_=(0,u.useState)(o.n.idle),N=(0,i.Z)(_,2),w=N[0],Z=N[1],g=(0,u.useState)(null),x=(0,i.Z)(g,2),I=x[0],j=x[1],y=(0,p.UO)().movieId;return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(o.n.pending),e.next=4,(0,a.tx)(y);case 4:0!==(n=e.sent).results.length&&c(n.results),Z(o.n.success),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),Z(o.n.error),j(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();null===t&&e()}),[t,y]),(0,m.jsxs)(m.Fragment,{children:[w===o.n.error&&I&&(0,m.jsx)("div",{children:I.message}),!t&&w===o.n.success&&(0,m.jsx)("div",{className:h,children:"No reviews yet"}),t&&(0,m.jsx)("div",{className:f,children:(0,m.jsx)("ul",{className:l,children:t.map((function(e){return(0,m.jsxs)("li",{className:d,children:[(0,m.jsx)("h3",{className:v,children:e.author}),(0,m.jsx)("p",{className:h,children:e.content})]},e.id)}))})})]})}},187:function(e,n,t){t.d(n,{Df:function(){return s},M1:function(){return o},MK:function(){return f},Pg:function(){return u},tx:function(){return a}});var r=t(294),i="https://api.themoviedb.org/3",c={api_key:"54eeb2b53b0e8e64148ecb3c56f8a267",AUTH_TOKEN:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGVlYjJiNTNiMGU4ZTY0MTQ4ZWNiM2M1NmY4YTI2NyIsInN1YiI6IjY1OWVjODNkOTFiNTMwMDFmZGYxZDc2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nO1St5NBNyJ5a6UeImi7fZfw0UszE2wBdWyw4I92kNA"};function s(){return r.Z.get("".concat(i,"/trending/movie/day"),{options:c}).then((function(e){return e.data}))}function u(e){return r.Z.get("".concat(i,"/movie/").concat(e),{options:c}).then((function(e){return e.data}))}function o(e){return r.Z.get("".concat(i,"/movie/").concat(e,"/credits"),{options:c}).then((function(e){return e.data}))}function a(e){return r.Z.get("".concat(i,"/movie/").concat(e,"/reviews"),{options:c}).then((function(e){return e.data}))}function f(e){return r.Z.get("".concat(i,"/search/movie?query=").concat(e),{options:c}).then((function(e){return e.data}))}r.Z.defaults.headers.common.Authorization=c.AUTH_TOKEN},857:function(e,n,t){t.d(n,{n:function(){return r}});var r={idle:"idle",pending:"pending",success:"success",error:"error"}}}]);
//# sourceMappingURL=819.18507147.chunk.js.map