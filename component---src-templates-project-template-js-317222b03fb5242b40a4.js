(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return p});a(178);var r=a(9),i=(a(0),a(439)),n=a(192),s=a(193),o=a(186),l=a.n(o),c=a(173),d=a(177),u=a(167),f=a(182);t.default=function(e){var t=e.data.markdownRemark,a=t.frontmatter,o=a.name,p=a.short_name,b=a.company,m=a.url,g=a.thumbnail,h=t.html,y=t.excerpt,O=Object(f.a)(p,[{to:"/",label:"Home"},{to:"/projects/",label:"Projects"}]);return Object(r.b)(d.a,null,Object(r.b)(c.a,{title:"Project "+p,description:y,pathname:t.fields.path,article:!0}),Object(r.b)(i.a,{class:"fluid"},O,Object(r.b)("div",{className:"p-3 mt-2",css:u.b},Object(r.b)(n.a,{style:{fontSize:"14px"}},Object(r.b)(s.a,{md:"4"},Object(r.b)(l.a,{fluid:g.childImageSharp.fluid,className:"rounded img-thumbnail",alt:"Project "+o})),Object(r.b)(s.a,{md:"8"},Object(r.b)("h1",null,o),Object(r.b)("a",{href:m},Object(r.b)("h3",null,b)),Object(r.b)(u.a,{body:h}))))))};var p="2620677775"},162:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(9),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(37),c=a.n(l);a.d(t,"a",function(){return c.a});a(168);var d=n.a.createContext({}),u=function(e){return Object(r.b)(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(r.b)("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},167:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return n});var r=a(9),i=(a(0),{name:"lwp4ik",styles:"background-color:#fff;border:1px solid #000;border-radius:5px;"}),n=function(e){var t=e.body,a=e.className,i=e.id;return Object(r.b)("div",{id:i,className:"text-justify "+a,style:{fontSize:"13px"},dangerouslySetInnerHTML:{__html:t}})}},168:function(e,t,a){var r;e.exports=(r=a(180))&&r.default||r},173:function(e,t,a){"use strict";var r=a(9),i=a(179),n=a(0),s=a.n(n),o=a(174),l=a.n(o),c=a(4),d=a.n(c),u=a(162),f=function(e){var t=e.title,a=e.description,n=e.image,o=e.pathname,c=e.article;return Object(r.b)(u.b,{query:"3972928183",render:function(e){var i=e.site.siteMetadata,d=i.defaultTitle,u=i.titleTemplate,f=i.defaultDescription,p=i.siteUrl,b=i.defaultImage,m=i.twitterUsername,g={title:t||d,description:a||f,image:""+p+(n||b),url:""+p+(o||"/")};return Object(r.b)(s.a.Fragment,null,Object(r.b)(l.a,{title:g.title,titleTemplate:u},Object(r.b)("meta",{name:"description",content:g.description}),Object(r.b)("meta",{name:"image",content:g.image}),g.url&&Object(r.b)("meta",{property:"og:url",content:g.url}),!c?null:Object(r.b)("meta",{property:"og:type",content:"article"}),g.title&&Object(r.b)("meta",{property:"og:title",content:g.title}),g.description&&Object(r.b)("meta",{property:"og:description",content:g.description}),g.image&&Object(r.b)("meta",{property:"og:image",content:g.image}),Object(r.b)("meta",{name:"twitter:card",content:"summary_large_image"}),m&&Object(r.b)("meta",{name:"twitter:creator",content:m}),g.title&&Object(r.b)("meta",{name:"twitter:title",content:g.title}),g.description&&Object(r.b)("meta",{name:"twitter:description",content:g.description}),g.image&&Object(r.b)("meta",{name:"twitter:image",content:g.image})))},data:i})};t.a=f,f.propTypes={title:d.a.string,description:d.a.string,image:d.a.string,pathname:d.a.string,article:d.a.bool},f.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},177:function(e,t,a){"use strict";var r=a(185),i=a(9),n=a(181),s=a(0),o=a.n(s),l=a(4),c=a.n(l),d=a(174),u=a.n(d),f=a(162),p=(a(58),a(178),a(38)),b=a.n(p),m=a(7),g=a.n(m),h=a(438),y=a(439),O=a(440),j=a(443),v=a(441),w=a(442),S={name:"90x2s1",styles:"li{margin-bottom:0;}"},L=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(b()(a)),a.state={isOpen:!1},a}g()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){var e=this.props.siteTitle,t=function(e){var t=e.to,a=e.name,r=e.className,n=e.style;return Object(i.b)(f.a,{to:t,style:Object.assign({color:"white",textDecoration:"none"},n),className:"nav-link "+r},a)};return Object(i.b)(h.a,{expand:"sm",dark:!0,className:"sticky-top",style:{backgroundColor:"rebeccapurple"}},Object(i.b)(y.a,null,Object(i.b)(f.a,{to:"/",className:"navbar-brand",style:{color:"white",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},e),Object(i.b)(O.a,{onClick:this.toggle}),Object(i.b)(j.a,{isOpen:this.state.isOpen,navbar:!0},Object(i.b)(v.a,{className:"ml-auto",navbar:!0,css:S},Object(i.b)(w.a,null,Object(i.b)(t,{to:"/",name:"About me"})),Object(i.b)(w.a,null,Object(i.b)(t,{to:"/blog",name:"Blog"}))))))},t}(s.Component),E=(a(187),a(188),Object(r.a)("div",{target:"eyrqcb50"})({name:"jj9sx4",styles:"padding-top:5px;"})),R=function(e){var t=e.children;return Object(i.b)(f.b,{query:"2269548548",render:function(e){var a=e.site.siteMetadata,r=a.defaultTitle,n=a.titleTemplate,s=a.defaultDescription;return Object(i.b)(o.a.Fragment,null,Object(i.b)(u.a,{title:r,titleTemplate:n,meta:[{name:"description",content:s}]},Object(i.b)("html",{lang:"en"})),Object(i.b)(L,{siteTitle:r}),Object(i.b)(E,null,t))},data:n})};R.propTypes={children:c.a.node.isRequired};t.a=R},179:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Roberto Weidmann Menezes",titleTemplate:"robertowm.github.io - %s",defaultDescription:"Roberto Weidmann Menezes blog and personal website - Software Engineer at SLI Systems",siteUrl:"https://robertowm.github.io",defaultImage:"/images/icon.png",twitterUsername:"@robertowm"}}}}},180:function(e,t,a){"use strict";a.r(t);a(58);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(59),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},181:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Roberto Weidmann Menezes",titleTemplate:"robertowm.github.io - %s",defaultDescription:"Roberto Weidmann Menezes blog and personal website - Software Engineer at SLI Systems"}}}}},182:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a(9),i=(a(0),a(162)),n=a(167),s=function(e){var t=e.children;return Object(r.b)("div",{className:"p-2",css:n.b},t)},o=function(e){var t=e.to,a=e.label;return Object(r.b)(i.a,{to:t,className:"mx-2"},a)},l=function(e){var t=e.label;return Object(r.b)("span",{className:"mx-2"},t)},c=function(e,t){return Object(r.b)(s,null,t.filter(function(e){return e.to}).map(function(e,t){var a=e.to,i=e.label;return Object(r.b)("span",{key:t},Object(r.b)(o,{to:a,label:i})," /"," ")}),Object(r.b)(l,{label:e}))}},183:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},186:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(38)),o=r(a(80)),l=r(a(29)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},b=new WeakMap;var m=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},h=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});h.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:t.imageRef.current.currentSrc.length>0})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,b=e.fluid,m=e.fixed,y=e.backgroundColor,O=e.Tag,j=e.itemProp,v=this.state.imgLoaded||!1===this.state.fadeIn,w=!0===this.state.fadeIn&&!this.state.imgCached,S=(0,l.default)({opacity:v?1:0,transition:w?"opacity 0.5s":"none"},o),L="boolean"==typeof y?"lightgray":y,E={transitionDelay:"0.5s"},R=(0,l.default)({opacity:this.state.imgLoaded?0:1},w&&E,o,f),N={title:t,alt:this.state.isVisible?"":a,style:R,className:p};if(b){var T=b;return c.default.createElement(O,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(O,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),L&&c.default.createElement(O,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},w&&E)}),T.base64&&c.default.createElement(h,(0,l.default)({src:T.base64},N)),T.tracedSVG&&c.default.createElement(h,(0,l.default)({src:T.tracedSVG},N)),this.state.isVisible&&c.default.createElement("picture",null,T.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),c.default.createElement(h,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},T))}}))}if(m){var x=m,z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},n);return"inherit"===n.display&&delete z.display,c.default.createElement(O,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},L&&c.default.createElement(O,{title:t,style:(0,l.default)({backgroundColor:L,width:x.width,opacity:this.state.imgLoaded?0:1,height:x.height},w&&E)}),x.base64&&c.default.createElement(h,(0,l.default)({src:x.base64},N)),x.tracedSVG&&c.default.createElement(h,(0,l.default)({src:x.tracedSVG},N)),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement(h,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},x))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var O=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),j=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:O,sizes:j,fixed:O,fluid:j,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var v=y;t.default=v},192:function(e,t,a){"use strict";var r=a(163),i=a(164),n=a(0),s=a.n(n),o=a(4),l=a.n(o),c=a(165),d=a.n(c),u=a(166),f={tag:u.h,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},p=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,o=e.tag,l=e.form,c=Object(i.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(u.e)(d()(t,n?"no-gutters":null,l?"form-row":"row"),a);return s.a.createElement(o,Object(r.a)({},c,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},193:function(e,t,a){"use strict";var r=a(163),i=a(164),n=a(183),s=a.n(n),o=a(0),l=a.n(o),c=a(4),d=a.n(c),u=a(165),f=a.n(u),p=a(166),b=d.a.oneOfType([d.a.number,d.a.string]),m=d.a.oneOfType([d.a.bool,d.a.number,d.a.string,d.a.shape({size:d.a.oneOfType([d.a.bool,d.a.number,d.a.string]),push:Object(p.d)(b,'Please use the prop "order"'),pull:Object(p.d)(b,'Please use the prop "order"'),order:b,offset:b})]),g={tag:p.h,xs:m,sm:m,md:m,lg:m,xl:m,className:d.a.string,cssModule:d.a.object,widths:d.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},O=function(e){var t=e.className,a=e.cssModule,n=e.widths,o=e.tag,c=Object(i.a)(e,["className","cssModule","widths","tag"]),d=[];n.forEach(function(t,r){var i=e[t];if(delete c[t],i||""===i){var n=!r;if(s()(i)){var o,l=n?"-":"-"+t+"-",u=y(n,t,i.size);d.push(Object(p.e)(f()(((o={})[u]=i.size||""===i.size,o["order"+l+i.order]=i.order||0===i.order,o["offset"+l+i.offset]=i.offset||0===i.offset,o)),a))}else{var b=y(n,t,i);d.push(b)}}}),d.length||d.push("col");var u=Object(p.e)(f()(t,d),a);return l.a.createElement(o,Object(r.a)({},c,{className:u}))};O.propTypes=g,O.defaultProps=h,t.a=O}}]);
//# sourceMappingURL=component---src-templates-project-template-js-317222b03fb5242b40a4.js.map