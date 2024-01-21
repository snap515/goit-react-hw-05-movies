"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[765,76],{765:function(e,t,n){n.r(t);var i=n(861),r=n(439),s=n(757),a=n.n(s),c=n(219),o=n(791),u=n(187),l=n(857),v=n(184);t.default=function(){var e=(0,o.useState)(null),t=(0,r.Z)(e,2),n=t[0],s=t[1],m=(0,o.useState)(l.n.idle),d=(0,r.Z)(m,2),f=(d[0],d[1]),p=(0,o.useState)(null),h=(0,r.Z)(p,2),_=(h[0],h[1]);return(0,o.useEffect)((function(){var e=function(){var e=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(l.n.pending),e.next=4,(0,u.Df)();case 4:t=e.sent,s(t),f(l.n.success),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),f(l.n.error),_(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();null===n&&e()}),[n]),n&&(0,v.jsx)(c.O,{movies:n})}},76:function(e,t,n){n.r(t),n.d(t,{default:function(){return M},defaultImg:function(){return Z}});var i=n(861),r=n(439),s=n(757),a=n.n(s),c=n(791),o=n(689),u=n(87),l=n(187),v=n(857),m=n(289),d="MovieDetails_movieDetailsWrapper__cgVfz",f="MovieDetails_goBackBtn__cyPNe",p="MovieDetails_moviePoster__euBLG",h="MovieDetails_MovieInfo__-TiF+",_="MovieDetails_movieTitle__hhRe6",x="MovieDetails_movieText__vtoeV",N="MovieDetails_movieStatTitle__4oQrX",j="MovieDetails_additionalInfoWrapper__0l-M0",g=n(184),Z="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",M=function(){var e,t,n=(0,c.useState)(null),s=(0,r.Z)(n,2),M=s[0],k=s[1],w=(0,c.useState)(v.n.idle),L=(0,r.Z)(w,2),I=L[0],T=L[1],b=(0,c.useState)(null),D=(0,r.Z)(b,2),O=D[0],y=D[1],U=(0,o.TH)(),W=(0,c.useRef)(null!==(e=null===(t=U.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),J=(0,o.UO)().movieId;return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(v.n.pending),e.next=4,(0,l.Pg)(J);case 4:t=e.sent,k(t),T(v.n.success),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),T(v.n.error),y(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();null===M&&e()}),[J,M]),(0,g.jsxs)(g.Fragment,{children:[I===v.n.error&&O&&(0,g.jsx)("div",{children:O.message}),M&&(0,g.jsxs)("div",{children:[(0,g.jsx)(u.rU,{className:f,to:W.current,children:"Go back"}),(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("img",{className:p,src:M.poster_path?"https://image.tmdb.org/t/p/w500/".concat(M.poster_path):Z,alt:"poster",width:250}),(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("h2",{className:_,children:M.title}),(0,g.jsxs)("p",{className:x,children:["User score: ",(10*M.vote_average).toFixed(0),"%"]}),(0,g.jsx)("h3",{className:N,children:"Overview"}),(0,g.jsx)("p",{className:x,children:M.overview}),(0,g.jsx)("h3",{className:N,children:"Genres"}),(0,g.jsx)("p",{className:x,children:M.genres.map((function(e){return(0,g.jsxs)("span",{children:[e.name," "]},e.id)}))})]})]}),(0,g.jsx)("h3",{className:N,children:"Additional information"}),(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)(u.OL,{to:"cast",className:function(e){var t=e.isActive;return"".concat(m.Z.navLink," ").concat(t?m.Z.active:"")},children:"Cast"}),(0,g.jsx)(u.OL,{to:"reviews",className:function(e){var t=e.isActive;return"".concat(m.Z.navLink," ").concat(t?m.Z.active:"")},children:"Reviews"})]})]}),(0,g.jsx)(o.j3,{})]})}},219:function(e,t,n){n.d(t,{O:function(){return o}});var i=n(689),r=n(87),s=n(76),a={movieList:"MovieList_movieList__FvhbG",movieElement:"MovieList_movieElement__7rYkr",movieLink:"MovieList_movieLink__2itz1",linkWrapper:"MovieList_linkWrapper__vxYjV",moviePoster:"MovieList_moviePoster__sLckB",movieTitle:"MovieList_movieTitle__mxAXm"},c=n(184),o=function(e){var t=e.movies,n=(0,i.TH)();return(0,c.jsx)("div",{className:a.movieListWrapper,children:(0,c.jsx)("ul",{className:a.movieList,children:t.results.map((function(e){return(0,c.jsx)("li",{className:a.movieElement,children:(0,c.jsxs)(r.rU,{className:a.movieLink,state:{from:n},to:"/movies/".concat(e.id),children:[(0,c.jsx)("img",{className:a.moviePoster,src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):s.defaultImg,alt:""}),(0,c.jsx)("span",{className:a.movieTitle,children:e.title})]})},e.id)}))})})}},187:function(e,t,n){n.d(t,{Df:function(){return a},M1:function(){return o},MK:function(){return l},Pg:function(){return c},tx:function(){return u}});var i=n(294),r="https://api.themoviedb.org/3",s={api_key:"54eeb2b53b0e8e64148ecb3c56f8a267",AUTH_TOKEN:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGVlYjJiNTNiMGU4ZTY0MTQ4ZWNiM2M1NmY4YTI2NyIsInN1YiI6IjY1OWVjODNkOTFiNTMwMDFmZGYxZDc2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nO1St5NBNyJ5a6UeImi7fZfw0UszE2wBdWyw4I92kNA"};function a(){return i.Z.get("".concat(r,"/trending/movie/day"),{options:s}).then((function(e){return e.data}))}function c(e){return i.Z.get("".concat(r,"/movie/").concat(e),{options:s}).then((function(e){return e.data}))}function o(e){return i.Z.get("".concat(r,"/movie/").concat(e,"/credits"),{options:s}).then((function(e){return e.data}))}function u(e){return i.Z.get("".concat(r,"/movie/").concat(e,"/reviews"),{options:s}).then((function(e){return e.data}))}function l(e){return i.Z.get("".concat(r,"/search/movie?query=").concat(e),{options:s}).then((function(e){return e.data}))}i.Z.defaults.headers.common.Authorization=s.AUTH_TOKEN},857:function(e,t,n){n.d(t,{n:function(){return i}});var i={idle:"idle",pending:"pending",success:"success",error:"error"}}}]);
//# sourceMappingURL=765.b66c3bc5.chunk.js.map