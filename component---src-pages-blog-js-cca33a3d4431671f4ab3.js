(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{209:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return p});var a=n(10),r=(n(0),n(212)),o=n(245),i=n(518),c=n(244),s=n(224),l=n(228),b=n(221),u=n(218),d=n(232),m=function(t){var e=t.title,n=t.excerpt,i=t.path,c=t.date;return Object(a.b)(o.a,{md:"3",sm:"6"},Object(a.b)("h5",null,i?Object(a.b)(r.a,{to:i},e):e),Object(a.b)("p",null,c&&new Date(c).toDateString()+" - ",n," ",i&&Object(a.b)(r.a,{to:i,style:{color:"black",fontFamily:"monospace"}},"[>>]")))};e.default=function(t){var e=t.data,n=Object(d.a)("Blog",[{to:"/",label:"Home"}]),r=e.allMarkdownRemark.edges.map(function(t){var e=t.node;return Object(a.b)(m,{title:e.frontmatter.title,excerpt:e.excerpt,path:e.fields.path,date:e.frontmatter.date})});return Object(a.b)(l.a,{footer:Object(a.b)(b.b,null)},Object(a.b)(s.a,{title:"Blog",description:"Main blog page, listing all published posts.",pathname:"/blog"}),Object(a.b)(i.a,{class:"fluid"},n,Object(a.b)("div",{className:"p-3 mt-2",css:u.b},Object(a.b)("h4",null,"Blog"),Object(a.b)("div",{class:"my-4",style:{fontSize:"14px"}},Object(a.b)(c.a,null,r,Object(a.b)(m,{title:"... more posts soon",excerpt:"\n                  I hope you're enjoying my posts.\n                  I'll trying to publish at least one per month.\n                  Feel free to contact me to discuss anything :)\n                "}))))))};var p="3192134473"},212:function(t,e,n){"use strict";n.d(e,"b",function(){return b});var a=n(10),r=n(0),o=n.n(r),i=n(74),c=n.n(i);n.d(e,"a",function(){return c.a});n(219),n(12).default.enqueue;var s=o.a.createContext({});function l(t){var e=t.staticQueryData,n=t.data,r=t.query,i=t.render,c=n?n.data:e[r]&&e[r].data;return Object(a.b)(o.a.Fragment,null,c&&i(c),!c&&Object(a.b)("div",null,"Loading (StaticQuery)"))}var b=function(t){var e=t.data,n=t.query,r=t.render,o=t.children;return Object(a.b)(s.Consumer,null,function(t){return Object(a.b)(l,{data:e,query:n,render:r||o,staticQueryData:t})})}},218:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});var a=n(10),r=(n(0),{name:"lwp4ik",styles:"background-color:#fff;border:1px solid #000;border-radius:5px;"}),o=function(t){var e=t.body,n=t.className,r=t.id;return Object(a.b)("div",{id:r,className:"text-justify "+n,style:{fontSize:"13px"},dangerouslySetInnerHTML:{__html:e}})}},219:function(t,e,n){var a;t.exports=(a=n(230))&&a.default||a},221:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s});var a=n(236),r=n(10),o=(n(0),Object(a.a)("div",{target:"e1ahvcw00"})({name:"147d6v6",styles:"padding:10px 0;width:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;font-size:12px;"}));function i(){return Object(r.b)(o,null,Object(r.b)("p",null,"Copyright © 2019 All Rights Reserved to ",Object(r.b)("a",{href:"#"},"Roberto Weidmann Menezes"),"."))}function c(t){var e=t.children;return Object(r.b)("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},e)}function s(){return Object(r.b)(o,null,Object(r.b)("p",null,"This work is licensed under a ",Object(r.b)(c,null,"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"),".",Object(r.b)(c,null,Object(r.b)("img",{alt:"Creative Commons License",style:{borderWidth:0,margin:"0 10px",width:"80px"},src:"https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"}))))}},224:function(t,e,n){"use strict";var a=n(10),r=n(229),o=n(0),i=n.n(o),c=n(225),s=n.n(c),l=n(212),b=function(t){var e=t.title,n=t.description,o=t.image,c=t.pathname,b=t.article;return Object(a.b)(l.b,{query:"3972928183",render:function(t){var r=t.site.siteMetadata,l=r.defaultTitle,u=r.titleTemplate,d=r.defaultDescription,m=r.siteUrl,p=r.defaultImage,f=r.twitterUsername,g={title:e||l,description:n||d,image:""+m+(o||p),url:""+m+(c||"/")};return Object(a.b)(i.a.Fragment,null,Object(a.b)(s.a,{title:g.title,titleTemplate:u},Object(a.b)("meta",{name:"description",content:g.description}),Object(a.b)("meta",{name:"image",content:g.image}),g.url&&Object(a.b)("meta",{property:"og:url",content:g.url}),!b?null:Object(a.b)("meta",{property:"og:type",content:"article"}),g.title&&Object(a.b)("meta",{property:"og:title",content:g.title}),g.description&&Object(a.b)("meta",{property:"og:description",content:g.description}),g.image&&Object(a.b)("meta",{property:"og:image",content:g.image}),Object(a.b)("meta",{name:"twitter:card",content:"summary_large_image"}),f&&Object(a.b)("meta",{name:"twitter:creator",content:f}),g.title&&Object(a.b)("meta",{name:"twitter:title",content:g.title}),g.description&&Object(a.b)("meta",{name:"twitter:description",content:g.description}),g.image&&Object(a.b)("meta",{name:"twitter:image",content:g.image})))},data:r})};e.a=b,b.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},228:function(t,e,n){"use strict";var a=n(10),r=n(231),o=n(0),i=n.n(o),c=n(225),s=n.n(c),l=n(212),b=n(518),u=(n(21),n(20),n(517)),d=n(519),m=n(522),p=n(520),f=n(521);var g={name:"90x2s1",styles:"li{margin-bottom:0;}"},O=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).toggle=n.toggle.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)),n.state={isOpen:!1},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.toggle=function(){this.setState({isOpen:!this.state.isOpen})},o.render=function(){var t=this.props.siteTitle,e=function(t){var e=t.to,n=t.name,r=t.className,o=t.style;return Object(a.b)(l.a,{to:e,style:Object.assign({color:"white",textDecoration:"none"},o),className:"nav-link "+r},n)};return Object(a.b)(u.a,{expand:"sm",dark:!0,className:"sticky-top",style:{backgroundColor:"rebeccapurple"}},Object(a.b)(b.a,null,Object(a.b)(l.a,{to:"/",className:"navbar-brand",style:{color:"white",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},t),Object(a.b)(d.a,{onClick:this.toggle}),Object(a.b)(m.a,{isOpen:this.state.isOpen,navbar:!0},Object(a.b)(p.a,{className:"ml-auto",navbar:!0,css:g},Object(a.b)(f.a,null,Object(a.b)(e,{to:"/",name:"About me"})),Object(a.b)(f.a,null,Object(a.b)(e,{to:"/blog",name:"Blog"}))))))},r}(o.Component),j=n(221);n(238),n(239),e.a=function(t){var e=t.children,n=t.footer;return Object(a.b)(l.b,{query:"2269548548",render:function(t){var r=t.site.siteMetadata,o=r.defaultTitle,c=r.titleTemplate,l=r.defaultDescription;return Object(a.b)(i.a.Fragment,null,Object(a.b)(s.a,{title:o,titleTemplate:c,meta:[{name:"description",content:l}]},Object(a.b)("html",{lang:"en"})),Object(a.b)(O,{siteTitle:o}),Object(a.b)(b.a,{class:"fluid",style:{paddingTop:"5px"}},e),n||Object(a.b)(j.a,null))},data:r})}},229:function(t){t.exports={data:{site:{siteMetadata:{defaultTitle:"Roberto Weidmann Menezes",titleTemplate:"robertowm.github.io - %s",defaultDescription:"Roberto Weidmann Menezes blog and personal website - Software Engineer at SLI Systems",siteUrl:"https://robertowm.github.io",defaultImage:"/images/icon.png",twitterUsername:"@robertowm"}}}}},230:function(t,e,n){"use strict";n.r(e);n(21);var a=n(0),r=n.n(a),o=n(104);e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json)):null}},231:function(t){t.exports={data:{site:{siteMetadata:{defaultTitle:"Roberto Weidmann Menezes",titleTemplate:"robertowm.github.io - %s",defaultDescription:"Roberto Weidmann Menezes blog and personal website - Software Engineer at SLI Systems"}}}}},232:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n(10),r=(n(0),n(212)),o=n(218),i=function(t){var e=t.children;return Object(a.b)("div",{className:"p-2",css:o.b},e)},c=function(t){var e=t.to,n=t.label;return Object(a.b)(r.a,{to:e,className:"mx-2"},n)},s=function(t){var e=t.label;return Object(a.b)("span",{className:"mx-2"},e)},l=function(t,e){return Object(a.b)(i,null,e.filter(function(t){return t.to}).map(function(t,e){var n=t.to,r=t.label;return Object(a.b)("span",{key:e},Object(a.b)(c,{to:n,label:r})," /"," ")}),Object(a.b)(s,{label:t}))}},233:function(t,e){t.exports=function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}},244:function(t,e,n){"use strict";var a=n(214),r=n(215),o=n(0),i=n.n(o),c=n(57),s=n.n(c),l=n(216),b=n.n(l),u=n(217),d={tag:u.g,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},m=function(t){var e=t.className,n=t.cssModule,o=t.noGutters,c=t.tag,s=t.form,l=Object(r.a)(t,["className","cssModule","noGutters","tag","form"]),d=Object(u.d)(b()(e,o?"no-gutters":null,s?"form-row":"row"),n);return i.a.createElement(c,Object(a.a)({},l,{className:d}))};m.propTypes=d,m.defaultProps={tag:"div"},e.a=m},245:function(t,e,n){"use strict";n(23);var a=n(214),r=n(215),o=n(233),i=n.n(o),c=n(0),s=n.n(c),l=n(57),b=n.n(l),u=n(216),d=n.n(u),m=n(217),p=b.a.oneOfType([b.a.number,b.a.string]),f=b.a.oneOfType([b.a.bool,b.a.number,b.a.string,b.a.shape({size:b.a.oneOfType([b.a.bool,b.a.number,b.a.string]),order:p,offset:p})]),g={tag:m.g,xs:f,sm:f,md:f,lg:f,xl:f,className:b.a.string,cssModule:b.a.object,widths:b.a.array},O={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(t,e,n){return!0===n||""===n?t?"col":"col-"+e:"auto"===n?t?"col-auto":"col-"+e+"-auto":t?"col-"+n:"col-"+e+"-"+n},v=function(t){var e=t.className,n=t.cssModule,o=t.widths,c=t.tag,l=Object(r.a)(t,["className","cssModule","widths","tag"]),b=[];o.forEach(function(e,a){var r=t[e];if(delete l[e],r||""===r){var o=!a;if(i()(r)){var c,s=o?"-":"-"+e+"-",u=j(o,e,r.size);b.push(Object(m.d)(d()(((c={})[u]=r.size||""===r.size,c["order"+s+r.order]=r.order||0===r.order,c["offset"+s+r.offset]=r.offset||0===r.offset,c)),n))}else{var p=j(o,e,r);b.push(p)}}}),b.length||b.push("col");var u=Object(m.d)(d()(e,b),n);return s.a.createElement(c,Object(a.a)({},l,{className:u}))};v.propTypes=g,v.defaultProps=O,e.a=v}}]);
//# sourceMappingURL=component---src-pages-blog-js-cca33a3d4431671f4ab3.js.map