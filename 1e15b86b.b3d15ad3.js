(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{147:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,m=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return r?a.a.createElement(m,i(i({ref:t},s),{},{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(147)),c={id:"quick-start",title:"Quick Start",hide_title:!0,sidebar_label:"Quick Start"},i={unversionedId:"introduction/quick-start",id:"version-7.1/introduction/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Quick Start",source:"@site/versioned_docs\\version-7.1\\introduction\\quick-start.md",slug:"/introduction/quick-start",permalink:"/react-redux/7.1/introduction/quick-start",version:"7.1",sidebar_label:"Quick Start",sidebar:"version-7.1/docs",next:{title:"Basic Tutorial",permalink:"/react-redux/7.1/introduction/basic-tutorial"}},u=[{value:"Installation",id:"installation",children:[]},{value:"<code>Provider</code>",id:"provider",children:[]},{value:"<code>connect()</code>",id:"connect",children:[]},{value:"Help and Discussion",id:"help-and-discussion",children:[]}],s={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"quick-start"},"Quick Start"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux"}),"React Redux")," is the official ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React")," binding for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/"}),"Redux"),". It lets your React components read data from a Redux store, and dispatch actions to the store to update data."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"React Redux 7.1 requires ",Object(o.b)("strong",{parentName:"p"},"React 16.8.3 or later.")),Object(o.b)("p",null,"To use React Redux with your React app:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-redux\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-redux\n")),Object(o.b)("p",null,"You'll also need to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-docs.netlify.com/introduction/installation"}),"install Redux")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-docs.netlify.com/recipes/configuring-your-store"}),"set up a Redux store")," in your app."),Object(o.b)("h2",{id:"provider"},Object(o.b)("inlineCode",{parentName:"h2"},"Provider")),Object(o.b)("p",null,"React Redux provides ",Object(o.b)("inlineCode",{parentName:"p"},"<Provider />"),", which makes the Redux store available to the rest of your app:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport ReactDOM from 'react-dom'\n\nimport { Provider } from 'react-redux'\nimport store from './store'\n\nimport App from './App'\n\nconst rootElement = document.getElementById('root')\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  rootElement\n)\n")),Object(o.b)("h2",{id:"connect"},Object(o.b)("inlineCode",{parentName:"h2"},"connect()")),Object(o.b)("p",null,"React Redux provides a ",Object(o.b)("inlineCode",{parentName:"p"},"connect")," function for you to connect your component to the store."),Object(o.b)("p",null,"Normally, you\u2019ll call ",Object(o.b)("inlineCode",{parentName:"p"},"connect")," in this way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { connect } from 'react-redux'\nimport { increment, decrement, reset } from './actionCreators'\n\n// const Counter = ...\n\nconst mapStateToProps = (state /*, ownProps*/) => {\n  return {\n    counter: state.counter,\n  }\n}\n\nconst mapDispatchToProps = { increment, decrement, reset }\n\nexport default connect(mapStateToProps, mapDispatchToProps)(Counter)\n")),Object(o.b)("h2",{id:"help-and-discussion"},"Help and Discussion"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://discord.gg/0ZcbPKXt5bZ6au5t"}),"#redux channel"))," of the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"http://www.reactiflux.com"}),"Reactiflux Discord community"))," is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!"),Object(o.b)("p",null,"You can also ask questions on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com"}),"Stack Overflow")," using the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://stackoverflow.com/questions/tagged/redux"}),"#redux tag")),"."))}p.isMDXComponent=!0}}]);