"use strict";(self.webpackChunksimple_dart_docs=self.webpackChunksimple_dart_docs||[]).push([[946],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=l,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3467:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={sidebar_position:2,title:"Handle Null In Dart",description:"Learn how to handle null in Dart"},s=void 0,d={unversionedId:"null-safety/handle-null",id:"null-safety/handle-null",title:"Handle Null In Dart",description:"Learn how to handle null in Dart",source:"@site/docs/null-safety/handle-null.md",sourceDirName:"null-safety",slug:"/null-safety/handle-null",permalink:"/dart_tutorial/docs/null-safety/handle-null",draft:!1,editUrl:"https://github.com/chornthorn/dart_tutorial/tree/main/docs/docs/null-safety/handle-null.md",tags:[],version:"current",lastUpdatedBy:"Thorn Chorn",lastUpdatedAt:1657781541,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Handle Null In Dart",description:"Learn how to handle null in Dart"},sidebar:"docs",previous:{title:"Null Safety",permalink:"/dart_tutorial/docs/null-safety/"},next:{title:"Question for Practice",permalink:"/dart_tutorial/docs/null-safety/question-for-practice"}},p={},u=[{value:"How To Allow Null Values",id:"how-to-allow-null-values",level:2},{value:"Example",id:"example",level:3},{value:"Assertion Operator In Dart",id:"assertion-operator-in-dart",level:2},{value:"Example",id:"example-1",level:3},{value:"Null Aware Operators In Dart",id:"null-aware-operators-in-dart",level:2},{value:"If null operator ??",id:"if-null-operator-",level:3},{value:"If Null Operator ??",id:"if-null-operator--1",level:2},{value:"Example",id:"example-2",level:3},{value:"Explained",id:"explained",level:3},{value:"The above code is equal to:",id:"the-above-code-is-equal-to",level:3},{value:"Null-Aware Assignment Operator <code>??=</code>",id:"null-aware-assignment-operator-",level:2},{value:"Example",id:"example-3",level:3},{value:"Explained",id:"explained-1",level:3},{value:"Null-Aware Access Operator <code>?.</code>",id:"null-aware-access-operator-",level:2},{value:"Example",id:"example-4",level:3},{value:"Explained",id:"explained-2",level:3},{value:"Null Assertion Operator <code>!</code>",id:"null-assertion-operator-",level:2},{value:"Example",id:"example-5",level:3},{value:"Explained",id:"explained-3",level:3},{value:"Late Keyword In Dart",id:"late-keyword-in-dart",level:2},{value:"What Happen When You Assign Late Keywords",id:"what-happen-when-you-assign-late-keywords",level:3},{value:"Late Example In Dart",id:"late-example-in-dart",level:3}],m={toc:u};function c(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before null Safety, it is hard to handle null values and cause errors in your program. You can handle null values in the\nfollowing ways."),(0,r.kt)("h2",{id:"how-to-allow-null-values"},"How To Allow Null Values"),(0,r.kt)("p",null,"If you want to allow null, you can add the question mark ? to the end of the variable\u2019s type."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"void main() {\n  int? productId = null;\n}\n")),(0,r.kt)("h2",{id:"assertion-operator-in-dart"},"Assertion Operator In Dart"),(0,r.kt)("p",null,"If you want to assign a nullable value to a ",(0,r.kt)("strong",{parentName:"p"},"non-nullable")," variable, Dart will not allow you by default. In this\nsituation\nyou can use an exclamation symbol ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," to force the compiler to tell the value is non-null."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"void main() {\n  String ? name;\n  String firstName = name; // give error\n  String lastName = name!; // it works\n}\n")),(0,r.kt)("h2",{id:"null-aware-operators-in-dart"},"Null Aware Operators In Dart"),(0,r.kt)("p",null,"Dart gives a whole set of ",(0,r.kt)("strong",{parentName:"p"},"null-aware")," operators that can help you handle potentially ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," values."),(0,r.kt)("h3",{id:"if-null-operator-"},"If null operator ??"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Null")," aware assignment operator ",(0,r.kt)("inlineCode",{parentName:"li"},"??=")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Null")," aware access operator ",(0,r.kt)("inlineCode",{parentName:"li"},"?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Null")," assertion operator ",(0,r.kt)("inlineCode",{parentName:"li"},"!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Null")," aware method invocation operator ",(0,r.kt)("inlineCode",{parentName:"li"},"?"))),(0,r.kt)("h2",{id:"if-null-operator--1"},"If Null Operator ??"),(0,r.kt)("p",null,"One of the best ways to handle ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," values is to use a double question mark ",(0,r.kt)("inlineCode",{parentName:"p"},"??"),", which is called the if ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\noperator.\nThis operator says if the value on the left is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," go with the value on the right, if a value is not ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," do\nnothing."),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("p",null,"A simple example of if ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," operator in dart."),(0,r.kt)("iframe",{src:"//dartpad.dev/embed-inline.html?id=d05c89dc6d728c39d6d997508f4a1bb0&split=70&theme=dark",frameborder:"0",allowfullscreen:!0,width:"100%",height:"300"}),(0,r.kt)("h3",{id:"explained"},"Explained"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here address is ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"??")," will set status ",(0,r.kt)("inlineCode",{parentName:"li"},"=")," No Address"),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"??")," you can ensure that status can never be ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,r.kt)("h3",{id:"the-above-code-is-equal-to"},"The above code is equal to:"),(0,r.kt)("iframe",{height:"400",src:"//dartpad.dev/embed-inline.html?id=2d7b6cec7fa9c1b211ae1a876b4adaa8&split=70&theme=dark",frameborder:"0",allowfullscreen:!0,width:"100%"}),(0,r.kt)("h2",{id:"null-aware-assignment-operator-"},"Null-Aware Assignment Operator ",(0,r.kt)("inlineCode",{parentName:"h2"},"??=")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Null-aware")," assignment operator in dart says if the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," then it assigns value after ",(0,r.kt)("inlineCode",{parentName:"p"},"??="),", else don\u2019t\nassign any other value."),(0,r.kt)("h3",{id:"example-3"},"Example"),(0,r.kt)("p",null,"A simple example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," aware assignment operator in dart."),(0,r.kt)("iframe",{height:"300",src:"//dartpad.dev/embed-inline.html?id=b611b28693979efb032c366815de57e8&split=70&theme=dark",frameborder:"0",allowfullscreen:!0,width:"100%"}),(0,r.kt)("h3",{id:"explained-1"},"Explained"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here address is ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"??")," will set address ",(0,r.kt)("inlineCode",{parentName:"li"},"=")," USA"),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"??=")," you can ensure that address can never be ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,r.kt)("h2",{id:"null-aware-access-operator-"},"Null-Aware Access Operator ",(0,r.kt)("inlineCode",{parentName:"h2"},"?.")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"null-aware")," access operator in the dart returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the left-hand side is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," else it will return the\nproperty of the right hand."),(0,r.kt)("h3",{id:"example-4"},"Example"),(0,r.kt)("p",null,"A simple example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," aware assignment operator in dart."),(0,r.kt)("iframe",{height:"300",src:"//dartpad.dev/embed-inline.html?id=ab7343139ad6530c693631d8fd7ff2d2&split=70&theme=dark",frameborder:"0",allowfullscreen:!0,width:"100%"}),(0,r.kt)("h3",{id:"explained-2"},"Explained"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here age is ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),", so ",(0,r.kt)("inlineCode",{parentName:"li"},"?.")," operator prevents the code from crashing."),(0,r.kt)("li",{parentName:"ul"},"It returns ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," inside the print statement.")),(0,r.kt)("h2",{id:"null-assertion-operator-"},"Null Assertion Operator ",(0,r.kt)("inlineCode",{parentName:"h2"},"!")),(0,r.kt)("p",null,"Sometimes dart doesn\u2019t know whether a nullable value is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or not, but if you are sure that it is not ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", you\ncan\nuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," assertion operator!."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You already learned that ! is not an operator before. The difference between not-operator ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," assertion\noperator\nis you can use ",(0,r.kt)("strong",{parentName:"p"},"not-operator")," as a prefix. ",(0,r.kt)("inlineCode",{parentName:"p"},"a!==2")," and you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," assertion operator as a postfix."))),(0,r.kt)("h3",{id:"example-5"},"Example"),(0,r.kt)("p",null,"Here is the example of the ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," assertion operator in dart. Removing ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," from code doesn\u2019t work."),(0,r.kt)("iframe",{height:"450",src:"//dartpad.dev/embed-inline.html?id=d2bcc33c89029ef329e28822d2451b7e&split=70&theme=dark",frameborder:"0",allowfullscreen:!0,width:"100%"}),(0,r.kt)("h3",{id:"explained-3"},"Explained"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here you are 100% sure that it returns true, so you are using it."),(0,r.kt)("li",{parentName:"ul"},"If you can change the word to something other than water or sand, it won\u2019t work.")),(0,r.kt)("p",null,"This as ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," is equivalent to an assertion operator ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," but the difference is ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," is shorter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'\nbool canIDrinkWater = canDrink("water") as bool;\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Wrong use of assertion operator ! may crash your program."))),(0,r.kt)("p",null,"Here is an alternative to the assertion operator, and it doesn\u2019t crash your program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'\nbool canIDrinkWater = canDrink("water") ?? true;\n')),(0,r.kt)("h2",{id:"late-keyword-in-dart"},"Late Keyword In Dart"),(0,r.kt)("p",null,"In some situations, variable, fields in class should be ",(0,r.kt)("strong",{parentName:"p"},"non-nullable"),", but you can\u2019t assign a value immediately you\ncan use a late keyword."),(0,r.kt)("h3",{id:"what-happen-when-you-assign-late-keywords"},"What Happen When You Assign Late Keywords"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can\u2019t assign value now."),(0,r.kt)("li",{parentName:"ul"},"You should assign a value before the variable is used.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'void main() {\n  late String name;\n  name = "John";\n  print(name);\n}\n')),(0,r.kt)("p",null,"If you don\u2019t assign value to name it will give an error."),(0,r.kt)("h3",{id:"late-example-in-dart"},"Late Example In Dart"),(0,r.kt)("iframe",{height:"400",src:"//dartpad.dev/embed-inline.html?id=875efbd23fd36ebcde1766ff106dddbd&split=70&theme=dark",frameborder:"0",allowfullscreen:!0,width:"100%"}),(0,r.kt)("p",null,"Here this code will give you an error to solve this issue simply, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"late")," keyword to the start of the line\ninitializing ",(0,r.kt)("inlineCode",{parentName:"p"},"secretNumber"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"\nlate int secretNumber = calculateSecretNumber();\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"late")," means dart doesn\u2019t initialize value right away, it only initializes when you access it for the first time.\nThis is also called lazy loading."))))}c.isMDXComponent=!0}}]);