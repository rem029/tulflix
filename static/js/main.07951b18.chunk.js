(this.webpackJsonptulflix=this.webpackJsonptulflix||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(14),a=n.n(s),l=(n(40),n(15)),r=n(12),o=n(4),d=(n(41),n(3)),u=n(21),j=n.p+"static/media/tulflix_logo-full.49b0b67c.png",b=(n(42),n(0)),h=function(){var e=Object(u.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],i=n?"container__homepage-img img-show":"container__homepage-img";return Object(b.jsxs)("div",{className:"container__homepage",children:[Object(b.jsx)("img",{className:i,src:j,alt:j,onLoad:function(){c(!0)}}),Object(b.jsx)("p",{className:"container__homepage-sub-text",children:"Watch Tulfo and chill"}),Object(b.jsx)(r.b,{className:"container__homepage-btn",to:"/browse/",children:"Start Watching"})]})},O=(n(47),function(){return Object(b.jsxs)("div",{className:"container__notfound",children:[Object(b.jsx)("img",{className:"container__notfound-img",src:j,alt:j}),Object(b.jsx)("p",{className:"container__notfound-sub-text",children:"Page Not Found"}),Object(b.jsx)(r.b,{className:"container__notfound-btn",to:"/browse/",children:"Go Back"})]})}),f=n(5),x=n(7),v=(n(50),function(e){var t=e.className;return Object(b.jsx)("div",{className:"spinner ".concat(t),children:Object(b.jsx)(f.a,{icon:x.f})})}),p=(n(51),n(52),function(e){var t=e.videoID,n=e.title,i=e.allowAutoPlay,s=void 0!==i&&i,a=Object(c.useState)(!1),l=Object(d.a)(a,2),r=l[0],o=l[1],u=s?"?autoplay=1&mute=1":"";return Object(b.jsxs)("div",{className:"container__videoplayer",children:[Object(b.jsx)("iframe",{onLoad:function(e){o(!0)},className:"iframe-responsive",src:"https://www.youtube.com/embed/".concat(t).concat(u),allowFullScreen:!0,title:n,allow:"autoplay"}),Object(b.jsx)("div",{className:"container__loading",children:!r&&Object(b.jsx)(v,{className:"spinner-lg"})})]})}),m=n(35),g=n.n(m),_=function(e,t){var n=Object(c.useState)(!0),i=Object(d.a)(n,2),s=i[0],a=i[1],l=Object(c.useState)(null),r=Object(d.a)(l,2),o=r[0],u=r[1],j=Object(c.useState)(null),b=Object(d.a)(j,2),h=b[0],O=b[1],f={method:e,url:t};return Object(c.useEffect)((function(){g()(f).then((function(e){return u(e)})).catch((function(e){O(e)})).finally((function(){a(!1)}))}),[]),{loading:s,response:o,error:h}},y="channel",N="playlists",w="playlist_item",I="videoInfo",C="channelActivity",S="channelVideos",k={loading:!0,results:[],error:null},P=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50,s={channel:"https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&part=contentDetails&part=topicDetails&id=".concat(n,"&maxResults=").concat(i,"&key=").concat(t),playlists:"https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=".concat(n,"&maxResults=").concat(i,"&key=").concat(t),playlist_item:" https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=id&part=contentDetails&part=status&playlistId=".concat(n,"&maxResults=").concat(i,"&key=").concat(t),videoInfo:"https://youtube.googleapis.com/youtube/v3/videos?id=".concat(n,"&part=snippet&part=statistics&maxResults=").concat(i,"&key=").concat(t),channelActivity:"https://youtube.googleapis.com/youtube/v3/activities?part=contentDetails&part=snippet&channelId=".concat(n,"&maxResults=").concat(i,"&key=").concat(t),channelVideos:"https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=".concat(n,"&maxResults=").concat(i,"&order=date&type=video&key=").concat(t)},a=Object(c.useState)([]),l=Object(d.a)(a,2),r=l[0],o=l[1],u=_("get",s[e]),j=u.loading,b=u.error,h=u.response;return Object(c.useEffect)((function(){(h||b)&&o(b||h.data.items)}),[h,b]),{loading:j,error:b,results:r}},D="AIzaSyAzDS1VcDtglBvOYbp0cVZyR6dmddTJrAQ",A="UCxhygwqQ1ZMoBGQM2yEcNug",E={GetChannelInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return P(y,D,e)},GetChannelActivity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return P(C,D,e)},GetChannelVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return P(S,D,e)},GetPlaylists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return P(N,D,e)},GetPlaylistItems:function(e){return P(w,D,e)},GetVideoInfo:function(e){return P(I,D,e)}},V=function(e,t,n){Object(c.useEffect)((function(){if(0===t.results.length&&t.loading&&(!e.loading&&e.results.length>0||e.error)){var c;c=Object(l.a)({},e),n(c)}}),[e,t,n])},B=Object(c.createContext)({channel:k,setChannel:function(){}}),U=function(e){var t=Object(c.useState)(k),n=Object(d.a)(t,2),i=n[0],s=n[1],a=E.GetChannelInfo();return V(a,i,(function(e){return s(e)})),Object(b.jsx)(B.Provider,{value:{channel:i,setChannel:s},children:e.children})},L=Object(c.createContext)({channelActivities:k,setChannelActivities:function(){}}),G=function(e){var t=Object(c.useState)(k),n=Object(d.a)(t,2),i=n[0],s=n[1],a=E.GetChannelActivity();return V(a,i,(function(e){return s(e)})),Object(b.jsx)(L.Provider,{value:{channelActivities:i,setChannelActivities:s},children:e.children})},F=function(){var e=Object(c.useContext)(B).channel,t=Object(c.useContext)(L).channelActivities,n=!t.loading&&t.results.length>0;return Object(b.jsx)("div",{className:"container__featured",children:Object(b.jsx)(i.a.Fragment,{children:e.loading?Object(b.jsx)("div",{className:"container__featured__loading",children:Object(b.jsx)(v,{className:"spinner-lg"})}):n?Object(b.jsx)("div",{className:"container__featured__video",children:Object(b.jsx)(p,{videoID:t.results[0].contentDetails.upload.videoId,title:t.results[0].snippet.title,allowAutoPlay:!0})}):Object(b.jsx)("div",{className:"container__featured__image",children:Object(b.jsx)("img",{src:e.results[0].snippet.thumbnails.high.url,alt:e.results[0].snippet.customUrl})})})})},R=(n(70),function(e){var t=e.videoID,n=e.imgUrl;return t&&n?Object(b.jsx)("div",{className:"container__playlistitem",children:Object(b.jsx)(r.b,{to:"/browse/".concat(t),children:Object(b.jsx)("img",{src:n,alt:t})})}):null}),W=(n(71),function(e,t){return t.length>0?{loading:!1,results:t,error:null}:E.GetPlaylistItems(e)}),T=function(e){var t=e.title,n=e.playlistId,s=e.items,a=void 0===s?[]:s,l=Object(c.useState)(!1),r=Object(d.a)(l,2),o=r[0],u=r[1],j=Object(c.useState)(a),h=Object(d.a)(j,2),O=h[0],v=h[1],p=Object(c.useState)([]),m=Object(d.a)(p,2),g=m[0],_=m[1],y=Object(c.useState)(-1),N=Object(d.a)(y,2),w=N[0],I=N[1],C=Object(c.useRef)(null),S=W(n,a);Object(c.useEffect)((function(){return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}}),[]),Object(c.useEffect)((function(){C&&k()}),[C]),Object(c.useEffect)((function(){}),[g]),Object(c.useEffect)((function(){S.loading||0!==O.length||v(S.results)}),[O,a,S]);var k=function(){C&&C.current&&P(Math.round(C.current.scrollWidth/window.innerWidth))},P=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;1===t&&(t=0);var n=[t-1];if(t>0){for(e=0;e<=t;e++){var c=e;n[e]=c}_(n)}},D=!0;try{D=C.current.scrollWidth>window.innerWidth}catch(A){D=!0}return Object(b.jsxs)("div",{className:"container_playlist",children:[o&&Object(b.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),C.current.scrollTo({behavior:"smooth",left:C.current.scrollLeft-window.innerWidth})}(e)},className:"container__playlist__control control-left",children:Object(b.jsx)(f.a,{icon:x.d})}),D&&Object(b.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),C.current.scrollTo({behavior:"smooth",left:window.innerWidth+C.current.scrollLeft})}(e)},className:"container__playlist__control control-right",children:Object(b.jsx)(f.a,{icon:x.e})}),Object(b.jsx)("div",{className:"container__playlist-nav-buttons",children:g.length>0&&g.map((function(e){return Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),function(e,t){e.preventDefault(),I(t),C.current.scrollTo({behavior:"smooth",left:window.innerWidth*t}),console.log("SCROLL TO",window.innerWidth*t),console.log("SCROLL WIDTH",C.current.scrollWidth)}(t,e)},className:w===e?"container__playlist-nav-buttons-active":""},e)}))}),Object(b.jsxs)("div",{className:"container_playlist-title",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("div",{className:"container_playlist-title__sub-text",children:"Explore all"}),Object(b.jsx)("div",{className:"container_playlist-title__sub-icon",children:Object(b.jsx)(f.a,{icon:x.a})})]}),Object(b.jsxs)("div",{className:"container_playlist-items "+(!C&&" playlist-loading"),id:"#".concat(n),ref:C,onScroll:function(e){!function(e){u(e.target.scrollLeft>0)}(e)},children:[Object(b.jsx)(i.a.Fragment,{children:O.map((function(e,t){var n;try{n=a.length>0?Object(b.jsx)(R,{videoID:e.contentDetails.upload.videoId,imgUrl:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.contentDetails.upload.videoId+t):Object(b.jsx)(R,{videoID:e.snippet.resourceId.videoId,imgUrl:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.snippet.resourceId.videoId+t)}catch(c){n=null}return n}))}),Object(b.jsx)(R,{})]})]})},M=Object(c.createContext)({playlists:k,setPlaylists:function(){},manualPlaylists:{}}),z=function(e){var t=Object(c.useState)(k),n=Object(d.a)(t,2),i=n[0],s=n[1],a=E.GetPlaylists();return V(a,i,(function(e){return s(e)})),Object(b.jsx)(M.Provider,{value:{playlists:i,setPlaylists:s,manualPlaylists:{recentUploads:{id:"recentUploads01",title:"RECENT UPLOADS"},allVideos:{id:"allVideos02",title:"ALL VIDEOS"}}},children:e.children})},Q=(n(72),function(){var e=Object(c.useContext)(M),t=e.playlists,n=e.manualPlaylists,s=Object(c.useContext)(L).channelActivities;return Object(b.jsxs)("div",{className:"container__playlists",children:[!s.loading&&s.results.length>0?Object(b.jsx)(i.a.Fragment,{children:Object(b.jsx)(T,{title:n.recentUploads.title,playlistId:n.recentUploads.id,items:s.results})}):Object(b.jsx)("div",{className:"container__playlists_loading",children:Object(b.jsx)(v,{className:"spinner-lg"})}),!t.loading&&t.results.length>0?Object(b.jsx)(i.a.Fragment,{children:t.results.map((function(e){return Object(b.jsx)(T,{title:e.snippet.localized.title,playlistId:e.id},e.id)}))}):Object(b.jsx)("div",{className:"container__playlists_loading",children:Object(b.jsx)(v,{className:"spinner-lg"})})]})}),J=n.p+"static/media/tulflix_logo-icon.93cc8c92.png";function Z(e){var t=e;try{for(var n=0;t>=1e3;)t/=1e3,n++;return n>0&&(t=t.toFixed(1)),t+=["","K","M","B","T"][n]}catch(c){return console.log("error",t),e}}n(73);var q=function(e){return a.a.createPortal(Object(b.jsx)("div",{onClick:function(t){t.preventDefault(),e.onClick()},className:"container__backdrop",children:e.children}),document.getElementById("root-video-info"))},H=(n(74),Object(c.createContext)({selectedVideoId:null,setSelectedVideoId:function(){}})),K=function(e){var t=Object(c.useState)(null),n=Object(d.a)(t,2),i=n[0],s=n[1];return Object(b.jsx)(H.Provider,{value:{selectedVideoId:i,setSelectedVideoId:s},children:e.children})},Y=function(e){var t=e.videoId,n=Object(c.useState)({id:"",title:"",imgUrl:"",datePublished:new Date,likeCount:"",viewCount:"",description:""}),i=Object(d.a)(n,2),s=i[0],a=i[1],l=Object(c.useContext)(H).setSelectedVideoId,o=E.GetVideoInfo(t);return Object(c.useEffect)((function(){return l(t),function(){l(null)}}),[]),Object(c.useEffect)((function(){o.loading||null===o.result||null!==o.error||""!==s.id||a({id:o.results[0].id,title:o.results[0].snippet.title,imgUrl:o.results[0].snippet.thumbnails.maxres.url,datePublished:new Date(o.results[0].snippet.publishedAt),likeCount:Z(o.results[0].statistics.likeCount),viewCount:Z(o.results[0].statistics.viewCount),description:o.results[0].snippet.description})}),[o,s]),Object(b.jsx)(q,{onClick:function(){},children:Object(b.jsxs)("div",{className:"container__video-modal",children:[Object(b.jsx)("div",{className:"container__video-modal__close-btn",children:Object(b.jsx)(r.b,{to:"/browse",children:Object(b.jsx)(f.a,{icon:x.i})})}),Object(b.jsxs)("div",{className:"container__video-modal__info",children:[Object(b.jsxs)("div",{className:"info-img",children:[Object(b.jsx)("div",{className:"info-img-overlay",children:Object(b.jsx)(p,{videoID:s.id,title:s.title})}),Object(b.jsx)("img",{src:s.imgUrl,alt:s.title})]}),o.loading?Object(b.jsx)(v,{className:"spinner-lg"}):Object(b.jsxs)("div",{className:"info-text",children:[Object(b.jsxs)("div",{className:"info-text-date",children:[Object(b.jsx)("p",{children:s.datePublished.toDateString()}),Object(b.jsxs)("div",{className:"info-text-statistics statistics-likes",children:[Object(b.jsx)("p",{children:Object(b.jsx)(f.a,{icon:x.h})}),Object(b.jsx)("p",{children:s.likeCount})]}),Object(b.jsxs)("div",{className:"info-text-statistics statistics-views",children:[Object(b.jsx)("p",{children:Object(b.jsx)(f.a,{icon:x.g})}),Object(b.jsx)("p",{children:s.viewCount})]})]}),Object(b.jsxs)("div",{className:"info-text-t-series",children:[Object(b.jsx)("img",{src:J,alt:J}),Object(b.jsx)("h2",{children:"SERIES"})]}),Object(b.jsx)("h2",{children:s.title}),Object(b.jsx)("hr",{className:"line__grey"}),Object(b.jsx)("hr",{className:"line__red"}),Object(b.jsx)("pre",{className:"info-desc",children:s.description})]})]})]})})},X=(n(75),Object(c.createContext)({navBar:!1,toggleNavBar:function(){},activePlaylist:null,setActivePlaylist:function(){}})),$=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(null),l=Object(d.a)(a,2),r=l[0],o=l[1];return Object(b.jsx)(X.Provider,{value:{navBar:i,toggleNavBar:function(){return s((function(e){return!e}))},activePlaylist:r,setActivePlaylist:o},children:e.children})},ee=function(e){var t=e.playlistId,n=e.href,i=e.text,s=e.isActive,a=Object(c.useContext)(X).toggleNavBar,l=Object(c.useContext)(H).setSelectedVideoId,r=s?"navbar-link navbar-link-active":"navbar-link";return Object(b.jsx)("li",{className:r,children:Object(b.jsx)("a",{href:n,onClick:function(e){!function(e){e.preventDefault(),document.getElementById("#".concat(t)).scrollIntoView()}(e),l(null),a()},children:i})})},te=(n(76),function(){var e=Object(c.useContext)(X),t=e.navBar,n=e.toggleNavBar,i=e.activePlaylist,s=Object(c.useContext)(M),a=s.playlists,l=s.manualPlaylists,r=Object(c.useContext)(H).setSelectedVideoId,o=t?"navbar navbar-open":"navbar",d=t?"container__navbar__arrow arrow-up":"container__navbar__arrow",u=[Object(b.jsx)(ee,{playlistId:l.recentUploads.id,href:"src",text:l.recentUploads.title,isActive:l.recentUploads.id===i},l.recentUploads.id+"navbar")],j=a.loading?Object(b.jsx)(v,{className:"spinner-sm"}):a.results.map((function(e){return Object(b.jsx)(ee,{playlistId:e.id,href:"src",text:e.snippet.title,isActive:e.id===i},e.id)}));return Object(b.jsxs)("div",{className:"container__navbar",children:[Object(b.jsxs)("button",{onClick:function(e){e.preventDefault(),n(),r(null)},children:["Browse",Object(b.jsx)("div",{className:d,children:Object(b.jsx)(f.a,{icon:x.b})})]}),Object(b.jsxs)("div",{className:o,children:[Object(b.jsx)("em",{children:Object(b.jsx)(f.a,{icon:x.c})}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[u,j]})})]})]})}),ne=(n(77),n(78),function(){var e=Object(c.useContext)(B).channel,t=e.loading?Object(b.jsx)(v,{className:"spinner-sm"}):Object(b.jsx)("p",{children:Z(e.results[0].statistics.subscriberCount)});return Object(b.jsxs)("header",{children:[Object(b.jsxs)("div",{className:"header__item_left",children:[Object(b.jsx)("img",{className:"logo-full",src:j,alt:"tulflix_logo-full.png"}),Object(b.jsx)(te,{})]}),Object(b.jsxs)("div",{className:"header__item_right",children:[Object(b.jsxs)("a",{href:"https://www.youtube.com/channel/UCxhygwqQ1ZMoBGQM2yEcNug",target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("em",{children:Object(b.jsx)(f.a,{icon:x.j})}),t]}),Object(b.jsx)("p",{children:"Subscribers"})]})]})}),ce=function(e){var t=Object(c.useContext)(H).selectedVideoId,n=null!==t&&a.a.createPortal(Object(b.jsx)(Y,{videoId:t}),document.getElementById("root-video-info"));return Object(b.jsxs)(i.a.Fragment,{children:[Object(b.jsx)(ne,{}),Object(b.jsx)(F,{}),Object(b.jsx)(Q,{}),n]})},ie=(n(79),n(18)),se=function(){return Object(b.jsxs)("div",{className:"container__footer",children:[Object(b.jsxs)("p",{children:["Designed and develop by"," ",Object(b.jsx)("a",{href:"https://github.com/rem029",target:"_blank",rel:"noreferrer",children:"rem029"})]}),Object(b.jsxs)("div",{className:"container__footer__icons",children:[Object(b.jsx)("a",{href:"https://www.facebook.com/rem029vector/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(f.a,{icon:ie.a})}),Object(b.jsx)("a",{href:"https://www.instagram.com/rem029vector/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(f.a,{icon:ie.c})}),Object(b.jsx)("a",{href:"https://github.com/rem029",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(f.a,{icon:ie.b})})]})]})};var ae=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(r.a,{basename:"/",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:["/browse/:videoId","/browse"],component:function(e){return Object(b.jsxs)(i.a.Fragment,{children:[e.match.params.videoId&&Object(b.jsx)(Y,Object(l.a)(Object(l.a)({},e),{},{videoId:e.match.params.videoId})),Object(b.jsx)(ce,{})]})}}),Object(b.jsx)(o.a,{path:"/browse",children:Object(b.jsx)(ce,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(h,{})}),Object(b.jsx)(o.a,{component:O})]})}),Object(b.jsx)(se,{})]})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))},re=Object(c.createContext)(),oe=function(e){return Object(b.jsx)(re.Provider,{value:e,children:Object(b.jsx)($,{children:Object(b.jsx)(K,{children:Object(b.jsx)(U,{children:Object(b.jsx)(G,{children:Object(b.jsx)(z,{children:e.children})})})})})})};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(oe,{children:Object(b.jsx)(ae,{})})}),document.getElementById("root")),le()}},[[80,1,2]]]);
//# sourceMappingURL=main.07951b18.chunk.js.map