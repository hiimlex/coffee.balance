import{c as p,d as $,e as S,s,j as l,r as f,f as j,R as x}from"./index-4a16fc86.js";function b(e=p){const o=e===p?$:S(e);return function(){const{store:r}=o();return r}}const k=b();function P(e=p){const o=e===p?k:b(e);return function(){return o().dispatch}}const Q=P(),Z=s.button`
	padding: 10px 12px;
	font-size: 14px;
	font-weight: 600;
	border-radius: 8px;

	box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.1);

	transition: all 0.1s ease-in-out;

	${({variant:e,theme:o})=>e==="primary"&&`background-color: ${o.colors.purple1};
		color: ${o.colors.white1};
	`}

	&:hover, &:active {
		cursor: pointer;
		transform: scale(1.02);
	}

	&:focus {
		outline: 2px solid ${({theme:e})=>e.colors.black1};
	}

	&:disabled {
		background-color: ${({theme:e})=>e.colors.disabled};
		color: ${({theme:e})=>e.colors.black1};

		&:hover {
			transform: none;
			cursor: not-allowed;
		}
	}
`,R=s.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`,z=s.span`
	font-size: 32px;
	font-weight: 400;
	color: ${({theme:e})=>e.colors.nude1};
`,O=s.span`
	font-size: 32px;
	font-weight: 600;
	color: ${({theme:e})=>e.colors.brown3};
`,T=s.span`
	font-size: 16px;
	font-weight: 400;
`,ee=()=>l.jsxs(R,{children:[l.jsxs(z,{children:[l.jsx(O,{children:"Coffee."}),"balance"]}),l.jsx(T,{children:"make good coffee by yourself"})]}),C=s.input`
	appearance: none;
	border: none;
	border-radius: 8px;
	background: ${({theme:e})=>e.colors.nude1};
	color: ${({theme:e})=>e.colors.black1};
	outline: none;
	font-size: 14px;
	height: 40px;
	font-weight: 500;

	padding: 10px 12px;

	&::placeholder,
	&::-webkit-input-placeholder {
		color: ${({theme:e})=>e.colors.black1};
	}
	&:-ms-input-placeholder {
		color: ${({theme:e})=>e.colors.black1};
	}

	&:focus {
		outline: 2px solid ${({theme:e})=>e.colors.black1};
	}

	/* Chrome, Safari, Edge, Opera */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	&[type="number"] {
		-moz-appearance: textfield;
	}

	&.with-prefix {
		padding-left: 24px;
	}
`,F=s.div`
	position: absolute;
	right: 12px;
	height: 100%;
	font-size: 14px;
	color: ${({theme:e})=>e.colors.purple2};
	font-weight: 700;

	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 899;
`,E=s.div`
	position: absolute;
	left: 12px;
	height: 100%;
	font-size: 14px;
	color: ${({theme:e})=>e.colors.black1};
	font-weight: 500;

	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 899;
`,_=s.div`
	display: flex;
	position: relative;

	height: fit-content;
`,oe=f.forwardRef(({prefix:e,suffix:o,width:t,inputProps:r,register:n},i)=>l.jsxs(_,{style:{width:t},children:[e&&l.jsx(E,{children:e}),l.jsx(C,{...r,style:{...r==null?void 0:r.style,width:t},ref:i,className:e?"with-prefix":"",...n}),o&&l.jsx(F,{children:o})]}));var w={exports:{}},I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",H=I,D=H;function y(){}function v(){}v.resetWarningCache=y;var L=function(){function e(r,n,i,a,h,d){if(d!==D){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}e.isRequired=e;function o(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:v,resetWarningCache:y};return t.PropTypes=t,t};w.exports=L();var W=w.exports;const c=j(W);function u(){return u=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function X(e,o){if(e==null)return{};var t=N(e,o),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function N(e,o){if(e==null)return{};var t={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(o.indexOf(n)>=0)&&(t[n]=e[n]);return t}var m=f.forwardRef(function(e,o){var t=e.color,r=t===void 0?"currentColor":t,n=e.size,i=n===void 0?24:n,a=X(e,["color","size"]);return x.createElement("svg",u({ref:o,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),x.createElement("polyline",{points:"6 9 12 15 18 9"}))});m.propTypes={color:c.string,size:c.oneOfType([c.string,c.number])};m.displayName="ChevronDown";const B=m,G=s.div`
	display: flex;
	height: fit-content;

	position: relative;
`,V=s.select`
	border: none;
	border-radius: 8px;
	background: ${({theme:e})=>e.colors.nude1};
	color: ${({theme:e})=>e.colors.black1};
	outline: none;
	font-size: 14px;
	font-weight: 500;
	height: 40px;

	padding: 10px 12px;

	appearance: none;

	&:hover {
		cursor: pointer;
	}

	&:focus {
		outline: 2px solid ${({theme:e})=>e.colors.black1};
	}
`,M=s.div`
	position: absolute;
	right: 12px;
	height: 100%;

	.icon {
		stroke: ${({theme:e})=>e.colors.purple2};
	}

	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 900;
