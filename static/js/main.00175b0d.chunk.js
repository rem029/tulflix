(this.webpackJsonptulflix=this.webpackJsonptulflix||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(14),a=n.n(s),l=(n(39),n(15)),r=n(12),o=n(4),d=(n(40),n(3)),u=n.p+"static/media/tulflix_logo-full.49b0b67c.png",j=(n(41),n(0)),b=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],s=n?"container__homepage-img img-show":"container__homepage-img";return Object(j.jsxs)("div",{className:"container__homepage",children:[Object(j.jsx)("img",{className:s,src:u,alt:u,onLoad:function(){i(!0)}}),Object(j.jsx)("p",{className:"container__homepage-sub-text",children:"Watch Tulfo and chill"}),Object(j.jsx)(r.b,{className:"container__homepage-btn",to:"/browse/",children:"Start Watching"})]})},h=(n(46),n(47),function(){return Object(j.jsxs)("div",{className:"container__notfound",children:[Object(j.jsx)("img",{className:"container__notfound-img",src:u,alt:u}),Object(j.jsx)("p",{className:"container__notfound-sub-text",children:"Page Not Found"}),Object(j.jsx)(r.b,{className:"container__notfound-btn",to:"/browse/",children:"Go Back"})]})}),O=n(5),f=n(7),x=(n(50),function(e){var t=e.className;return Object(j.jsx)("div",{className:"spinner ".concat(t),children:Object(j.jsx)(O.a,{icon:f.f})})}),v=(n(51),n(52),function(e){var t=e.videoID,n=e.title,i=e.allowAutoPlay,s=void 0!==i&&i,a=Object(c.useState)(!1),l=Object(d.a)(a,2),r=l[0],o=l[1],u=s?"?autoplay=1&mute=1":"";return Object(j.jsxs)("div",{className:"container__videoplayer",children:[Object(j.jsx)("iframe",{onLoad:function(e){o(!0)},className:"iframe-responsive",src:"https://www.youtube.com/embed/".concat(t).concat(u),allowFullScreen:!0,title:n,allow:"autoplay"}),Object(j.jsx)("div",{className:"container__loading",children:!r&&Object(j.jsx)(x,{className:"spinner-lg"})})]})}),p=n(34),m=n.n(p),g=function(e,t){var n=Object(c.useState)(!0),i=Object(d.a)(n,2),s=i[0],a=i[1],l=Object(c.useState)(null),r=Object(d.a)(l,2),o=r[0],u=r[1],j=Object(c.useState)(null),b=Object(d.a)(j,2),h=b[0],O=b[1],f={method:e,url:t};return Object(c.useEffect)((function(){m()(f).then((function(e){return u(e)})).catch((function(e){O(e)})).finally((function(){a(!1)}))}),[]),{loading:s,response:o,error:h}},_="channel",y="playlists",N="playlist_item",w="videoInfo",I="channelActivity",C="channelVideos",S={loading:!0,results:[],error:null},k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50,s={channel:"https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&part=contentDetails&part=topicDetails&id=".concat(n,"&maxResults=").concat(i,"&key=").concat(t),playlists:"https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=".concat(n,"&maxResults=").concat(i,"&key=").concat(t),playlist_item:" https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=id&part=contentDetails&part=status&playlistId=".concat(n,"&maxResults=").concat(i,"&key=").concat(t),videoInfo:"https://youtube.googleapis.com/youtube/v3/videos?id=".concat(n,"&part=snippet&part=statistics&maxResults=").concat(i,"&key=").concat(t),channelActivity:"https://youtube.googleapis.com/youtube/v3/activities?part=contentDetails&part=snippet&channelId=".concat(n,"&maxResults=").concat(i,"&key=").concat(t),channelVideos:"https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=".concat(n,"&maxResults=").concat(i,"&order=date&type=video&key=").concat(t)},a=Object(c.useState)([]),l=Object(d.a)(a,2),r=l[0],o=l[1],u=g("get",s[e]),j=u.loading,b=u.error,h=u.response;return Object(c.useEffect)((function(){(h||b)&&o(b||h.data.items)}),[h,b]),{loading:j,error:b,results:r}},P="AIzaSyAzDS1VcDtglBvOYbp0cVZyR6dmddTJrAQ",D="UCxhygwqQ1ZMoBGQM2yEcNug",A={GetChannelInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return k(_,P,e)},GetChannelActivity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return k(I,P,e)},GetChannelVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return k(C,P,e)},GetPlaylists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return k(y,P,e)},GetPlaylistItems:function(e){return k(N,P,e)},GetVideoInfo:function(e){return k(w,P,e)}},E=function(e,t,n){Object(c.useEffect)((function(){if(0===t.results.length&&t.loading&&(!e.loading&&e.results.length>0||e.error)){var c;c=Object(l.a)({},e),n(c)}}),[e,t,n])},V=Object(c.createContext)({channel:S,setChannel:function(){}}),B=function(e){var t=Object(c.useState)(S),n=Object(d.a)(t,2),i=n[0],s=n[1],a=A.GetChannelInfo();return E(a,i,(function(e){return s(e)})),Object(j.jsx)(V.Provider,{value:{channel:i,setChannel:s},children:e.children})},U=Object(c.createContext)({channelActivities:S,setChannelActivities:function(){}}),L=function(e){var t=Object(c.useState)(S),n=Object(d.a)(t,2),i=n[0],s=n[1],a=A.GetChannelActivity();return E(a,i,(function(e){return s(e)})),Object(j.jsx)(U.Provider,{value:{channelActivities:i,setChannelActivities:s},children:e.children})},G=function(){var e=Object(c.useContext)(V).channel,t=Object(c.useContext)(U).channelActivities,n=!t.loading&&t.results.length>0;return Object(j.jsx)("div",{className:"container__featured",children:Object(j.jsx)(i.a.Fragment,{children:e.loading?Object(j.jsx)("div",{className:"container__featured__loading",children:Object(j.jsx)(x,{className:"spinner-lg"})}):n?Object(j.jsx)("div",{className:"container__featured__video",children:Object(j.jsx)(v,{videoID:t.results[0].contentDetails.upload.videoId,title:t.results[0].snippet.title,allowAutoPlay:!0})}):Object(j.jsx)("div",{className:"container__featured__image",children:Object(j.jsx)("img",{src:e.results[0].snippet.thumbnails.high.url,alt:e.results[0].snippet.customUrl})})})})},F=(n(70),function(e){var t=e.videoID,n=e.imgUrl;return t&&n?Object(j.jsx)("div",{className:"container__playlistitem",children:Object(j.jsx)(r.b,{to:"/browse/".concat(t),children:Object(j.jsx)("img",{src:n,alt:t})})}):null}),R=(n(71),function(e,t){return t.length>0?{loading:!1,results:t,error:null}:A.GetPlaylistItems(e)}),W=function(e){var t=e.title,n=e.playlistId,s=e.items,a=void 0===s?[]:s,l=Object(c.useState)(!1),r=Object(d.a)(l,2),o=r[0],u=r[1],b=Object(c.useState)(a),h=Object(d.a)(b,2),x=h[0],v=h[1],p=Object(c.useState)([]),m=Object(d.a)(p,2),g=m[0],_=m[1],y=Object(c.useState)(-1),N=Object(d.a)(y,2),w=N[0],I=N[1],C=Object(c.useRef)(null),S=R(n,a);Object(c.useEffect)((function(){return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}}),[]),Object(c.useEffect)((function(){C&&k()}),[C]),Object(c.useEffect)((function(){}),[g]),Object(c.useEffect)((function(){S.loading||0!==x.length||v(S.results)}),[x,a,S]);var k=function(){C&&C.current&&P(Math.round(C.current.scrollWidth/window.innerWidth))},P=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;1===t&&(t=0);var n=[t-1];if(t>0){for(e=0;e<=t;e++){var c=e;n[e]=c}_(n)}},D=!0;try{D=C.current.scrollWidth>window.innerWidth}catch(A){D=!0}return Object(j.jsxs)("div",{className:"container_playlist",children:[o&&Object(j.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),C.current.scrollTo({behavior:"smooth",left:C.current.scrollLeft-window.innerWidth})}(e)},className:"container__playlist__control control-left",children:Object(j.jsx)(O.a,{icon:f.d})}),D&&Object(j.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),C.current.scrollTo({behavior:"smooth",left:window.innerWidth+C.current.scrollLeft})}(e)},className:"container__playlist__control control-right",children:Object(j.jsx)(O.a,{icon:f.e})}),Object(j.jsx)("div",{className:"container__playlist-nav-buttons",children:g.length>0&&g.map((function(e){return Object(j.jsx)("button",{onClick:function(t){t.preventDefault(),function(e,t){e.preventDefault(),I(t),C.current.scrollTo({behavior:"smooth",left:window.innerWidth*t}),console.log("SCROLL TO",window.innerWidth*t),console.log("SCROLL WIDTH",C.current.scrollWidth)}(t,e)},className:w===e?"container__playlist-nav-buttons-active":""},e)}))}),Object(j.jsxs)("div",{className:"container_playlist-title",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("div",{className:"container_playlist-title__sub-text",children:"Explore all"}),Object(j.jsx)("div",{className:"container_playlist-title__sub-icon",children:Object(j.jsx)(O.a,{icon:f.a})})]}),Object(j.jsxs)("div",{className:"container_playlist-items "+(!C&&" playlist-loading"),id:"#".concat(n),ref:C,onScroll:function(e){!function(e){u(e.target.scrollLeft>0)}(e)},children:[Object(j.jsx)(i.a.Fragment,{children:x.map((function(e,t){var n;try{n=a.length>0?Object(j.jsx)(F,{videoID:e.contentDetails.upload.videoId,imgUrl:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.contentDetails.upload.videoId+t):Object(j.jsx)(F,{videoID:e.snippet.resourceId.videoId,imgUrl:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.snippet.resourceId.videoId+t)}catch(c){n=null}return n}))}),Object(j.jsx)(F,{})]})]})},T=Object(c.createContext)({playlists:S,setPlaylists:function(){},manualPlaylists:{}}),M=function(e){var t=Object(c.useState)(S),n=Object(d.a)(t,2),i=n[0],s=n[1],a=A.GetPlaylists();return E(a,i,(function(e){return s(e)})),Object(j.jsx)(T.Provider,{value:{playlists:i,setPlaylists:s,manualPlaylists:{recentUploads:{id:"recentUploads01",title:"RECENT UPLOADS"},allVideos:{id:"allVideos02",title:"ALL VIDEOS"}}},children:e.children})},z=(n(72),function(){var e=Object(c.useContext)(T),t=e.playlists,n=e.manualPlaylists,s=Object(c.useContext)(U).channelActivities;return Object(j.jsxs)("div",{className:"container__playlists",children:[!s.loading&&s.results.length>0?Object(j.jsx)(i.a.Fragment,{children:Object(j.jsx)(W,{title:n.recentUploads.title,playlistId:n.recentUploads.id,items:s.results})}):Object(j.jsx)("div",{className:"container__playlists_loading",children:Object(j.jsx)(x,{className:"spinner-lg"})}),!t.loading&&t.results.length>0?Object(j.jsx)(i.a.Fragment,{children:t.results.map((function(e){return Object(j.jsx)(W,{title:e.snippet.localized.title,playlistId:e.id},e.id)}))}):Object(j.jsx)("div",{className:"container__playlists_loading",children:Object(j.jsx)(x,{className:"spinner-lg"})})]})}),Q=n.p+"static/media/tulflix_logo-icon.93cc8c92.png";function J(e){var t=e;try{for(var n=0;t>=1e3;)t/=1e3,n++;return n>0&&(t=t.toFixed(1)),t+=["","K","M","B","T"][n]}catch(c){return console.log("error",t),e}}n(73);var Z=function(e){return a.a.createPortal(Object(j.jsx)("div",{onClick:function(t){t.preventDefault(),e.onClick()},className:"container__backdrop",children:e.children}),document.getElementById("root-video-info"))},q=(n(74),Object(c.createContext)({selectedVideoId:null,setSelectedVideoId:function(){}})),H=function(e){var t=Object(c.useState)(null),n=Object(d.a)(t,2),i=n[0],s=n[1];return Object(j.jsx)(q.Provider,{value:{selectedVideoId:i,setSelectedVideoId:s},children:e.children})},K=function(e){var t=e.videoId,n=Object(c.useState)({id:"",title:"",imgUrl:"",datePublished:new Date,likeCount:"",viewCount:"",description:""}),i=Object(d.a)(n,2),s=i[0],a=i[1],l=Object(c.useContext)(q).setSelectedVideoId,o=A.GetVideoInfo(t);return Object(c.useEffect)((function(){return l(t),function(){l(null)}}),[]),Object(c.useEffect)((function(){o.loading||null===o.result||null!==o.error||""!==s.id||a({id:o.results[0].id,title:o.results[0].snippet.title,imgUrl:o.results[0].snippet.thumbnails.maxres.url,datePublished:new Date(o.results[0].snippet.publishedAt),likeCount:J(o.results[0].statistics.likeCount),viewCount:J(o.results[0].statistics.viewCount),description:o.results[0].snippet.description})}),[o,s]),Object(j.jsx)(Z,{onClick:function(){},children:Object(j.jsxs)("div",{className:"container__video-modal",children:[Object(j.jsx)("div",{className:"container__video-modal__close-btn",children:Object(j.jsx)(r.b,{to:"/browse",children:Object(j.jsx)(O.a,{icon:f.i})})}),Object(j.jsxs)("div",{className:"container__video-modal__info",children:[Object(j.jsxs)("div",{className:"info-img",children:[Object(j.jsx)("div",{className:"info-img-overlay",children:Object(j.jsx)(v,{videoID:s.id,title:s.title})}),Object(j.jsx)("img",{src:s.imgUrl,alt:s.title})]}),o.loading?Object(j.jsx)(x,{className:"spinner-lg"}):Object(j.jsxs)("div",{className:"info-text",children:[Object(j.jsxs)("div",{className:"info-text-date",children:[Object(j.jsx)("p",{children:s.datePublished.toDateString()}),Object(j.jsxs)("div",{className:"info-text-statistics statistics-likes",children:[Object(j.jsx)("p",{children:Object(j.jsx)(O.a,{icon:f.h})}),Object(j.jsx)("p",{children:s.likeCount})]}),Object(j.jsxs)("div",{className:"info-text-statistics statistics-views",children:[Object(j.jsx)("p",{children:Object(j.jsx)(O.a,{icon:f.g})}),Object(j.jsx)("p",{children:s.viewCount})]})]}),Object(j.jsxs)("div",{className:"info-text-t-series",children:[Object(j.jsx)("img",{src:Q,alt:Q}),Object(j.jsx)("h2",{children:"SERIES"})]}),Object(j.jsx)("h2",{children:s.title}),Object(j.jsx)("hr",{className:"line__grey"}),Object(j.jsx)("hr",{className:"line__red"}),Object(j.jsx)("pre",{className:"info-desc",children:s.description})]})]})]})})},Y=(n(75),Object(c.createContext)({navBar:!1,toggleNavBar:function(){},activePlaylist:null,setActivePlaylist:function(){}})),X=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(null),l=Object(d.a)(a,2),r=l[0],o=l[1];return Object(j.jsx)(Y.Provider,{value:{navBar:i,toggleNavBar:function(){return s((function(e){return!e}))},activePlaylist:r,setActivePlaylist:o},children:e.children})},$=function(e){var t=e.playlistId,n=e.href,i=e.text,s=e.isActive,a=Object(c.useContext)(Y).toggleNavBar,l=Object(c.useContext)(q).setSelectedVideoId,r=s?"navbar-link navbar-link-active":"navbar-link";return Object(j.jsx)("li",{className:r,children:Object(j.jsx)("a",{href:n,onClick:function(e){!function(e){e.preventDefault(),document.getElementById("#".concat(t)).scrollIntoView()}(e),l(null),a()},children:i})})},ee=(n(76),function(){var e=Object(c.useContext)(Y),t=e.navBar,n=e.toggleNavBar,i=e.activePlaylist,s=Object(c.useContext)(T),a=s.playlists,l=s.manualPlaylists,r=Object(c.useContext)(q).setSelectedVideoId,o=t?"navbar navbar-open":"navbar",d=t?"container__navbar__arrow arrow-up":"container__navbar__arrow",u=[Object(j.jsx)($,{playlistId:l.recentUploads.id,href:"src",text:l.recentUploads.title,isActive:l.recentUploads.id===i},l.recentUploads.id+"navbar")],b=a.loading?Object(j.jsx)(x,{className:"spinner-sm"}):a.results.map((function(e){return Object(j.jsx)($,{playlistId:e.id,href:"src",text:e.snippet.title,isActive:e.id===i},e.id)}));return Object(j.jsxs)("div",{className:"container__navbar",children:[Object(j.jsxs)("button",{onClick:function(e){e.preventDefault(),n(),r(null)},children:["Browse",Object(j.jsx)("div",{className:d,children:Object(j.jsx)(O.a,{icon:f.b})})]}),Object(j.jsxs)("div",{className:o,children:[Object(j.jsx)("em",{children:Object(j.jsx)(O.a,{icon:f.c})}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[u,b]})})]})]})}),te=(n(77),n(78),function(){var e=Object(c.useContext)(V).channel,t=e.loading?Object(j.jsx)(x,{className:"spinner-sm"}):Object(j.jsx)("p",{children:J(e.results[0].statistics.subscriberCount)});return Object(j.jsxs)("header",{children:[Object(j.jsxs)("div",{className:"header__item_left",children:[Object(j.jsx)("img",{className:"logo-full",src:u,alt:"tulflix_logo-full.png"}),Object(j.jsx)(ee,{})]}),Object(j.jsxs)("div",{className:"header__item_right",children:[Object(j.jsxs)("a",{href:"https://www.youtube.com/channel/UCxhygwqQ1ZMoBGQM2yEcNug",target:"_blank",rel:"noreferrer",children:[Object(j.jsx)("em",{children:Object(j.jsx)(O.a,{icon:f.j})}),t]}),Object(j.jsx)("p",{children:"Subscribers"})]})]})}),ne=function(e){var t=Object(c.useContext)(q).selectedVideoId,n=null!==t&&a.a.createPortal(Object(j.jsx)(K,{videoId:t}),document.getElementById("root-video-info"));return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)(te,{}),Object(j.jsx)(G,{}),Object(j.jsx)(z,{}),n]})},ce=(n(79),n(18)),ie=function(){return Object(j.jsxs)("div",{className:"container__footer",children:[Object(j.jsxs)("p",{children:["Designed and develop by"," ",Object(j.jsx)("a",{href:"https://github.com/rem029",target:"_blank",rel:"noreferrer",children:"rem029"})]}),Object(j.jsxs)("div",{className:"container__footer__icons",children:[Object(j.jsx)("a",{href:"https://www.facebook.com/rem029vector/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(O.a,{icon:ce.a})}),Object(j.jsx)("a",{href:"https://www.instagram.com/rem029vector/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(O.a,{icon:ce.c})}),Object(j.jsx)("a",{href:"https://github.com/rem029",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(O.a,{icon:ce.b})})]})]})};var se=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(r.a,{basename:"/",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:["/browse/:videoId","/browse"],component:function(e){return Object(j.jsxs)(i.a.Fragment,{children:[e.match.params.videoId&&Object(j.jsx)(K,Object(l.a)(Object(l.a)({},e),{},{videoId:e.match.params.videoId})),Object(j.jsx)(ne,{})]})}}),Object(j.jsx)(o.a,{path:"/browse",children:Object(j.jsx)(ne,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(b,{})}),Object(j.jsx)(o.a,{component:h})]})}),Object(j.jsx)(ie,{})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))},le=Object(c.createContext)(),re=function(e){return Object(j.jsx)(le.Provider,{value:e,children:Object(j.jsx)(X,{children:Object(j.jsx)(H,{children:Object(j.jsx)(B,{children:Object(j.jsx)(L,{children:Object(j.jsx)(M,{children:e.children})})})})})})};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(re,{children:Object(j.jsx)(se,{})})}),document.getElementById("root")),ae()}},[[80,1,2]]]);
//# sourceMappingURL=main.00175b0d.chunk.js.map