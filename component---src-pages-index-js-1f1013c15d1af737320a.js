(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(t,e,n){"use strict";n.r(e),n.d(e,"OneLineBlogPostTemplate",function(){return p}),n.d(e,"query",function(){return f});var a=n(10),r=(n(0),n(212)),c=n(345),i=n(518),o=n(244),l=n(245),b=n(225),s=n(229),u=n(221),m=n(217),d=n(233),p=function(t){var e=t.node,n=e.fields,i=e.frontmatter;return Object(a.b)("div",{className:"px-3 pt-2 mt-2",css:m.b},Object(a.b)("h6",null,Object(a.b)("span",{className:"mr-2"},"Latest post (",new Date(i.date).toDateString(),"):"),Object(a.b)(r.a,{to:n.path},i.title," ",i.tags.map(function(t){return Object(a.b)(c.a,{className:"mx-1"},t)}))))};e.default=function(t){var e=t.data.markdownRemark,n=e.frontmatter,r=n.title,p=n.date,f=n.tags,j=e.html,O=e.excerpt,g=Object(d.a)(r,[{to:"/",label:"Home"},{to:"/blog/",label:"Blog"}]);return Object(a.b)(s.a,{footer:Object(a.b)(u.b,null)},Object(a.b)(b.a,{title:"Post "+r,description:O,pathname:e.fields.path,article:!0}),Object(a.b)(i.a,{class:"fluid"},g,Object(a.b)("div",{className:"p-3 mt-2",css:m.b},Object(a.b)(o.a,{style:{fontSize:"14px"}},Object(a.b)(l.a,null,Object(a.b)("h1",null,r),Object(a.b)("h6",null,"Published at ",new Date(p).toDateString()),Object(a.b)("h6",null,"Tags:"," ",f.map(function(t){return Object(a.b)(c.a,{className:"mx-1"},t)})))),Object(a.b)(o.a,null,Object(a.b)(l.a,null,Object(a.b)(m.a,{body:j}))))))};var f="3296597969"},211:function(t,e,n){"use strict";n.r(e);var a=n(10),r=n(0),c=n.n(r),i=n(518),o=n(244),l=n(245),b=n(346),s=n.n(b),u=n(225),m=n(229),d=(n(20),n(21),n(224)),p=n(356),f=n(275),j=n(359),O=n(360);f.b.add(j.a,j.b,O.a,O.e,O.d,O.f,O.c,O.b);var g=Object(d.a)("div",{target:"e17cndfo0"})({name:"9ypn6a",styles:"margin:0;padding:0;width:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;"}),h=Object(d.a)("a",{target:"e17cndfo1"})("height:32px;width:32px;min-width:32px;background-color:",function(t){return t.backgroundColor||"rebeccapurple"},";border-radius:50%;padding:0px;margin:0 2px;display:flex;align-items:center;justify-content:center;"),v=function(t){var e=t.icon,n=t.color,r=t.style;return Object(a.b)(p.a,{style:Object.assign({},r,{fontSize:"20px",color:n}),icon:e})},y=Object(d.a)("div",{target:"e17cndfo2"})("background-color:",function(t){return t.backgroundColor||"white"},";border-radius:5px;display:flex;align-items:center;min-height:32px;width:100%;"),w=function(t){var e=t.icon,n=t.children,r=t.className,c=t.backgroundColor,i=t.color;return Object(a.b)(y,{className:r,backgroundColor:c},Object(a.b)(v,{icon:e,color:i||"rebeccapurple",style:{margin:"5px"}}),n)},x=function(t){var e=t.icon,n=t.url,r=t.onClick,c=t.backgroundColor,i=t.color;return Object(a.b)(h,{href:n,onClick:r,backgroundColor:c},Object(a.b)(v,{icon:e,color:i||"white"}))},N=n(217),k=n(237),S=n.n(k),_=function(t){if("GitHub"===t)return["fab","github"];if("LinkedIn"===t)return["fab","linkedin"];if("Your Acclaim"===t)return"angle-double-up";if("PDF"===t)return"file-pdf";if("Email"===t)return"envelope";throw new Error("Invalid name for icon")},C=function(t){var e=t.fullName,n=t.body,r=t.address,c=t.email,i=t.cvUrl,b=t.photo,s=t.links;return Object(a.b)("div",{className:"p-3",css:N.b},Object(a.b)(o.a,{className:"px-md-1"},Object(a.b)(l.a,{lg:"3",md:"4",className:"text-center mb-3"},Object(a.b)(S.a,{fluid:b.fluid,className:"rounded img-thumbnail",alt:e})),Object(a.b)(l.a,{lg:"9",md:"8"},Object(a.b)("div",{className:"text-left text-md-justify",dangerouslySetInnerHTML:{__html:n}}))),Object(a.b)(o.a,null,Object(a.b)(l.a,{lg:"3",md:"4",sm:"6",xs:"12",className:"my-2"},Object(a.b)(g,null,s.map(function(t,e){var n=t.name,r=t.url;return Object(a.b)(x,{url:r,icon:_(n),key:e})}),Object(a.b)(x,{url:i,icon:_("PDF")}),Object(a.b)(x,{url:"mailto:"+c,icon:_("Email")}))),Object(a.b)(l.a,{lg:"9",md:"8",sm:"6",xs:"12",className:"my-2"},Object(a.b)(w,{className:"justify-content-center justify-content-md-start",icon:"map-marker-alt"},r))))},T=function(t){var e=t.begin,n=t.end,r=t.className,c=!n||isNaN(parseInt(n))?"Since "+e:e===n?e:e+" - "+n;return Object(a.b)("div",{className:r},"(",c,")")},z=function(t){var e=t.education,n=t.certifications;return Object(a.b)(c.a.Fragment,null,Object(a.b)("div",{className:"p-3 my-2",css:N.b},Object(a.b)("h4",null,"Education"),e.map(function(t){var e=t.title,n=t.institution,r=t.start_year,c=t.end_year;return Object(a.b)("div",{style:{fontSize:"14px"}},Object(a.b)("div",{className:"font-weight-bold"},e),Object(a.b)("div",null,n),Object(a.b)(T,{begin:r,end:c}))})),Object(a.b)("div",{className:"p-3 my-2",css:N.b},Object(a.b)("h4",null,"Most relevant certifications"),n.map(function(t){var e=t.name,n=t.institutions,r=t.url,c=t.date;return Object(a.b)("div",{style:{fontSize:"14px"}},Object(a.b)("a",{href:r,style:{color:"black"}},Object(a.b)("div",{className:"font-weight-bold"},e)),n.map(function(t){return Object(a.b)("div",null,t)}),Object(a.b)("div",null,c))})))},M=(n(29),n(30),n(22),n(45),n(13),n(522)),R=n(361),D=n.n(R),I=n(467),L=n.n(I);var q,E=(q=(new D.a).use(L.a),function(t){return q.processSync(t).toString()}),P=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).toggle=n.toggle.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)),n.state={collapse:!1},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.toggle=function(){this.setState(function(t){return{collapse:!t.collapse}})},i.render=function(){var t=this.props,e=t.position,n=t.company,r=t.url,i=t.summary,b=t.startYear,s=t.endYear,u=this.props.processor||function(t){return t},m=i&&i.trim().length>0,d=i.split("\n"),p=d[0],f=d.slice(1);return Object(a.b)(c.a.Fragment,null,Object(a.b)(o.a,{style:{fontSize:"14px"}},Object(a.b)(l.a,{md:"9",sm:"12"},e.split("&").map(function(t){return Object(a.b)("div",{className:"font-weight-bold"},t.trim())}),Object(a.b)("div",null,Object(a.b)("a",{style:{color:"black"},href:r},n))),Object(a.b)(l.a,{md:"3",sm:"12"},Object(a.b)(T,{className:"text-md-right",begin:b,end:s}))),m&&Object(a.b)("div",{className:"d-none d-md-block",style:{fontSize:"13px"}},Object(a.b)("p",null,p," ",Object(a.b)("a",{onClick:this.toggle,style:{cursor:"pointer",fontFamily:"monospace"}},"[",this.state.collapse?"-":"+","]")),Object(a.b)(M.a,{isOpen:this.state.collapse},Object(a.b)(N.a,{body:u(f.join("\n"))}))),!m&&Object(a.b)("p",null))},r}(r.Component),F=function(t){var e=t.entries.map(function(t,e){var n=t.position,r=t.company,c=t.url,i=t.summary,o=t.start_year,l=t.end_year;return Object(a.b)(P,{key:e,position:n,company:r,url:c,summary:i,startYear:o,endYear:l,processor:E})});return Object(a.b)("div",{className:"p-3 mt-2",css:N.b},Object(a.b)("h4",null,"Work experience"),e)},U=n(266),W=n(204);n.d(e,"query",function(){return B});e.default=function(t){var e=t.data,n=e.aboutMe.frontmatter;return Object(a.b)(m.a,null,Object(a.b)(u.a,null),Object(a.b)(i.a,{class:"fluid"},Object(a.b)(C,{fullName:n.full_name,body:e.aboutMe.html,address:n.address,email:n.email,profileUrl:n.profile_url,cvUrl:n.cv.publicURL,photo:n.photo.childImageSharp,links:n.links}),e.latestBlogPost.totalCount>0&&Object(a.b)(W.OneLineBlogPostTemplate,{node:s.a.first(e.latestBlogPost.edges).node}),Object(a.b)(o.a,{className:"no-gutters"},Object(a.b)(l.a,{md:"7",sm:"12",className:"pr-md-2"},Object(a.b)(F,{entries:e.workExperiences.frontmatter.work_experience}),Object(a.b)(U.a,{entries:e.projects.edges})),Object(a.b)(l.a,{md:"5",sm:"12"},Object(a.b)(z,{education:e.qualifications.frontmatter.education,certifications:e.qualifications.frontmatter.certifications})))))};var B="3933672941"},212:function(t,e,n){"use strict";n.d(e,"b",function(){return s});var a=n(10),r=n(0),c=n.n(r),i=n(74),o=n.n(i);n.d(e,"a",function(){return o.a});n(218),n(12).default.enqueue;var l=c.a.createContext({});function b(t){var e=t.staticQueryData,n=t.data,r=t.query,i=t.render,o=n?n.data:e[r]&&e[r].data;return Object(a.b)(c.a.Fragment,null,o&&i(o),!o&&Object(a.b)("div",null,"Loading (StaticQuery)"))}var s=function(t){var e=t.data,n=t.query,r=t.render,c=t.children;return Object(a.b)(l.Consumer,null,function(t){return Object(a.b)(b,{data:e,query:n,render:r||c,staticQueryData:t})})}},217:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return c});var a=n(10),r=(n(0),{name:"lwp4ik",styles:"background-color:#fff;border:1px solid #000;border-radius:5px;"}),c=function(t){var e=t.body,n=t.className,r=t.id;return Object(a.b)("div",{id:r,className:"text-justify "+n,style:{fontSize:"13px"},dangerouslySetInnerHTML:{__html:e}})}},218:function(t,e,n){var a;t.exports=(a=n(231))&&a.default||a},221:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return l});var a=n(224),r=n(10),c=(n(0),Object(a.a)("div",{target:"e1ahvcw00"})({name:"147d6v6",styles:"padding:10px 0;width:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;font-size:12px;"}));function i(){return Object(r.b)(c,null,Object(r.b)("p",null,"Copyright © 2019 All Rights Reserved to ",Object(r.b)("a",{href:"#"},"Roberto Weidmann Menezes"),"."))}function o(t){var e=t.children;return Object(r.b)("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},e)}function l(){return Object(r.b)(c,null,Object(r.b)("p",null,"This work is licensed under a ",Object(r.b)(o,null,"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"),".",Object(r.b)(o,null,Object(r.b)("img",{alt:"Creative Commons License",style:{borderWidth:0,margin:"0 10px",width:"80px"},src:"https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"}))))}},225:function(t,e,n){"use strict";var a=n(10),r=n(230),c=n(0),i=n.n(c),o=n(226),l=n.n(o),b=n(212),s=function(t){var e=t.title,n=t.description,c=t.image,o=t.pathname,s=t.article;return Object(a.b)(b.b,{query:"3972928183",render:function(t){var r=t.site.siteMetadata,b=r.defaultTitle,u=r.titleTemplate,m=r.defaultDescription,d=r.siteUrl,p=r.defaultImage,f=r.twitterUsername,j={title:e||b,description:n||m,image:""+d+(c||p),url:""+d+(o||"/")};return Object(a.b)(i.a.Fragment,null,Object(a.b)(l.a,{title:j.title,titleTemplate:u},Object(a.b)("meta",{name:"description",content:j.description}),Object(a.b)("meta",{name:"image",content:j.image}),j.url&&Object(a.b)("meta",{property:"og:url",content:j.url}),!s?null:Object(a.b)("meta",{property:"og:type",content:"article"}),j.title&&Object(a.b)("meta",{property:"og:title",content:j.title}),j.description&&Object(a.b)("meta",{property:"og:description",content:j.description}),j.image&&Object(a.b)("meta",{property:"og:image",content:j.image}),Object(a.b)("meta",{name:"twitter:card",content:"summary_large_image"}),f&&Object(a.b)("meta",{name:"twitter:creator",content:f}),j.title&&Object(a.b)("meta",{name:"twitter:title",content:j.title}),j.description&&Object(a.b)("meta",{name:"twitter:description",content:j.description}),j.image&&Object(a.b)("meta",{name:"twitter:image",content:j.image})))},data:r})};e.a=s,s.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},229:function(t,e,n){"use strict";var a=n(224),r=n(10),c=n(232),i=n(0),o=n.n(i),l=n(226),b=n.n(l),s=n(212),u=(n(21),n(20),n(517)),m=n(518),d=n(519),p=n(522),f=n(520),j=n(521);var O={name:"90x2s1",styles:"li{margin-bottom:0;}"},g=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).toggle=n.toggle.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)),n.state={isOpen:!1},n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var c=a.prototype;return c.toggle=function(){this.setState({isOpen:!this.state.isOpen})},c.render=function(){var t=this.props.siteTitle,e=function(t){var e=t.to,n=t.name,a=t.className,c=t.style;return Object(r.b)(s.a,{to:e,style:Object.assign({color:"white",textDecoration:"none"},c),className:"nav-link "+a},n)};return Object(r.b)(u.a,{expand:"sm",dark:!0,className:"sticky-top",style:{backgroundColor:"rebeccapurple"}},Object(r.b)(m.a,null,Object(r.b)(s.a,{to:"/",className:"navbar-brand",style:{color:"white",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},t),Object(r.b)(d.a,{onClick:this.toggle}),Object(r.b)(p.a,{isOpen:this.state.isOpen,navbar:!0},Object(r.b)(f.a,{className:"ml-auto",navbar:!0,css:O},Object(r.b)(j.a,null,Object(r.b)(e,{to:"/",name:"About me"})),Object(r.b)(j.a,null,Object(r.b)(e,{to:"/blog",name:"Blog"}))))))},a}(i.Component),h=n(221),v=(n(238),n(239),Object(a.a)("div",{target:"eyrqcb50"})({name:"jj9sx4",styles:"padding-top:5px;"}));e.a=function(t){var e=t.children,n=t.footer;return Object(r.b)(s.b,{query:"2269548548",render:function(t){var a=t.site.siteMetadata,c=a.defaultTitle,i=a.titleTemplate,l=a.defaultDescription;return Object(r.b)(o.a.Fragment,null,Object(r.b)(b.a,{title:c,titleTemplate:i,meta:[{name:"description",content:l}]},Object(r.b)("html",{lang:"en"})),Object(r.b)(g,{siteTitle:c}),Object(r.b)(v,null,e),n||Object(r.b)(h.a,null))},data:c})}},230:function(t){t.exports={data:{site:{siteMetadata:{defaultTitle:"Roberto Weidmann Menezes",titleTemplate:"robertowm.github.io - %s",defaultDescription:"Roberto Weidmann Menezes blog and personal website - Software Engineer at SLI Systems",siteUrl:"https://robertowm.github.io",defaultImage:"/images/icon.png",twitterUsername:"@robertowm"}}}}},231:function(t,e,n){"use strict";n.r(e);n(21);var a=n(0),r=n.n(a),c=n(104);e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null}},232:function(t){t.exports={data:{site:{siteMetadata:{defaultTitle:"Roberto Weidmann Menezes",titleTemplate:"robertowm.github.io - %s",defaultDescription:"Roberto Weidmann Menezes blog and personal website - Software Engineer at SLI Systems"}}}}},233:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var a=n(10),r=(n(0),n(212)),c=n(217),i=function(t){var e=t.children;return Object(a.b)("div",{className:"p-2",css:c.b},e)},o=function(t){var e=t.to,n=t.label;return Object(a.b)(r.a,{to:e,className:"mx-2"},n)},l=function(t){var e=t.label;return Object(a.b)("span",{className:"mx-2"},e)},b=function(t,e){return Object(a.b)(i,null,e.filter(function(t){return t.to}).map(function(t,e){var n=t.to,r=t.label;return Object(a.b)("span",{key:e},Object(a.b)(o,{to:n,label:r})," /"," ")}),Object(a.b)(l,{label:t}))}},266:function(t,e,n){"use strict";n(29),n(30),n(13),n(20);var a=n(10),r=n(0),c=n(244),i=n(245),o=n(212),l=n(237),b=n.n(l),s=n(217);var u=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).toggle=n.toggle.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)),n.state={collapse:!1},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var l=r.prototype;return l.toggle=function(){this.setState(function(t){return{collapse:!t.collapse}})},l.render=function(){var t=this.props,e=t.name,n=t.company,r=t.url,l=t.summary,s=t.thumbnail,u=t.path;return Object(a.b)("div",{class:"my-4"},Object(a.b)(c.a,{style:{fontSize:"14px"}},Object(a.b)(i.a,{md:"4"},Object(a.b)(b.a,{fluid:s.fluid,className:"rounded img-thumbnail",alt:"Project "+e})),Object(a.b)(i.a,{md:"8"},Object(a.b)("h5",null,e),Object(a.b)("a",{href:r},Object(a.b)("h6",null,n)),Object(a.b)("p",null,l," ",Object(a.b)(o.a,{to:u,style:{color:"black",fontFamily:"monospace"}},"[>>]")))))},r}(r.Component);e.a=function(t){var e=t.entries.map(function(t,e){var n=t.node;return Object(a.b)(u,{key:e,name:n.frontmatter.short_name,company:n.frontmatter.company,url:n.frontmatter.url,summary:n.frontmatter.summary,thumbnail:n.frontmatter.thumbnail.childImageSharp,path:n.fields.path})});return Object(a.b)("div",{className:"p-3 mt-2",css:s.b},Object(a.b)("h4",null,"Projects"),e)}}}]);
//# sourceMappingURL=component---src-pages-index-js-1f1013c15d1af737320a.js.map