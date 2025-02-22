"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57456],{87275:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"auto-docs/services_third_party_service_connectivity_service/ConnectivityService-class","title":"ConnectivityService-class","description":"This class provides services related to network connectivity monitoring","source":"@site/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService-class.md","sourceDirName":"auto-docs/services_third_party_service_connectivity_service","slug":"/auto-docs/services_third_party_service_connectivity_service/ConnectivityService-class","permalink":"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService-class","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService-class.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"ConnectivityService-class-sidebar","permalink":"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService-class-sidebar"},"next":{"title":"services_third_party_service_connectivity_service-library-sidebar","permalink":"/docs/auto-docs/services_third_party_service_connectivity_service/services_third_party_service_connectivity_service-library-sidebar"}}');var r=i(74848),c=i(28453);const s={},o="ConnectivityService class",a={},l=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Operators",id:"operators",level:2},{value:"connectivity_service library",id:"connectivity_service-library",level:5}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"connectivityservice-class",children:"ConnectivityService class"})})}),"\n",(0,r.jsx)(t.p,{children:"This class provides services related to network connectivity monitoring\nand handling."}),"\n",(0,r.jsx)(t.p,{children:"It includes methods for:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Initializing the network service -\n",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/initConnectivity",children:"initConnectivity"})]}),"\n",(0,r.jsxs)(t.li,{children:["Monitoring connectivity changes -\n",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/enableSubscription",children:"enableSubscription"})]}),"\n",(0,r.jsxs)(t.li,{children:["Handling online and offline states - ",(0,r.jsx)(t.code,{children:"handleOnline"}),", ",(0,r.jsx)(t.code,{children:"handleOffline"})]}),"\n",(0,r.jsxs)(t.li,{children:["Checking reachability of a given URI -\n",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/isReachable",children:"isReachable"})]}),"\n",(0,r.jsxs)(t.li,{children:["Handling the device's connectivity status - ",(0,r.jsx)(t.code,{children:"handleConnection"})]}),"\n",(0,r.jsxs)(t.li,{children:["Checking if the device has any type of network connection -\n",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/hasConnection",children:"hasConnection"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/",children:"ConnectivityService"}),"][([[",(0,r.jsx)(t.a,{href:"https://pub.dev/documentation/connectivity_plus/6.1.2/connectivity_plus/Connectivity-class.md",children:"Connectivity"}),"] connectivityInstance])]"]}),"\n",(0,r.jsx)(t.p,{children:":"}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/connectionStatusController",children:"connectionStatusController"}),"] [\u2194 ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/StreamController-class.html",children:"StreamController"}),"[<[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"[<[",(0,r.jsx)(t.a,{href:"https://pub.dev/documentation/connectivity_plus_platform_interface/2.0.1/connectivity_plus_platform_interface/ConnectivityResult.html",children:"ConnectivityResult"}),"]>]]>]]\n:   Stream controller for network status changes.\n::: features\ngetter/setter pair\n:::"]}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/connectionStream",children:"connectionStream"}),"] [\u2192 ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Stream-class.html",children:"Stream"}),"[<[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"[<[",(0,r.jsx)(t.a,{href:"https://pub.dev/documentation/connectivity_plus_platform_interface/2.0.1/connectivity_plus_platform_interface/ConnectivityResult.html",children:"ConnectivityResult"}),"]>]]>]]\n:   Getter for the stream of connection status changes.\n::: features\nno setter\n:::"]}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/connectivityInstance",children:"connectivityInstance"}),"] [\u2194 ",(0,r.jsx)(t.a,{href:"https://pub.dev/documentation/connectivity_plus/6.1.2/connectivity_plus/Connectivity-class.html",children:"Connectivity"}),"]\n:   dependency injection connectivity.\n::: features\nlatefinal\n:::"]}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/hashCode.html",children:"hashCode"}),"] [\u2192 ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/int-class.html",children:"int"}),"]\n:   The hash code for this object.\n::: features\nno setterinherited\n:::"]}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html",children:"runtimeType"}),"] [\u2192 ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Type-class.html",children:"Type"}),"]\n:   A representation of the runtime type of the object.\n::: features\nno setterinherited\n:::"]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/enableSubscription",children:"enableSubscription"}),"][ [\u2192 ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Future-class.html",children:"Future"}),"<[void>]] ]\n:   This function enables the subscription to connectivity changes."]}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/getConnectionType",children:"getConnectionType"}),"][ [\u2192 ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Future-class.html",children:"Future"}),"[<[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"[<[",(0,r.jsx)(t.a,{href:"https://pub.dev/documentation/connectivity_plus_platform_interface/2.0.1/connectivity_plus_platform_interface/ConnectivityResult.html",children:"ConnectivityResult"}),"]>]]>]] ]\n:   Checks the current internet connectivity status of the device."]}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/hasConnection",children:"hasConnection"}),"][ [\u2192 ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Future-class.html",children:"Future"}),"[<[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"]>]] ]\n:   This function checks if the device currently has any type of network\nconnection."]}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/initConnectivity",children:"initConnectivity"}),"][ [\u2192 ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Future-class.html",children:"Future"}),"<[void>]] ]\n:   This function initializes connectivity monitoring."]}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"/docs/auto-docs/services_third_party_service_connectivity_service/ConnectivityService/isReachable",children:"isReachable"}),"][ [\u2192 ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Future-class.html",children:"Future"}),"[<[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"]>]] ]\n:   This function checks if a given URI is reachable within a specified\ntimeout period."]}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html",children:"noSuchMethod"}),"][([[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Invocation-class.md",children:"Invocation"}),"] invocation]) \u2192 dynamic ]\n:   Invoked when a nonexistent method or property is accessed.\n::: features\ninherited\n:::"]}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/toString.html",children:"toString"}),"][ [\u2192 ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"] ]\n:   A string representation of this object.\n::: features\ninherited\n:::"]}),"\n",(0,r.jsx)(t.h2,{id:"operators",children:"Operators"}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html",children:"operator =="}),"][([[",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object-class.md",children:"Object"}),"] other]) [\u2192 ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"] ]\n:   The equality operator.\n::: features\ninherited\n:::"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/auto-docs/",children:"talawa"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"../services_third_party_service_connectivity_service/",children:"connectivity_service"})}),"\n",(0,r.jsx)(t.li,{children:"ConnectivityService class"}),"\n"]}),"\n",(0,r.jsx)(t.h5,{id:"connectivity_service-library",children:"connectivity_service library"})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(96540);const r={},c=n.createContext(r);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);