"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(e,n,t){t.r(n),t.d(n,{default:function(){return I},defaultImg:function(){return Z}});var i=t(861),r=t(439),c=t(757),a=t.n(c),s=t(791),o=t(689),u=t(87),l=t(187),d=t(857),v=t(289),f="MovieDetails_movieDetailsWrapper__cgVfz",h="MovieDetails_goBackBtn__cyPNe",m="MovieDetails_moviePoster__euBLG",p="MovieDetails_MovieInfo__-TiF+",_="MovieDetails_movieTitle__hhRe6",N="MovieDetails_movieText__vtoeV",x="MovieDetails_movieStatTitle__4oQrX",g="MovieDetails_additionalInfoWrapper__0l-M0",j=t(184),Z="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",I=function(){var e,n,t=(0,s.useState)(null),c=(0,r.Z)(t,2),I=c[0],M=c[1],w=(0,s.useState)(d.n.idle),T=(0,r.Z)(w,2),b=T[0],k=T[1],D=(0,s.useState)(null),y=(0,r.Z)(D,2),O=y[0],J=y[1],U=(0,o.TH)(),A=(0,s.useRef)(null!==(e=null===(n=U.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),G=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(d.n.pending),e.next=4,(0,l.Pg)(G);case 4:n=e.sent,M(n),k(d.n.success),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),k(d.n.error),J(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();null===I&&e()}),[G,I]),(0,j.jsxs)(j.Fragment,{children:[b===d.n.error&&O&&(0,j.jsx)("div",{children:O.message}),I&&(0,j.jsxs)("div",{children:[(0,j.jsx)(u.rU,{className:h,to:A.current,children:"Go back"}),(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("img",{className:m,src:I.poster_path?"https://image.tmdb.org/t/p/w500/".concat(I.poster_path):Z,alt:"poster",width:250}),(0,j.jsxs)("div",{className:p,children:[(0,j.jsx)("h2",{className:_,children:I.title}),(0,j.jsxs)("p",{className:N,children:["User score: ",(10*I.vote_average).toFixed(0),"%"]}),(0,j.jsx)("h3",{className:x,children:"Overview"}),(0,j.jsx)("p",{className:N,children:I.overview}),(0,j.jsx)("h3",{className:x,children:"Genres"}),(0,j.jsx)("p",{className:N,children:I.genres.map((function(e){return(0,j.jsxs)("span",{children:[e.name," "]},e.id)}))})]})]}),(0,j.jsx)("h3",{className:x,children:"Additional information"}),(0,j.jsxs)("div",{className:g,children:[(0,j.jsx)(u.OL,{to:"cast",className:function(e){var n=e.isActive;return"".concat(v.Z.navLink," ").concat(n?v.Z.active:"")},children:"Cast"}),(0,j.jsx)(u.OL,{to:"reviews",className:function(e){var n=e.isActive;return"".concat(v.Z.navLink," ").concat(n?v.Z.active:"")},children:"Reviews"})]})]}),(0,j.jsx)(o.j3,{})]})}},187:function(e,n,t){t.d(n,{Df:function(){return a},M1:function(){return o},MK:function(){return l},Pg:function(){return s},tx:function(){return u}});var i=t(294),r="https://api.themoviedb.org/3",c={api_key:"54eeb2b53b0e8e64148ecb3c56f8a267",AUTH_TOKEN:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGVlYjJiNTNiMGU4ZTY0MTQ4ZWNiM2M1NmY4YTI2NyIsInN1YiI6IjY1OWVjODNkOTFiNTMwMDFmZGYxZDc2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nO1St5NBNyJ5a6UeImi7fZfw0UszE2wBdWyw4I92kNA"};function a(){return i.Z.get("".concat(r,"/trending/movie/day"),{options:c}).then((function(e){return e.data}))}function s(e){return i.Z.get("".concat(r,"/movie/").concat(e),{options:c}).then((function(e){return e.data}))}function o(e){return i.Z.get("".concat(r,"/movie/").concat(e,"/credits"),{options:c}).then((function(e){return e.data}))}function u(e){return i.Z.get("".concat(r,"/movie/").concat(e,"/reviews"),{options:c}).then((function(e){return e.data}))}function l(e){return i.Z.get("".concat(r,"/search/movie?query=").concat(e),{options:c}).then((function(e){return e.data}))}i.Z.defaults.headers.common.Authorization=c.AUTH_TOKEN},857:function(e,n,t){t.d(n,{n:function(){return i}});var i={idle:"idle",pending:"pending",success:"success",error:"error"}}}]);
//# sourceMappingURL=76.356ce812.chunk.js.map