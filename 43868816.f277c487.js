(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{147:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return b}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=a.a.createContext({}),d=function(e){var t=a.a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=d(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=d(o),l=n,b=u["".concat(c,".").concat(l)]||u[l]||m[l]||r;return o?a.a.createElement(b,s(s({ref:t},i),{},{components:o})):a.a.createElement(b,s({ref:t},i))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,c=new Array(r);c[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<r;i++)c[i]=o[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,o)}l.displayName="MDXCreateElement"},81:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return d}));var n=o(2),a=o(6),r=(o(0),o(147)),c={id:"static-typing",title:"Tipagem Est\xe1tica",hide_title:!0,sidebar_label:"Tipagem Est\xe1tica"},s={unversionedId:"using-react-redux/static-typing",id:"version-7.2/using-react-redux/static-typing",isDocsHomePage:!1,title:"Tipagem Est\xe1tica",description:"Tipagem Est\xe1tica",source:"@site/versioned_docs\\version-7.2\\using-react-redux\\static-types.md",slug:"/using-react-redux/static-typing",permalink:"/react-redux/using-react-redux/static-typing",version:"7.2",sidebar_label:"Tipagem Est\xe1tica",sidebar:"version-7.2/docs",previous:{title:"Acessando a store",permalink:"/react-redux/using-react-redux/accessing-store"},next:{title:"Connect",permalink:"/react-redux/api/connect"}},p=[{value:"TypeScript",id:"typescript",children:[{value:"Definindo o tipo de estado raiz",id:"definindo-o-tipo-de-estado-raiz",children:[]},{value:"Tipando o hook <code>useSelector</code>",id:"tipando-o-hook-useselector",children:[]},{value:"Tipando o hook <code>useDispatch</code>",id:"tipando-o-hook-usedispatch",children:[]},{value:"Tipando o componente de ordem superior <code>connect</code>",id:"tipando-o-componente-de-ordem-superior-connect",children:[]},{value:"Recomenda\xe7\xf5es",id:"recomenda\xe7\xf5es",children:[]}]},{value:"Recursos",id:"recursos",children:[]}],i={rightToc:p};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"tipagem-est\xe1tica"},"Tipagem Est\xe1tica"),Object(r.b)("p",null,"React-Redux \xe9 atualmente escrito em JavaScript simples. No entanto, ele funciona bem com sistemas de tipo est\xe1tico, como TypeScript e Flow."),Object(r.b)("h2",{id:"typescript"},"TypeScript"),Object(r.b)("p",null,"O React-Redux n\xe3o vem com suas pr\xf3prias defini\xe7\xf5es de tipo. Se voc\xea estiver usando o Typescript, voc\xea deve instalar as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://npm.im/@types/react-redux"}),"defini\xe7\xf5es de tipo ",Object(r.b)("inlineCode",{parentName:"a"},"@types/react-redux"))," do npm. Al\xe9m de tipar as fun\xe7\xf5es da biblioteca, os tipos tamb\xe9m exportam alguns auxiliares para tornar mais f\xe1cil escrever interfaces seguras de tipos entre sua  Redux store e seus componentes React."),Object(r.b)("h3",{id:"definindo-o-tipo-de-estado-raiz"},"Definindo o tipo de estado raiz"),Object(r.b)("p",null,"Ambos ",Object(r.b)("inlineCode",{parentName:"p"},"mapState")," e",Object(r.b)("inlineCode",{parentName:"p"}," useSelector")," dependem da declara\xe7\xe3o do tipo do valor completo do estado da Redux store. Embora esse tipo possa ser escrito \xe0 m\xe3o, a maneira mais f\xe1cil de defini-lo \xe9 fazer o TypeScript inferir com base no que sua fun\xe7\xe3o reducer raiz retorna. Desta forma, o tipo \xe9 atualizado automaticamente conforme as fun\xe7\xf5es do reducer s\xe3o modificadas."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// rootReducer.ts\nexport const rootReducer = combineReducers({\n  posts: postsReducer,\n  comments: commentsReducer,\n  users: usersReducer\n})\n\nexport type RootState = ReturnType<typeof rootReducer>\n// {posts: PostsState, comments: CommentsState, users: UsersState}\n")),Object(r.b)("h3",{id:"tipando-o-hook-useselector"},"Tipando o hook ",Object(r.b)("inlineCode",{parentName:"h3"},"useSelector")),Object(r.b)("p",null,"Ao escrever fun\xe7\xf5es selector para uso com ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector"),", voc\xea deve definir explicitamente o tipo do par\xe2metro ",Object(r.b)("inlineCode",{parentName:"p"},"state"),". O TS deve ser capaz de inferir o tipo de retorno do selector, que ser\xe1 reutilizado como o tipo de retorno do hook ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"interface RootState {\n  isOn: boolean\n}\n\n// TS infere o tipo: (state: RootState) => boolean\nconst selectIsOn = (state: RootState) => state.isOn\n\n// TS infere que `isOn` \xe9 booleano\nconst isOn = useSelector(selectIsOn)\n")),Object(r.b)("p",null,"Se voc\xea quiser evitar repetir a declara\xe7\xe3o do tipo ",Object(r.b)("inlineCode",{parentName:"p"},"state"),", voc\xea pode definir um hook ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector")," digitado usando um tipo auxiliar exportado por ",Object(r.b)("inlineCode",{parentName:"p"},"@types/react-redux"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// reducer.ts\nimport { useSelector, TypedUseSelectorHook } from 'react-redux'\n\ninterface RootState {\n  isOn: boolean\n}\n\nexport const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector\n\n// my-component.tsx\nimport { useTypedSelector } from './reducer.ts'\n\nconst isOn = useTypedSelector(state => state.isOn)\n")),Object(r.b)("h3",{id:"tipando-o-hook-usedispatch"},"Tipando o hook ",Object(r.b)("inlineCode",{parentName:"h3"},"useDispatch")),Object(r.b)("p",null,"Por padr\xe3o, o valor de retorno de ",Object(r.b)("inlineCode",{parentName:"p"},"useDispatch")," \xe9 o tipo ",Object(r.b)("inlineCode",{parentName:"p"},"Dispatch")," padr\xe3o definido pelos tipos do core do Redux, portanto, nenhuma declara\xe7\xe3o \xe9 necess\xe1ria:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const dispatch = useDispatch()\n")),Object(r.b)("p",null,"Se voc\xea tiver uma vers\xe3o personalizada do tipo ",Object(r.b)("inlineCode",{parentName:"p"},"Dispatch"),", poder\xe1 usar esse tipo explicitamente:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// store.ts\nexport type AppDispatch = typeof store.dispatch\n\n// MyComponent.tsx\nconst dispatch: AppDispatch = useDispatch()\n")),Object(r.b)("h3",{id:"tipando-o-componente-de-ordem-superior-connect"},"Tipando o componente de ordem superior ",Object(r.b)("inlineCode",{parentName:"h3"},"connect")),Object(r.b)("h4",{id:"tipando-manualmente-connect"},"Tipando Manualmente ",Object(r.b)("inlineCode",{parentName:"h4"},"connect")),Object(r.b)("p",null,"O componente de ordem superior ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," \xe9 um tanto complexo de tipar, porque h\xe1 3 fontes de props: ",Object(r.b)("inlineCode",{parentName:"p"}," mapStateToProps"),", ",Object(r.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," e props passados \u200b\u200bdo componente pai. Aqui est\xe1 um exemplo completo de como seria fazer isso manualmente."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { connect } from 'react-redux'\n\ninterface StateProps {\n  isOn: boolean\n}\n\ninterface DispatchProps {\n  toggleOn: () => void\n}\n\ninterface OwnProps {\n  backgroundColor: string\n}\n\ntype Props = StateProps & DispatchProps & OwnProps\n\nconst mapState = (state: RootState) => ({\n  isOn: state.isOn\n})\n\nconst mapDispatch = {\n  toggleOn: () => ({ type: 'TOGGLE_IS_ON' })\n}\n\nconst MyComponent = (props: Props) => (\n  <div style={{ backgroundColor: props.backgroundColor }}>\n    <button onClick={props.toggleOn}>\n      Toggle is {props.isOn ? 'ON' : 'OFF'}\n    </button>\n  </div>\n)\n\n// Uso t\xedpico: `connect` \xe9 chamado ap\xf3s o componente ser definido\nexport default connect<StateProps, DispatchProps, OwnProps>(\n  mapState,\n  mapDispatch\n)(MyComponent)\n")),Object(r.b)("p",null,"Tamb\xe9m \xe9 poss\xedvel abreviar um pouco, inferindo os tipos de ",Object(r.b)("inlineCode",{parentName:"p"},"mapState")," e",Object(r.b)("inlineCode",{parentName:"p"}," mapDispatch"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const mapState = (state: RootState) => ({\n  isOn: state.isOn\n})\n\nconst mapDispatch = {\n  toggleOn: () => ({ type: 'TOGGLE_IS_ON' })\n}\n\ntype StateProps = ReturnType<typeof mapState>\ntype DispatchProps = typeof mapDispatch\n\ntype Props = StateProps & DispatchProps & OwnProps\n")),Object(r.b)("p",null,"No entanto, inferir o tipo de ",Object(r.b)("inlineCode",{parentName:"p"},"mapDispatch")," dessa forma ser\xe1 interrompido se ele for definido como um objeto e tamb\xe9m se referir a thunks."),Object(r.b)("h4",{id:"inferindo-as-props-conectadas-automaticamente"},"Inferindo as props conectadas automaticamente"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"conectar")," consiste em duas fun\xe7\xf5es que s\xe3o chamadas sequencialmente. A primeira fun\xe7\xe3o aceita ",Object(r.b)("inlineCode",{parentName:"p"},"mapState")," e",Object(r.b)("inlineCode",{parentName:"p"}," mapDispatch")," como argumentos e retorna uma segunda fun\xe7\xe3o. A segunda fun\xe7\xe3o aceita o componente a ser envolvido e retorna um novo componente envolvedor que passa os props de ",Object(r.b)("inlineCode",{parentName:"p"},"mapState")," e",Object(r.b)("inlineCode",{parentName:"p"}," mapDispatch"),". Normalmente, as duas fun\xe7\xf5es s\xe3o chamadas juntas, como ",Object(r.b)("inlineCode",{parentName:"p"},"connect(mapState, mapDispatch)(MyComponent)"),"."),Object(r.b)("p",null,"A partir da vers\xe3o v7.1.2, o pacote ",Object(r.b)("inlineCode",{parentName:"p"},"@types/react-redux")," exp\xf5e um tipo auxiliar,",Object(r.b)("inlineCode",{parentName:"p"},"ConnectedProps"),", que pode extrair os tipos de retorno de ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," e",Object(r.b)("inlineCode",{parentName:"p"}," mapDispatchToProps")," da primeira fun\xe7\xe3o. Isso significa que se voc\xea dividir a chamada ",Object(r.b)("inlineCode",{parentName:"p"},"connect"),' em duas etapas, todos os "adere\xe7os do Redux" podem ser inferidos automaticamente, sem ter que escrev\xea-los \xe0 m\xe3o. Embora essa abordagem possa parecer incomum se voc\xea estiver usando o React-Redux por um tempo, ela simplifica consideravelmente as declara\xe7\xf5es de tipo.'),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { connect, ConnectedProps } from 'react-redux'\n\ninterface RootState {\n  isOn: boolean\n}\n\nconst mapState = (state: RootState) => ({\n  isOn: state.isOn\n})\n\nconst mapDispatch = {\n  toggleOn: () => ({ type: 'TOGGLE_IS_ON' })\n}\n\nconst connector = connect(\n  mapState,\n  mapDispatch\n)\n\n// O tipo inferido ser\xe1 semelhante a:\n// {isOn: boolean, toggleOn: () => void}\ntype PropsFromRedux = ConnectedProps<typeof connector>\n")),Object(r.b)("p",null,"O tipo de retorno de ",Object(r.b)("inlineCode",{parentName:"p"},"ConnectedProps")," pode ent\xe3o ser usado para tipar seu objeto de props."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"interface Props extends PropsFromRedux {\n  backgroundColor: string\n}\n\nconst MyComponent = (props: Props) => (\n  <div style={{ backgroundColor: props.backgroundColor }}>\n    <button onClick={props.toggleOn}>\n      Toggle is {props.isOn ? 'ON' : 'OFF'}\n    </button>\n  </div>\n)\n\nexport default connector(MyComponent)\n")),Object(r.b)("p",null,"Como os tipos podem ser definidos em qualquer ordem, voc\xea ainda pode declarar seu componente antes de declarar o conector, se desejar."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"// alternativamente, declare `type Props = PropsFromRedux & {backgroundColor: string}`\ninterface Props extends PropsFromRedux {\n  backgroundColor: string;\n}\n\nconst MyComponent = (props: Props) => /* o mesmo que acima */\n\nconst connector = connect(/* o mesmo que acima*/)\n\ntype PropsFromRedux = ConnectedProps<typeof connector>\n\nexport default connector(MyComponent)\n")),Object(r.b)("h3",{id:"recomenda\xe7\xf5es"},"Recomenda\xe7\xf5es"),Object(r.b)("p",null,"A API de ganchos \xe9 geralmente mais simples de usar com tipos est\xe1ticos. ",Object(r.b)("strong",{parentName:"p"},"Se voc\xea est\xe1 procurando a solu\xe7\xe3o mais f\xe1cil para usar tipos est\xe1ticos com React-Redux, use a API de hooks.")),Object(r.b)("p",null,"Se voc\xea estiver usando ",Object(r.b)("inlineCode",{parentName:"p"},"connect"),", ",Object(r.b)("strong",{parentName:"p"},"recomendamos usar a abordagem",Object(r.b)("inlineCode",{parentName:"strong"},"ConnectedProps <T>"),"para inferir os props do Redux"),", pois isso requer o m\xednimo de declara\xe7\xf5es de tipo expl\xedcitas."),Object(r.b)("h2",{id:"recursos"},"Recursos"),Object(r.b)("p",null,"Para obter informa\xe7\xf5es adicionais, consulte estes recursos adicionais:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://redux.js.org/recipes/usage-with-typescript"}),"Redux docs: Usage with TypeScript"),": Exemplos de como declarar os tipos para actions, reducers e a para a store"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://redux-toolkit.js.org/tutorials/advanced-tutorial"}),"Redux Toolkit docs: Advanced Tutorial"),": mostra como usar RTK e a API dos hooks React-Redux com TypeScript"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet"}),"React+TypeScript Cheatsheet"),": um guia abrangente para usar React com TypeScript"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/piotrwitek/react-redux-typescript-guide"}),"React + Redux in TypeScript Guide"),": informa\xe7\xf5es abrangentes sobre os padr\xf5es de uso do React e Redux com TypeScript")))}d.isMDXComponent=!0}}]);