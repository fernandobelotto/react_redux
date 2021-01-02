(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{147:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),b=n,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(147)),c={id:"quick-start",title:"Quick Start",hide_title:!0,sidebar_label:"Quick Start"},i={unversionedId:"introduction/quick-start",id:"version-5.x/introduction/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Quick Start",source:"@site/versioned_docs\\version-5.x\\introduction\\quick-start.md",slug:"/introduction/quick-start",permalink:"/react-redux/5.x/introduction/quick-start",version:"5.x",sidebar_label:"Quick Start",sidebar:"version-5.x/docs",next:{title:"Basic Tutorial",permalink:"/react-redux/5.x/introduction/basic-tutorial"}},u=[{value:"Installation",id:"installation",children:[]},{value:"<code>Provider</code> and <code>connect</code>",id:"provider-and-connect",children:[]}],p={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"quick-start"},"Quick Start"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux"}),"React-Redux")," is the official ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React")," binding for ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/"}),"Redux"),". It lets your React components read data from a Redux store, and dispatch actions to the store to update data."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"To use React-Redux with your React app:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save react-redux\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-redux\n")),Object(a.b)("h2",{id:"provider-and-connect"},Object(a.b)("inlineCode",{parentName:"h2"},"Provider")," and ",Object(a.b)("inlineCode",{parentName:"h2"},"connect")),Object(a.b)("p",null,"React-Redux provides ",Object(a.b)("inlineCode",{parentName:"p"},"<Provider />"),", which makes the Redux store available to the rest of your app:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport ReactDOM from "react-dom";\n\nimport { Provider } from "react-redux";\nimport store from "./store";\n\nimport App from "./App";\n\nconst rootElement = document.getElementById("root");\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  rootElement\n);\n')),Object(a.b)("p",null,"React-Redux provides a ",Object(a.b)("inlineCode",{parentName:"p"},"connect")," function for you to connect your component to the store."),Object(a.b)("p",null,"Normally, you\u2019ll call ",Object(a.b)("inlineCode",{parentName:"p"},"connect")," in this way:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { connect } from "react-redux";\nimport { increment, decrement, reset } from "./actionCreators";\n\n// const Counter = ...\n\nconst mapStateToProps = (state /*, ownProps*/) => {\n  return {\n    counter: state.counter\n  };\n};\n\nconst mapDispatchToProps = { increment, decrement, reset };\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(Counter);\n')))}l.isMDXComponent=!0}}]);