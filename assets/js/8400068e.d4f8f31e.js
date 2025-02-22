"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15824],{88025:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"auto-docs/services_caching_cache_service/CacheService/executeOrCacheOperation","title":"executeOrCacheOperation","description":"[Future[\\\\]]\\\\>]]","source":"@site/docs/auto-docs/services_caching_cache_service/CacheService/executeOrCacheOperation.md","sourceDirName":"auto-docs/services_caching_cache_service/CacheService","slug":"/auto-docs/services_caching_cache_service/CacheService/executeOrCacheOperation","permalink":"/docs/auto-docs/services_caching_cache_service/CacheService/executeOrCacheOperation","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/services_caching_cache_service/CacheService/executeOrCacheOperation.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"CacheService","permalink":"/docs/auto-docs/services_caching_cache_service/CacheService/"},"next":{"title":"offlineActionQueue","permalink":"/docs/auto-docs/services_caching_cache_service/CacheService/offlineActionQueue"}}');var t=n(74848),i=n(28453);const s={},a="executeOrCacheOperation method",o={},h=[{value:"Implementation",id:"implementation",level:2},{value:"CacheService class",id:"cacheservice-class",level:5}];function l(e){const c={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:(0,t.jsx)(c.header,{children:(0,t.jsx)(c.h1,{id:"executeorcacheoperation-method",children:"executeOrCacheOperation method"})})}),"\n",(0,t.jsxs)(c.p,{children:["[",(0,t.jsx)(c.a,{href:"https://api.flutter.dev/flutter/dart-core/Future-class.html",children:"Future"}),"[<[",(0,t.jsx)(c.a,{href:"https://pub.dev/documentation/graphql/5.2.0-beta.9/graphql/QueryResult-class.html",children:"QueryResult"}),"[<[",(0,t.jsx)(c.a,{href:"https://api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"}),"?]>]]>]]"]}),"\n",(0,t.jsx)(c.p,{children:"Executes a GraphQL operation or caches it for offline execution."}),"\n",(0,t.jsxs)(c.p,{children:["This function checks internet connectivity. If online, it executes the\nprovided ",(0,t.jsx)(c.code,{children:"whenOnline"})," function and returns the result. If offline, it\ncreates a ",(0,t.jsx)(c.code,{children:"CachedUserAction"})," object representing the operation and\nstores it in the ",(0,t.jsx)(c.code,{children:"offlineActionQueue"}),". It then returns null."]}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.strong,{children:"params"}),":"]}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"operation"}),": The GraphQL operation string."]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"variables"}),": Optional variables for the operation (Map<String,\ndynamic>)."]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"operationType"}),": The type of the GraphQL operation (from\n",(0,t.jsx)(c.code,{children:"CachedOperationType"})," enum)."]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"whenOnline"}),": A function that executes the operation online and\nreturns the result (Future<QueryResult<Object?>?>)."]}),"\n"]}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.strong,{children:"returns"}),":"]}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"Future<QueryResult<Object?>>"}),": Returns the result of the operation."]}),"\n"]}),"\n",(0,t.jsx)(c.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-language-dart",children:"Future<QueryResult<Object?>>  async \n"})}),"\n",(0,t.jsxs)(c.ol,{children:["\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"/docs/auto-docs/",children:"talawa"})}),"\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"../../services_caching_cache_service/",children:"cache_service"})}),"\n",(0,t.jsx)(c.li,{children:(0,t.jsx)(c.a,{href:"/docs/auto-docs/services_caching_cache_service/CacheService-class",children:"CacheService"})}),"\n",(0,t.jsx)(c.li,{children:"executeOrCacheOperation method"}),"\n"]}),"\n",(0,t.jsx)(c.h5,{id:"cacheservice-class",children:"CacheService class"})]})}function d(e={}){const{wrapper:c}={...(0,i.R)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,c,n)=>{n.d(c,{R:()=>s,x:()=>a});var r=n(96540);const t={},i=r.createContext(t);function s(e){const c=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function a(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:c},e.children)}}}]);