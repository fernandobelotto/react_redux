(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(m,s(s({ref:t},p),{},{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(6),r=(n(0),n(147)),i={id:"connect-mapstate",title:"Connect: Extracting Data with mapStateToProps",hide_title:!0,sidebar_label:"Connect: Extracting Data with mapStateToProps"},s={unversionedId:"using-react-redux/connect-mapstate",id:"version-5.x/using-react-redux/connect-mapstate",isDocsHomePage:!1,title:"Connect: Extracting Data with mapStateToProps",description:"Connect: Extracting Data with mapStateToProps",source:"@site/versioned_docs\\version-5.x\\using-react-redux\\connect-extracting-data-with-mapStateToProps.md",slug:"/using-react-redux/connect-mapstate",permalink:"/react-redux/5.x/using-react-redux/connect-mapstate",version:"5.x",sidebar_label:"Connect: Extracting Data with mapStateToProps",sidebar:"version-5.x/docs",previous:{title:"Why Use React-Redux?",permalink:"/react-redux/5.x/introduction/why-use-react-redux"},next:{title:"Connect: Dispatching Actions with mapDispatchToProps",permalink:"/react-redux/5.x/using-react-redux/connect-mapdispatch"}},c=[{value:"Defining <code>mapStateToProps</code>",id:"defining-mapstatetoprops",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]}]},{value:"Usage Guidelines",id:"usage-guidelines",children:[{value:"Let <code>mapStateToProps</code> Reshape the Data from the Store",id:"let-mapstatetoprops-reshape-the-data-from-the-store",children:[]},{value:"Use Selector Functions to Extract and Transform Data",id:"use-selector-functions-to-extract-and-transform-data",children:[]},{value:"<code>mapStateToProps</code> Functions Should Be Fast",id:"mapstatetoprops-functions-should-be-fast",children:[]},{value:"<code>mapStateToProps</code> Functions Should Be Pure and Synchronous",id:"mapstatetoprops-functions-should-be-pure-and-synchronous",children:[]}]},{value:"<code>mapStateToProps</code> and Performance",id:"mapstatetoprops-and-performance",children:[{value:"Return Values Determine If Your Component Re-Renders",id:"return-values-determine-if-your-component-re-renders",children:[]},{value:"Only Return New Object References If Needed",id:"only-return-new-object-references-if-needed",children:[]},{value:"Only Perform Expensive Operations When Data Changes",id:"only-perform-expensive-operations-when-data-changes",children:[]}]},{value:"Behavior and Gotchas",id:"behavior-and-gotchas",children:[{value:"<code>mapStateToProps</code> Will Not Run if the Store State is the Same",id:"mapstatetoprops-will-not-run-if-the-store-state-is-the-same",children:[]},{value:"The Number of Declared Arguments Affects Behavior",id:"the-number-of-declared-arguments-affects-behavior",children:[]}]},{value:"Links and References",id:"links-and-references",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"connect-extracting-data-with-mapstatetoprops"},"Connect: Extracting Data with ",Object(r.b)("inlineCode",{parentName:"h1"},"mapStateToProps")),Object(r.b)("p",null,"As the first argument passed in to ",Object(r.b)("inlineCode",{parentName:"p"},"connect"),", ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," is used for selecting the part of the data from the store that the connected component needs. It\u2019s frequently referred to as just ",Object(r.b)("inlineCode",{parentName:"p"},"mapState")," for short."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It is called every time the store state changes."),Object(r.b)("li",{parentName:"ul"},"It receives the entire store state, and should return an object of data this component needs.")),Object(r.b)("h2",{id:"defining-mapstatetoprops"},"Defining ",Object(r.b)("inlineCode",{parentName:"h2"},"mapStateToProps")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," should be defined as a function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function mapStateToProps(state, ownProps?)\n")),Object(r.b)("p",null,"It should take a first argument called ",Object(r.b)("inlineCode",{parentName:"p"},"state"),", optionally a second argument called ",Object(r.b)("inlineCode",{parentName:"p"},"ownProps"),", and return a plain object containing the data that the connected component needs."),Object(r.b)("p",null,"This function should be passed as the first argument to ",Object(r.b)("inlineCode",{parentName:"p"},"connect"),", and will be called every time when the Redux store state changes. If you do not wish to subscribe to the store, pass ",Object(r.b)("inlineCode",{parentName:"p"},"null")," or ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")," to ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," in place of ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"It does not matter if a ",Object(r.b)("inlineCode",{parentName:"strong"},"mapStateToProps")," function is written using the ",Object(r.b)("inlineCode",{parentName:"strong"},"function")," keyword (",Object(r.b)("inlineCode",{parentName:"strong"},"function mapState(state) { }")," ) or as an arrow function (",Object(r.b)("inlineCode",{parentName:"strong"},"const mapState = (state) => { }")," )")," - it will work the same either way."),Object(r.b)("h3",{id:"arguments"},"Arguments"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"state"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"ownProps")," (optional)"))),Object(r.b)("h4",{id:"state"},Object(r.b)("inlineCode",{parentName:"h4"},"state")),Object(r.b)("p",null,"The first argument to a ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function is the entire Redux store state (the same value returned by a call to ",Object(r.b)("inlineCode",{parentName:"p"},"store.getState()"),").  Because of this, the first argument is traditionally just called ",Object(r.b)("inlineCode",{parentName:"p"},"state"),".  (While you can give the argument any name you want, calling it ",Object(r.b)("inlineCode",{parentName:"p"},"store"),' would be incorrect - it\'s the "state value", not the "store instance".)'),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function should always be written with at least ",Object(r.b)("inlineCode",{parentName:"p"},"state")," passed in. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// TodoList.js \n\nfunction mapStateToProps(state) {\n  const { todos } = state;\n  return { todoList: todos.allIds };\n};\n    \nexport default connect(mapStateToProps)(TodoList);\n")),Object(r.b)("h4",{id:"ownprops-optional"},Object(r.b)("inlineCode",{parentName:"h4"},"ownProps")," (optional)"),Object(r.b)("p",null,"You may define the function with a second argument, ",Object(r.b)("inlineCode",{parentName:"p"},"ownProps"),", if your component needs the data from its own props to retrieve data from the store.  This argument will contain all of the props given to the wrapper component that was generated by ",Object(r.b)("inlineCode",{parentName:"p"},"connect"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Todo.js\n\nfunction mapStateToProps(state, ownProps) {\n  const { visibilityFilter } = state;\n  const { id } = ownProps;\n  const todo = getTodoById(state, id);\n\n  // component receives additionally:\n  return { todo, visibilityFilter };\n};\n\n// Later, in your application, a parent component renders:\n<ConnectedTodo id={123} />\n// and your component receives props.id, props.todo, and props.visibilityFilter\n")),Object(r.b)("p",null,"You do not need to include values from ",Object(r.b)("inlineCode",{parentName:"p"},"ownProps")," in the object returned from ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps"),".  ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," will automatically merge those different prop sources into a final set of props."),Object(r.b)("h3",{id:"return"},"Return"),Object(r.b)("p",null,"Your  ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function should return a plain object that contains the data the component needs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Each field in the object will become a prop for your actual component"),Object(r.b)("li",{parentName:"ul"},"The values in the fields will be used to determine if your component needs to re-render")),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function mapStateToProps(state) {\n  return {\n    a : 42,\n    todos : state.todos,\n    filter : state.visibilityFilter\n  }\n}\n\n// component will receive: props.a, props.todos, and props.filter\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: In advanced scenarios where you need more control over the rendering performance, ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," can also return a function. In this case, that function will be used as the final ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," for a particular component instance. This allows you to do per-instance memoization. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./"}),"Advanced Usage")," section of the docs for more details, as well as  ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux/pull/279"}),"PR #279")," and the tests it adds. Most apps never need this.")),Object(r.b)("h2",{id:"usage-guidelines"},"Usage Guidelines"),Object(r.b)("h3",{id:"let-mapstatetoprops-reshape-the-data-from-the-store"},"Let ",Object(r.b)("inlineCode",{parentName:"h3"},"mapStateToProps")," Reshape the Data from the Store"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," functions can, and should, do a lot more than just ",Object(r.b)("inlineCode",{parentName:"p"},"return state.someSlice"),".  ",Object(r.b)("strong",{parentName:"p"},'They have the responsibility of "re-shaping" store data as needed for that component.'),"  This may include returning a value as a specific prop name, combining pieces of data from different parts of the state tree, and transforming the store data in different ways."),Object(r.b)("h3",{id:"use-selector-functions-to-extract-and-transform-data"},"Use Selector Functions to Extract and Transform Data"),Object(r.b)("p",null,'We highly encourage the use of "selector" functions to help encapsulate the process of extracting values from specific locations in the state tree.  Memoized selector functions also play a key role in improving application performance (see the following sections in this page and the ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./"}),"Advanced Usage: Performance")," page for more details on why and how to use selectors.)"),Object(r.b)("h3",{id:"mapstatetoprops-functions-should-be-fast"},Object(r.b)("inlineCode",{parentName:"h3"},"mapStateToProps")," Functions Should Be Fast"),Object(r.b)("p",null,"Whenever the store changes, all of the ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," functions of all of the connected components will run. Because of this, your ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," functions should run as fast as possible.  This also means that a slow ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function can be a potential bottleneck for your application."),Object(r.b)("p",null,'As part of the "re-shaping data" idea, ',Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," functions frequently need to transform data in various ways (such as filtering an array, mapping an array of IDs to their corresponding objects, or extracting plain JS values from Immutable.js objects).  These transformations can often be expensive, both in terms of cost to execute the transformation, and whether the component re-renders as a result.  If performance is a concern, ensure that these transformations are only run if the input values have changed."),Object(r.b)("h3",{id:"mapstatetoprops-functions-should-be-pure-and-synchronous"},Object(r.b)("inlineCode",{parentName:"h3"},"mapStateToProps")," Functions Should Be Pure and Synchronous"),Object(r.b)("p",null,"Much like a Redux reducer, a ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function should always be 100% pure and synchronous.  It should simply take ",Object(r.b)("inlineCode",{parentName:"p"},"state")," (and ",Object(r.b)("inlineCode",{parentName:"p"},"ownProps"),") as arguments, and return the data the component needs as props.  It should ",Object(r.b)("em",{parentName:"p"},"not")," be used to trigger asynchronous behavior like AJAX calls for data fetching, and the functions should not be declared as ",Object(r.b)("inlineCode",{parentName:"p"},"async"),"."),Object(r.b)("h2",{id:"mapstatetoprops-and-performance"},Object(r.b)("inlineCode",{parentName:"h2"},"mapStateToProps")," and Performance"),Object(r.b)("h3",{id:"return-values-determine-if-your-component-re-renders"},"Return Values Determine If Your Component Re-Renders"),Object(r.b)("p",null,"React-Redux internally implements the ",Object(r.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," method such that the wrapper component re-renders precisely when the data your component needs has changed. By default, React-Redux decides whether the contents of the object returned from ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," are different using ",Object(r.b)("inlineCode",{parentName:"p"},"==="),' comparison (a "shallow equality" check) on each fields of the returned object. If any of the fields have changed, then your component will be re-rendered so it can receive the updated values as props.  Note that returning a mutated object of the same reference is a common mistake that can result in your component not re-rendering when expected.'),Object(r.b)("p",null,"To summarize the behavior of the component wrapped by ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," with ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," to extract data from the store:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"(state) => stateProps")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"(state, ownProps) => stateProps")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mapStateToProps")," runs when:"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"store ",Object(r.b)("inlineCode",{parentName:"td"},"state")," changes"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"store ",Object(r.b)("inlineCode",{parentName:"td"},"state")," changes ",Object(r.b)("br",null)," or ",Object(r.b)("br",null),"any field of ",Object(r.b)("inlineCode",{parentName:"td"},"ownProps")," is different")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"component re-renders when:"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any field of ",Object(r.b)("inlineCode",{parentName:"td"},"stateProps")," is different"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any field of ",Object(r.b)("inlineCode",{parentName:"td"},"stateProps")," is different ",Object(r.b)("br",null)," or ",Object(r.b)("br",null)," any field of ",Object(r.b)("inlineCode",{parentName:"td"},"ownProps")," is different")))),Object(r.b)("h3",{id:"only-return-new-object-references-if-needed"},"Only Return New Object References If Needed"),Object(r.b)("p",null,"React-Redux does shallow comparisons to see if the ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," results have changed.  It\u2019s easy to accidentally return new object or array references every time, which would cause your component to re-render even if the data is actually the same."),Object(r.b)("p",null,"Many common operations result in new object or array references being created:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Creating new arrays with ",Object(r.b)("inlineCode",{parentName:"li"},"someArray.map()")," or ",Object(r.b)("inlineCode",{parentName:"li"},"someArray.filter()")),Object(r.b)("li",{parentName:"ul"},"Merging arrays with ",Object(r.b)("inlineCode",{parentName:"li"},"array.concat")),Object(r.b)("li",{parentName:"ul"},"Selecting portion of an array with ",Object(r.b)("inlineCode",{parentName:"li"},"array.slice")),Object(r.b)("li",{parentName:"ul"},"Copying values with ",Object(r.b)("inlineCode",{parentName:"li"},"Object.assign")),Object(r.b)("li",{parentName:"ul"},"Copying values with the spread operator ",Object(r.b)("inlineCode",{parentName:"li"},"{ ...oldState, ...newData }"))),Object(r.b)("p",null,"Put these operations in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/recipes/computing-derived-data#creating-a-memoized-selector"}),"memoized selector functions")," to ensure that they only run if the input values have changed.  This will also ensure that if the input values ",Object(r.b)("em",{parentName:"p"},"haven't")," changed, ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," will still return the same result values as before, and ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," can skip re-rendering."),Object(r.b)("h3",{id:"only-perform-expensive-operations-when-data-changes"},"Only Perform Expensive Operations When Data Changes"),Object(r.b)("p",null,"Transforming data can often be expensive (",Object(r.b)("em",{parentName:"p"},"and")," usually results in new object references being created).  In order for your ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function to be as fast as possible, you should only re-run these complex transformations when the relevant data has changed."),Object(r.b)("p",null,"There are a few ways to approach this:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Some transformations could be calculated in an action creator or reducer, and the transformed data could be kept in the store"),Object(r.b)("li",{parentName:"ul"},"Transformations can also be done in a component's ",Object(r.b)("inlineCode",{parentName:"li"},"render()")," method"),Object(r.b)("li",{parentName:"ul"},"If the transformation does need to be done in a ",Object(r.b)("inlineCode",{parentName:"li"},"mapStateToProps")," function, then we recommend using ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://redux.js.org/recipes/computing-derived-data#creating-a-memoized-selector"}),"memoized selector functions")," to ensure the transformation is only run when the input values have changed.")),Object(r.b)("h4",{id:"immutablejs-performance-concerns"},"Immutable.js Performance Concerns"),Object(r.b)("p",null,"Immutable.js author Lee Byron on Twitter ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/leeb/status/746733697093668864?lang=en"}),"explicitly advises avoiding ",Object(r.b)("inlineCode",{parentName:"a"},"toJS")," when performance is a concern"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Perf tip for #immutablejs: avoid .toJS() .toObject() and .toArray() all slow full-copy operations which render structural sharing useless.")),Object(r.b)("p",null,"There's several other performance concerns to take into consideration with Immutable.js - see the list of links at the end of this page for more information."),Object(r.b)("h2",{id:"behavior-and-gotchas"},"Behavior and Gotchas"),Object(r.b)("h3",{id:"mapstatetoprops-will-not-run-if-the-store-state-is-the-same"},Object(r.b)("inlineCode",{parentName:"h3"},"mapStateToProps")," Will Not Run if the Store State is the Same"),Object(r.b)("p",null,"The wrapper component generated by ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," subscribes to the Redux store.  Every time an action is dispatched, it calls ",Object(r.b)("inlineCode",{parentName:"p"},"store.getState()")," and checks to see if ",Object(r.b)("inlineCode",{parentName:"p"},"lastState === currentState"),".  If the two state values are identical by reference, then it will ",Object(r.b)("em",{parentName:"p"},"not")," re-run your ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function, because it assumes that the rest of the store state hasn't changed either."),Object(r.b)("p",null,"The Redux ",Object(r.b)("inlineCode",{parentName:"p"},"combineReducers")," utility function tries to optimize for this.  If none of the slice reducers returned a new value, then ",Object(r.b)("inlineCode",{parentName:"p"},"combineReducers")," returns the old state object instead of a new one.  This means that mutation in a reducer can lead to the root state object not being updated, and thus the UI won't re-render."),Object(r.b)("h3",{id:"the-number-of-declared-arguments-affects-behavior"},"The Number of Declared Arguments Affects Behavior"),Object(r.b)("p",null,"With just ",Object(r.b)("inlineCode",{parentName:"p"},"(state)"),", the function runs whenever the root store state object is different. With ",Object(r.b)("inlineCode",{parentName:"p"},"(state, ownProps)"),", it runs any time the store state is different and ALSO whenever the wrapper props have changed."),Object(r.b)("p",null,"This means that ",Object(r.b)("strong",{parentName:"p"},"you should not add the ",Object(r.b)("inlineCode",{parentName:"strong"},"ownProps")," argument unless you actually need to use it"),", or your ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function will run more often than it needs to."),Object(r.b)("p",null,"There are some edge cases around this behavior.  ",Object(r.b)("strong",{parentName:"p"},"The number of mandatory arguments determines whether ",Object(r.b)("inlineCode",{parentName:"strong"},"mapStateToProps")," will receive ",Object(r.b)("inlineCode",{parentName:"strong"},"ownProps")),"."),Object(r.b)("p",null,"If the formal definition of the function contains one mandatory parameter, ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," will ",Object(r.b)("em",{parentName:"p"},"not")," receive ",Object(r.b)("inlineCode",{parentName:"p"},"ownProps"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function mapStateToProps(state) {\n  console.log(state);        // state\n  console.log(arguments[1]); // undefined\n}\nconst mapStateToProps = (state, ownProps = {}) => {\n  console.log(state);    // state\n  console.log(ownProps); // undefined\n}\n")),Object(r.b)("p",null,"It ",Object(r.b)("em",{parentName:"p"},"will")," receive ",Object(r.b)("inlineCode",{parentName:"p"},"ownProps")," when the formal definition of the function contains zero or two mandatory parameters:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function mapStateToProps(state, ownProps) {\n  console.log(state);    // state\n  console.log(ownProps); // ownProps\n}\n\nfunction mapStateToProps() {\n  console.log(arguments[0]); // state\n  console.log(arguments[1]); // ownProps\n}\n\nfunction mapStateToProps(...args) {\n  console.log(args[0]); // state\n  console.log(args[1]); // ownProps\n}\n")),Object(r.b)("h2",{id:"links-and-references"},"Links and References"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tutorials")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.isquaredsoftware.com/2017/01/practical-redux-part-6-connected-lists-forms-and-performance/"}),"Practical Redux Series, Part 6: Connected Lists, Forms, and Performance")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/"}),"Idiomatic Redux: Using Reselect Selectors for Encapsulation and Performance"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Performance")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://twitter.com/leeb/status/746733697093668864"}),"Lee Byron's Tweet Suggesting to avoid ",Object(r.b)("inlineCode",{parentName:"a"},"toJS"),", ",Object(r.b)("inlineCode",{parentName:"a"},"toArray")," and ",Object(r.b)("inlineCode",{parentName:"a"},"toObject")," for Performance")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.rangle.io/react-and-redux-performance-with-reselect/"}),"Improving React and Redux performance with Reselect")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#immutable-data"}),"Immutable data performance links"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Q&A")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://redux.js.org/faq/reactredux#why-is-my-component-re-rendering-too-often"}),"Why Is My Component Re-Rendering Too Often?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://redux.js.org/faq/reactredux#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running"}),"Why isn't my component re-rendering, or my mapStateToProps running")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://redux.js.org/faq/reactredux#why-is-my-component-re-rendering-too-often"}),"How can I speed up my mapStateToProps?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://redux.js.org/faq/reactredux#why-is-my-component-re-rendering-too-often"}),"Should I only connect my top component, or can I connect multiple components in my tree?"))))}l.isMDXComponent=!0}}]);