"use strict";(self.webpackChunksimple_dart_docs=self.webpackChunksimple_dart_docs||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1,js:[{defer:!0,url:"https://dartpad.dev/experimental/inject_embed.dart.js"}]},p="Overview \ud83c\udfaf",c={unversionedId:"overview",id:"overview",title:"Overview \ud83c\udfaf",description:"Dart is a client-optimized language for developing fast apps on any platform. Its goal is to offer the most productive",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/dart_tutorial/docs/overview",draft:!1,editUrl:"https://github.com/chornthorn/dart_tutorial/tree/main/docs/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,js:[{defer:!0,url:"https://dartpad.dev/experimental/inject_embed.dart.js"}]},sidebar:"docs",next:{title:"Introduction \ud83d\udcda",permalink:"/dart_tutorial/docs/category/introduction-"}},u={},s=[{value:"Quick Start \ud83d\ude80",id:"quick-start-",level:2},{value:"Prerequisites \ud83d\udcdd",id:"prerequisites-",level:3},{value:"Installing \ud83e\uddd1\u200d\ud83d\udcbb",id:"installing-",level:3},{value:"Creating a Project \u2728",id:"creating-a-project-",level:3},{value:"Run Application \ud83c\udfc1",id:"run-application-",level:3},{value:"Include Topic \u2728",id:"include-topic-",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview-"},"Overview \ud83c\udfaf"),(0,i.kt)("p",null,"Dart is a client-optimized language for developing fast apps on any platform. Its goal is to offer the most productive\nprogramming language for multi-platform development, paired with a flexible execution runtime platform for app\nframeworks."),(0,i.kt)("p",null,"Languages are defined by their technical envelope\u2014the choices made during development that shape the capabilities and\nstrengths of a language. Dart is designed for a technical envelope that is particularly suited to client development,\nprioritizing both development (sub-second stateful hot reload) and high-quality production experiences across a wide\nvariety of compilation targets (web, mobile, and desktop)."),(0,i.kt)("p",null,"Dart also forms the foundation of Flutter. Dart provides the language and runtimes that power Flutter apps, but Dart\nalso supports many core developer tasks like formatting, analyzing, and testing code."),(0,i.kt)("h1",{id:"why-should-you-learn-dart"},"Why Should You Learn Dart?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Free and open source."),(0,i.kt)("li",{parentName:"ul"},"To be comfortable in a flutter."),(0,i.kt)("li",{parentName:"ul"},"To develop multi-platform apps for android, iOS, windows, mac, Linux, etc."),(0,i.kt)("li",{parentName:"ul"},"Fastest growing programming language."),(0,i.kt)("li",{parentName:"ul"},"Huge community support.")),(0,i.kt)("h2",{id:"quick-start-"},"Quick Start \ud83d\ude80"),(0,i.kt)("h3",{id:"prerequisites-"},"Prerequisites \ud83d\udcdd"),(0,i.kt)("p",null,"In order to use Dart SDK you must have the Computer and Internet."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In this example requires Dart ",(0,i.kt)("inlineCode",{parentName:"p"},'">=2.17.5 <3.0.0"')))),(0,i.kt)("h3",{id:"installing-"},"Installing \ud83e\uddd1\u200d\ud83d\udcbb"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \ud83d\udce6 Install the Dart SDK\nbrew tap dart-lang/dart\nbrew install dart\n")),(0,i.kt)("h3",{id:"creating-a-project-"},"Creating a Project \u2728"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dart create")," command and the console template to create a command-line app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# \ud83d\ude80 Create a new project called "my_project"\ndart create -t console my_project\n')),(0,i.kt)("h3",{id:"run-application-"},"Run Application \ud83c\udfc1"),(0,i.kt)("p",null,"Next, open the newly created project and start application via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \ud83c\udfc1 Start run the application\ncd my_project\ndart bin/main.dart\n")),(0,i.kt)("h1",{id:"run-online"},"Run online"),(0,i.kt)("iframe",{src:"//dartpad.dev/embed-inline.html?id=c0f7c578204d61e08ec0fbc4d63456cd&split=80&theme=dark",frameborder:"0",allowfullscreen:!0,width:"100%",height:"500"}),(0,i.kt)("h2",{id:"include-topic-"},"Include Topic \u2728"),(0,i.kt)("p",null,"\u2705 Hot Reload \u26a1\ufe0f"),(0,i.kt)("p",null,"\u2705 Dart Dev Tools \u2699\ufe0f"),(0,i.kt)("p",null,"\u2705 Important concepts \u2699\ufe0f"),(0,i.kt)("p",null,"\u2705 Keywords \ud83d\ude8f"),(0,i.kt)("p",null,"\u2705 Variable \ud83d\ude8f"),(0,i.kt)("p",null,"\u2705 Built-in Types \ud83d\uddc2"),(0,i.kt)("p",null,"\u2705 Functions \ud83e\ude86"),(0,i.kt)("p",null,"\u2705 Operators \ud83c\udf13"),(0,i.kt)("p",null,"\u2705 Control flow statements \ud83c\udf54"),(0,i.kt)("p",null,"\u2705 Exceptions \ud83d\udc89"),(0,i.kt)("p",null,"\u2705 Classes \ud83d\udc77\u200d\u2642\ufe0f"),(0,i.kt)("p",null,"\u2705 Generics \ud83d\udc33"),(0,i.kt)("p",null,"\u2705 Asynchrony (Future & await) \ud83d\udcc1"),(0,i.kt)("p",null,"\u2705 Package / Library \ud83d\udcc1"),(0,i.kt)("p",null,"\ud83d\udea7 More about Dart SDK \ud83d\udcd4"))}m.isMDXComponent=!0}}]);