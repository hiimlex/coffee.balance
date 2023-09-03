import{c as p,d as $,e as S,s as i,j as a,r as f,f as j,R as g}from"./index-99c35bdd.js";function b(e=p){const o=e===p?$:S(e);return function(){const{store:t}=o();return t}}const k=b();function P(e=p){const o=e===p?k:b(e);return function(){return o().dispatch}}const K=P(),Q=i.button`
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
`,R=i.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`,z=i.span`
	font-size: 32px;
	font-weight: 400;
	color: ${({theme:e})=>e.colors.nude1};
`,O=i.span`
	font-size: 32px;
	font-weight: 600;
	color: ${({theme:e})=>e.colors.brown3};
`,T=i.span`
	font-size: 16px;
	font-weight: 400;
`,Z=()=>a.jsxs(R,{children:[a.jsxs(z,{children:[a.jsx(O,{children:"Coffee."}),"balance"]}),a.jsx(T,{children:"make good coffee by yourself"})]}),C=i.input`
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
`,F=i.div`
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
`,E=i.div`
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
`,_=i.div`
	display: flex;
	position: relative;

	height: fit-content;
`,ee=f.forwardRef(({prefix:e,suffix:o,width:r,inputProps:t,register:n},s)=>a.jsxs(_,{style:{width:r},children:[e&&a.jsx(E,{children:e}),a.jsx(C,{...t,style:{...t==null?void 0:t.style,width:r},ref:s,className:e?"with-prefix":"",...n}),o&&a.jsx(F,{children:o})]}));var y={exports:{}},I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",H=I,D=H;function w(){}function v(){}v.resetWarningCache=w;var L=function(){function e(t,n,s,l,m,d){if(d!==D){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function o(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:v,resetWarningCache:w};return r.PropTypes=r,r};y.exports=L();var W=y.exports;const c=j(W);function u(){return u=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},u.apply(this,arguments)}function N(e,o){if(e==null)return{};var r=V(e,o),t,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],!(o.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function V(e,o){if(e==null)return{};var r={},t=Object.keys(e),n,s;for(s=0;s<t.length;s++)n=t[s],!(o.indexOf(n)>=0)&&(r[n]=e[n]);return r}var h=f.forwardRef(function(e,o){var r=e.color,t=r===void 0?"currentColor":r,n=e.size,s=n===void 0?24:n,l=N(e,["color","size"]);return g.createElement("svg",u({ref:o,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),g.createElement("polyline",{points:"6 9 12 15 18 9"}))});h.propTypes={color:c.string,size:c.oneOfType([c.string,c.number])};h.displayName="ChevronDown";const B=h,X=i.div`
	display: flex;
	height: fit-content;

	position: relative;
`,G=i.select`
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
`,M=i.div`
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
`;f.forwardRef(({options:e,width:o,placeholder:r,register:t,selectProps:n},s)=>a.jsxs(X,{children:[a.jsxs(G,{...n,style:{width:o},ref:s,...t,children:[r&&a.jsx("option",{value:"",children:r}),e.map(({label:l,value:m},d)=>a.jsx("option",{value:m,children:l},d))]}),a.jsx(M,{children:a.jsx(B,{size:14,className:"icon"})})]}));const U={name:"4:6",methods:["v60"],description:"4:6 it is a method that allows you to control the taste of coffee by changing the amount of water poured in each pour, the pours are divided in two parts 40% and 60% of the total.",recommendedGrindSize:"medium-coarse",recommendedRatio:15,pours:5,minutes:3,formula:(e,o)=>{const r=e*o,t=(r*.4).toFixed(0),n=(r*.6).toFixed(0),s=2;return{blooming$:(e*s).toFixed(0),fourthPour$:t,sixthPour$:n,bloomingX$:s}},steps:["rinse","blooming","timer30","fourthPour","fourthPour","sixthPour","sixthPour","sixthPour"],stepsObject:{rinse:{label:"rinse filter & pre-heat V60"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fourthPour:{label:"pour fourthPour$g water"},sixthPour:{label:"pour sixthPour$g water"}}},q={name:"continuous",methods:["v60","melitta"],description:"pour all water at once, a powerful and hard method to make a simple cup, the taste will be controlled by time and water rotation, the grind size is very important at this method.",recommendedGrindSize:"medium-coarse",recommendedRatio:12.5,pours:1,minutes:3,formula:(e,o)=>{const r=(e*o).toFixed(0),t=1.5,n=e*t;return{fullPour$:r,blooming$:n,bloomingX$:t}},steps:["rinse","blooming","timer30","fullPour"],stepsObject:{rinse:{label:"rinse filter & pre-heat V60"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fullPour:{label:"pour fullPour$g water"}}},A={name:"5 pour",methods:["v60"],minutes:3,pours:5,description:"usual V60 brewing, this beverage involves pouring water in five batches, instead of pouring just a little bit of water for blooming before dropping in the rest.",recommendedGrindSize:"medium-coarse",recommendedRatio:15,formula:(e,o)=>{const t=(e*o/5).toFixed(0),n=3,s=(e*n).toFixed(0);return{bloomingX$:n,fifth$:t,blooming$:s}},steps:["rinse","blooming","timer30","fifthPour","fifthPour","fifthPour","fifthPour","fifthPour"],stepsObject:{rinse:{label:"rinse filter & pre-heat V60"},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fifthPour:{label:"pour fifth$g water"},timer30:{label:"wait 30s",isTimer:!0}}},Y=[U,q,A].sort((e,o)=>e.name>o.name?1:e.name<o.name?-1:0);Y.map(e=>e.name);const oe=i.div`
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

	@media (max-width: 420px) {
		min-width: 100vw;
		width: 100vw;

		padding: 18px;
	}
`,te=i.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 16px;
	padding: 8px;
`;i.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 4px;
`;const re=i.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 12px;
`;i.div`
	font-weight: 400;
	font-size: 14px;
	color: ${({theme:e})=>e.colors.nude1};

	padding-left: 12px;
`;i.div`
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
`;const ne=i.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 4px;
`,ie=i.div`
	font-weight: 400;
	font-size: 14px;
	color: ${({theme:e})=>e.colors.nude1};

	padding-left: 12px;
`,se=i.div`
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
`;export{Z as H,ee as I,c as P,Q as S,ne as a,ie as b,re as c,Y as d,se as e,oe as f,te as g,K as u};
