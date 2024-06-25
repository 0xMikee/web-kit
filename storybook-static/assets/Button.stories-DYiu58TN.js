import{j as P}from"./jsx-runtime-DWbWqHZ-.js";import{g as Y}from"./index-l2PZgWEW.js";const D="_button_ak5qw_1",I="_small_ak5qw_10",O="_medium_ak5qw_16",b="_large_ak5qw_22",a={button:D,small:I,medium:O,large:b};var z={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(r){(function(){var c={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=y(e,d(n)))}return e}function d(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)c.call(e,n)&&e[n]&&(t=y(t,n));return t}function y(e,t){return t?e?e+" "+t:e+t:e}r.exports?(s.default=s,r.exports=s):window.classNames=s})()})(z);var q=z.exports;const v=Y(q);var o=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r))(o||{}),i=(r=>(r.SMALL="small",r.MEDIUM="medium",r.LARGE="large",r))(i||{});const B=({children:r,type:c,size:s,className:d})=>P.jsx("button",{className:v(a.button,d,{[a.primary]:c==="primary",[a.secondary]:c==="secondary"},{[a.small]:s==="small",[a.medium]:s==="medium",[a.large]:s==="large"}),children:r});B.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},type:{required:!0,tsType:{name:"ButtonType"},description:""},size:{required:!0,tsType:{name:"ButtonSize"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"Button",component:B,parameters:{layout:"centered"}},m={args:{type:o.PRIMARY,size:i.SMALL,children:"Primary Small"}},p={args:{type:o.SECONDARY,size:i.MEDIUM,children:"Secondary Medium"}},u={args:{type:o.SECONDARY,size:i.LARGE,children:"Large"}},l={args:{type:o.PRIMARY,size:i.SMALL,children:"Small"}};var S,f,g;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: ButtonType.PRIMARY,
    size: ButtonSize.SMALL,
    children: "Primary Small"
  }
}`,...(g=(f=m.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var A,R,M;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: ButtonType.SECONDARY,
    size: ButtonSize.MEDIUM,
    children: "Secondary Medium"
  }
}`,...(M=(R=p.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var L,_,E;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: ButtonType.SECONDARY,
    size: ButtonSize.LARGE,
    children: "Large"
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var h,N,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: ButtonType.PRIMARY,
    size: ButtonSize.SMALL,
    children: "Small"
  }
}`,...(x=(N=l.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const C=["Primary","Secondary","Large","Small"];export{u as Large,m as Primary,p as Secondary,l as Small,C as __namedExportsOrder,w as default};
