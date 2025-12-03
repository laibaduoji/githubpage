import{w as f,u as a,x as m}from"./index-KykRHoMA.js";import{c as p}from"./index-dfC9FFeW.js";import"./index-BxlyR9R9.js";import"./index-B2NnSSQj.js";import"./if-defined-BQFZEj_g.js";import"./index-zBSDhBTH.js";import"./index-WzuWGxJp.js";import"./index-CJgudboF.js";const u=f`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var w=function(o,t,i,r){var n=arguments.length,e=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,i,r);else for(var c=o.length-1;c>=0;c--)(l=o[c])&&(e=(n<3?l(e):n>3?l(t,i,e):l(t,i))||e);return n>3&&e&&Object.defineProperty(t,i,e),e};let s=class extends a{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=u;s=w([p("w3m-transactions-view")],s);export{s as W3mTransactionsView};
