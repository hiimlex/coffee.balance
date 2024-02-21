import{R as be,u as Pt,c as Tt,s as w,j as f,r as Q,g as Ct,a as L,b as pt,d as ze,e as Me,W as Lt,f as ht}from"./index-480b9643.js";function gt(e=be){const r=e===be?Pt:Tt(e);return function(){const{store:t}=r();return t}}const zt=gt();function Mt(e=be){const r=e===be?zt:gt(e);return function(){return r().dispatch}}const Ne=Mt(),Nt=w.button`
	padding: 10px 12px;
	font-size: 14px;
	font-weight: 600;
	border-radius: 8px;

	box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.1);

	transition: all 0.1s ease-in-out;

	${({variant:e,theme:r})=>e==="primary"&&`background-color: ${r.colors.purple1};
		color: ${r.colors.white1};
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
`,It=({children:e,variant:r,...s})=>f.jsx(Nt,{...s,variant:r,children:e}),Bt=w.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`,Ut=w.span`
	font-size: 32px;
	font-weight: 400;
	color: ${({theme:e})=>e.colors.nude1};
`,Wt=w.span`
	font-size: 32px;
	font-weight: 600;
	color: ${({theme:e})=>e.colors.brown3};
`,Ht=w.span`
	font-size: 16px;
	font-weight: 400;
`,yt=()=>f.jsxs(Bt,{children:[f.jsxs(Ut,{children:[f.jsx(Wt,{children:"Coffee."}),"balance"]}),f.jsx(Ht,{children:"make good coffee by yourself"})]}),qt=w.input`
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
`,Gt=w.div`
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
`,Xt=w.div`
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
`,Kt=w.div`
	display: flex;
	position: relative;

	height: fit-content;
`,st=Q.forwardRef(({prefix:e,suffix:r,width:s,inputProps:t,register:n},o)=>f.jsxs(Kt,{style:{width:s},children:[e&&f.jsx(Xt,{children:e}),f.jsx(qt,{...t,style:{...t==null?void 0:t.style,width:s},ref:o,className:e?"with-prefix":"",...n}),r&&f.jsx(Gt,{children:r})]}));var xt={exports:{}},Jt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Yt=Jt,Qt=Yt;function mt(){}function bt(){}bt.resetWarningCache=mt;var Zt=function(){function e(t,n,o,u,m,x){if(x!==Qt){var O=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw O.name="Invariant Violation",O}}e.isRequired=e;function r(){return e}var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:bt,resetWarningCache:mt};return s.PropTypes=s,s};xt.exports=Zt();var er=xt.exports;const J=Ct(er);function Te(){return Te=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},Te.apply(this,arguments)}function tr(e,r){if(e==null)return{};var s=rr(e,r),t,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function rr(e,r){if(e==null)return{};var s={},t=Object.keys(e),n,o;for(o=0;o<t.length;o++)n=t[o],!(r.indexOf(n)>=0)&&(s[n]=e[n]);return s}var Ie=Q.forwardRef(function(e,r){var s=e.color,t=s===void 0?"currentColor":s,n=e.size,o=n===void 0?24:n,u=tr(e,["color","size"]);return L.createElement("svg",Te({ref:r,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),L.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),L.createElement("polyline",{points:"12 19 5 12 12 5"}))});Ie.propTypes={color:J.string,size:J.oneOfType([J.string,J.number])};Ie.displayName="ArrowLeft";const sr=Ie;function Ce(){return Ce=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},Ce.apply(this,arguments)}function ir(e,r){if(e==null)return{};var s=or(e,r),t,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function or(e,r){if(e==null)return{};var s={},t=Object.keys(e),n,o;for(o=0;o<t.length;o++)n=t[o],!(r.indexOf(n)>=0)&&(s[n]=e[n]);return s}var Be=Q.forwardRef(function(e,r){var s=e.color,t=s===void 0?"currentColor":s,n=e.size,o=n===void 0?24:n,u=ir(e,["color","size"]);return L.createElement("svg",Ce({ref:r,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),L.createElement("polyline",{points:"6 9 12 15 18 9"}))});Be.propTypes={color:J.string,size:J.oneOfType([J.string,J.number])};Be.displayName="ChevronDown";const nr=Be,lr=w.div`
	display: flex;
	height: fit-content;

	position: relative;
`,ar=w.select`
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
`,cr=w.div`
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
`;Q.forwardRef(({options:e,width:r,placeholder:s,register:t,selectProps:n},o)=>f.jsxs(lr,{children:[f.jsxs(ar,{...n,style:{width:r},ref:o,...t,children:[s&&f.jsx("option",{value:"",children:s}),e.map(({label:u,value:m},x)=>f.jsx("option",{value:m,children:u},x))]}),f.jsx(cr,{children:f.jsx(nr,{size:14,className:"icon"})})]}));const ur={name:"4:6",methods:["v60"],tip:"4:6 it is a method that allows you to control the taste of coffee by changing the amount of water poured in each pour, the pours are divided in two parts 40% and 60% of the total.",recommendedGrindSize:"medium",recommendedRatio:15,pours:5,minutes:3,formula:(e,r)=>{const s=e*r,t=(s*.4/2).toFixed(0),n=(s*.6/3).toFixed(0),o=2;return{blooming$:(e*o).toFixed(0),fourthPour$:t,sixthPour$:n,bloomingX$:o}},steps:["rinse","blooming","timer30","fourthPour","fourthPour","sixthPour","sixthPour","sixthPour"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fourthPour:{label:"pour fourthPour$g water"},sixthPour:{label:"pour sixthPour$g water"}}},dr={name:"continuous",methods:["v60","melitta"],tip:"pour all water at once, a powerful and hard method to make a simple cup, the taste will be controlled by time and water rotation, the grind size is very important at this method.",recommendedGrindSize:"medium",recommendedRatio:12.5,pours:1,minutes:3,formula:(e,r)=>{const s=(e*r).toFixed(0),t=1.5,n=e*t;return{fullPour$:s,blooming$:n,bloomingX$:t}},steps:["rinse","blooming","timer30","fullPour"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fullPour:{label:"pour fullPour$g water"}}},fr={name:"5 pour",methods:["v60"],minutes:3,pours:5,tip:"usual V60 brewing, this beverage involves pouring water in five batches, instead of pouring just a little bit of water for blooming before dropping in the rest.",recommendedGrindSize:"medium",recommendedRatio:15,formula:(e,r)=>{const t=(e*r/5).toFixed(0),n=3,o=(e*n).toFixed(0);return{bloomingX$:n,fifth$:t,blooming$:o}},steps:["rinse","blooming","timer30","fifthPour","fifthPour","fifthPour","fifthPour","fifthPour"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fifthPour:{label:"pour fifth$g water"},timer30:{label:"wait 30s",isTimer:!0}}},pr={name:"melitta",methods:["melitta"],minutes:3.3,pours:1,formula:(e,r)=>{const s=e*r,t=(s*.25).toFixed(0),n=(s*.125).toFixed(0),o=.125;return{blooming$:(s*o).toFixed(0),bloomingX$:o,pour12$:n,pour25$:t}},recommendedGrindSize:"medium",recommendedRatio:17,tip:"the melitta method is a simple method that involves pouring all the water at once, the grind size is very important at this method.",steps:["rinse","blooming","timer30","pour12","timer10","pour25","pour25","pour25"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},blooming:{label:"pre-wet blooming$g water (~bloomingX$x of grounds weight)"},timer30:{label:"wait 30s",isTimer:!0},timer10:{label:"wait 10s",isTimer:!0},pour25:{label:"pour pour25$g water"},pour12:{label:"pour pour12$g water"}}},Ue=[ur,dr,fr,pr].sort((e,r)=>e.name>r.name?1:e.name<r.name?-1:0);Ue.map(e=>e.name);const hr=w.div`
	display: flex;
	width: 100vw;
	height: fit-content;
	
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
`,gr=w.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 16px;
	padding: 8px;
`;w.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 4px;
`;const yr=w.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 12px;
`;w.div`
	font-weight: 400;
	font-size: 14px;
	color: ${({theme:e})=>e.colors.nude1};

	padding-left: 12px;
`;w.div`
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

	${({selected:e,theme:r})=>e&&`
	background: ${r.colors.brown3} !important;
	color: ${r.colors.white1};
`};
`;const xr=w.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 4px;
`,mr=w.div`
	font-weight: 400;
	font-size: 14px;
	color: ${({theme:e})=>e.colors.nude1};

	padding-left: 12px;
`,br=w.div`
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

	${({selected:e,theme:r})=>e&&`
	background: ${r.colors.brown3} !important;
	color: ${r.colors.white1};
`};
`,vr=({onSelectRecipe:e,selectedRecipeName:r})=>f.jsxs(xr,{children:[f.jsx(mr,{children:"pour-over recipe"}),f.jsx(yr,{children:Ue.map((s,t)=>f.jsx(br,{onClick:()=>e(s),selected:r===s.name,children:s.name},t))})]});var ge=e=>e.type==="checkbox",ae=e=>e instanceof Date,T=e=>e==null;const vt=e=>typeof e=="object";var R=e=>!T(e)&&!Array.isArray(e)&&vt(e)&&!ae(e),wr=e=>R(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,Sr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,kr=(e,r)=>e.has(Sr(r)),_r=e=>{const r=e.constructor&&e.constructor.prototype;return R(r)&&r.hasOwnProperty("isPrototypeOf")},We=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function K(e){let r;const s=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(We&&(e instanceof Blob||e instanceof FileList))&&(s||R(e)))if(r=s?[]:{},!s&&!_r(e))r=e;else for(const t in e)e.hasOwnProperty(t)&&(r[t]=K(e[t]));else return e;return r}var ye=e=>Array.isArray(e)?e.filter(Boolean):[],F=e=>e===void 0,p=(e,r,s)=>{if(!r||!R(e))return s;const t=ye(r.split(/[,[\].]+?/)).reduce((n,o)=>T(n)?n:n[o],e);return F(t)||t===e?F(e[r])?s:e[r]:t};const it={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};L.createContext(null);var Vr=(e,r,s,t=!0)=>{const n={defaultValues:r._defaultValues};for(const o in e)Object.defineProperty(n,o,{get:()=>{const u=o;return r._proxyFormState[u]!==I.all&&(r._proxyFormState[u]=!t||I.all),s&&(s[u]=!0),e[u]}});return n},M=e=>R(e)&&!Object.keys(e).length,jr=(e,r,s,t)=>{s(e);const{name:n,...o}=e;return M(o)||Object.keys(o).length>=Object.keys(r).length||Object.keys(o).find(u=>r[u]===(!t||I.all))},Oe=e=>Array.isArray(e)?e:[e];function $r(e){const r=L.useRef(e);r.current=e,L.useEffect(()=>{const s=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",Ar=(e,r,s,t,n)=>H(e)?(t&&r.watch.add(e),p(s,e,n)):Array.isArray(e)?e.map(o=>(t&&r.watch.add(o),p(s,o))):(t&&(r.watchAll=!0),s),He=e=>/^\w*$/.test(e),wt=e=>ye(e.replace(/["|']|\]/g,"").split(/\.|\[/));function _(e,r,s){let t=-1;const n=He(r)?[r]:wt(r),o=n.length,u=o-1;for(;++t<o;){const m=n[t];let x=s;if(t!==u){const O=e[m];x=R(O)||Array.isArray(O)?O:isNaN(+n[t+1])?{}:[]}e[m]=x,e=e[m]}return e}var Fr=(e,r,s,t,n)=>r?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[t]:n||!0}}:{};const Le=(e,r,s)=>{for(const t of s||Object.keys(e)){const n=p(e,t);if(n){const{_f:o,...u}=n;if(o&&r(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else R(u)&&Le(u,r)}}};var ot=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),nt=(e,r,s)=>!s&&(r.watchAll||r.watch.has(e)||[...r.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Or=(e,r,s)=>{const t=ye(p(e,s));return _(t,"root",r[s]),_(e,s,t),e},ce=e=>typeof e=="boolean",qe=e=>e.type==="file",Y=e=>typeof e=="function",ve=e=>{if(!We)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},me=e=>H(e),Ge=e=>e.type==="radio",we=e=>e instanceof RegExp;const lt={value:!1,isValid:!1},at={value:!0,isValid:!0};var St=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||e[0].value===""?at:{value:e[0].value,isValid:!0}:at:lt}return lt};const ct={isValid:!1,value:null};var kt=e=>Array.isArray(e)?e.reduce((r,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:r,ct):ct;function ut(e,r,s="validate"){if(me(e)||Array.isArray(e)&&e.every(me)||ce(e)&&!e)return{type:s,message:me(e)?e:"",ref:r}}var ie=e=>R(e)&&!we(e)?e:{value:e,message:""},dt=async(e,r,s,t,n)=>{const{ref:o,refs:u,required:m,maxLength:x,minLength:O,min:V,max:k,pattern:y,validate:B,name:P,valueAsNumber:Z,mount:xe,disabled:_e}=e._f,b=p(r,P);if(!xe||_e)return{};const N=u?u[0]:o,q=S=>{t&&N.reportValidity&&(N.setCustomValidity(ce(S)?"":S||""),N.reportValidity())},D={},ue=Ge(o),de=ge(o),Ve=ue||de,U=(Z||qe(o))&&F(o.value)&&F(b)||ve(o)&&o.value===""||b===""||Array.isArray(b)&&!b.length,ee=Fr.bind(null,P,s,D),G=(S,v,$,C=X.maxLength,z=X.minLength)=>{const W=S?v:$;D[P]={type:S?C:z,message:W,ref:o,...ee(S?C:z,W)}};if(n?!Array.isArray(b)||!b.length:m&&(!Ve&&(U||T(b))||ce(b)&&!b||de&&!St(u).isValid||ue&&!kt(u).isValid)){const{value:S,message:v}=me(m)?{value:!!m,message:m}:ie(m);if(S&&(D[P]={type:X.required,message:v,ref:N,...ee(X.required,v)},!s))return q(v),D}if(!U&&(!T(V)||!T(k))){let S,v;const $=ie(k),C=ie(V);if(!T(b)&&!isNaN(b)){const z=o.valueAsNumber||b&&+b;T($.value)||(S=z>$.value),T(C.value)||(v=z<C.value)}else{const z=o.valueAsDate||new Date(b),W=pe=>new Date(new Date().toDateString()+" "+pe),te=o.type=="time",fe=o.type=="week";H($.value)&&b&&(S=te?W(b)>W($.value):fe?b>$.value:z>new Date($.value)),H(C.value)&&b&&(v=te?W(b)<W(C.value):fe?b<C.value:z<new Date(C.value))}if((S||v)&&(G(!!S,$.message,C.message,X.max,X.min),!s))return q(D[P].message),D}if((x||O)&&!U&&(H(b)||n&&Array.isArray(b))){const S=ie(x),v=ie(O),$=!T(S.value)&&b.length>+S.value,C=!T(v.value)&&b.length<+v.value;if(($||C)&&(G($,S.message,v.message),!s))return q(D[P].message),D}if(y&&!U&&H(b)){const{value:S,message:v}=ie(y);if(we(S)&&!b.match(S)&&(D[P]={type:X.pattern,message:v,ref:o,...ee(X.pattern,v)},!s))return q(v),D}if(B){if(Y(B)){const S=await B(b,r),v=ut(S,N);if(v&&(D[P]={...v,...ee(X.validate,v.message)},!s))return q(v.message),D}else if(R(B)){let S={};for(const v in B){if(!M(S)&&!s)break;const $=ut(await B[v](b,r),N,v);$&&(S={...$,...ee(v,$.message)},q($.message),s&&(D[P]=S))}if(!M(S)&&(D[P]={ref:N,...S},!s))return D}}return q(!0),D};function Rr(e,r){const s=r.slice(0,-1).length;let t=0;for(;t<s;)e=F(e)?t++:e[r[t++]];return e}function Dr(e){for(const r in e)if(e.hasOwnProperty(r)&&!F(e[r]))return!1;return!0}function E(e,r){const s=Array.isArray(r)?r:He(r)?[r]:wt(r),t=s.length===1?e:Rr(e,s),n=s.length-1,o=s[n];return t&&delete t[o],n!==0&&(R(t)&&M(t)||Array.isArray(t)&&Dr(t))&&E(e,s.slice(0,-1)),e}function Re(){let e=[];return{get observers(){return e},next:n=>{for(const o of e)o.next&&o.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(o=>o!==n)}}),unsubscribe:()=>{e=[]}}}var Se=e=>T(e)||!vt(e);function re(e,r){if(Se(e)||Se(r))return e===r;if(ae(e)&&ae(r))return e.getTime()===r.getTime();const s=Object.keys(e),t=Object.keys(r);if(s.length!==t.length)return!1;for(const n of s){const o=e[n];if(!t.includes(n))return!1;if(n!=="ref"){const u=r[n];if(ae(o)&&ae(u)||R(o)&&R(u)||Array.isArray(o)&&Array.isArray(u)?!re(o,u):o!==u)return!1}}return!0}var _t=e=>e.type==="select-multiple",Er=e=>Ge(e)||ge(e),De=e=>ve(e)&&e.isConnected,Vt=e=>{for(const r in e)if(Y(e[r]))return!0;return!1};function ke(e,r={}){const s=Array.isArray(e);if(R(e)||s)for(const t in e)Array.isArray(e[t])||R(e[t])&&!Vt(e[t])?(r[t]=Array.isArray(e[t])?[]:{},ke(e[t],r[t])):T(e[t])||(r[t]=!0);return r}function jt(e,r,s){const t=Array.isArray(e);if(R(e)||t)for(const n in e)Array.isArray(e[n])||R(e[n])&&!Vt(e[n])?F(r)||Se(s[n])?s[n]=Array.isArray(e[n])?ke(e[n],[]):{...ke(e[n])}:jt(e[n],T(r)?{}:r[n],s[n]):s[n]=!re(e[n],r[n]);return s}var Ee=(e,r)=>jt(e,r,ke(r)),$t=(e,{valueAsNumber:r,valueAsDate:s,setValueAs:t})=>F(e)?e:r?e===""?NaN:e&&+e:s&&H(e)?new Date(e):t?t(e):e;function Pe(e){const r=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):r.disabled))return qe(r)?r.files:Ge(r)?kt(e.refs).value:_t(r)?[...r.selectedOptions].map(({value:s})=>s):ge(r)?St(e.refs).value:$t(F(r.value)?e.ref.value:r.value,e)}var Pr=(e,r,s,t)=>{const n={};for(const o of e){const u=p(r,o);u&&_(n,o,u._f)}return{criteriaMode:s,names:[...e],fields:n,shouldUseNativeValidation:t}},he=e=>F(e)?e:we(e)?e.source:R(e)?we(e.value)?e.value.source:e.value:e,Tr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ft(e,r,s){const t=p(e,s);if(t||He(s))return{error:t,name:s};const n=s.split(".");for(;n.length;){const o=n.join("."),u=p(r,o),m=p(e,o);if(u&&!Array.isArray(u)&&s!==o)return{name:s};if(m&&m.type)return{name:o,error:m};n.pop()}return{name:s}}var Cr=(e,r,s,t,n)=>n.isOnAll?!1:!s&&n.isOnTouch?!(r||e):(s?t.isOnBlur:n.isOnBlur)?!e:(s?t.isOnChange:n.isOnChange)?e:!0,Lr=(e,r)=>!ye(p(e,r)).length&&E(e,r);const zr={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Mr(e={},r){let s={...zr,...e},t={submitCount:0,isDirty:!1,isLoading:Y(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},o=R(s.defaultValues)||R(s.values)?K(s.defaultValues||s.values)||{}:{},u=s.shouldUnregister?{}:K(o),m={action:!1,mount:!1,watch:!1},x={mount:new Set,unMount:new Set,array:new Set,watch:new Set},O,V=0;const k={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={values:Re(),array:Re(),state:Re()},B=e.resetOptions&&e.resetOptions.keepDirtyValues,P=ot(s.mode),Z=ot(s.reValidateMode),xe=s.criteriaMode===I.all,_e=i=>l=>{clearTimeout(V),V=setTimeout(i,l)},b=async i=>{if(k.isValid||i){const l=s.resolver?M((await U()).errors):await G(n,!0);l!==t.isValid&&y.state.next({isValid:l})}},N=i=>k.isValidating&&y.state.next({isValidating:i}),q=(i,l=[],a,h,d=!0,c=!0)=>{if(h&&a){if(m.action=!0,c&&Array.isArray(p(n,i))){const g=a(p(n,i),h.argA,h.argB);d&&_(n,i,g)}if(c&&Array.isArray(p(t.errors,i))){const g=a(p(t.errors,i),h.argA,h.argB);d&&_(t.errors,i,g),Lr(t.errors,i)}if(k.touchedFields&&c&&Array.isArray(p(t.touchedFields,i))){const g=a(p(t.touchedFields,i),h.argA,h.argB);d&&_(t.touchedFields,i,g)}k.dirtyFields&&(t.dirtyFields=Ee(o,u)),y.state.next({name:i,isDirty:v(i,l),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else _(u,i,l)},D=(i,l)=>{_(t.errors,i,l),y.state.next({errors:t.errors})},ue=(i,l,a,h)=>{const d=p(n,i);if(d){const c=p(u,i,F(a)?p(o,i):a);F(c)||h&&h.defaultChecked||l?_(u,i,l?c:Pe(d._f)):z(i,c),m.mount&&b()}},de=(i,l,a,h,d)=>{let c=!1,g=!1;const j={name:i};if(!a||h){k.isDirty&&(g=t.isDirty,t.isDirty=j.isDirty=v(),c=g!==j.isDirty);const A=re(p(o,i),l);g=p(t.dirtyFields,i),A?E(t.dirtyFields,i):_(t.dirtyFields,i,!0),j.dirtyFields=t.dirtyFields,c=c||k.dirtyFields&&g!==!A}if(a){const A=p(t.touchedFields,i);A||(_(t.touchedFields,i,a),j.touchedFields=t.touchedFields,c=c||k.touchedFields&&A!==a)}return c&&d&&y.state.next(j),c?j:{}},Ve=(i,l,a,h)=>{const d=p(t.errors,i),c=k.isValid&&ce(l)&&t.isValid!==l;if(e.delayError&&a?(O=_e(()=>D(i,a)),O(e.delayError)):(clearTimeout(V),O=null,a?_(t.errors,i,a):E(t.errors,i)),(a?!re(d,a):d)||!M(h)||c){const g={...h,...c&&ce(l)?{isValid:l}:{},errors:t.errors,name:i};t={...t,...g},y.state.next(g)}N(!1)},U=async i=>s.resolver(u,s.context,Pr(i||x.mount,n,s.criteriaMode,s.shouldUseNativeValidation)),ee=async i=>{const{errors:l}=await U();if(i)for(const a of i){const h=p(l,a);h?_(t.errors,a,h):E(t.errors,a)}else t.errors=l;return l},G=async(i,l,a={valid:!0})=>{for(const h in i){const d=i[h];if(d){const{_f:c,...g}=d;if(c){const j=x.array.has(c.name),A=await dt(d,u,xe,s.shouldUseNativeValidation&&!l,j);if(A[c.name]&&(a.valid=!1,l))break;!l&&(p(A,c.name)?j?Or(t.errors,A,c.name):_(t.errors,c.name,A[c.name]):E(t.errors,c.name))}g&&await G(g,l,a)}}return a.valid},S=()=>{for(const i of x.unMount){const l=p(n,i);l&&(l._f.refs?l._f.refs.every(a=>!De(a)):!De(l._f.ref))&&je(i)}x.unMount=new Set},v=(i,l)=>(i&&l&&_(u,i,l),!re(Xe(),o)),$=(i,l,a)=>Ar(i,x,{...m.mount?u:F(l)?o:H(i)?{[i]:l}:l},a,l),C=i=>ye(p(m.mount?u:o,i,e.shouldUnregister?p(o,i,[]):[])),z=(i,l,a={})=>{const h=p(n,i);let d=l;if(h){const c=h._f;c&&(!c.disabled&&_(u,i,$t(l,c)),d=ve(c.ref)&&T(l)?"":l,_t(c.ref)?[...c.ref.options].forEach(g=>g.selected=d.includes(g.value)):c.refs?ge(c.ref)?c.refs.length>1?c.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(d)?!!d.find(j=>j===g.value):d===g.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(g=>g.checked=g.value===d):qe(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||y.values.next({name:i,values:{...u}})))}(a.shouldDirty||a.shouldTouch)&&de(i,d,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&pe(i)},W=(i,l,a)=>{for(const h in l){const d=l[h],c=`${i}.${h}`,g=p(n,c);(x.array.has(i)||!Se(d)||g&&!g._f)&&!ae(d)?W(c,d,a):z(c,d,a)}},te=(i,l,a={})=>{const h=p(n,i),d=x.array.has(i),c=K(l);_(u,i,c),d?(y.array.next({name:i,values:{...u}}),(k.isDirty||k.dirtyFields)&&a.shouldDirty&&y.state.next({name:i,dirtyFields:Ee(o,u),isDirty:v(i,c)})):h&&!h._f&&!T(c)?W(i,c,a):z(i,c,a),nt(i,x)&&y.state.next({...t}),y.values.next({name:i,values:{...u}}),!m.mount&&r()},fe=async i=>{const l=i.target;let a=l.name,h=!0;const d=p(n,a),c=()=>l.type?Pe(d._f):wr(i);if(d){let g,j;const A=c(),se=i.type===it.BLUR||i.type===it.FOCUS_OUT,Rt=!Tr(d._f)&&!s.resolver&&!p(t.errors,a)&&!d._f.deps||Cr(se,p(t.touchedFields,a),t.isSubmitted,Z,P),Ae=nt(a,x,se);_(u,a,A),se?(d._f.onBlur&&d._f.onBlur(i),O&&O(0)):d._f.onChange&&d._f.onChange(i);const Fe=de(a,A,se,!1),Dt=!M(Fe)||Ae;if(!se&&y.values.next({name:a,type:i.type,values:{...u}}),Rt)return k.isValid&&b(),Dt&&y.state.next({name:a,...Ae?{}:Fe});if(!se&&Ae&&y.state.next({...t}),N(!0),s.resolver){const{errors:tt}=await U([a]),Et=ft(t.errors,n,a),rt=ft(tt,n,Et.name||a);g=rt.error,a=rt.name,j=M(tt)}else g=(await dt(d,u,xe,s.shouldUseNativeValidation))[a],h=isNaN(A)||A===p(u,a,A),h&&(g?j=!1:k.isValid&&(j=await G(n,!0)));h&&(d._f.deps&&pe(d._f.deps),Ve(a,j,g,Fe))}},pe=async(i,l={})=>{let a,h;const d=Oe(i);if(N(!0),s.resolver){const c=await ee(F(i)?i:d);a=M(c),h=i?!d.some(g=>p(c,g)):a}else i?(h=(await Promise.all(d.map(async c=>{const g=p(n,c);return await G(g&&g._f?{[c]:g}:g)}))).every(Boolean),!(!h&&!t.isValid)&&b()):h=a=await G(n);return y.state.next({...!H(i)||k.isValid&&a!==t.isValid?{}:{name:i},...s.resolver||!i?{isValid:a}:{},errors:t.errors,isValidating:!1}),l.shouldFocus&&!h&&Le(n,c=>c&&p(t.errors,c),i?d:x.mount),h},Xe=i=>{const l={...o,...m.mount?u:{}};return F(i)?l:H(i)?p(l,i):i.map(a=>p(l,a))},Ke=(i,l)=>({invalid:!!p((l||t).errors,i),isDirty:!!p((l||t).dirtyFields,i),isTouched:!!p((l||t).touchedFields,i),error:p((l||t).errors,i)}),At=i=>{i&&Oe(i).forEach(l=>E(t.errors,l)),y.state.next({errors:i?t.errors:{}})},Je=(i,l,a)=>{const h=(p(n,i,{_f:{}})._f||{}).ref;_(t.errors,i,{...l,ref:h}),y.state.next({name:i,errors:t.errors,isValid:!1}),a&&a.shouldFocus&&h&&h.focus&&h.focus()},Ft=(i,l)=>Y(i)?y.values.subscribe({next:a=>i($(void 0,l),a)}):$(i,l,!0),je=(i,l={})=>{for(const a of i?Oe(i):x.mount)x.mount.delete(a),x.array.delete(a),l.keepValue||(E(n,a),E(u,a)),!l.keepError&&E(t.errors,a),!l.keepDirty&&E(t.dirtyFields,a),!l.keepTouched&&E(t.touchedFields,a),!s.shouldUnregister&&!l.keepDefaultValue&&E(o,a);y.values.next({values:{...u}}),y.state.next({...t,...l.keepDirty?{isDirty:v()}:{}}),!l.keepIsValid&&b()},$e=(i,l={})=>{let a=p(n,i);const h=ce(l.disabled);return _(n,i,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:i}},name:i,mount:!0,...l}}),x.mount.add(i),a?h&&_(u,i,l.disabled?void 0:p(u,i,Pe(a._f))):ue(i,!0,l.value),{...h?{disabled:l.disabled}:{},...s.progressive?{required:!!l.required,min:he(l.min),max:he(l.max),minLength:he(l.minLength),maxLength:he(l.maxLength),pattern:he(l.pattern)}:{},name:i,onChange:fe,onBlur:fe,ref:d=>{if(d){$e(i,l),a=p(n,i);const c=F(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,g=Er(c),j=a._f.refs||[];if(g?j.find(A=>A===c):c===a._f.ref)return;_(n,i,{_f:{...a._f,...g?{refs:[...j.filter(De),c,...Array.isArray(p(o,i))?[{}]:[]],ref:{type:c.type,name:i}}:{ref:c}}}),ue(i,!1,void 0,c)}else a=p(n,i,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||l.shouldUnregister)&&!(kr(x.array,i)&&m.action)&&x.unMount.add(i)}}},Ye=()=>s.shouldFocusError&&Le(n,i=>i&&p(t.errors,i),x.mount),Qe=(i,l)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let h=K(u);if(y.state.next({isSubmitting:!0}),s.resolver){const{errors:d,values:c}=await U();t.errors=d,h=c}else await G(n);E(t.errors,"root"),M(t.errors)?(y.state.next({errors:{}}),await i(h,a)):(l&&await l({...t.errors},a),Ye(),setTimeout(Ye)),y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Ot=(i,l={})=>{p(n,i)&&(F(l.defaultValue)?te(i,p(o,i)):(te(i,l.defaultValue),_(o,i,l.defaultValue)),l.keepTouched||E(t.touchedFields,i),l.keepDirty||(E(t.dirtyFields,i),t.isDirty=l.defaultValue?v(i,p(o,i)):v()),l.keepError||(E(t.errors,i),k.isValid&&b()),y.state.next({...t}))},Ze=(i,l={})=>{const a=i||o,h=K(a),d=i&&!M(i)?h:o;if(l.keepDefaultValues||(o=a),!l.keepValues){if(l.keepDirtyValues||B)for(const c of x.mount)p(t.dirtyFields,c)?_(d,c,p(u,c)):te(c,p(d,c));else{if(We&&F(i))for(const c of x.mount){const g=p(n,c);if(g&&g._f){const j=Array.isArray(g._f.refs)?g._f.refs[0]:g._f.ref;if(ve(j)){const A=j.closest("form");if(A){A.reset();break}}}}n={}}u=e.shouldUnregister?l.keepDefaultValues?K(o):{}:K(d),y.array.next({values:{...d}}),y.values.next({values:{...d}})}x={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!m.mount&&r(),m.mount=!k.isValid||!!l.keepIsValid,m.watch=!!e.shouldUnregister,y.state.next({submitCount:l.keepSubmitCount?t.submitCount:0,isDirty:l.keepDirty?t.isDirty:!!(l.keepDefaultValues&&!re(i,o)),isSubmitted:l.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:l.keepDirtyValues?t.dirtyFields:l.keepDefaultValues&&i?Ee(o,i):{},touchedFields:l.keepTouched?t.touchedFields:{},errors:l.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},et=(i,l)=>Ze(Y(i)?i(u):i,l);return{control:{register:$e,unregister:je,getFieldState:Ke,handleSubmit:Qe,setError:Je,_executeSchema:U,_getWatch:$,_getDirty:v,_updateValid:b,_removeUnmounted:S,_updateFieldArray:q,_getFieldArray:C,_reset:Ze,_resetDefaultValues:()=>Y(s.defaultValues)&&s.defaultValues().then(i=>{et(i,s.resetOptions),y.state.next({isLoading:!1})}),_updateFormState:i=>{t={...t,...i}},_subjects:y,_proxyFormState:k,get _fields(){return n},get _formValues(){return u},get _state(){return m},set _state(i){m=i},get _defaultValues(){return o},get _names(){return x},set _names(i){x=i},get _formState(){return t},set _formState(i){t=i},get _options(){return s},set _options(i){s={...s,...i}}},trigger:pe,register:$e,handleSubmit:Qe,watch:Ft,setValue:te,getValues:Xe,reset:et,resetField:Ot,clearErrors:At,unregister:je,setError:Je,setFocus:(i,l={})=>{const a=p(n,i),h=a&&a._f;if(h){const d=h.refs?h.refs[0]:h.ref;d.focus&&(d.focus(),l.shouldSelect&&d.select())}},getFieldState:Ke}}function Nr(e={}){const r=L.useRef(),s=L.useRef(),[t,n]=L.useState({isDirty:!1,isValidating:!1,isLoading:Y(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Y(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Mr(e,()=>n(u=>({...u}))),formState:t});const o=r.current.control;return o._options=e,$r({subject:o._subjects.state,next:u=>{jr(u,o._proxyFormState,o._updateFormState,!0)&&n({...o._formState})}}),L.useEffect(()=>{e.values&&!re(e.values,s.current)?(o._reset(e.values,o._options.resetOptions),s.current=e.values):o._resetDefaultValues()},[e.values,o]),L.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),r.current.formState=Vr(t,o),r.current}const Ir=()=>{const{register:e,getValues:r,setValue:s,formState:t,trigger:n}=Nr({mode:"all",defaultValues:{grounds:"",ratio:""}}),[o,u]=Q.useState(),m=Ne(),x=V=>{n("grounds"),n("ratio"),u(V),s("ratio",V.recommendedRatio.toString())},O=()=>{const{grounds:V,ratio:k}=r(),y={blooming:!0,grounds:parseInt(V),ratio:parseInt(k)};o&&(m(pt({recipe:o,data:y})),localStorage.setItem(ze,JSON.stringify({recipeName:o.name,data:y})),m(Me("stepper")))};return f.jsxs(hr,{children:[f.jsx(yt,{}),f.jsxs(gr,{children:[f.jsx(st,{inputProps:{type:"number",placeholder:"coffee grounds",pattern:"[0-9][.]*",inputmode:"numeric"},width:"100%",suffix:"g",register:e("grounds",{required:!0,min:1,pattern:/^[0-9.,]+$/})}),f.jsx(vr,{selectedRecipeName:o==null?void 0:o.name,onSelectRecipe:x}),f.jsx(st,{inputProps:{type:"number",placeholder:"ratio",pattern:"[0-9][.]*",inputmode:"numeric"},prefix:"1:",width:"100%",suffix:"g:ml",register:e("ratio",{required:!0,min:1,pattern:/^[0-9.,]+$/})}),f.jsx(It,{disabled:!o||!t.isValid,variant:"primary",onClick:O,children:"generate"})]})]})},Br=w.div`
	display: flex;
	width: 100vw;
	height: fit-content;

	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 12px;

	min-width: 420px;
	width: 420px;

	padding: 32px 0;

	overflow: auto;

	@media (max-width: 420px) {
		min-width: 100vw;
		width: 100vw;

		padding: 18px;
	}
`,Ur=w.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;

	height: fit-content;
	width: 100%;
`,oe=w.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 8px;
	border-radius: 8px;
	background-color: ${({theme:e})=>e.colors.brown3};
	color: ${({theme:e})=>e.colors.white1};
`,ne=w.span`
	font-size: 12px;
	font-weight: 500;
	text-align: center;
	color: ${({theme:e})=>e.colors.nude1};
`,le=w.span`
	font-size: 16px;
	font-weight: 600;
`,Wr=w.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	font-size: 16px;
	font-weight: 400;

	padding: 12px;
	border-radius: 8px;

	background-color: ${({theme:e})=>e.colors.purple1};
	color: ${({theme:e})=>e.colors.white1};

	${({isTimer:e,theme:r})=>!!e&&e&&`
		background-color: ${r.colors.nude1};
		color: ${r.colors.purple2};
	`}
`,Hr=w.span`
	color: ${({theme:e})=>e.colors.nude1};

	.icon {
		stroke: ${({theme:e})=>e.colors.nude1};
	}

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`,qr=w.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`,Gr=w.div`
	position: relative;
	width: 100%;
	height: 100%;
	transition: all 0.1s ease-in-out;
	background: rgba(3, 3, 3, 0.2);
`,Xr=Lt`
	0% {
		transform: scale(0);
	}
	33% {
		transform: scale(0.6);
	}
	66% {
		transform: scale(1.2);
	}
	100% {
		bottom: 0;
		transform: scale(1);
	}
	`,Kr=w.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 40vw;
	height: fit-content;
	padding: 16px;
	border-radius: 8px;

	display: flex;
	flex-direction: column;
	z-index: 99;
	background: ${({theme:e})=>e.colors.brown3};
	color: ${({theme:e})=>e.colors.white1};

	animation: ${Xr} 0.2s linear;

	@media (max-width: 420px) {
		width: 80vw;
	}
`,Jr=()=>{const{recipe:e,data:r}=ht(V=>V.recipeMaker),[s,t]=Q.useState(!1),n=Ne();if(!e||!r)return f.jsx("div",{children:"no recipe :("});const o=e.formula(r.grounds,r.ratio),u=(V,k)=>{const{label:y,isTimer:B}=e.stepsObject[V];let P=`${k+1}. ${y}`;return Object.keys(o).forEach(Z=>{y.includes(Z)&&(P=P.replace(Z,o[Z]))}),{label:P,isTimer:B}},m=()=>{localStorage.setItem(ze,""),n(Me("balance"))},x=V=>{V&&(V.preventDefault(),V.stopPropagation()),t(k=>!k)},O=V=>{V.stopPropagation()};return f.jsxs(f.Fragment,{children:[f.jsxs(Br,{children:[f.jsxs(Hr,{onClick:m,children:[f.jsx(sr,{size:14,className:"icon"})," back"]}),f.jsx(yt,{}),f.jsxs(Ur,{children:[f.jsxs(oe,{children:[f.jsx(le,{children:e.name}),f.jsx(ne,{children:"recipe"})]}),f.jsxs(oe,{children:[f.jsxs(le,{children:[r.grounds,"g/~",Number(r.grounds*r.ratio).toFixed(0),"ml"]}),f.jsx(ne,{children:"size"})]}),f.jsxs(oe,{children:[f.jsxs(le,{children:["1:",r.ratio]}),f.jsx(ne,{children:"ratio"})]}),f.jsxs(oe,{children:[f.jsxs(le,{children:[e.minutes,"m"]}),f.jsx(ne,{children:"time"})]}),f.jsxs(oe,{children:[f.jsx(le,{children:e.recommendedGrindSize}),f.jsx(ne,{children:"grind"})]}),f.jsxs(oe,{onClick:x,style:{cursor:"pointer"},children:[f.jsx(le,{children:"?"}),f.jsx(ne,{children:"tip"})]})]}),e.steps.map((V,k)=>{const y=u(V,k);return f.jsx(Wr,{isTimer:y.isTimer,children:y.label},k)})]}),s&&f.jsx(qr,{children:f.jsx(Gr,{onClick:x,children:f.jsx(Kr,{onClick:O,children:e.tip})})})]})},ts=()=>{const e=ht(t=>t.recipeMaker.step),r=Ne(),s=Q.useCallback(()=>{const t=localStorage.getItem(ze);if(t){const n=JSON.parse(t);if(n){const{data:o}=n,u=Ue.find(m=>m.name===n.recipeName);u&&o&&(r(pt({recipe:u,data:o})),r(Me("stepper")))}}},[]);return Q.useEffect(()=>{s()},[s]),f.jsxs(f.Fragment,{children:[e==="balance"&&f.jsx(Ir,{}),e==="stepper"&&f.jsx(Jr,{})]})};export{ts as default};
