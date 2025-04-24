import{b7 as u,bg as b,bo as p,b8 as f,bb as v}from"./index-CuJCDeaq.js";import{n as d,c as g,o as m}from"./if-defined-BGIr1FyQ.js";const x=u`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var l=function(n,t,r,s){var i=arguments.length,o=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,r):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,r,s);else for(var c=n.length-1;c>=0;c--)(a=n[c])&&(o=(i<3?a(o):i>3?a(t,r,o):a(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o};let e=class extends f{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return v`
      <button ?disabled=${this.disabled} tabindex=${m(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};e.styles=[b,p,x];l([d()],e.prototype,"tabIdx",void 0);l([d({type:Boolean})],e.prototype,"disabled",void 0);l([d()],e.prototype,"color",void 0);e=l([g("wui-link")],e);