`;f.forwardRef(({options:e,width:o,placeholder:t,register:r,selectProps:n},i)=>l.jsxs(G,{children:[l.jsxs(V,{...n,style:{width:o},ref:i,...r,children:[t&&l.jsx("option",{value:"",children:t}),e.map(({label:a,value:h},d)=>l.jsx("option",{value:h,children:a},d))]}),l.jsx(M,{children:l.jsx(B,{size:14,className:"icon"})})]}));const U={name:"4:6",methods:["v60"],tip:"4:6 it is a method that allows you to control the taste of coffee by changing the amount of water poured in each pour, the pours are divided in two parts 40% and 60% of the total.",recommendedGrindSize:"medium",recommendedRatio:15,pours:5,minutes:3,formula:(e,o)=>{const t=e*o,r=(t*.4/2).toFixed(0),n=(t*.6/3).toFixed(0),i=2;return{blooming$:(e*i).toFixed(0),fourthPour$:r,sixthPour$:n,bloomingX$:i}},steps:["rinse","blooming","timer30","fourthPour","fourthPour","sixthPour","sixthPour","sixthPour"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fourthPour:{label:"pour fourthPour$g water"},sixthPour:{label:"pour sixthPour$g water"}}},q={name:"continuous",methods:["v60","melitta"],tip:"pour all water at once, a powerful and hard method to make a simple cup, the taste will be controlled by time and water rotation, the grind size is very important at this method.",recommendedGrindSize:"medium",recommendedRatio:12.5,pours:1,minutes:3,formula:(e,o)=>{const t=(e*o).toFixed(0),r=1.5,n=e*r;return{fullPour$:t,blooming$:n,bloomingX$:r}},steps:["rinse","blooming","timer30","fullPour"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fullPour:{label:"pour fullPour$g water"}}},A={name:"5 pour",methods:["v60"],minutes:3,pours:5,tip:"usual V60 brewing, this beverage involves pouring water in five batches, instead of pouring just a little bit of water for blooming before dropping in the rest.",recommendedGrindSize:"medium",recommendedRatio:15,formula:(e,o)=>{const r=(e*o/5).toFixed(0),n=3,i=(e*n).toFixed(0);return{bloomingX$:n,fifth$:r,blooming$:i}},steps:["rinse","blooming","timer30","fifthPour","fifthPour","fifthPour","fifthPour","fifthPour"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fifthPour:{label:"pour fifth$g water"},timer30:{label:"wait 30s",isTimer:!0}}},Y={name:"melitta",methods:["melitta"],minutes:3.3,pours:1,formula:(e,o)=>{const t=e*o,r=(t*.25).toFixed(0),n=(t*.125).toFixed(0),i=.125;return{blooming$:(t*i).toFixed(0),bloomingX$:i,pour12$:n,pour25$:r}},recommendedGrindSize:"medium",recommendedRatio:17,tip:"the melitta method is a simple method that involves pouring all the water at once, the grind size is very important at this method.",steps:["rinse","blooming","timer30","pour12","timer10","pour25","pour25","pour25"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},blooming:{label:"pre-wet blooming$g water (~bloomingX$x of grounds weight)"},timer30:{label:"wait 30s",isTimer:!0},timer10:{label:"wait 10s",isTimer:!0},pour25:{label:"pour pour25$g water"},pour12:{label:"pour pour12$g water"}}},J=[U,q,A,Y].sort((e,o)=>e.name>o.name?1:e.name<o.name?-1:0);J.map(e=>e.name);const te=s.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	overflow: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 12px;

	min-width: 420px;
	width: 420px;

	padding: 32px 0;

	@media (max-width: 420px) {
		min-width: 100vw;
		width: 100vw;

		padding: 18px;
	}
`,re=s.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 16px;
	padding: 8px;
`;s.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 4px;
`;const ne=s.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 12px;
`;s.div`
	font-weight: 400;
	font-size: 14px;
	color: ${({theme:e})=>e.colors.nude1};

	padding-left: 12px;
`;s.div`
	width: fit-content;
	height: fit-content;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 12px;
	border-radius: 8px;

	font-weight: 600;
	font-size: 18px;
	color: ${({theme:e})=>e.colors.black1};
	background: ${({theme:e})=>e.colors.nude1};

	transition: all 0.1s ease-in-out;

	&:hover {
		cursor: pointer;
		background: ${({theme:e})=>e.colors.nude2};
	}

	${({selected:e,theme:o})=>e&&`
	background: ${o.colors.brown3} !important;
	color: ${o.colors.white1};
`};
`;const ie=s.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 4px;
`,se=s.div`
	font-weight: 400;
	font-size: 14px;
	color: ${({theme:e})=>e.colors.nude1};

	padding-left: 12px;
`,le=s.div`
	width: fit-content;
	height: fit-content;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 12px;
	border-radius: 8px;

	font-weight: 600;
	font-size: 14px;
	color: ${({theme:e})=>e.colors.black1};
	background: ${({theme:e})=>e.colors.nude1};

	transition: all 0.1s ease-in-out;

	&:hover {
		cursor: pointer;
		background: ${({theme:e})=>e.colors.nude2};
	}

	${({selected:e,theme:o})=>e&&`
	background: ${o.colors.brown3} !important;
	color: ${o.colors.white1};
`};
`;export{ee as H,oe as I,c as P,Z as S,ie as a,se as b,ne as c,J as d,le as e,te as f,re as g,Q as u};
