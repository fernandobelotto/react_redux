(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),i=(n(0),n(147)),c={id:"connect-mapdispatch",title:"Connect: Dispatching Actions with mapDispatchToProps",hide_title:!0,sidebar_label:"Connect: Dispatching Actions with mapDispatchToProps"},r={unversionedId:"using-react-redux/connect-mapdispatch",id:"version-7.0/using-react-redux/connect-mapdispatch",isDocsHomePage:!1,title:"Connect: Dispatching Actions with mapDispatchToProps",description:"Connect: Dispatching Actions with mapDispatchToProps",source:"@site/versioned_docs\\version-7.0\\using-react-redux\\connect-dispatching-actions-with-mapDispatchToProps.md",slug:"/using-react-redux/connect-mapdispatch",permalink:"/react-redux/7.0/using-react-redux/connect-mapdispatch",version:"7.0",sidebar_label:"Connect: Dispatching Actions with mapDispatchToProps",sidebar:"version-7.0/docs",previous:{title:"Connect: Extracting Data with mapStateToProps",permalink:"/react-redux/7.0/using-react-redux/connect-mapstate"},next:{title:"Accessing the Store",permalink:"/react-redux/7.0/using-react-redux/accessing-store"}},p=[{value:"Approaches for Dispatching",id:"approaches-for-dispatching",children:[{value:"Default: <code>dispatch</code> as a Prop",id:"default-dispatch-as-a-prop",children:[]},{value:"Providing A <code>mapDispatchToProps</code> Parameter",id:"providing-a-mapdispatchtoprops-parameter",children:[]}]},{value:"Two Forms of <code>mapDispatchToProps</code>",id:"two-forms-of-mapdispatchtoprops",children:[]},{value:"Defining <code>mapDispatchToProps</code> As A Function",id:"defining-mapdispatchtoprops-as-a-function",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]},{value:"Defining the <code>mapDispatchToProps</code> Function with <code>bindActionCreators</code>",id:"defining-the-mapdispatchtoprops-function-with-bindactioncreators",children:[]},{value:"Manually Injecting <code>dispatch</code>",id:"manually-injecting-dispatch",children:[]}]},{value:"Defining <code>mapDispatchToProps</code> As An Object",id:"defining-mapdispatchtoprops-as-an-object",children:[]},{value:"Common Problems",id:"common-problems",children:[{value:"Why is my component not receiving <code>dispatch</code>?",id:"why-is-my-component-not-receiving-dispatch",children:[]},{value:"Can I <code>mapDispatchToProps</code> without <code>mapStateToProps</code> in Redux?",id:"can-i-mapdispatchtoprops-without-mapstatetoprops-in-redux",children:[]},{value:"Can I call <code>store.dispatch</code>?",id:"can-i-call-storedispatch",children:[]}]},{value:"Links and References",id:"links-and-references",children:[]}],s={rightToc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"connect-dispatching-actions-with-mapdispatchtoprops"},"Connect: Dispatching Actions with ",Object(i.b)("inlineCode",{parentName:"h1"},"mapDispatchToProps")),Object(i.b)("p",null,"As the second argument passed in to ",Object(i.b)("inlineCode",{parentName:"p"},"connect"),", ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," is used for dispatching actions to the store."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," is a function of the Redux store. You call ",Object(i.b)("inlineCode",{parentName:"p"},"store.dispatch")," to dispatch an action.\nThis is the only way to trigger a state change."),Object(i.b)("p",null,"With React Redux, your components never access the store directly - ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," does it for you.\nReact Redux gives you two ways to let components dispatch actions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"By default, a connected component receives ",Object(i.b)("inlineCode",{parentName:"li"},"props.dispatch")," and can dispatch actions itself."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"connect")," can accept an argument called ",Object(i.b)("inlineCode",{parentName:"li"},"mapDispatchToProps"),", which lets you create functions that dispatch when called, and pass those functions as props to your component.")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," functions are normally referred to as ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatch")," for short, but the actual variable name used can be whatever you want."),Object(i.b)("h2",{id:"approaches-for-dispatching"},"Approaches for Dispatching"),Object(i.b)("h3",{id:"default-dispatch-as-a-prop"},"Default: ",Object(i.b)("inlineCode",{parentName:"h3"},"dispatch")," as a Prop"),Object(i.b)("p",null,"If you don't specify the second argument to ",Object(i.b)("inlineCode",{parentName:"p"},"connect()"),", your component will receive ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," by default. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"connect()(MyComponent)\n// which is equivalent with\nconnect(\n  null,\n  null\n)(MyComponent)\n\n// or\nconnect(mapStateToProps /** no second argument */)(MyComponent)\n")),Object(i.b)("p",null,"Once you have connected your component in this way, your component receives ",Object(i.b)("inlineCode",{parentName:"p"},"props.dispatch"),". You may use it to dispatch actions to the store."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Counter({ count, dispatch }) {\n  return (\n    <div>\n      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>\n      <span>{count}</span>\n      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>\n      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>\n    </div>\n  )\n}\n")),Object(i.b)("h3",{id:"providing-a-mapdispatchtoprops-parameter"},"Providing A ",Object(i.b)("inlineCode",{parentName:"h3"},"mapDispatchToProps")," Parameter"),Object(i.b)("p",null,"Providing a ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," allows you to specify which actions your component might need to dispatch. It lets you provide action dispatching functions as props. Therefore, instead of calling ",Object(i.b)("inlineCode",{parentName:"p"},"props.dispatch(() => increment())"),", you may call ",Object(i.b)("inlineCode",{parentName:"p"},"props.increment()")," directly. There are a few reasons why you might want to do that."),Object(i.b)("h4",{id:"more-declarative"},"More Declarative"),Object(i.b)("p",null,"First, encapsulating the dispatch logic into function makes the implementation more declarative.\nDispatching an action and letting the Redux store handle the data flow is ",Object(i.b)("em",{parentName:"p"},"how to")," implement the behavior, rather than ",Object(i.b)("em",{parentName:"p"},"what")," it does."),Object(i.b)("p",null,"A good example would be dispatching an action when a button is clicked. Connecting the button directly probably doesn't make sense conceptually, and neither does having the button reference ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// button needs to be aware of "dispatch"\n<button onClick={() => dispatch({ type: "SOMETHING" })} />\n\n// button unaware of "dispatch",\n<button onClick={doSomething} />\n')),Object(i.b)("p",null,"Once you've wrapped all our action creators with functions that dispatch the actions, the component is free of the need of ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch"),".\nTherefore, ",Object(i.b)("strong",{parentName:"p"},"if you define your own ",Object(i.b)("inlineCode",{parentName:"strong"},"mapDispatchToProps"),", the connected component will no longer receive ",Object(i.b)("inlineCode",{parentName:"strong"},"dispatch"),".")),Object(i.b)("h4",{id:"pass-down-action-dispatching-logic-to--unconnected--child-components"},"Pass Down Action Dispatching Logic to ( Unconnected ) Child Components"),Object(i.b)("p",null,'In addition, you also gain the ability to pass down the action dispatching functions to child ( likely unconnected ) components.\nThis allows more components to dispatch actions, while keeping them "unaware" of Redux.'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// pass down toggleTodo to child component\n// making Todo able to dispatch the toggleTodo action\nconst TodoList = ({ todos, toggleTodo }) => (\n  <div>\n    {todos.map(todo => (\n      <Todo todo={todo} onClick={toggleTodo} />\n    ))}\n  </div>\n)\n")),Object(i.b)("p",null,"This is what React Redux\u2019s ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," does \u2014 it encapsulates the logic of talking to the Redux store and lets you not worry about it. And this is what you should totally make full use of in your implementation."),Object(i.b)("h2",{id:"two-forms-of-mapdispatchtoprops"},"Two Forms of ",Object(i.b)("inlineCode",{parentName:"h2"},"mapDispatchToProps")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," parameter can be of two forms. While the function form allows more customization, the object form is easy to use."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Function form"),": Allows more customization, gains access to ",Object(i.b)("inlineCode",{parentName:"li"},"dispatch")," and optionally ",Object(i.b)("inlineCode",{parentName:"li"},"ownProps")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Object shorthand form"),": More declarative and easier to use")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u2b50 ",Object(i.b)("strong",{parentName:"p"},"Note:")," We recommend using the object form of ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," unless you specifically need to customize dispatching behavior in some way.")),Object(i.b)("h2",{id:"defining-mapdispatchtoprops-as-a-function"},"Defining ",Object(i.b)("inlineCode",{parentName:"h2"},"mapDispatchToProps")," As A Function"),Object(i.b)("p",null,"Defining ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," as a function gives you the most flexibility in customizing the functions your component receives, and how they dispatch actions.\nYou gain access to ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ownProps"),".\nYou may use this chance to write customized functions to be called by your connected components."),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"dispatch"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"ownProps")," (optional)"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dispatch"))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function will be called with ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," as the first argument.\nYou will normally make use of this by returning new functions that call ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch()")," inside themselves, and either pass in a plain action object directly or pass in the result of an action creator."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const mapDispatchToProps = dispatch => {\n  return {\n    // dispatching plain actions\n    increment: () => dispatch({ type: 'INCREMENT' }),\n    decrement: () => dispatch({ type: 'DECREMENT' }),\n    reset: () => dispatch({ type: 'RESET' })\n  }\n}\n")),Object(i.b)("p",null,"You will also likely want to forward arguments to your action creators:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const mapDispatchToProps = dispatch => {\n  return {\n    // explicitly forwarding arguments\n    onClick: event => dispatch(trackClick(event)),\n\n    // implicitly forwarding arguments\n    onReceiveImpressions: (...impressions) =>\n      dispatch(trackImpressions(impressions))\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"ownProps")," ( optional )")),Object(i.b)("p",null,"If your ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function is declared as taking two parameters, it will be called with ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," as the first parameter and the ",Object(i.b)("inlineCode",{parentName:"p"},"props")," passed to the connected component as the second parameter, and will be re-invoked whenever the connected component receives new props."),Object(i.b)("p",null,"This means, instead of re-binding new ",Object(i.b)("inlineCode",{parentName:"p"},"props")," to action dispatchers upon component re-rendering, you may do so when your component's ",Object(i.b)("inlineCode",{parentName:"p"},"props")," change."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// binds on component re-rendering\n;<button onClick={() => this.props.toggleTodo(this.props.todoId)} />\n\n// binds on `props` change\nconst mapDispatchToProps = (dispatch, ownProps) => {\n  toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))\n}\n")),Object(i.b)("h3",{id:"return"},"Return"),Object(i.b)("p",null,"Your ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function should return a plain object:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each field in the object will become a separate prop for your own component, and the value should normally be a function that dispatches an action when called."),Object(i.b)("li",{parentName:"ul"},"If you use action creators ( as oppose to plain object actions ) inside ",Object(i.b)("inlineCode",{parentName:"li"},"dispatch"),", it is a convention to simply name the field key the same name as the action creator:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const increment = () => ({ type: 'INCREMENT' })\nconst decrement = () => ({ type: 'DECREMENT' })\nconst reset = () => ({ type: 'RESET' })\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    // dispatching actions returned by action creators\n    increment: () => dispatch(increment()),\n    decrement: () => dispatch(decrement()),\n    reset: () => dispatch(reset())\n  }\n}\n")),Object(i.b)("p",null,"The return of the ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function will be merged to your connected component as props. You may call them directly to dispatch its action."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Counter({ count, increment, decrement, reset }) {\n  return (\n    <div>\n      <button onClick={decrement}>-</button>\n      <span>{count}</span>\n      <button onClick={increment}>+</button>\n      <button onClick={reset}>reset</button>\n    </div>\n  )\n}\n")),Object(i.b)("p",null,"(Full code of the Counter example is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://codesandbox.io/s/yv6kqo1yw9"}),"in this CodeSandbox"),")"),Object(i.b)("h3",{id:"defining-the-mapdispatchtoprops-function-with-bindactioncreators"},"Defining the ",Object(i.b)("inlineCode",{parentName:"h3"},"mapDispatchToProps")," Function with ",Object(i.b)("inlineCode",{parentName:"h3"},"bindActionCreators")),Object(i.b)("p",null,"Wrapping these functions by hand is tedious, so Redux provides a function to simplify that."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"bindActionCreators")," turns an object whose values are ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/glossary#action-creator"}),"action creators"),", into an object with the same keys, but with every action creator wrapped into a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/api/store#dispatch"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch"))," call so they may be invoked directly. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://redux.js.org/docs/api/bindactioncreators"}),"Redux Docs on ",Object(i.b)("inlineCode",{parentName:"a"},"bindActionCreators")))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"bindActionCreators")," accepts two parameters:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"function"))," (an action creator) or an ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"object"))," (each field an action creator)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"dispatch"))),Object(i.b)("p",null,"The wrapper functions generated by ",Object(i.b)("inlineCode",{parentName:"p"},"bindActionCreators")," will automatically forward all of their arguments, so you don't need to do that by hand."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { bindActionCreators } from 'redux'\n\nconst increment = () => ({ type: 'INCREMENT' })\nconst decrement = () => ({ type: 'DECREMENT' })\nconst reset = () => ({ type: 'RESET' })\n\n// binding an action creator\n// returns (...args) => dispatch(increment(...args))\nconst boundIncrement = bindActionCreators(increment, dispatch)\n\n// binding an object full of action creators\nconst boundActionCreators = bindActionCreators(\n  { increment, decrement, reset },\n  dispatch\n)\n// returns\n// {\n//   increment: (...args) => dispatch(increment(...args)),\n//   decrement: (...args) => dispatch(decrement(...args)),\n//   reset: (...args) => dispatch(reset(...args)),\n// }\n")),Object(i.b)("p",null,"To use ",Object(i.b)("inlineCode",{parentName:"p"},"bindActionCreators")," in our ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { bindActionCreators } from 'redux'\n// ...\n\nfunction mapDispatchToProps(dispatch) {\n  return bindActionCreators({ increment, decrement, reset }, dispatch)\n}\n\n// component receives props.increment, props.decrement, props.reset\nconnect(\n  null,\n  mapDispatchToProps\n)(Counter)\n")),Object(i.b)("h3",{id:"manually-injecting-dispatch"},"Manually Injecting ",Object(i.b)("inlineCode",{parentName:"h3"},"dispatch")),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," argument is supplied, the component will no longer receive the default ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch"),". You may bring it back by adding it manually to the return of your ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps"),", although most of the time you shouldn\u2019t need to do this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { bindActionCreators } from 'redux'\n// ...\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    dispatch,\n    ...bindActionCreators({ increment, decrement, reset }, dispatch)\n  }\n}\n")),Object(i.b)("h2",{id:"defining-mapdispatchtoprops-as-an-object"},"Defining ",Object(i.b)("inlineCode",{parentName:"h2"},"mapDispatchToProps")," As An Object"),Object(i.b)("p",null,"You\u2019ve seen that the setup for dispatching Redux actions in a React component follows a very similar process: define an action creator, wrap it in another function that looks like ",Object(i.b)("inlineCode",{parentName:"p"},"(\u2026args) => dispatch(actionCreator(\u2026args))"),", and pass that wrapper function as a prop to your component."),Object(i.b)("p",null,"Because this is so common, ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," supports an \u201cobject shorthand\u201d form for the ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," argument: if you pass an object full of action creators instead of a function, ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," will automatically call ",Object(i.b)("inlineCode",{parentName:"p"},"bindActionCreators")," for you internally."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"We recommend always using the \u201cobject shorthand\u201d form of ",Object(i.b)("inlineCode",{parentName:"strong"},"mapDispatchToProps"),", unless you have a specific reason to customize the dispatching behavior.")),Object(i.b)("p",null,"Note that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each field of the ",Object(i.b)("inlineCode",{parentName:"li"},"mapDispatchToProps")," object is assumed to be an action creator"),Object(i.b)("li",{parentName:"ul"},"Your component will no longer receive ",Object(i.b)("inlineCode",{parentName:"li"},"dispatch")," as a prop")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// React Redux does this for you automatically:\ndispatch => bindActionCreators(mapDispatchToProps, dispatch)\n")),Object(i.b)("p",null,"Therefore, our ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," can simply be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const mapDispatchToProps = {\n  increment,\n  decrement,\n  reset\n}\n")),Object(i.b)("p",null,"Since the actual name of the variable is up to you, you might want to give it a name like ",Object(i.b)("inlineCode",{parentName:"p"},"actionCreators"),", or even define the object inline in the call to ",Object(i.b)("inlineCode",{parentName:"p"},"connect"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import {increment, decrement, reset} from "./counterActions";\n\nconst actionCreators = {\n  increment,\n  decrement,\n  reset\n}\n\nexport default connect(mapState, actionCreators)(Counter);\n\n// or\nexport default connect(\n  mapState,\n  { increment, decrement, reset }\n)(Counter);\n')),Object(i.b)("h2",{id:"common-problems"},"Common Problems"),Object(i.b)("h3",{id:"why-is-my-component-not-receiving-dispatch"},"Why is my component not receiving ",Object(i.b)("inlineCode",{parentName:"h3"},"dispatch"),"?"),Object(i.b)("p",null,"Also known as"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"TypeError: this.props.dispatch is not a function\n")),Object(i.b)("p",null,"This is a common error that happens when you try to call ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.dispatch")," , but ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," is not injected to your component."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," is injected to your component ",Object(i.b)("em",{parentName:"p"},"only")," when:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1. You do not provide ",Object(i.b)("inlineCode",{parentName:"strong"},"mapDispatchToProps"))),Object(i.b)("p",null,"The default ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," is simply ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch => ({ dispatch })"),". If you do not provide ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," will be provided as mentioned above."),Object(i.b)("p",null,"In another words, if you do:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// component receives `dispatch`\nconnect(mapStateToProps /** no second argument*/)(Component)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"2. Your customized ",Object(i.b)("inlineCode",{parentName:"strong"},"mapDispatchToProps")," function return specifically contains ",Object(i.b)("inlineCode",{parentName:"strong"},"dispatch"))),Object(i.b)("p",null,"You may bring back ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," by providing your customized ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const mapDispatchToProps = dispatch => {\n  return {\n    increment: () => dispatch(increment()),\n    decrement: () => dispatch(decrement()),\n    reset: () => dispatch(reset()),\n    dispatch\n  }\n}\n")),Object(i.b)("p",null,"Or alternatively, with ",Object(i.b)("inlineCode",{parentName:"p"},"bindActionCreators"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { bindActionCreators } from 'redux'\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    dispatch,\n    ...bindActionCreators({ increment, decrement, reset }, dispatch)\n  }\n}\n")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux/issues/255"}),"this error in action in Redux\u2019s GitHub issue #255"),"."),Object(i.b)("p",null,"There are discussions regarding whether to provide ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," to your components when you specify ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," ( ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux/issues/255#issuecomment-172089874"}),"Dan Abramov\u2019s response to #255")," ). You may read them for further understanding of the current implementation intention."),Object(i.b)("h3",{id:"can-i-mapdispatchtoprops-without-mapstatetoprops-in-redux"},"Can I ",Object(i.b)("inlineCode",{parentName:"h3"},"mapDispatchToProps")," without ",Object(i.b)("inlineCode",{parentName:"h3"},"mapStateToProps")," in Redux?"),Object(i.b)("p",null,"Yes. You can skip the first parameter by passing ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," or ",Object(i.b)("inlineCode",{parentName:"p"},"null"),". Your component will not subscribe to the store, and will still receive the dispatch props defined by ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"connect(\n  null,\n  mapDispatchToProps\n)(MyComponent)\n")),Object(i.b)("h3",{id:"can-i-call-storedispatch"},"Can I call ",Object(i.b)("inlineCode",{parentName:"h3"},"store.dispatch"),"?"),Object(i.b)("p",null,"It's an anti-pattern to interact with the store directly in a React component, whether it's an explicit import of the store or accessing it via context (see the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/faq/storesetup#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself"}),"Redux FAQ entry on store setup")," for more details). Let React Redux\u2019s ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," handle the access to the store, and use the ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," it passes to the props to dispatch actions."),Object(i.b)("h2",{id:"links-and-references"},"Links and References"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tutorials")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://daveceddia.com/redux-mapdispatchtoprops-object-form/"}),"You Might Not Need the ",Object(i.b)("inlineCode",{parentName:"a"},"mapDispatchToProps")," Function"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Related Docs")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://redux.js.org/api/bindactioncreators"}),"Redux Doc on ",Object(i.b)("inlineCode",{parentName:"a"},"bindActionCreators")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Q&A")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux"}),"How to get simple dispatch from ",Object(i.b)("inlineCode",{parentName:"a"},"this.props")," using connect with Redux?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/255"}),Object(i.b)("inlineCode",{parentName:"a"},"this.props.dispatch")," is ",Object(i.b)("inlineCode",{parentName:"a"},"undefined")," if using ",Object(i.b)("inlineCode",{parentName:"a"},"mapDispatchToProps"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/916"}),"Do not call ",Object(i.b)("inlineCode",{parentName:"a"},"store.dispatch"),", call ",Object(i.b)("inlineCode",{parentName:"a"},"this.props.dispatch")," injected by ",Object(i.b)("inlineCode",{parentName:"a"},"connect")," instead")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/47657365/can-i-mapdispatchtoprops-without-mapstatetoprops-in-redux"}),"Can I ",Object(i.b)("inlineCode",{parentName:"a"},"mapDispatchToProps")," without ",Object(i.b)("inlineCode",{parentName:"a"},"mapStateToProps")," in Redux?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://redux.js.org/faq/reactredux"}),"Redux Doc FAQ: React Redux"))))}b.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(n),m=a,u=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return n?o.a.createElement(u,r(r({ref:t},s),{},{components:n})):o.a.createElement(u,r({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);