(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{147:function(e,o,a){"use strict";a.d(o,"a",(function(){return d})),a.d(o,"b",(function(){return b}));var t=a(0),n=a.n(t);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function s(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?s(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function c(e,o){if(null==e)return{};var a,t,n=function(e,o){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),p=function(e){var o=n.a.useContext(u),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},d=function(e){var o=p(e.components);return n.a.createElement(u.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},m=n.a.forwardRef((function(e,o){var a=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=t,b=d["".concat(s,".").concat(m)]||d[m]||l[m]||r;return a?n.a.createElement(b,i(i({ref:o},u),{},{components:a})):n.a.createElement(b,i({ref:o},u))}));function b(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80:function(e,o,a){"use strict";a.r(o),a.d(o,"frontMatter",(function(){return s})),a.d(o,"metadata",(function(){return i})),a.d(o,"rightToc",(function(){return c})),a.d(o,"default",(function(){return p}));var t=a(2),n=a(6),r=(a(0),a(147)),s={id:"troubleshooting",title:"Solu\xe7\xe3o de problemas",sidebar_label:"Solu\xe7\xe3o de problemas",hide_title:!0},i={unversionedId:"troubleshooting",id:"version-7.2/troubleshooting",isDocsHomePage:!1,title:"Solu\xe7\xe3o de problemas",description:"Solu\xe7\xe3o de problemas",source:"@site/versioned_docs\\version-7.2\\troubleshooting.md",slug:"/troubleshooting",permalink:"/react-redux/troubleshooting",version:"7.2",sidebar_label:"Solu\xe7\xe3o de problemas",sidebar:"version-7.2/docs",previous:{title:"Hooks",permalink:"/react-redux/api/hooks"}},c=[{value:"Solu\xe7\xe3o de problemas",id:"solu\xe7\xe3o-de-problemas",children:[{value:"Estou recebendo o seguinte alerta: O acesso a PropTypes por meio do pacote React principal est\xe1 obsoleto. Use o pacote prop-types do npm.",id:"estou-recebendo-o-seguinte-alerta-o-acesso-a-proptypes-por-meio-do-pacote-react-principal-est\xe1-obsoleto-use-o-pacote-prop-types-do-npm",children:[]},{value:"Minhas views n\xe3o est\xe3o atualizando!",id:"minhas-views-n\xe3o-est\xe3o-atualizando",children:[]},{value:"Minhas views n\xe3o est\xe3o atualizando na mudan\xe7a de rota com React Router 0.13",id:"minhas-views-n\xe3o-est\xe3o-atualizando-na-mudan\xe7a-de-rota-com-react-router-013",children:[]},{value:"Minhas views n\xe3o est\xe3o atualizando quando algo muda fora do Redux",id:"minhas-views-n\xe3o-est\xe3o-atualizando-quando-algo-muda-fora-do-redux",children:[]},{value:"N\xe3o foi poss\xedvel encontrar &quot;store&quot; no contexto ou props",id:"n\xe3o-foi-poss\xedvel-encontrar-store-no-contexto-ou-props",children:[]},{value:"Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs. Isso geralmente significa que voc\xea est\xe1 tentando adicionar uma refer\xeancia a um componente que n\xe3o tem um propriet\xe1rio",id:"invariant-violation-addcomponentasrefto-only-a-reactowner-can-have-refs-isso-geralmente-significa-que-voc\xea-est\xe1-tentando-adicionar-uma-refer\xeancia-a-um-componente-que-n\xe3o-tem-um-propriet\xe1rio",children:[]},{value:"Estou recebendo um aviso sobre useLayoutEffect em meus testes de unidade",id:"estou-recebendo-um-aviso-sobre-uselayouteffect-em-meus-testes-de-unidade",children:[]}]}],u={rightToc:c};function p(e){var o=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},u,a,{components:o,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"solu\xe7\xe3o-de-problemas"},"Solu\xe7\xe3o de problemas"),Object(r.b)("p",null,"Certifique-se de verificar a se\xe7\xe3o ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://redux.js.org/troubleshooting"}),"Solu\xe7\xe3o de problemas do Redux")," primeiro."),Object(r.b)("h3",{id:"estou-recebendo-o-seguinte-alerta-o-acesso-a-proptypes-por-meio-do-pacote-react-principal-est\xe1-obsoleto-use-o-pacote-prop-types-do-npm"},"Estou recebendo o seguinte alerta: O acesso a PropTypes por meio do pacote React principal est\xe1 obsoleto. Use o pacote prop-types do npm."),Object(r.b)("p",null,"Este aviso \xe9 mostrado ao usar o react 15.5. \\ *. Basicamente, agora \xe9 apenas um aviso, mas no react16 o aplicativo pode falhar. os PropTypes agora devem ser importados do pacote 'prop-types', e n\xe3o do pacote react."),Object(r.b)("p",null,"Atualize para a vers\xe3o mais recente do react-redux."),Object(r.b)("h3",{id:"minhas-views-n\xe3o-est\xe3o-atualizando"},"Minhas views n\xe3o est\xe3o atualizando!"),Object(r.b)("p",null,"Veja o link acima.\nEm resumo,"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Os redutores nunca devem sofrer muta\xe7\xe3o, eles devem retornar novos objetos ou o React Redux n\xe3o ver\xe1 as atualiza\xe7\xf5es."),Object(r.b)("li",{parentName:"ul"},"Certifique-se de ligar os action creators com o argumento ",Object(r.b)("inlineCode",{parentName:"li"},"mapDispatchToProps")," para a fun\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"li"},"connect()")," ou com o m\xe9todo ",Object(r.b)("inlineCode",{parentName:"li"},"bindActionCreators() "),", ou que voc\xea chame manualmente ",Object(r.b)("inlineCode",{parentName:"li"},"dispatch()"),". Apenas chamar sua fun\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"li"},"MyActionCreators.addTodo ()")," n\xe3o funcionar\xe1 porque ela apenas ",Object(r.b)("em",{parentName:"li"},"retorna")," uma action, mas n\xe3o achama ",Object(r.b)("em",{parentName:"li"},"dispatch"),".")),Object(r.b)("h3",{id:"minhas-views-n\xe3o-est\xe3o-atualizando-na-mudan\xe7a-de-rota-com-react-router-013"},"Minhas views n\xe3o est\xe3o atualizando na mudan\xe7a de rota com React Router 0.13"),Object(r.b)("p",null,"Se estiver usando o React Router 0.13, voc\xea pode ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux/issues/43"}),"se topar com este problema"),". A solu\xe7\xe3o \xe9 simples: sempre que voc\xea usar ",Object(r.b)("inlineCode",{parentName:"p"},"<RouteHandler>")," ou o ",Object(r.b)("inlineCode",{parentName:"p"},"Handler")," fornecido por ",Object(r.b)("inlineCode",{parentName:"p"},"Router.run"),", passe o estado do router para ele."),Object(r.b)("p",null,"View raiz:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'Router.run(routes, Router.HistoryLocation, (Handler, routerState) => {\n  // observe "routerState" aqui\n  ReactDOM.render(\n    <Provider store={store}>\n      {/* observe "routerState" aqui */}\n      <Handler routerState={routerState} />\n    </Provider>,\n    document.getElementById(\'root\')\n  )\n})\n')),Object(r.b)("p",null,"View aninhada:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"render() {\n  // Continue passando para baixo\n  return <RouteHandler routerState={this.props.routerState} />\n}\n")),Object(r.b)("p",null,"Convenientemente, isso d\xe1 aos seus componentes acesso ao estado do router!\nVoc\xea tamb\xe9m pode atualizar para React Router 1.0, que n\xe3o deve ter esse problema. (Deixe-nos saber se isso acontecer!)"),Object(r.b)("h3",{id:"minhas-views-n\xe3o-est\xe3o-atualizando-quando-algo-muda-fora-do-redux"},"Minhas views n\xe3o est\xe3o atualizando quando algo muda fora do Redux"),Object(r.b)("p",null,"Se suas visualiza\xe7\xf5es dependem do estado global ou ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"http://facebook.github.io/react/docs/context.html"}),"React \u201ccontexto\u201d"),", voc\xea pode descobrir que as views decoradas com ",Object(r.b)("inlineCode",{parentName:"p"},"connect()")," falhar\xe3o ao atualizar."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Isso ocorre porque ",Object(r.b)("inlineCode",{parentName:"p"},"connect()")," implementa ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate"}),"shouldComponentUpdate")," por padr\xe3o, assumindo que seu componente produzir\xe1 os mesmos resultados dados as mesmas props e estado. Este \xe9 um conceito semelhante ao ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://facebook.github.io/react/docs/pure-render-mixin.html"}),"PureRenderMixin")," do React.")),Object(r.b)("p",null,"A ",Object(r.b)("em",{parentName:"p"},"melhor")," solu\xe7\xe3o para isso \xe9 ter certeza de que seus componentes s\xe3o puros e passar qualquer estado externo a eles por meio de props. Isso garantir\xe1 que suas views n\xe3o sejam renderizadas novamente, a menos que elas realmente precisem ser renderizadas novamente e isso ir\xe1 acelerar muito seu aplicativo."),Object(r.b)("p",null,"Se isso n\xe3o for pr\xe1tico por algum motivo (por exemplo, se voc\xea estiver usando uma biblioteca que depende muito do contexto React), voc\xea pode passar a op\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},"pure: false")," para a fun\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},"connect()"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"function mapStateToProps(state) {\n  return { todos: state.todos }\n}\n\nexport default connect(\n  mapStateToProps,\n  null,\n  null,\n  {\n    pure: false\n  }\n)(TodoApp)\n")),Object(r.b)("p",null,"Isso remover\xe1 a suposi\xe7\xe3o de que ",Object(r.b)("inlineCode",{parentName:"p"},"TodoApp")," \xe9 puro e far\xe1 com que ele seja atualizado sempre que seu componente pai for renderizado. Observe que isso deixar\xe1 seu aplicativo com menor desempenho, portanto, fa\xe7a isso apenas se n\xe3o tiver outra op\xe7\xe3o."),Object(r.b)("h3",{id:"n\xe3o-foi-poss\xedvel-encontrar-store-no-contexto-ou-props"},'N\xe3o foi poss\xedvel encontrar "store" no contexto ou props'),Object(r.b)("p",null,"Se voc\xea tiver problemas de contexto,"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375"}),"Certifique-se de n\xe3o ter uma inst\xe2ncia duplicada do React")," na sua p\xe1gina."),Object(r.b)("li",{parentName:"ol"},"Certifique-se de n\xe3o se esquecer de envolver sua raiz ou algum outro componente ancestral em ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"#provider-store"}),Object(r.b)("inlineCode",{parentName:"a"},"<Provider>")),"."),Object(r.b)("li",{parentName:"ol"},"Verifique se voc\xea est\xe1 executando as vers\xf5es mais recentes do React e do React Redux.")),Object(r.b)("h3",{id:"invariant-violation-addcomponentasrefto-only-a-reactowner-can-have-refs-isso-geralmente-significa-que-voc\xea-est\xe1-tentando-adicionar-uma-refer\xeancia-a-um-componente-que-n\xe3o-tem-um-propriet\xe1rio"},"Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs. Isso geralmente significa que voc\xea est\xe1 tentando adicionar uma refer\xeancia a um componente que n\xe3o tem um propriet\xe1rio"),Object(r.b)("p",null,"Se voc\xea estiver usando o React para web, isso geralmente significa que voc\xea tem um ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375"}),"React duplicado"),". Siga as instru\xe7\xf5es no link para corrigir isso."),Object(r.b)("h3",{id:"estou-recebendo-um-aviso-sobre-uselayouteffect-em-meus-testes-de-unidade"},"Estou recebendo um aviso sobre useLayoutEffect em meus testes de unidade"),Object(r.b)("p",null,"O ReactDOM emite este aviso se ",Object(r.b)("inlineCode",{parentName:"p"},"useLayoutEffect"),' for usado "no servidor". O React Redux tenta contornar o problema detectando se ele est\xe1 sendo executado dentro de um contexto de navegador. Jest, por padr\xe3o, define o ambiente do navegador o suficiente para que o React Redux pense que est\xe1 sendo executado em um navegador, causando esses avisos.'),Object(r.b)("p",null,"Voc\xea pode evitar o aviso configurando o ",Object(r.b)("inlineCode",{parentName:"p"},"@jest-environment")," para um \xfanico arquivo de teste:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"// my.test.jsx\n/**\n * @jest-environment node\n */\n")),Object(r.b)("p",null,"Ou configurando-o globalmente:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'// package.json\n{\n  "name": "my-project",\n  "jest": {\n    "testEnvironment": "node"\n  }\n}\n')),Object(r.b)("p",null,"Veja ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebook/react/issues/14927#issuecomment-490426131"}),"https://github.com/facebook/react/issues/14927#issuecomment-490426131")))}p.isMDXComponent=!0}}]);