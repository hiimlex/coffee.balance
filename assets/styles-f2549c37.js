import{c as p,d as $,e as S,s as i,j as l,r as f,f as k,R as b}from"./index-80ee5ae9.js";function m(e=p){const o=e===p?$:S(e);return function(){const{store:t}=o();return t}}const j=m();function P(e=p){const o=e===p?j:m(e);return function(){return o().dispatch}}const J=P(),K=i.button`
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
`,O=i.span`
	font-size: 32px;
	font-weight: 400;
	color: ${({theme:e})=>e.colors.nude1};
`,z=i.span`
	font-size: 32px;
	font-weight: 600;
	color: ${({theme:e})=>e.colors.brown3};
`,T=i.span`
	font-size: 16px;
	font-weight: 400;
`,Q=()=>l.jsxs(R,{children:[l.jsxs(O,{children:[l.jsx(z,{children:"Coffee."}),"balance"]}),l.jsx(T,{children:"make good coffee by yourself"})]}),C=i.input`
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
`,E=i.div`
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
`,_=i.div`
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
`,F=i.div`
	display: flex;
	position: relative;

	height: fit-content;
`,Z=f.forwardRef(({prefix:e,suffix:o,width:n,inputProps:t,register:r},s)=>l.jsxs(F,{style:{width:n},children:[e&&l.jsx(_,{children:e}),l.jsx(C,{...t,style:{...t==null?void 0:t.style,width:n},ref:s,className:e?"with-prefix":"",...r}),o&&l.jsx(E,{children:o})]}));var y={exports:{}},I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",H=I,D=H;function w(){}function v(){}v.resetWarningCache=w;var L=function(){function e(t,r,s,a,x,d){if(d!==D){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}e.isRequired=e;function o(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:v,resetWarningCache:w};return n.PropTypes=n,n};y.exports=L();var W=y.exports;const c=k(W);function u(){return u=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(this,arguments)}function N(e,o){if(e==null)return{};var n=B(e,o),t,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],!(o.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function B(e,o){if(e==null)return{};var n={},t=Object.keys(e),r,s;for(s=0;s<t.length;s++)r=t[s],!(o.indexOf(r)>=0)&&(n[r]=e[r]);return n}var h=f.forwardRef(function(e,o){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,s=r===void 0?24:r,a=N(e,["color","size"]);return b.createElement("svg",u({ref:o,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),b.createElement("polyline",{points:"6 9 12 15 18 9"}))});h.propTypes={color:c.string,size:c.oneOfType([c.string,c.number])};h.displayName="ChevronDown";const V=h,X=i.div`
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
`,ee=f.forwardRef(({options:e,width:o,placeholder:n,register:t,selectProps:r},s)=>l.jsxs(X,{children:[l.jsxs(G,{...r,style:{width:o},ref:s,...t,children:[n&&l.jsx("option",{value:"",children:n}),e.map(({label:a,value:x},d)=>l.jsx("option",{value:x,children:a},d))]}),l.jsx(M,{children:l.jsx(V,{size:14,className:"icon"})})]})),U={name:"4/6",methods:["v60"],pours:5,minutes:3,blooming:e=>e*2,formula:(e,o)=>{const n=e*o,t=(n*.4).toFixed(0),r=(n*.6).toFixed(0),s=2;return{blooming$:(e*s).toFixed(0),fourthPour$:t,sixthPour$:r,bloomingX$:s}},steps:["rinse","blooming","timer30","fourthPour","fourthPour","sixthPour","sixthPour","sixthPour"],stepsObject:{rinse:{label:"rinse filter & pre-heat V60"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fourthPour:{label:"pour fourthPour$g water"},sixthPour:{label:"pour sixthPour$g water"}}},q={name:"continuos",methods:["v60","melita"],pours:1,minutes:3,blooming:e=>e*2,formula:(e,o)=>{const n=(e*o).toFixed(0),t=1.5,r=e*t;return{fullPour$:n,blooming$:r,bloomingX$:t}},steps:["rinse","blooming","timer30","fullPour"],stepsObject:{rinse:{label:"rinse filter & pre-heat V60"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fullPour:{label:"pour fullPour$g water"}}},A=[U,q];A.map(e=>e.name);const oe=i.div`
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
`;const ne=i.div`
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
`;const re=i.div`
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
`;export{Q as H,Z as I,c as P,K as S,re as a,ie as b,ne as c,A as d,se as e,oe as f,te as g,ee as h,J as u};
