"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[6,76],{6:function(e,i,s){s.r(i);var t=s(219),n=s(184);i.default=function(e){var i=e.trendMovies;return i?(0,n.jsx)(t.O,{movies:i}):(0,n.jsx)("div",{children:"Loading..."})}},76:function(e,i,s){s.r(i),s.d(i,{default:function(){return w},defaultImg:function(){return M}});var t=s(861),n=s(439),a=s(757),r=s.n(a),o=s(791),c=s(689),l=s(87),v=s(508),m=s(857),d=s(289),u="MovieDetails_movieDetailsWrapper__cgVfz",_="MovieDetails_goBackBtn__cyPNe",h="MovieDetails_moviePoster__euBLG",p="MovieDetails_MovieInfo__-TiF+",x="MovieDetails_movieTitle__hhRe6",f="MovieDetails_movieText__vtoeV",j="MovieDetails_movieStatTitle__4oQrX",g="MovieDetails_additionalInfoWrapper__0l-M0",L=s(184),N=(0,o.lazy)((function(){return Promise.all([s.e(154),s.e(766)]).then(s.bind(s,766))})),k=(0,o.lazy)((function(){return Promise.all([s.e(154),s.e(819)]).then(s.bind(s,819))})),M="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",w=function(){var e,i,s=(0,o.useState)(null),a=(0,n.Z)(s,2),w=a[0],b=a[1],D=(0,o.useState)(m.n.idle),T=(0,n.Z)(D,2),Z=T[0],P=T[1],A=(0,o.useState)(null),I=(0,n.Z)(A,2),W=I[0],O=I[1],S=(0,c.TH)(),U=(0,o.useRef)(null!==(e=null===(i=S.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/"),y=(0,c.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(r().mark((function e(){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(m.n.pending),e.next=4,(0,v.Pg)(y);case 4:i=e.sent,b(i),P(m.n.success),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),P(m.n.error),O(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();null===w&&e()}),[y,w]),(0,L.jsxs)(L.Fragment,{children:[Z===m.n.pending&&(0,L.jsx)("div",{children:"Loading..."}),Z===m.n.error&&W&&(0,L.jsx)("div",{children:W.message}),w&&(0,L.jsxs)("div",{children:[(0,L.jsx)(l.rU,{className:_,to:U.current,children:"Go back"}),(0,L.jsxs)("div",{className:u,children:[(0,L.jsx)("img",{className:h,src:w.poster_path?"https://image.tmdb.org/t/p/w500/".concat(w.poster_path):M,alt:"poster",width:250}),(0,L.jsxs)("div",{className:p,children:[(0,L.jsx)("h2",{className:x,children:w.title}),(0,L.jsxs)("p",{className:f,children:["User score: ",(10*w.vote_average).toFixed(0),"%"]}),(0,L.jsx)("h3",{className:j,children:"Overview"}),(0,L.jsx)("p",{className:f,children:w.overview}),(0,L.jsx)("h3",{className:j,children:"Genres"}),(0,L.jsx)("p",{className:f,children:w.genres.map((function(e){return(0,L.jsxs)("span",{children:[e.name," "]},e.id)}))})]})]}),(0,L.jsx)("h3",{className:j,children:"Additional information"}),(0,L.jsxs)("div",{className:g,children:[(0,L.jsx)(l.OL,{to:"cast",className:function(e){var i=e.isActive;return"".concat(d.Z.navLink," ").concat(i?d.Z.active:"")},children:"Cast"}),(0,L.jsx)(l.OL,{to:"reviews",className:function(e){var i=e.isActive;return"".concat(d.Z.navLink," ").concat(i?d.Z.active:"")},children:"Reviews"})]}),(0,L.jsx)(o.Suspense,{fallback:(0,L.jsx)("div",{children:"Loading..."}),children:(0,L.jsxs)(c.Z5,{children:[(0,L.jsx)(c.AW,{path:"/cast",element:(0,L.jsx)(N,{movieId:y})}),(0,L.jsx)(c.AW,{path:"/reviews",element:(0,L.jsx)(k,{movieId:y})})]})})]})]})}},219:function(e,i,s){s.d(i,{O:function(){return c}});var t=s(689),n=s(87),a=s(76),r={movieList:"MovieList_movieList__FvhbG",movieElement:"MovieList_movieElement__7rYkr",movieLink:"MovieList_movieLink__2itz1",linkWrapper:"MovieList_linkWrapper__vxYjV",moviePoster:"MovieList_moviePoster__sLckB",movieTitle:"MovieList_movieTitle__mxAXm"},o=s(184),c=function(e){var i=e.movies;console.log(i);var s=(0,t.TH)();return console.log("moviesList location",s),(0,o.jsx)("div",{className:r.movieListWrapper,children:(0,o.jsx)("ul",{className:r.movieList,children:i.results.map((function(e){return(0,o.jsx)("li",{className:r.movieElement,children:(0,o.jsxs)(n.rU,{className:r.movieLink,state:{from:s},to:"/movies/".concat(e.id),children:[(0,o.jsx)("img",{className:r.moviePoster,src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):a.defaultImg,alt:""}),(0,o.jsx)("span",{className:r.movieTitle,children:e.title})]})},e.id)}))})})}}}]);
//# sourceMappingURL=6.ce9bda7b.chunk.js.map