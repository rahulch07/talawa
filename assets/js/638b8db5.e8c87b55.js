"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27407],{51815:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"auto-docs/widgets_post_container/PostContainerState/dispose","title":"dispose","description":"1.  @override","source":"@site/docs/auto-docs/widgets_post_container/PostContainerState/dispose.md","sourceDirName":"auto-docs/widgets_post_container/PostContainerState","slug":"/auto-docs/widgets_post_container/PostContainerState/dispose","permalink":"/docs/auto-docs/widgets_post_container/PostContainerState/dispose","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/widgets_post_container/PostContainerState/dispose.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"controller","permalink":"/docs/auto-docs/widgets_post_container/PostContainerState/controller"},"next":{"title":"inView","permalink":"/docs/auto-docs/widgets_post_container/PostContainerState/inView"}}');var i=s(74848),o=s(28453);const a={},r="dispose method",d={},l=[{value:"Caveats",id:"caveats",level:2},{value:"Application shutdown",id:"application-shutdown",level:3},{value:"Dismissing Flutter UI via platform native methods",id:"dismissing-flutter-ui-via-platform-native-methods",level:2},{value:"Implementation",id:"implementation",level:2},{value:"PostContainerState class",id:"postcontainerstate-class",level:5}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"dispose-method",children:"dispose method"})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["@",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]})}),"\n",(0,i.jsx)(t.p,{children:"void"}),"\n",(0,i.jsx)(t.p,{children:"override"}),"\n",(0,i.jsx)(t.p,{children:"Called when this object is removed from the tree permanently."}),"\n",(0,i.jsxs)(t.p,{children:["The framework calls this method when this\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/State-class.html",children:"State"})," object\nwill never build again. After the framework calls\n",(0,i.jsx)(t.a,{href:"/docs/auto-docs/widgets_post_container/PostContainerState/dispose",children:"dispose"}),",\nthe ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/State-class.html",children:"State"}),"\nobject is considered unmounted and the\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/State/mounted.html",children:"mounted"}),"\nproperty is false. It is an error to call\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/State/setState.html",children:"setState"}),"\nat this point. This stage of the lifecycle is terminal: there is no way\nto remount a\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/State-class.html",children:"State"})," object\nthat has been disposed."]}),"\n",(0,i.jsx)(t.p,{children:"Subclasses should override this method to release any resources retained\nby this object (e.g., stop any active animations)."}),"\n",(0,i.jsxs)(t.p,{children:["If a\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/State-class.html",children:"State"}),"'s\n",(0,i.jsx)(t.a,{href:"/docs/auto-docs/widgets_post_container/PostContainerState/build",children:"build"}),"\nmethod depends on an object that can itself change state, for example a\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier-class.html",children:"ChangeNotifier"}),"\nor\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Stream-class.html",children:"Stream"}),",\nor some other object to which one can subscribe to receive\nnotifications, then be sure to subscribe and unsubscribe properly in\n",(0,i.jsx)(t.a,{href:"/docs/auto-docs/widgets_post_container/PostContainerState/initState",children:"initState"}),",\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/State/didUpdateWidget.html",children:"didUpdateWidget"}),",\nand\n",(0,i.jsx)(t.a,{href:"/docs/auto-docs/widgets_post_container/PostContainerState/dispose",children:"dispose"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In\n",(0,i.jsx)(t.a,{href:"/docs/auto-docs/widgets_post_container/PostContainerState/initState",children:"initState"}),",\nsubscribe to the object."]}),"\n",(0,i.jsxs)(t.li,{children:["In\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/State/didUpdateWidget.html",children:"didUpdateWidget"}),"\nunsubscribe from the old object and subscribe to the new one if the\nupdated widget configuration requires replacing the object."]}),"\n",(0,i.jsxs)(t.li,{children:["In\n",(0,i.jsx)(t.a,{href:"/docs/auto-docs/widgets_post_container/PostContainerState/dispose",children:"dispose"}),",\nunsubscribe from the object."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Implementations of this method should end with a call to the inherited\nmethod, as in ",(0,i.jsx)(t.code,{children:"super."}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"caveats",children:"Caveats"}),"\n",(0,i.jsxs)(t.p,{children:["This method is ",(0,i.jsx)(t.em,{children:"not"})," invoked at times where a developer might otherwise\nexpect it, such as application shutdown or dismissal via platform native\nmethods."]}),"\n",(0,i.jsx)(t.h3,{id:"application-shutdown",children:"Application shutdown"}),"\n",(0,i.jsx)(t.p,{children:"There is no way to predict when application shutdown will happen. For\nexample, a user's battery could catch fire, or the user could drop the\ndevice into a swimming pool, or the operating system could unilaterally\nterminate the application process due to memory pressure."}),"\n",(0,i.jsx)(t.p,{children:"Applications are responsible for ensuring that they are well-behaved\neven in the face of a rapid unscheduled termination."}),"\n",(0,i.jsxs)(t.p,{children:["To artificially cause the entire widget tree to be disposed, consider\ncalling ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/runApp.html",children:"runApp"}),"\nwith a widget such as\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/SizedBox/SizedBox.shrink.html",children:"SizedBox.shrink"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To listen for platform shutdown messages (and other lifecycle changes),\nconsider the\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/AppLifecycleListener-class.html",children:"AppLifecycleListener"}),"\nAPI."]}),"\n",(0,i.jsx)(t.h2,{id:"dismissing-flutter-ui-via-platform-native-methods",children:"Dismissing Flutter UI via platform native methods"}),"\n",(0,i.jsx)(t.p,{children:"An application may have both Flutter and non-Flutter UI in it. If the\napplication calls non-Flutter methods to remove Flutter based UI such as\nplatform native API to manipulate the platform native navigation stack,\nthe framework does not know if the developer intends to eagerly free\nresources or not. The widget tree remains mounted and ready to render as\nsoon as it is displayed again."}),"\n",(0,i.jsxs)(t.p,{children:["See the method used to bootstrap the app (e.g.\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/runApp.md",children:"runApp"})," or\n",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/runWidget.html",children:"runWidget"}),") for\nsuggestions on how to release resources more eagerly."]}),"\n",(0,i.jsx)(t.p,{children:"See also:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/State/deactivate.html",children:"deactivate"}),",\nwhich is called prior to\n",(0,i.jsx)(t.a,{href:"/docs/auto-docs/widgets_post_container/PostContainerState/dispose",children:"dispose"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-language-dart",children:"@override\nvoid  \n"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/auto-docs/",children:"talawa"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../../widgets_post_container/",children:"post_container"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/auto-docs/widgets_post_container/PostContainerState-class",children:"PostContainerState"})}),"\n",(0,i.jsx)(t.li,{children:"dispose method"}),"\n"]}),"\n",(0,i.jsx)(t.h5,{id:"postcontainerstate-class",children:"PostContainerState class"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(96540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);