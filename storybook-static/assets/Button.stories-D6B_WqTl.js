import{j as Y}from"./jsx-runtime-QvZ8i92b.js";import{g as x}from"./index-uubelm5h.js";const C="_button_u6406_1",j="_primary_u6406_12",F="_bordered_u6406_16",q="_faded_u6406_19",T="_secondary_u6406_24",U="_small_u6406_44",V="_medium_u6406_50",G="_large_u6406_56",a={button:C,primary:j,bordered:F,faded:q,secondary:T,small:U,medium:V,large:G};var O={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var d={}.hasOwnProperty;function o(){for(var r="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(r=c(r,f(n)))}return r}function f(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return o.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var t="";for(var n in r)d.call(r,n)&&r[n]&&(t=c(t,n));return t}function c(r,t){return t?r?r+" "+t:r+t:r}e.exports?(o.default=o,e.exports=o):window.classNames=o})()})(O);var w=O.exports;const H=x(w);var s=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e))(s||{}),S=(e=>(e.BORDERED="bordered",e.FADED="faded",e))(S||{}),i=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(i||{});const P=({children:e,color:d,size:o,className:f,variant:c})=>Y.jsx("button",{className:H(a.button,f,{[a.primary]:d==="primary",[a.secondary]:d==="secondary"},{[a.bordered]:c==="bordered",[a.faded]:c==="faded"},{[a.small]:o==="small",[a.medium]:o==="medium",[a.large]:o==="large"}),children:e});P.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},color:{required:!0,tsType:{name:"ButtonColor"},description:""},size:{required:!0,tsType:{name:"ButtonSize"},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"ButtonVariant"},description:""}}};const Q={title:"Button",component:P,parameters:{layout:"centered"}},u={args:{color:s.PRIMARY,variant:S.FADED,size:i.SMALL,children:"Primary Small"}},m={args:{color:s.SECONDARY,variant:S.BORDERED,size:i.MEDIUM,children:"Secondary Medium"}},l={args:{color:s.SECONDARY,variant:S.FADED,size:i.LARGE,children:"Large"}},p={args:{color:s.PRIMARY,size:i.MEDIUM,children:"Medium"}},y={args:{color:s.PRIMARY,size:i.SMALL,children:"Small"}};var R,E,M;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    color: ButtonColor.PRIMARY,
    variant: ButtonVariant.FADED,
    size: ButtonSize.SMALL,
    children: "Primary Small"
  }
}`,...(M=(E=u.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var _,A,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: ButtonColor.SECONDARY,
    variant: ButtonVariant.BORDERED,
    size: ButtonSize.MEDIUM,
    children: "Secondary Medium"
  }
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var g,B,L;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: ButtonColor.SECONDARY,
    variant: ButtonVariant.FADED,
    size: ButtonSize.LARGE,
    children: "Large"
  }
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var h,v,b;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: ButtonColor.PRIMARY,
    size: ButtonSize.MEDIUM,
    children: "Medium"
  }
}`,...(b=(v=p.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var z,I,N;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    color: ButtonColor.PRIMARY,
    size: ButtonSize.SMALL,
    children: "Small"
  }
}`,...(N=(I=y.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const W=["Primary","Secondary","Large","Medium","Small"];export{l as Large,p as Medium,u as Primary,m as Secondary,y as Small,W as __namedExportsOrder,Q as default};
