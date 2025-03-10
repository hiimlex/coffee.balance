import{R as be,u as Et,c as Tt,s as w,j as f,r as Q,g as Ct,a as L,b as pt,d as ze,e as Me,W as Lt,f as ht}from"./index-c0867ebf.js";function gt(e=be){const r=e===be?Et:Tt(e);return function(){const{store:t}=r();return t}}const zt=gt();function Mt(e=be){const r=e===be?zt:gt(e);return function(){return r().dispatch}}const Ie=Mt(),It=w.button`
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
`,Nt=({children:e,variant:r,...s})=>f.jsx(It,{...s,variant:r,children:e}),Bt=w.header`
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
`,st=Q.forwardRef(({prefix:e,suffix:r,width:s,inputProps:t,register:o},n)=>f.jsxs(Kt,{style:{width:s},children:[e&&f.jsx(Xt,{children:e}),f.jsx(qt,{...t,style:{...t==null?void 0:t.style,width:s},ref:n,className:e?"with-prefix":"",...o}),r&&f.jsx(Gt,{children:r})]}));var mt={exports:{}},Yt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Jt=Yt,Qt=Jt;function xt(){}function bt(){}bt.resetWarningCache=xt;var Zt=function(){function e(t,o,n,u,m,x){if(x!==Qt){var O=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw O.name="Invariant Violation",O}}e.isRequired=e;function r(){return e}var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:bt,resetWarningCache:xt};return s.PropTypes=s,s};mt.exports=Zt();var er=mt.exports;const Y=Ct(er);function Te(){return Te=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},Te.apply(this,arguments)}function tr(e,r){if(e==null)return{};var s=rr(e,r),t,o;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function rr(e,r){if(e==null)return{};var s={},t=Object.keys(e),o,n;for(n=0;n<t.length;n++)o=t[n],!(r.indexOf(o)>=0)&&(s[o]=e[o]);return s}var Ne=Q.forwardRef(function(e,r){var s=e.color,t=s===void 0?"currentColor":s,o=e.size,n=o===void 0?24:o,u=tr(e,["color","size"]);return L.createElement("svg",Te({ref:r,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),L.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),L.createElement("polyline",{points:"12 19 5 12 12 5"}))});Ne.propTypes={color:Y.string,size:Y.oneOfType([Y.string,Y.number])};Ne.displayName="ArrowLeft";const sr=Ne;function Ce(){return Ce=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},Ce.apply(this,arguments)}function ir(e,r){if(e==null)return{};var s=or(e,r),t,o;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function or(e,r){if(e==null)return{};var s={},t=Object.keys(e),o,n;for(n=0;n<t.length;n++)o=t[n],!(r.indexOf(o)>=0)&&(s[o]=e[o]);return s}var Be=Q.forwardRef(function(e,r){var s=e.color,t=s===void 0?"currentColor":s,o=e.size,n=o===void 0?24:o,u=ir(e,["color","size"]);return L.createElement("svg",Ce({ref:r,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),L.createElement("polyline",{points:"6 9 12 15 18 9"}))});Be.propTypes={color:Y.string,size:Y.oneOfType([Y.string,Y.number])};Be.displayName="ChevronDown";const nr=Be,ar=w.div`
	display: flex;
	height: fit-content;

	position: relative;
`,lr=w.select`
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
`;Q.forwardRef(({options:e,width:r,placeholder:s,register:t,selectProps:o},n)=>f.jsxs(ar,{children:[f.jsxs(lr,{...o,style:{width:r},ref:n,...t,children:[s&&f.jsx("option",{value:"",children:s}),e.map(({label:u,value:m},x)=>f.jsx("option",{value:m,children:u},x))]}),f.jsx(cr,{children:f.jsx(nr,{size:14,className:"icon"})})]}));const ur={name:"4:6",methods:["v60"],tip:"<strong>4:6</strong> it is a method that allows you to control the taste of coffee by changing the amount of water poured in each pour, the pours are divided in two parts 40% and 60% of the total. <br/> <br/><strong>Increase Acidity:</strong> Use more water in the first 40%. For example, if you're using 300g of water in total, use 150g for the first 40% instead of 120g. This emphasizes the extraction of acidic compounds, making the coffee taste brighter and more acidic.<br/><br/> <strong>Decrease Acidity:</strong> Use less water in the first 40%. For example, use 90g instead of 120g for the first 40%. This will reduce the acidity, resulting in a more mellow cup. <br/><br/> <strong>Increase Strength:</strong> Decrease the total water used or increase the coffee amount. For the 4:6 method, focus on the final 60% of the water. Use a finer grind or pour more slowly to extract more compounds, making the coffee taste stronger. <br/><br/> <strong>Decrease Strength:</strong> Increase the total water used or use less coffee. You can also coarsen the grind slightly or pour faster in the final 60% to extract fewer compounds, resulting in a lighter, less intense cup.",recommendedGrindSize:"medium",recommendedRatio:15,pours:5,minutes:3,formula:(e,r)=>{const s=e*r,t=(s*.6/3).toFixed(0),o=(s*.4).toFixed(0),n=(+o*.65).toFixed(0),u=(+o*.35).toFixed(0),m=2;return{blooming$:(e*m).toFixed(0),fourthPour$:o,sixthPour$:t,bloomingX$:m,sugarPour$:n,acidPour$:u}},steps:["rinse","blooming","timer30","acidPour","sugarPour","sixthPour","sixthPour","sixthPour","serve"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fourthPour:{label:"pour fourthPour$g water"},sugarPour:{label:"pour sugarPour$g water"},acidPour:{label:"pour acidPour$g water"},sixthPour:{label:"pour sixthPour$g water"},serve:{label:"serve the coffee and enjoy!"}}},dr={name:"continuous",methods:["v60","melitta"],tip:"pour all water at once, a powerful and hard method to make a simple cup, the taste will be controlled by time and water rotation, the grind size is very important at this method.",recommendedGrindSize:"medium",recommendedRatio:12.5,pours:1,minutes:3,formula:(e,r)=>{const s=(e*r).toFixed(0),t=1.5,o=e*t;return{fullPour$:s,blooming$:o,bloomingX$:t}},steps:["rinse","blooming","timer30","fullPour","serve"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fullPour:{label:"pour fullPour$g water"},serve:{label:"serve the coffee and enjoy!"}}},fr={name:"5 pour",methods:["v60","melitta"],minutes:3,pours:5,tip:"usual V60 brewing, this beverage involves pouring water in five batches, instead of pouring just a little bit of water for blooming before dropping in the rest.",recommendedGrindSize:"medium",recommendedRatio:15,formula:(e,r)=>{const t=(e*r/5).toFixed(0),o=3,n=(e*o).toFixed(0);return{bloomingX$:o,fifth$:t,blooming$:n}},steps:["rinse","blooming","timer30","fifthPour","fifthPour","fifthPour","fifthPour","fifthPour","serve"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fifthPour:{label:"pour fifth$g water"},timer30:{label:"wait 30s",isTimer:!0},serve:{label:"serve the coffee and enjoy!"}}},pr={name:"melitta",methods:["melitta"],minutes:3.3,pours:1,formula:(e,r)=>{const s=e*r,t=(s*.25).toFixed(0),o=(s*.125).toFixed(0),n=.125;return{blooming$:(s*n).toFixed(0),bloomingX$:n,pour12$:o,pour25$:t}},recommendedGrindSize:"medium",recommendedRatio:17,tip:"Melitta is a pour-over method that uses a cone-shaped filter. It's similar to the V60, but the Melitta filter has a flat bottom, which can lead to a more balanced extraction.",steps:["rinse","blooming","timer30","pour12","timer10","pour25","pour25","pour25","serve"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},blooming:{label:"pre-wet blooming$g water (~bloomingX$x of grounds weight)"},timer30:{label:"wait 30s",isTimer:!0},timer10:{label:"wait 10s",isTimer:!0},pour25:{label:"pour pour25$g water"},pour12:{label:"pour pour12$g water"},serve:{label:"serve the coffee and enjoy!"}}},hr={name:"french press",methods:["french press"],minutes:10,pours:1,formula:(e,r)=>({pour$:e*r}),recommendedGrindSize:"coarse",recommendedRatio:16,tip:"Pour carefully! You want to avoid stirring up the grounds that have settled at the bottom.",steps:["boil","rinse","pour","timer5minutes","stir","scoopFoam","timer5minutes","plunge","serve"],stepsObject:{boil:{label:"boil water"},rinse:{label:"rinse french press & pre-heat"},pour:{label:"pour pour$g water into french press"},stir:{label:"stir coffee"},timer5minutes:{label:"wait 5 minutes",isTimer:!0},scoopFoam:{label:"scoop foam off the top"},plunge:{label:"plunge the press until the screen rests on top of the liquid"},serve:{label:"serve the coffee and enjoy!"}}},gr={name:"v60 iced coffee",methods:["v60","iced coffee"],minutes:4,pours:1,formula:(e,r)=>{const s=e*r,t=+(s*.4).toFixed(0),o=+(s-t).toFixed(0);return{ice$:t,hotWater$:o}},recommendedGrindSize:"coarse",recommendedRatio:16,tip:"Swirl the dripper to ensure even extraction and proper cooling over the ice.",steps:["boil","grind","addIce","bloom","pour","swirl","serve"],stepsObject:{boil:{label:"boil water to 93°C (200°F)."},grind:{label:"grind coffee beans to a medium consistency."},addIce:{label:"add ice$g of ice to the carafe or server."},bloom:{label:"add 40g of hot water to the grounds and let it bloom for 30 seconds.",isTimer:!0},pour:{label:"slowly pour the remaining hotWater$g of hot water over 2 minutes."},swirl:{label:"swirl the dripper gently to mix the coffee and ice."},serve:{label:"serve the iced coffee immediately and enjoy."}}},Ue=[dr,ur,fr,pr,hr,gr].sort((e,r)=>e.name>r.name?1:e.name<r.name?-1:0);Ue.map(e=>e.name);const yr=w.div`
	display: flex;
	width: 100%;
	height: fit-content;
	
	overflow: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 12px;

	max-width: 520px;
	width: 520px;

	padding: 32px 0;

	@media (max-width: 600px) {
		width: 100%;
		max-width: 420px;

		padding: 12px;
	}
`,mr=w.div`
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
`;const xr=w.div`
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
`;const br=w.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 4px;
`,vr=w.div`
	font-weight: 400;
	font-size: 14px;
	color: ${({theme:e})=>e.colors.nude1};

	padding-left: 12px;
`,wr=w.div`
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
`,Sr=({onSelectRecipe:e,selectedRecipeName:r})=>f.jsxs(br,{children:[f.jsx(vr,{children:"select the recipe"}),f.jsx(xr,{children:Ue.map(s=>f.jsx(wr,{onClick:()=>e(s),selected:r===s.name,children:s.name},s.name))})]});var ge=e=>e.type==="checkbox",le=e=>e instanceof Date,T=e=>e==null;const vt=e=>typeof e=="object";var R=e=>!T(e)&&!Array.isArray(e)&&vt(e)&&!le(e),kr=e=>R(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,_r=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,jr=(e,r)=>e.has(_r(r)),$r=e=>{const r=e.constructor&&e.constructor.prototype;return R(r)&&r.hasOwnProperty("isPrototypeOf")},We=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function K(e){let r;const s=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(We&&(e instanceof Blob||e instanceof FileList))&&(s||R(e)))if(r=s?[]:{},!s&&!$r(e))r=e;else for(const t in e)e.hasOwnProperty(t)&&(r[t]=K(e[t]));else return e;return r}var ye=e=>Array.isArray(e)?e.filter(Boolean):[],A=e=>e===void 0,p=(e,r,s)=>{if(!r||!R(e))return s;const t=ye(r.split(/[,[\].]+?/)).reduce((o,n)=>T(o)?o:o[n],e);return A(t)||t===e?A(e[r])?s:e[r]:t};const it={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},N={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};L.createContext(null);var Vr=(e,r,s,t=!0)=>{const o={defaultValues:r._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return r._proxyFormState[u]!==N.all&&(r._proxyFormState[u]=!t||N.all),s&&(s[u]=!0),e[u]}});return o},M=e=>R(e)&&!Object.keys(e).length,Fr=(e,r,s,t)=>{s(e);const{name:o,...n}=e;return M(n)||Object.keys(n).length>=Object.keys(r).length||Object.keys(n).find(u=>r[u]===(!t||N.all))},Oe=e=>Array.isArray(e)?e:[e];function Ar(e){const r=L.useRef(e);r.current=e,L.useEffect(()=>{const s=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",Or=(e,r,s,t,o)=>H(e)?(t&&r.watch.add(e),p(s,e,o)):Array.isArray(e)?e.map(n=>(t&&r.watch.add(n),p(s,n))):(t&&(r.watchAll=!0),s),He=e=>/^\w*$/.test(e),wt=e=>ye(e.replace(/["|']|\]/g,"").split(/\.|\[/));function _(e,r,s){let t=-1;const o=He(r)?[r]:wt(r),n=o.length,u=n-1;for(;++t<n;){const m=o[t];let x=s;if(t!==u){const O=e[m];x=R(O)||Array.isArray(O)?O:isNaN(+o[t+1])?{}:[]}e[m]=x,e=e[m]}return e}var Rr=(e,r,s,t,o)=>r?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[t]:o||!0}}:{};const Le=(e,r,s)=>{for(const t of s||Object.keys(e)){const o=p(e,t);if(o){const{_f:n,...u}=o;if(n&&r(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else R(u)&&Le(u,r)}}};var ot=e=>({isOnSubmit:!e||e===N.onSubmit,isOnBlur:e===N.onBlur,isOnChange:e===N.onChange,isOnAll:e===N.all,isOnTouch:e===N.onTouched}),nt=(e,r,s)=>!s&&(r.watchAll||r.watch.has(e)||[...r.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Dr=(e,r,s)=>{const t=ye(p(e,s));return _(t,"root",r[s]),_(e,s,t),e},ce=e=>typeof e=="boolean",qe=e=>e.type==="file",J=e=>typeof e=="function",ve=e=>{if(!We)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},xe=e=>H(e),Ge=e=>e.type==="radio",we=e=>e instanceof RegExp;const at={value:!1,isValid:!1},lt={value:!0,isValid:!0};var St=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!A(e[0].attributes.value)?A(e[0].value)||e[0].value===""?lt:{value:e[0].value,isValid:!0}:lt:at}return at};const ct={isValid:!1,value:null};var kt=e=>Array.isArray(e)?e.reduce((r,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:r,ct):ct;function ut(e,r,s="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||ce(e)&&!e)return{type:s,message:xe(e)?e:"",ref:r}}var ie=e=>R(e)&&!we(e)?e:{value:e,message:""},dt=async(e,r,s,t,o)=>{const{ref:n,refs:u,required:m,maxLength:x,minLength:O,min:j,max:k,pattern:y,validate:B,name:E,valueAsNumber:Z,mount:me,disabled:_e}=e._f,b=p(r,E);if(!me||_e)return{};const I=u?u[0]:n,q=S=>{t&&I.reportValidity&&(I.setCustomValidity(ce(S)?"":S||""),I.reportValidity())},D={},ue=Ge(n),de=ge(n),je=ue||de,U=(Z||qe(n))&&A(n.value)&&A(b)||ve(n)&&n.value===""||b===""||Array.isArray(b)&&!b.length,ee=Rr.bind(null,E,s,D),G=(S,v,V,C=X.maxLength,z=X.minLength)=>{const W=S?v:V;D[E]={type:S?C:z,message:W,ref:n,...ee(S?C:z,W)}};if(o?!Array.isArray(b)||!b.length:m&&(!je&&(U||T(b))||ce(b)&&!b||de&&!St(u).isValid||ue&&!kt(u).isValid)){const{value:S,message:v}=xe(m)?{value:!!m,message:m}:ie(m);if(S&&(D[E]={type:X.required,message:v,ref:I,...ee(X.required,v)},!s))return q(v),D}if(!U&&(!T(j)||!T(k))){let S,v;const V=ie(k),C=ie(j);if(!T(b)&&!isNaN(b)){const z=n.valueAsNumber||b&&+b;T(V.value)||(S=z>V.value),T(C.value)||(v=z<C.value)}else{const z=n.valueAsDate||new Date(b),W=pe=>new Date(new Date().toDateString()+" "+pe),te=n.type=="time",fe=n.type=="week";H(V.value)&&b&&(S=te?W(b)>W(V.value):fe?b>V.value:z>new Date(V.value)),H(C.value)&&b&&(v=te?W(b)<W(C.value):fe?b<C.value:z<new Date(C.value))}if((S||v)&&(G(!!S,V.message,C.message,X.max,X.min),!s))return q(D[E].message),D}if((x||O)&&!U&&(H(b)||o&&Array.isArray(b))){const S=ie(x),v=ie(O),V=!T(S.value)&&b.length>+S.value,C=!T(v.value)&&b.length<+v.value;if((V||C)&&(G(V,S.message,v.message),!s))return q(D[E].message),D}if(y&&!U&&H(b)){const{value:S,message:v}=ie(y);if(we(S)&&!b.match(S)&&(D[E]={type:X.pattern,message:v,ref:n,...ee(X.pattern,v)},!s))return q(v),D}if(B){if(J(B)){const S=await B(b,r),v=ut(S,I);if(v&&(D[E]={...v,...ee(X.validate,v.message)},!s))return q(v.message),D}else if(R(B)){let S={};for(const v in B){if(!M(S)&&!s)break;const V=ut(await B[v](b,r),I,v);V&&(S={...V,...ee(v,V.message)},q(V.message),s&&(D[E]=S))}if(!M(S)&&(D[E]={ref:I,...S},!s))return D}}return q(!0),D};function Pr(e,r){const s=r.slice(0,-1).length;let t=0;for(;t<s;)e=A(e)?t++:e[r[t++]];return e}function Er(e){for(const r in e)if(e.hasOwnProperty(r)&&!A(e[r]))return!1;return!0}function P(e,r){const s=Array.isArray(r)?r:He(r)?[r]:wt(r),t=s.length===1?e:Pr(e,s),o=s.length-1,n=s[o];return t&&delete t[n],o!==0&&(R(t)&&M(t)||Array.isArray(t)&&Er(t))&&P(e,s.slice(0,-1)),e}function Re(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var Se=e=>T(e)||!vt(e);function re(e,r){if(Se(e)||Se(r))return e===r;if(le(e)&&le(r))return e.getTime()===r.getTime();const s=Object.keys(e),t=Object.keys(r);if(s.length!==t.length)return!1;for(const o of s){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=r[o];if(le(n)&&le(u)||R(n)&&R(u)||Array.isArray(n)&&Array.isArray(u)?!re(n,u):n!==u)return!1}}return!0}var _t=e=>e.type==="select-multiple",Tr=e=>Ge(e)||ge(e),De=e=>ve(e)&&e.isConnected,jt=e=>{for(const r in e)if(J(e[r]))return!0;return!1};function ke(e,r={}){const s=Array.isArray(e);if(R(e)||s)for(const t in e)Array.isArray(e[t])||R(e[t])&&!jt(e[t])?(r[t]=Array.isArray(e[t])?[]:{},ke(e[t],r[t])):T(e[t])||(r[t]=!0);return r}function $t(e,r,s){const t=Array.isArray(e);if(R(e)||t)for(const o in e)Array.isArray(e[o])||R(e[o])&&!jt(e[o])?A(r)||Se(s[o])?s[o]=Array.isArray(e[o])?ke(e[o],[]):{...ke(e[o])}:$t(e[o],T(r)?{}:r[o],s[o]):s[o]=!re(e[o],r[o]);return s}var Pe=(e,r)=>$t(e,r,ke(r)),Vt=(e,{valueAsNumber:r,valueAsDate:s,setValueAs:t})=>A(e)?e:r?e===""?NaN:e&&+e:s&&H(e)?new Date(e):t?t(e):e;function Ee(e){const r=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):r.disabled))return qe(r)?r.files:Ge(r)?kt(e.refs).value:_t(r)?[...r.selectedOptions].map(({value:s})=>s):ge(r)?St(e.refs).value:Vt(A(r.value)?e.ref.value:r.value,e)}var Cr=(e,r,s,t)=>{const o={};for(const n of e){const u=p(r,n);u&&_(o,n,u._f)}return{criteriaMode:s,names:[...e],fields:o,shouldUseNativeValidation:t}},he=e=>A(e)?e:we(e)?e.source:R(e)?we(e.value)?e.value.source:e.value:e,Lr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ft(e,r,s){const t=p(e,s);if(t||He(s))return{error:t,name:s};const o=s.split(".");for(;o.length;){const n=o.join("."),u=p(r,n),m=p(e,n);if(u&&!Array.isArray(u)&&s!==n)return{name:s};if(m&&m.type)return{name:n,error:m};o.pop()}return{name:s}}var zr=(e,r,s,t,o)=>o.isOnAll?!1:!s&&o.isOnTouch?!(r||e):(s?t.isOnBlur:o.isOnBlur)?!e:(s?t.isOnChange:o.isOnChange)?e:!0,Mr=(e,r)=>!ye(p(e,r)).length&&P(e,r);const Ir={mode:N.onSubmit,reValidateMode:N.onChange,shouldFocusError:!0};function Nr(e={},r){let s={...Ir,...e},t={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=R(s.defaultValues)||R(s.values)?K(s.defaultValues||s.values)||{}:{},u=s.shouldUnregister?{}:K(n),m={action:!1,mount:!1,watch:!1},x={mount:new Set,unMount:new Set,array:new Set,watch:new Set},O,j=0;const k={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={values:Re(),array:Re(),state:Re()},B=e.resetOptions&&e.resetOptions.keepDirtyValues,E=ot(s.mode),Z=ot(s.reValidateMode),me=s.criteriaMode===N.all,_e=i=>a=>{clearTimeout(j),j=setTimeout(i,a)},b=async i=>{if(k.isValid||i){const a=s.resolver?M((await U()).errors):await G(o,!0);a!==t.isValid&&y.state.next({isValid:a})}},I=i=>k.isValidating&&y.state.next({isValidating:i}),q=(i,a=[],l,h,d=!0,c=!0)=>{if(h&&l){if(m.action=!0,c&&Array.isArray(p(o,i))){const g=l(p(o,i),h.argA,h.argB);d&&_(o,i,g)}if(c&&Array.isArray(p(t.errors,i))){const g=l(p(t.errors,i),h.argA,h.argB);d&&_(t.errors,i,g),Mr(t.errors,i)}if(k.touchedFields&&c&&Array.isArray(p(t.touchedFields,i))){const g=l(p(t.touchedFields,i),h.argA,h.argB);d&&_(t.touchedFields,i,g)}k.dirtyFields&&(t.dirtyFields=Pe(n,u)),y.state.next({name:i,isDirty:v(i,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else _(u,i,a)},D=(i,a)=>{_(t.errors,i,a),y.state.next({errors:t.errors})},ue=(i,a,l,h)=>{const d=p(o,i);if(d){const c=p(u,i,A(l)?p(n,i):l);A(c)||h&&h.defaultChecked||a?_(u,i,a?c:Ee(d._f)):z(i,c),m.mount&&b()}},de=(i,a,l,h,d)=>{let c=!1,g=!1;const $={name:i};if(!l||h){k.isDirty&&(g=t.isDirty,t.isDirty=$.isDirty=v(),c=g!==$.isDirty);const F=re(p(n,i),a);g=p(t.dirtyFields,i),F?P(t.dirtyFields,i):_(t.dirtyFields,i,!0),$.dirtyFields=t.dirtyFields,c=c||k.dirtyFields&&g!==!F}if(l){const F=p(t.touchedFields,i);F||(_(t.touchedFields,i,l),$.touchedFields=t.touchedFields,c=c||k.touchedFields&&F!==l)}return c&&d&&y.state.next($),c?$:{}},je=(i,a,l,h)=>{const d=p(t.errors,i),c=k.isValid&&ce(a)&&t.isValid!==a;if(e.delayError&&l?(O=_e(()=>D(i,l)),O(e.delayError)):(clearTimeout(j),O=null,l?_(t.errors,i,l):P(t.errors,i)),(l?!re(d,l):d)||!M(h)||c){const g={...h,...c&&ce(a)?{isValid:a}:{},errors:t.errors,name:i};t={...t,...g},y.state.next(g)}I(!1)},U=async i=>s.resolver(u,s.context,Cr(i||x.mount,o,s.criteriaMode,s.shouldUseNativeValidation)),ee=async i=>{const{errors:a}=await U();if(i)for(const l of i){const h=p(a,l);h?_(t.errors,l,h):P(t.errors,l)}else t.errors=a;return a},G=async(i,a,l={valid:!0})=>{for(const h in i){const d=i[h];if(d){const{_f:c,...g}=d;if(c){const $=x.array.has(c.name),F=await dt(d,u,me,s.shouldUseNativeValidation&&!a,$);if(F[c.name]&&(l.valid=!1,a))break;!a&&(p(F,c.name)?$?Dr(t.errors,F,c.name):_(t.errors,c.name,F[c.name]):P(t.errors,c.name))}g&&await G(g,a,l)}}return l.valid},S=()=>{for(const i of x.unMount){const a=p(o,i);a&&(a._f.refs?a._f.refs.every(l=>!De(l)):!De(a._f.ref))&&$e(i)}x.unMount=new Set},v=(i,a)=>(i&&a&&_(u,i,a),!re(Xe(),n)),V=(i,a,l)=>Or(i,x,{...m.mount?u:A(a)?n:H(i)?{[i]:a}:a},l,a),C=i=>ye(p(m.mount?u:n,i,e.shouldUnregister?p(n,i,[]):[])),z=(i,a,l={})=>{const h=p(o,i);let d=a;if(h){const c=h._f;c&&(!c.disabled&&_(u,i,Vt(a,c)),d=ve(c.ref)&&T(a)?"":a,_t(c.ref)?[...c.ref.options].forEach(g=>g.selected=d.includes(g.value)):c.refs?ge(c.ref)?c.refs.length>1?c.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(d)?!!d.find($=>$===g.value):d===g.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(g=>g.checked=g.value===d):qe(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||y.values.next({name:i,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&de(i,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&pe(i)},W=(i,a,l)=>{for(const h in a){const d=a[h],c=`${i}.${h}`,g=p(o,c);(x.array.has(i)||!Se(d)||g&&!g._f)&&!le(d)?W(c,d,l):z(c,d,l)}},te=(i,a,l={})=>{const h=p(o,i),d=x.array.has(i),c=K(a);_(u,i,c),d?(y.array.next({name:i,values:{...u}}),(k.isDirty||k.dirtyFields)&&l.shouldDirty&&y.state.next({name:i,dirtyFields:Pe(n,u),isDirty:v(i,c)})):h&&!h._f&&!T(c)?W(i,c,l):z(i,c,l),nt(i,x)&&y.state.next({...t}),y.values.next({name:i,values:{...u}}),!m.mount&&r()},fe=async i=>{const a=i.target;let l=a.name,h=!0;const d=p(o,l),c=()=>a.type?Ee(d._f):kr(i);if(d){let g,$;const F=c(),se=i.type===it.BLUR||i.type===it.FOCUS_OUT,Rt=!Lr(d._f)&&!s.resolver&&!p(t.errors,l)&&!d._f.deps||zr(se,p(t.touchedFields,l),t.isSubmitted,Z,E),Fe=nt(l,x,se);_(u,l,F),se?(d._f.onBlur&&d._f.onBlur(i),O&&O(0)):d._f.onChange&&d._f.onChange(i);const Ae=de(l,F,se,!1),Dt=!M(Ae)||Fe;if(!se&&y.values.next({name:l,type:i.type,values:{...u}}),Rt)return k.isValid&&b(),Dt&&y.state.next({name:l,...Fe?{}:Ae});if(!se&&Fe&&y.state.next({...t}),I(!0),s.resolver){const{errors:tt}=await U([l]),Pt=ft(t.errors,o,l),rt=ft(tt,o,Pt.name||l);g=rt.error,l=rt.name,$=M(tt)}else g=(await dt(d,u,me,s.shouldUseNativeValidation))[l],h=isNaN(F)||F===p(u,l,F),h&&(g?$=!1:k.isValid&&($=await G(o,!0)));h&&(d._f.deps&&pe(d._f.deps),je(l,$,g,Ae))}},pe=async(i,a={})=>{let l,h;const d=Oe(i);if(I(!0),s.resolver){const c=await ee(A(i)?i:d);l=M(c),h=i?!d.some(g=>p(c,g)):l}else i?(h=(await Promise.all(d.map(async c=>{const g=p(o,c);return await G(g&&g._f?{[c]:g}:g)}))).every(Boolean),!(!h&&!t.isValid)&&b()):h=l=await G(o);return y.state.next({...!H(i)||k.isValid&&l!==t.isValid?{}:{name:i},...s.resolver||!i?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!h&&Le(o,c=>c&&p(t.errors,c),i?d:x.mount),h},Xe=i=>{const a={...n,...m.mount?u:{}};return A(i)?a:H(i)?p(a,i):i.map(l=>p(a,l))},Ke=(i,a)=>({invalid:!!p((a||t).errors,i),isDirty:!!p((a||t).dirtyFields,i),isTouched:!!p((a||t).touchedFields,i),error:p((a||t).errors,i)}),Ft=i=>{i&&Oe(i).forEach(a=>P(t.errors,a)),y.state.next({errors:i?t.errors:{}})},Ye=(i,a,l)=>{const h=(p(o,i,{_f:{}})._f||{}).ref;_(t.errors,i,{...a,ref:h}),y.state.next({name:i,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&h&&h.focus&&h.focus()},At=(i,a)=>J(i)?y.values.subscribe({next:l=>i(V(void 0,a),l)}):V(i,a,!0),$e=(i,a={})=>{for(const l of i?Oe(i):x.mount)x.mount.delete(l),x.array.delete(l),a.keepValue||(P(o,l),P(u,l)),!a.keepError&&P(t.errors,l),!a.keepDirty&&P(t.dirtyFields,l),!a.keepTouched&&P(t.touchedFields,l),!s.shouldUnregister&&!a.keepDefaultValue&&P(n,l);y.values.next({values:{...u}}),y.state.next({...t,...a.keepDirty?{isDirty:v()}:{}}),!a.keepIsValid&&b()},Ve=(i,a={})=>{let l=p(o,i);const h=ce(a.disabled);return _(o,i,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:i}},name:i,mount:!0,...a}}),x.mount.add(i),l?h&&_(u,i,a.disabled?void 0:p(u,i,Ee(l._f))):ue(i,!0,a.value),{...h?{disabled:a.disabled}:{},...s.progressive?{required:!!a.required,min:he(a.min),max:he(a.max),minLength:he(a.minLength),maxLength:he(a.maxLength),pattern:he(a.pattern)}:{},name:i,onChange:fe,onBlur:fe,ref:d=>{if(d){Ve(i,a),l=p(o,i);const c=A(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,g=Tr(c),$=l._f.refs||[];if(g?$.find(F=>F===c):c===l._f.ref)return;_(o,i,{_f:{...l._f,...g?{refs:[...$.filter(De),c,...Array.isArray(p(n,i))?[{}]:[]],ref:{type:c.type,name:i}}:{ref:c}}}),ue(i,!1,void 0,c)}else l=p(o,i,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||a.shouldUnregister)&&!(jr(x.array,i)&&m.action)&&x.unMount.add(i)}}},Je=()=>s.shouldFocusError&&Le(o,i=>i&&p(t.errors,i),x.mount),Qe=(i,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let h=K(u);if(y.state.next({isSubmitting:!0}),s.resolver){const{errors:d,values:c}=await U();t.errors=d,h=c}else await G(o);P(t.errors,"root"),M(t.errors)?(y.state.next({errors:{}}),await i(h,l)):(a&&await a({...t.errors},l),Je(),setTimeout(Je)),y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Ot=(i,a={})=>{p(o,i)&&(A(a.defaultValue)?te(i,p(n,i)):(te(i,a.defaultValue),_(n,i,a.defaultValue)),a.keepTouched||P(t.touchedFields,i),a.keepDirty||(P(t.dirtyFields,i),t.isDirty=a.defaultValue?v(i,p(n,i)):v()),a.keepError||(P(t.errors,i),k.isValid&&b()),y.state.next({...t}))},Ze=(i,a={})=>{const l=i||n,h=K(l),d=i&&!M(i)?h:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||B)for(const c of x.mount)p(t.dirtyFields,c)?_(d,c,p(u,c)):te(c,p(d,c));else{if(We&&A(i))for(const c of x.mount){const g=p(o,c);if(g&&g._f){const $=Array.isArray(g._f.refs)?g._f.refs[0]:g._f.ref;if(ve($)){const F=$.closest("form");if(F){F.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?K(n):{}:K(d),y.array.next({values:{...d}}),y.values.next({values:{...d}})}x={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!m.mount&&r(),m.mount=!k.isValid||!!a.keepIsValid,m.watch=!!e.shouldUnregister,y.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!re(i,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&i?Pe(n,i):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},et=(i,a)=>Ze(J(i)?i(u):i,a);return{control:{register:Ve,unregister:$e,getFieldState:Ke,handleSubmit:Qe,setError:Ye,_executeSchema:U,_getWatch:V,_getDirty:v,_updateValid:b,_removeUnmounted:S,_updateFieldArray:q,_getFieldArray:C,_reset:Ze,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(i=>{et(i,s.resetOptions),y.state.next({isLoading:!1})}),_updateFormState:i=>{t={...t,...i}},_subjects:y,_proxyFormState:k,get _fields(){return o},get _formValues(){return u},get _state(){return m},set _state(i){m=i},get _defaultValues(){return n},get _names(){return x},set _names(i){x=i},get _formState(){return t},set _formState(i){t=i},get _options(){return s},set _options(i){s={...s,...i}}},trigger:pe,register:Ve,handleSubmit:Qe,watch:At,setValue:te,getValues:Xe,reset:et,resetField:Ot,clearErrors:Ft,unregister:$e,setError:Ye,setFocus:(i,a={})=>{const l=p(o,i),h=l&&l._f;if(h){const d=h.refs?h.refs[0]:h.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:Ke}}function Br(e={}){const r=L.useRef(),s=L.useRef(),[t,o]=L.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:J(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Nr(e,()=>o(u=>({...u}))),formState:t});const n=r.current.control;return n._options=e,Ar({subject:n._subjects.state,next:u=>{Fr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),L.useEffect(()=>{e.values&&!re(e.values,s.current)?(n._reset(e.values,n._options.resetOptions),s.current=e.values):n._resetDefaultValues()},[e.values,n]),L.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),r.current.formState=Vr(t,n),r.current}const Ur=()=>{const{register:e,getValues:r,setValue:s,formState:t,trigger:o}=Br({mode:"all",defaultValues:{grounds:"",ratio:""}}),[n,u]=Q.useState(),m=Ie(),x=j=>{o("grounds"),o("ratio"),u(j),r("ratio")||s("ratio",j.recommendedRatio.toString())},O=()=>{const{grounds:j,ratio:k}=r(),y={blooming:!0,grounds:parseInt(j),ratio:parseInt(k)};n&&(m(pt({recipe:n,data:y})),localStorage.setItem(ze,JSON.stringify({recipeName:n.name,data:y})),m(Me("stepper")))};return f.jsxs(yr,{children:[f.jsx(yt,{}),f.jsxs(mr,{children:[f.jsx(st,{inputProps:{type:"number",placeholder:"coffee grounds",pattern:"[0-9][.]*",inputmode:"numeric"},width:"100%",suffix:"g",register:e("grounds",{required:!0,min:1,pattern:/^[0-9.,]+$/})}),f.jsx(Sr,{selectedRecipeName:n==null?void 0:n.name,onSelectRecipe:x}),f.jsx(st,{inputProps:{type:"number",placeholder:"ratio",pattern:"[0-9][.]*",inputmode:"numeric"},prefix:"1:",width:"100%",suffix:"g:ml",register:e("ratio",{required:!0,min:1,pattern:/^[0-9.,]+$/})}),f.jsx(Nt,{disabled:!n||!t.isValid,variant:"primary",onClick:O,children:"generate"})]})]})},Wr=w.div`
	display: flex;
	height: fit-content;

	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 12px;

	max-width: 520px;
	width: 520px;

	padding: 32px 0;

	overflow: auto;

	@media (max-width: 600px) {
		width: 100%;

		padding: 12px;
	}
`,Hr=w.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;

	height: fit-content;
	width: 100%;
`,oe=w.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	padding: 8px;
	border-radius: 8px;
	background-color: ${({theme:e})=>e.colors.brown3};
	color: ${({theme:e})=>e.colors.white1};
`,ne=w.span`
	font-size: 12px;
	font-weight: 500;
	text-align: center;
	color: ${({theme:e})=>e.colors.nude1};
`,ae=w.span`
	font-size: 14px;
	font-weight: 600;
	text-align: center;
	text-overflow: ellipsis;
`,qr=w.div`
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
`,Gr=w.span`
	color: ${({theme:e})=>e.colors.nude1};

	.icon {
		stroke: ${({theme:e})=>e.colors.nude1};
	}

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`,Xr=w.div`
	position: absolute;
	top: 0;
	left: 0;
	min-width: 100vw;
	min-height: 100vh;
	height: 100%;
	display: flex;
	overflow: hidden;
	overflow-y: auto;
`,Kr=w.div`
	position: relative;
	width: 100%;
	height: 100%;
	transition: all 0.1s ease-in-out;
	background: rgba(3, 3, 3, 0.2);
`,Yr=Lt`
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
	`,Jr=w.div`
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

	animation: ${Yr} 0.2s linear;

	@media (max-width: 520px) {
		width: 80vw;
	}
`,Qr=()=>{const{recipe:e,data:r}=ht(j=>j.recipeMaker),[s,t]=Q.useState(!1),o=Ie();if(!e||!r)return f.jsx("div",{children:"no recipe :("});const n=e.formula(r.grounds,r.ratio),u=(j,k)=>{const{label:y,isTimer:B}=e.stepsObject[j];let E=`${k+1}. ${y}`;return Object.keys(n).forEach(Z=>{y.includes(Z)&&(E=E.replace(Z,n[Z]))}),{label:E,isTimer:B}},m=()=>{localStorage.setItem(ze,""),o(Me("balance"))},x=j=>{j&&(j.preventDefault(),j.stopPropagation()),t(k=>!k)},O=j=>{j.stopPropagation()};return f.jsxs(f.Fragment,{children:[f.jsxs(Wr,{children:[f.jsxs(Gr,{onClick:m,children:[f.jsx(sr,{size:14,className:"icon"})," back"]}),f.jsx(yt,{}),f.jsxs(Hr,{children:[f.jsxs(oe,{children:[f.jsx(ae,{children:e.name}),f.jsx(ne,{children:"recipe"})]}),f.jsxs(oe,{children:[f.jsxs(ae,{children:[r.grounds,"g/~",Number(r.grounds*r.ratio).toFixed(0),"ml"]}),f.jsx(ne,{children:"size"})]}),f.jsxs(oe,{children:[f.jsxs(ae,{children:["1:",r.ratio]}),f.jsx(ne,{children:"ratio"})]}),f.jsxs(oe,{children:[f.jsxs(ae,{children:[e.minutes,"m"]}),f.jsx(ne,{children:"time"})]}),f.jsxs(oe,{children:[f.jsx(ae,{children:e.recommendedGrindSize}),f.jsx(ne,{children:"grind"})]}),f.jsxs(oe,{onClick:x,style:{cursor:"pointer"},children:[f.jsx(ae,{children:"?"}),f.jsx(ne,{children:"tip"})]})]}),e.steps.map((j,k)=>{const y=u(j,k);return f.jsx(qr,{isTimer:y.isTimer,children:y.label},k)})]}),s&&f.jsx(Xr,{children:f.jsx(Kr,{onClick:x,children:f.jsx(Jr,{onClick:O,dangerouslySetInnerHTML:{__html:e.tip}})})})]})},ss=()=>{const e=ht(t=>t.recipeMaker.step),r=Ie(),s=Q.useCallback(()=>{const t=localStorage.getItem(ze);if(t){const o=JSON.parse(t);if(o){const{data:n}=o,u=Ue.find(m=>m.name===o.recipeName);u&&n&&(r(pt({recipe:u,data:n})),r(Me("stepper")))}}},[]);return Q.useEffect(()=>{s()},[s]),f.jsxs(f.Fragment,{children:[e==="balance"&&f.jsx(Ur,{}),e==="stepper"&&f.jsx(Qr,{})]})};export{ss as default};
