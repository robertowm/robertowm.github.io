(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/a2i":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));a("q1tI");var r=a("qKvR"),i={name:"lwp4ik",styles:"background-color:#fff;border:1px solid #000;border-radius:5px;"},s=function(e){var t=e.body,a=e.className,i=e.id;return Object(r.b)("div",{id:i,className:"text-justify "+a,style:{fontSize:"13px"},dangerouslySetInnerHTML:{__html:t}})}},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,s=r(a("PJYZ")),n=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),l.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function O(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+n+o+a+r+t+s+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,s=e.spreadProps,n=e.ariaHidden,o=l.default.createElement(x,(0,d.default)({ref:t,src:a},s,{ariaHidden:n}));return r.length>1?l.default.createElement("picture",null,i(r),o):o})),x=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:n,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var T=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,O=e.loading,R=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:z?1:0,transition:T?"opacity "+y+"ms":"none"},o),N="boolean"==typeof b?"lightgray":b,k={transitionDelay:y+"ms"},q=(0,d.default)({opacity:this.state.imgLoaded?0:1},T&&k,{},o,{},f),C={title:t,alt:this.state.isVisible?"":a,style:q,className:g,itemProp:S};if(m){var H=m,M=p(m);return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&k)}),M.base64&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:C,imageVariants:H,generateSources:L}),M.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:C,imageVariants:H,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(H),l.default.createElement(x,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:O},M,{imageVariants:H}))}}))}if(h){var P=h,G=p(h),W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},s);return"inherit"===s.display&&delete W.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},T&&k)}),G.base64&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:C,imageVariants:P,generateSources:L}),G.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:C,imageVariants:P,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(P),l.default.createElement(x,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:O},G,{imageVariants:P}))}}))}return null},t}(l.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});T.propTypes={resolutions:V,sizes:N,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([N,c.default.arrayOf(N)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=T;t.default=k},R01H:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("q1tI");var r=a("Wbzz"),i=a("/a2i"),s=a("qKvR"),n=function(e){var t=e.children;return Object(s.b)("div",{className:"p-2",css:i.b},t)},o=function(e){var t=e.to,a=e.label;return Object(s.b)(r.Link,{to:t,className:"mx-2"},a)},d=function(e){var t=e.label;return Object(s.b)("span",{className:"mx-2"},t)},l=function(e,t){return Object(s.b)(n,null,t.filter((function(e){return e.to})).map((function(e,t){var a=e.to,r=e.label;return Object(s.b)("span",{key:t},Object(s.b)(o,{to:a,label:r})," /"," ")})),Object(s.b)(d,{label:e}))}},ok1R:function(e,t,a){"use strict";a("JHok");var r=a("wx14"),i=a("zLVn"),s=a("q1tI"),n=a.n(s),o=a("17x9"),d=a.n(o),l=a("TSYQ"),c=a.n(l),u=a("33Jr"),f=d.a.oneOfType([d.a.number,d.a.string]),g={tag:u.h,noGutters:d.a.bool,className:d.a.string,cssModule:d.a.object,form:d.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,o=e.tag,d=e.form,l=e.widths,f=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];l.forEach((function(t,a){var r=e[t];if(delete f[t],r){var i=!a;g.push(i?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var p=Object(u.e)(c()(t,s?"no-gutters":null,d?"form-row":"row",g),a);return n.a.createElement(o,Object(r.a)({},f,{className:p}))};m.propTypes=g,m.defaultProps=p,t.a=m},rhny:function(e,t,a){"use strict";a("JHok");var r=a("wx14"),i=a("zLVn"),s=a("q1tI"),n=a.n(s),o=a("17x9"),d=a.n(o),l=a("TSYQ"),c=a.n(l),u=a("33Jr"),f=d.a.oneOfType([d.a.number,d.a.string]),g=d.a.oneOfType([d.a.bool,d.a.number,d.a.string,d.a.shape({size:d.a.oneOfType([d.a.bool,d.a.number,d.a.string]),order:f,offset:f})]),p={tag:u.h,xs:g,sm:g,md:g,lg:g,xl:g,className:d.a.string,cssModule:d.a.object,widths:d.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,s=e.widths,o=e.tag,d=Object(i.a)(e,["className","cssModule","widths","tag"]),l=[];s.forEach((function(t,r){var i=e[t];if(delete d[t],i||""===i){var s=!r;if(Object(u.d)(i)){var n,o=s?"-":"-"+t+"-",f=h(s,t,i.size);l.push(Object(u.e)(c()(((n={})[f]=i.size||""===i.size,n["order"+o+i.order]=i.order||0===i.order,n["offset"+o+i.offset]=i.offset||0===i.offset,n)),a))}else{var g=h(s,t,i);l.push(g)}}})),l.length||l.push("col");var f=Object(u.e)(c()(t,l),a);return n.a.createElement(o,Object(r.a)({},d,{className:f}))};b.propTypes=p,b.defaultProps=m,t.a=b}}]);
//# sourceMappingURL=b442d09caf546aa9a15a6ec3e7e962602941b471-b67fb3bde2abd9f6d8ab.js.map