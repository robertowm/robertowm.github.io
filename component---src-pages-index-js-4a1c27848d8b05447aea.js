(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(t,e,n){"use strict";n.r(e),n.d(e,"OneLineBlogPostTemplate",function(){return d}),n.d(e,"query",function(){return p});var a=n(9),r=(n(0),n(162)),i=n(275),c=n(439),o=n(192),l=n(193),s=n(173),b=n(177),u=n(167),m=n(182),d=function(t){var e=t.node,n=e.fields,c=e.frontmatter;return Object(a.b)("div",{className:"px-3 pt-2 mt-2",css:u.b},Object(a.b)("h6",null,Object(a.b)("span",{className:"mr-2"},"Latest post (",new Date(c.date).toDateString(),"):"),Object(a.b)(r.a,{to:n.path},c.title," ",c.tags.map(function(t){return Object(a.b)(i.a,{className:"mx-1"},t)}))))};e.default=function(t){var e=t.data.markdownRemark,n=e.frontmatter,r=n.title,d=n.date,p=n.tags,f=e.html,j=e.excerpt,O=Object(m.a)(r,[{to:"/",label:"Home"},{to:"/blog/",label:"Blog"}]);return Object(a.b)(b.a,null,Object(a.b)(s.a,{title:"Post "+r,description:j,pathname:e.fields.path,article:!0}),Object(a.b)(c.a,{class:"fluid"},O,Object(a.b)("div",{className:"p-3 mt-2",css:u.b},Object(a.b)(o.a,{style:{fontSize:"14px"}},Object(a.b)(l.a,null,Object(a.b)("h1",null,r),Object(a.b)("h6",null,"Published at ",new Date(d).toDateString()),Object(a.b)("h6",null,"Tags:"," ",p.map(function(t){return Object(a.b)(i.a,{className:"mx-1"},t)})))),Object(a.b)(o.a,null,Object(a.b)(l.a,null,Object(a.b)(u.a,{body:f}))))))};var p="3296597969"},161:function(t,e,n){"use strict";n.r(e);var a=n(9),r=n(0),i=n.n(r),c=n(439),o=n(192),l=n(193),s=n(276),b=n.n(s),u=n(173),m=n(177),d=(n(178),n(58),n(185)),p=n(278),f=n(212),j=n(281),O=n(282);f.b.add(j.a,j.b,O.a,O.e,O.d,O.f,O.c,O.b);var g,h=Object(d.a)("div",{target:"e17cndfo0"})({name:"9ypn6a",styles:"margin:0;padding:0;width:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;"}),y=Object(d.a)("a",{target:"e17cndfo1"})("height:32px;width:32px;min-width:32px;background-color:",function(t){return t.backgroundColor||"rebeccapurple"},";border-radius:50%;padding:0px;margin:0 2px;display:flex;align-items:center;justify-content:center;"),v=function(t){var e=t.icon,n=t.color,r=t.style;return Object(a.b)(p.a,{style:Object.assign({},r,{fontSize:"20px",color:n}),icon:e})},x=Object(d.a)("div",{target:"e17cndfo2"})("background-color:",function(t){return t.backgroundColor||"white"},";border-radius:5px;display:flex;align-items:center;min-height:32px;width:100%;"),w=function(t){var e=t.icon,n=t.children,r=t.className,i=t.backgroundColor,c=t.color;return Object(a.b)(x,{className:r,backgroundColor:i},Object(a.b)(v,{icon:e,color:c||"rebeccapurple",style:{margin:"5px"}}),n)},N=function(t){var e=t.icon,n=t.url,r=t.onClick,i=t.backgroundColor,c=t.color;return Object(a.b)(y,{href:n,onClick:r,backgroundColor:i},Object(a.b)(v,{icon:e,color:c||"white"}))},k=n(167),S=n(186),T=n.n(S),C=function(t){if("GitHub"===t)return["fab","github"];if("LinkedIn"===t)return["fab","linkedin"];if("Your Acclaim"===t)return"angle-double-up";if("PDF"===t)return"file-pdf";if("Email"===t)return"envelope";throw new Error("Invalid name for icon")},q=function(t){var e=t.fullName,n=t.body,r=t.address,i=t.email,c=t.cvUrl,s=t.photo,b=t.links;return Object(a.b)("div",{className:"p-3",css:k.b},Object(a.b)(o.a,{className:"px-md-1"},Object(a.b)(l.a,{lg:"3",md:"4",className:"text-center mb-3"},Object(a.b)(T.a,{fluid:s.fluid,className:"rounded img-thumbnail",alt:e})),Object(a.b)(l.a,{lg:"9",md:"8"},Object(a.b)("div",{className:"text-left text-md-justify",dangerouslySetInnerHTML:{__html:n}}))),Object(a.b)(o.a,null,Object(a.b)(l.a,{lg:"3",md:"4",sm:"6",xs:"12",className:"my-2"},Object(a.b)(h,null,b.map(function(t,e){var n=t.name,r=t.url;return Object(a.b)(N,{url:r,icon:C(n),key:e})}),Object(a.b)(N,{url:c,icon:C("PDF")}),Object(a.b)(N,{url:"mailto:"+i,icon:C("Email")}))),Object(a.b)(l.a,{lg:"9",md:"8",sm:"6",xs:"12",className:"my-2"},Object(a.b)(w,{className:"justify-content-center justify-content-md-start",icon:"map-marker-alt"},r))))},_=function(t){var e=t.begin,n=t.end,r=t.className,i=n?e===n?e:e+" - "+n:"Since "+e;return Object(a.b)("div",{className:r},"(",i,")")},M=function(t){var e=t.education,n=t.certifications;return Object(a.b)(i.a.Fragment,null,Object(a.b)("div",{className:"p-3 my-2",css:k.b},Object(a.b)("h4",null,"Education"),e.map(function(t){var e=t.title,n=t.institution,r=t.start_year,i=t.end_year;return Object(a.b)("div",{style:{fontSize:"14px"}},Object(a.b)("div",{className:"font-weight-bold"},e),Object(a.b)("div",null,n),Object(a.b)(_,{begin:r,end:i}))})),Object(a.b)("div",{className:"p-3 my-2",css:k.b},Object(a.b)("h4",null,"Most relevant certifications"),n.map(function(t){var e=t.name,n=t.institutions,r=t.url,i=t.date;return Object(a.b)("div",{style:{fontSize:"14px"}},Object(a.b)("a",{href:r,style:{color:"black"}},Object(a.b)("div",{className:"font-weight-bold"},e)),n.map(function(t){return Object(a.b)("div",null,t)}),Object(a.b)("div",null,i))})))},z=(n(79),n(61),n(82),n(38)),P=n.n(z),D=n(7),R=n.n(D),I=(n(283),n(39),n(443)),F=n(285),L=n.n(F),E=n(389),U=n.n(E),B=(g=(new L.a).use(U.a),function(t){return g.processSync(t).toString()}),W=function(t){function e(e){var n;return(n=t.call(this,e)||this).toggle=n.toggle.bind(P()(n)),n.state={collapse:!1},n}R()(e,t);var n=e.prototype;return n.toggle=function(){this.setState(function(t){return{collapse:!t.collapse}})},n.render=function(){var t=this.props,e=t.position,n=t.company,r=t.url,c=t.summary,s=t.startYear,b=t.endYear,u=this.props.processor||function(t){return t},m=c.split("\n"),d=m[0],p=m.slice(1);return Object(a.b)(i.a.Fragment,null,Object(a.b)(o.a,{style:{fontSize:"14px"}},Object(a.b)(l.a,{md:"9",sm:"12"},e.split("&").map(function(t){return Object(a.b)("div",{className:"font-weight-bold"},t.trim())}),Object(a.b)("div",null,Object(a.b)("a",{style:{color:"black"},href:r},n))),Object(a.b)(l.a,{md:"3",sm:"12"},Object(a.b)(_,{className:"text-md-right",begin:s,end:b}))),Object(a.b)("div",{className:"d-none d-md-block",style:{fontSize:"13px"}},Object(a.b)("p",null,d," ",Object(a.b)("a",{onClick:this.toggle,style:{cursor:"pointer",fontFamily:"monospace"}},"[",this.state.collapse?"-":"+","]")),Object(a.b)(I.a,{isOpen:this.state.collapse},Object(a.b)(k.a,{body:u(p.join("\n"))}))))},e}(r.Component),Y=function(t){var e=t.entries.map(function(t,e){var n=t.position,r=t.company,i=t.url,c=t.summary,o=t.start_year,l=t.end_year;return Object(a.b)(W,{key:e,position:n,company:r,url:i,summary:c,startYear:o,endYear:l,processor:B})});return Object(a.b)("div",{className:"p-3 mt-2",css:k.b},Object(a.b)("h4",null,"Work experience"),e)},H=n(207),A=n(153);n.d(e,"query",function(){return J});e.default=function(t){var e=t.data,n=e.aboutMe.frontmatter;return Object(a.b)(m.a,null,Object(a.b)(u.a,null),Object(a.b)(c.a,{class:"fluid"},Object(a.b)(q,{fullName:n.full_name,body:e.aboutMe.html,address:n.address,email:n.email,profileUrl:n.profile_url,cvUrl:n.cv_url,photo:n.photo.childImageSharp,links:n.links}),e.latestBlogPost.totalCount>0&&Object(a.b)(A.OneLineBlogPostTemplate,{node:b.a.first(e.latestBlogPost.edges).node}),Object(a.b)(o.a,{className:"no-gutters"},Object(a.b)(l.a,{md:"7",sm:"12",className:"pr-md-2"},Object(a.b)(Y,{entries:e.workExperiences.frontmatter.work_experience}),Object(a.b)(H.a,{entries:e.projects.edges})),Object(a.b)(l.a,{md:"5",sm:"12"},Object(a.b)(M,{education:e.qualifications.frontmatter.education,certifications:e.qualifications.frontmatter.certifications})))))};var J="849389824"},162:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var a=n(9),r=n(0),i=n.n(r),c=n(4),o=n.n(c),l=n(37),s=n.n(l);n.d(e,"a",function(){return s.a});n(168);var b=i.a.createContext({}),u=function(t){return Object(a.b)(b.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},167:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i});var a=n(9),r=(n(0),{name:"lwp4ik",styles:"background-color:#fff;border:1px solid #000;border-radius:5px;"}),i=function(t){var e=t.body,n=t.className,r=t.id;return Object(a.b)("div",{id:r,className:"text-justify "+n,style:{fontSize:"13px"},dangerouslySetInnerHTML:{__html:e}})}},168:function(t,e,n){var a;t.exports=(a=n(180))&&a.default||a},173:function(t,e,n){"use strict";var a=n(9),r=n(179),i=n(0),c=n.n(i),o=n(174),l=n.n(o),s=n(4),b=n.n(s),u=n(162),m=function(t){var e=t.title,n=t.description,i=t.image,o=t.pathname,s=t.article;return Object(a.b)(u.b,{query:"3972928183",render:function(t){var r=t.site.siteMetadata,b=r.defaultTitle,u=r.titleTemplate,m=r.defaultDescription,d=r.siteUrl,p=r.defaultImage,f=r.twitterUsername,j={title:e||b,description:n||m,image:""+d+(i||p),url:""+d+(o||"/")};return Object(a.b)(c.a.Fragment,null,Object(a.b)(l.a,{title:j.title,titleTemplate:u},Object(a.b)("meta",{name:"description",content:j.description}),Object(a.b)("meta",{name:"image",content:j.image}),j.url&&Object(a.b)("meta",{property:"og:url",content:j.url}),!s?null:Object(a.b)("meta",{property:"og:type",content:"article"}),j.title&&Object(a.b)("meta",{property:"og:title",content:j.title}),j.description&&Object(a.b)("meta",{property:"og:description",content:j.description}),j.image&&Object(a.b)("meta",{property:"og:image",content:j.image}),Object(a.b)("meta",{name:"twitter:card",content:"summary_large_image"}),f&&Object(a.b)("meta",{name:"twitter:creator",content:f}),j.title&&Object(a.b)("meta",{name:"twitter:title",content:j.title}),j.description&&Object(a.b)("meta",{name:"twitter:description",content:j.description}),j.image&&Object(a.b)("meta",{name:"twitter:image",content:j.image})))},data:r})};e.a=m,m.propTypes={title:b.a.string,description:b.a.string,image:b.a.string,pathname:b.a.string,article:b.a.bool},m.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},177:function(t,e,n){"use strict";var a=n(185),r=n(9),i=n(181),c=n(0),o=n.n(c),l=n(4),s=n.n(l),b=n(174),u=n.n(b),m=n(162),d=(n(58),n(178),n(38)),p=n.n(d),f=n(7),j=n.n(f),O=n(438),g=n(439),h=n(440),y=n(443),v=n(441),x=n(442),w={name:"90x2s1",styles:"li{margin-bottom:0;}"},N=function(t){function e(e){var n;return(n=t.call(this,e)||this).toggle=n.toggle.bind(p()(n)),n.state={isOpen:!1},n}j()(e,t);var n=e.prototype;return n.toggle=function(){this.setState({isOpen:!this.state.isOpen})},n.render=function(){var t=this.props.siteTitle,e=function(t){var e=t.to,n=t.name,a=t.className,i=t.style;return Object(r.b)(m.a,{to:e,style:Object.assign({color:"white",textDecoration:"none"},i),className:"nav-link "+a},n)};return Object(r.b)(O.a,{expand:"sm",dark:!0,className:"sticky-top",style:{backgroundColor:"rebeccapurple"}},Object(r.b)(g.a,null,Object(r.b)(m.a,{to:"/",className:"navbar-brand",style:{color:"white",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},t),Object(r.b)(h.a,{onClick:this.toggle}),Object(r.b)(y.a,{isOpen:this.state.isOpen,navbar:!0},Object(r.b)(v.a,{className:"ml-auto",navbar:!0,css:w},Object(r.b)(x.a,null,Object(r.b)(e,{to:"/",name:"About me"})),Object(r.b)(x.a,null,Object(r.b)(e,{to:"/blog",name:"Blog"}))))))},e}(c.Component),k=(n(187),n(188),Object(a.a)("div",{target:"eyrqcb50"})({name:"jj9sx4",styles:"padding-top:5px;"})),S=function(t){var e=t.children;return Object(r.b)(m.b,{query:"2269548548",render:function(t){var n=t.site.siteMetadata,a=n.defaultTitle,i=n.titleTemplate,c=n.defaultDescription;return Object(r.b)(o.a.Fragment,null,Object(r.b)(u.a,{title:a,titleTemplate:i,meta:[{name:"description",content:c}]},Object(r.b)("html",{lang:"en"})),Object(r.b)(N,{siteTitle:a}),Object(r.b)(k,null,e))},data:i})};S.propTypes={children:s.a.node.isRequired};e.a=S},179:function(t){t.exports={data:{site:{siteMetadata:{defaultTitle:"Roberto Weidmann Menezes",titleTemplate:"roberto.github.io - %s",defaultDescription:"Roberto Weidmann Menezes blog and personal website - Software Engineer at SLI Systems",siteUrl:"https://robertowm.github.io",defaultImage:"/images/icon.png",twitterUsername:"@robertowm"}}}}},180:function(t,e,n){"use strict";n.r(e);n(58);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(59),l=n(2),s=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=s},181:function(t){t.exports={data:{site:{siteMetadata:{defaultTitle:"Roberto Weidmann Menezes",titleTemplate:"roberto.github.io - %s",defaultDescription:"Roberto Weidmann Menezes blog and personal website - Software Engineer at SLI Systems"}}}}},182:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(9),r=(n(0),n(162)),i=n(167),c=function(t){var e=t.children;return Object(a.b)("div",{className:"p-2",css:i.b},e)},o=function(t){var e=t.to,n=t.label;return Object(a.b)(r.a,{to:e,className:"mx-2"},n)},l=function(t){var e=t.label;return Object(a.b)("span",{className:"mx-2"},e)},s=function(t,e){return Object(a.b)(c,null,e.filter(function(t){return t.to}).map(function(t,e){var n=t.to,r=t.label;return Object(a.b)("span",{key:e},Object(a.b)(o,{to:n,label:r})," /"," ")}),Object(a.b)(l,{label:t}))}},207:function(t,e,n){"use strict";n(79),n(61),n(39),n(178);var a=n(38),r=n.n(a),i=n(7),c=n.n(i),o=n(9),l=n(0),s=n(192),b=n(193),u=n(162),m=n(186),d=n.n(m),p=n(167),f=function(t){function e(e){var n;return(n=t.call(this,e)||this).toggle=n.toggle.bind(r()(n)),n.state={collapse:!1},n}c()(e,t);var n=e.prototype;return n.toggle=function(){this.setState(function(t){return{collapse:!t.collapse}})},n.render=function(){var t=this.props,e=t.name,n=t.company,a=t.url,r=t.summary,i=t.thumbnail,c=t.path;return Object(o.b)("div",{class:"my-4"},Object(o.b)(s.a,{style:{fontSize:"14px"}},Object(o.b)(b.a,{md:"4"},Object(o.b)(d.a,{fluid:i.fluid,className:"rounded img-thumbnail",alt:"Project "+e})),Object(o.b)(b.a,{md:"8"},Object(o.b)("h5",null,e),Object(o.b)("a",{href:a},Object(o.b)("h6",null,n)),Object(o.b)("p",null,r," ",Object(o.b)(u.a,{to:c,style:{color:"black",fontFamily:"monospace"}},"[>>]")))))},e}(l.Component);e.a=function(t){var e=t.entries.map(function(t,e){var n=t.node;return Object(o.b)(f,{key:e,name:n.frontmatter.short_name,company:n.frontmatter.company,url:n.frontmatter.url,summary:n.frontmatter.summary,thumbnail:n.frontmatter.thumbnail.childImageSharp,path:n.fields.path})});return Object(o.b)("div",{className:"p-3 mt-2",css:p.b},Object(o.b)("h4",null,"Projects"),e)}}}]);
//# sourceMappingURL=component---src-pages-index-js-4a1c27848d8b05447aea.js.map