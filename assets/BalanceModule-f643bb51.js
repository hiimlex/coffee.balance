import{R as xe,u as Et,c as Pt,s as w,j as f,r as Q,g as Ct,a as L,b as pt,d as ze,e as Me,W as Lt,f as ht}from"./index-5f197f8a.js";function mt(e=xe){const r=e===xe?Et:Pt(e);return function(){const{store:t}=r();return t}}const zt=mt();function Mt(e=xe){const r=e===xe?zt:mt(e);return function(){return r().dispatch}}const Ie=Mt(),It=w.button`
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
`,Nt=({children:e,variant:r,...o})=>f.jsx(It,{...o,variant:r,children:e}),Bt=w.header`
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
`,Gt=w.span`
	font-size: 16px;
	font-weight: 400;
`,gt=()=>f.jsxs(Bt,{children:[f.jsxs(Ut,{children:[f.jsx(Wt,{children:"Coffee."}),"balance"]}),f.jsx(Gt,{children:"make good coffee by yourself"})]}),Ht=w.input`
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
`,qt=w.div`
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
`,ot=Q.forwardRef(({prefix:e,suffix:r,width:o,inputProps:t,register:i},n)=>f.jsxs(Kt,{style:{width:o},children:[e&&f.jsx(Xt,{children:e}),f.jsx(Ht,{...t,style:{...t==null?void 0:t.style,width:o},ref:n,className:e?"with-prefix":"",...i}),r&&f.jsx(qt,{children:r})]}));var yt={exports:{}},Yt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Jt=Yt,Qt=Jt;function bt(){}function xt(){}xt.resetWarningCache=bt;var Zt=function(){function e(t,i,n,u,b,y){if(y!==Qt){var O=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw O.name="Invariant Violation",O}}e.isRequired=e;function r(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:xt,resetWarningCache:bt};return o.PropTypes=o,o};yt.exports=Zt();var er=yt.exports;const Y=Ct(er);function Pe(){return Pe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},Pe.apply(this,arguments)}function tr(e,r){if(e==null)return{};var o=rr(e,r),t,i;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function rr(e,r){if(e==null)return{};var o={},t=Object.keys(e),i,n;for(n=0;n<t.length;n++)i=t[n],!(r.indexOf(i)>=0)&&(o[i]=e[i]);return o}var Ne=Q.forwardRef(function(e,r){var o=e.color,t=o===void 0?"currentColor":o,i=e.size,n=i===void 0?24:i,u=tr(e,["color","size"]);return L.createElement("svg",Pe({ref:r,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),L.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),L.createElement("polyline",{points:"12 19 5 12 12 5"}))});Ne.propTypes={color:Y.string,size:Y.oneOfType([Y.string,Y.number])};Ne.displayName="ArrowLeft";const or=Ne;function Ce(){return Ce=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},Ce.apply(this,arguments)}function sr(e,r){if(e==null)return{};var o=ir(e,r),t,i;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function ir(e,r){if(e==null)return{};var o={},t=Object.keys(e),i,n;for(n=0;n<t.length;n++)i=t[n],!(r.indexOf(i)>=0)&&(o[i]=e[i]);return o}var Be=Q.forwardRef(function(e,r){var o=e.color,t=o===void 0?"currentColor":o,i=e.size,n=i===void 0?24:i,u=sr(e,["color","size"]);return L.createElement("svg",Ce({ref:r,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),L.createElement("polyline",{points:"6 9 12 15 18 9"}))});Be.propTypes={color:Y.string,size:Y.oneOfType([Y.string,Y.number])};Be.displayName="ChevronDown";const nr=Be,ar=w.div`
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
`;Q.forwardRef(({options:e,width:r,placeholder:o,register:t,selectProps:i},n)=>f.jsxs(ar,{children:[f.jsxs(lr,{...i,style:{width:r},ref:n,...t,children:[o&&f.jsx("option",{value:"",children:o}),e.map(({label:u,value:b},y)=>f.jsx("option",{value:b,children:u},y))]}),f.jsx(cr,{children:f.jsx(nr,{size:14,className:"icon"})})]}));const ur={name:"4:6",methods:["v60"],tip:"<strong>4:6</strong> it is a method that allows you to control the taste of coffee by changing the amount of water poured in each pour, the pours are divided in two parts 40% and 60% of the total. <br/> <br/><strong>Increase Acidity:</strong> Use more water in the first 40%. For example, if you're using 300g of water in total, use 150g for the first 40% instead of 120g. This emphasizes the extraction of acidic compounds, making the coffee taste brighter and more acidic.<br/><br/> <strong>Decrease Acidity:</strong> Use less water in the first 40%. For example, use 90g instead of 120g for the first 40%. This will reduce the acidity, resulting in a more mellow cup. <br/><br/> <strong>Increase Strength:</strong> Decrease the total water used or increase the coffee amount. For the 4:6 method, focus on the final 60% of the water. Use a finer grind or pour more slowly to extract more compounds, making the coffee taste stronger. <br/><br/> <strong>Decrease Strength:</strong> Increase the total water used or use less coffee. You can also coarsen the grind slightly or pour faster in the final 60% to extract fewer compounds, resulting in a lighter, less intense cup.",recommendedGrindSize:"medium",recommendedRatio:15,pours:5,minutes:3,formula:(e,r)=>{const o=e*r,t=(o*.4/2).toFixed(0),i=(o*.6/3).toFixed(0),n=2;return{blooming$:(e*n).toFixed(0),fourthPour$:t,sixthPour$:i,bloomingX$:n}},steps:["rinse","blooming","timer30","fourthPour","fourthPour","sixthPour","sixthPour","sixthPour","serve"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fourthPour:{label:"pour fourthPour$g water"},sixthPour:{label:"pour sixthPour$g water"},serve:{label:"Serve the coffee and enjoy!"}}},dr={name:"continuous",methods:["v60","melitta"],tip:"pour all water at once, a powerful and hard method to make a simple cup, the taste will be controlled by time and water rotation, the grind size is very important at this method.",recommendedGrindSize:"medium",recommendedRatio:12.5,pours:1,minutes:3,formula:(e,r)=>{const o=(e*r).toFixed(0),t=1.5,i=e*t;return{fullPour$:o,blooming$:i,bloomingX$:t}},steps:["rinse","blooming","timer30","fullPour","serve"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},timer30:{label:"wait 30s",isTimer:!0},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fullPour:{label:"pour fullPour$g water"},serve:{label:"Serve the coffee and enjoy!"}}},fr={name:"5 pour",methods:["v60","melitta"],minutes:3,pours:5,tip:"usual V60 brewing, this beverage involves pouring water in five batches, instead of pouring just a little bit of water for blooming before dropping in the rest.",recommendedGrindSize:"medium",recommendedRatio:15,formula:(e,r)=>{const t=(e*r/5).toFixed(0),i=3,n=(e*i).toFixed(0);return{bloomingX$:i,fifth$:t,blooming$:n}},steps:["rinse","blooming","timer30","fifthPour","fifthPour","fifthPour","fifthPour","fifthPour","serve"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},blooming:{label:"pre-wet blooming$g water (~bloomingX$x weight of grounds)"},fifthPour:{label:"pour fifth$g water"},timer30:{label:"wait 30s",isTimer:!0},serve:{label:"Serve the coffee and enjoy!"}}},pr={name:"melitta",methods:["melitta"],minutes:3.3,pours:1,formula:(e,r)=>{const o=e*r,t=(o*.25).toFixed(0),i=(o*.125).toFixed(0),n=.125;return{blooming$:(o*n).toFixed(0),bloomingX$:n,pour12$:i,pour25$:t}},recommendedGrindSize:"medium",recommendedRatio:17,tip:"Melitta is a pour-over method that uses a cone-shaped filter. It's similar to the V60, but the Melitta filter has a flat bottom, which can lead to a more balanced extraction.",steps:["rinse","blooming","timer30","pour12","timer10","pour25","pour25","pour25","serve"],stepsObject:{rinse:{label:"rinse filter & pre-heat"},blooming:{label:"pre-wet blooming$g water (~bloomingX$x of grounds weight)"},timer30:{label:"wait 30s",isTimer:!0},timer10:{label:"wait 10s",isTimer:!0},pour25:{label:"pour pour25$g water"},pour12:{label:"pour pour12$g water"},serve:{label:"Serve the coffee and enjoy!"}}},hr={name:"french press",methods:["french press"],minutes:8,pours:1,formula:(e,r)=>({pour$:e*r}),recommendedGrindSize:"coarse",recommendedRatio:16,tip:"Pour carefully! You want to avoid stirring up the grounds that have settled at the bottom.",steps:["boil","rinse","pour","timer5minutes","stir","scoopFoam","timer5minutes","plunge","serve"],stepsObject:{boil:{label:"boil water"},rinse:{label:"rinse french press & pre-heat"},pour:{label:"pour pour$g water into french press"},stir:{label:"stir coffee"},timer5minutes:{label:"wait 5 minutes",isTimer:!0},scoopFoam:{label:"scoop foam off the top"},plunge:{label:"plunge the press until the screen rests on top of the liquid"},serve:{label:"Serve the coffee and enjoy!"}}},mr={name:"cold brew immersion",methods:["cold brew","immersion"],minutes:720,pours:1,formula:(e,r)=>({water$:e*r,coffee$:e}),recommendedGrindSize:"coarse",recommendedRatio:5,tip:"Adjust the brew time and dilution to taste for your perfect cup of cold brew.",steps:["grind","mix","steep","strain","dilute","serve"],stepsObject:{grind:{label:"Grind coffee beans to a coarse consistency."},mix:{label:"mix coffee$g of coffee with water$g of cold or room-temperature water."},steep:{label:"cover and steep the mixture for 12 to 24 hours.",isTimer:!0},strain:{label:"strain the coffee using a fine mesh sieve or a coffee filter."},dilute:{label:"dilute with water, milk, or ice to taste."},serve:{label:"serve the cold brew over ice and enjoy."}}},gr={name:"hario immersion dripper switch",methods:["immersion","dripper"],minutes:4,pours:2,formula:(e,r)=>{const o=e*r,t=o*.15,i=o-t;return{bloom$:t,pour$:i}},recommendedGrindSize:"medium-coarse",recommendedRatio:15,tip:"Make sure to fully saturate the grounds during the bloom for a balanced extraction.",steps:["boil","grind","bloom","stir","pour","steep","release","serve"],stepsObject:{boil:{label:"boil water to 93°C (200°F)."},grind:{label:"grind coffee beans to a medium-coarse consistency."},bloom:{label:"add bloom$g of water to the grounds and let it bloom for 30 seconds.",isTimer:!0},stir:{label:"stir the bloom gently to ensure all grounds are saturated."},pour:{label:"slowly pour the remaining pour$g of water over 2 minutes."},steep:{label:"let the coffee steep for an additional 2 minutes.",isTimer:!0},release:{label:"press the switch to release the coffee into the cup."},serve:{label:"serve the coffee and enjoy."}}},yr={name:"v60 iced coffee",methods:["v60","iced coffee"],minutes:4,pours:1,formula:(e,r)=>{const o=e*r,t=+(o*.4).toFixed(0),i=+(o-t).toFixed(0);return{ice$:t,hotWater$:i}},recommendedGrindSize:"medium",recommendedRatio:16,tip:"Swirl the dripper to ensure even extraction and proper cooling over the ice.",steps:["boil","grind","addIce","bloom","pour","swirl","serve"],stepsObject:{boil:{label:"boil water to 93°C (200°F)."},grind:{label:"grind coffee beans to a medium consistency."},addIce:{label:"add ice$g of ice to the carafe or server."},bloom:{label:"add 40g of hot water to the grounds and let it bloom for 30 seconds.",isTimer:!0},pour:{label:"slowly pour the remaining hotWater$g of hot water over 2 minutes."},swirl:{label:"swirl the dripper gently to mix the coffee and ice."},serve:{label:"serve the iced coffee immediately and enjoy."}}},br={name:"brikka Pot",methods:["brikka"],minutes:5,pours:1,formula:(e,r)=>{const o=e;return{water$:e*r,coffee$:o}},recommendedGrindSize:"fine",recommendedRatio:7,tip:"Use freshly boiled water to speed up the brewing process and prevent over-extraction.",steps:["boil","grind","addWater","addCoffee","assemble","heat","serve"],stepsObject:{boil:{label:"boil water separately to speed up the brewing process."},grind:{label:"grind coffee beans to a fine consistency, slightly coarser than espresso."},addWater:{label:"add water$g of water to the Brikka pot's water chamber."},addCoffee:{label:"fill the filter basket with coffee$g of coffee, leveled but not tamped."},assemble:{label:"assemble the Brikka pot and place it on the stove."},heat:{label:"heat on medium until coffee starts to bubble and pour into the top chamber."},serve:{label:"remove from heat when you hear a hissing sound. Serve the coffee immediately."}}},xr={name:"moka Pot",methods:["moka"],minutes:5,pours:1,formula:(e,r)=>{const o=e;return{water$:e*r,coffee$:o}},recommendedGrindSize:"medium-fine",recommendedRatio:2,tip:"Ensure the water level does not reach the safety valve and use medium heat to prevent burning the coffee.",steps:["boil","grind","addWater","addCoffee","assemble","heat","serve"],stepsObject:{boil:{label:"boil water separately if you want to speed up the brewing process."},grind:{label:"grind coffee beans to a medium-fine consistency, similar to table salt."},addWater:{label:"add water$g of water to the bottom chamber of the Moka pot, making sure not to cover the safety valve."},addCoffee:{label:"fill the filter basket with coffee$g of coffee, leveling it off without pressing down."},assemble:{label:"assemble the Moka pot by placing the filter basket into the bottom chamber and screwing on the top part."},heat:{label:"heat the Moka pot on medium heat until coffee begins to bubble and brew into the top chamber."},serve:{label:"remove from heat as soon as brewing slows to avoid burning. Serve the coffee immediately."}}},Ue=[dr,ur,fr,pr,hr,mr,gr,yr,br,xr].sort((e,r)=>e.name>r.name?1:e.name<r.name?-1:0);Ue.map(e=>e.name);const vr=w.div`
	display: flex;
	width: 100%;
	height: fit-content;
	
	overflow: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 12px;

	min-width: 520px;
	width: 520px;

	padding: 32px 0;

	@media (max-width: 520px) {
		width: 100%;

		padding: 18px;
	}
`,wr=w.div`
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
`;const Sr=w.div`
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
`;const kr=w.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 4px;
`,$r=w.div`
	font-weight: 400;
	font-size: 14px;
	color: ${({theme:e})=>e.colors.nude1};

	padding-left: 12px;
`,jr=w.div`
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
`,_r=({onSelectRecipe:e,selectedRecipeName:r})=>f.jsxs(kr,{children:[f.jsx($r,{children:"select the recipe"}),f.jsx(Sr,{children:Ue.map((o,t)=>f.jsx(jr,{onClick:()=>e(o),selected:r===o.name,children:o.name},t))})]});var me=e=>e.type==="checkbox",le=e=>e instanceof Date,P=e=>e==null;const vt=e=>typeof e=="object";var R=e=>!P(e)&&!Array.isArray(e)&&vt(e)&&!le(e),Vr=e=>R(e)&&e.target?me(e.target)?e.target.checked:e.target.value:e,Fr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ar=(e,r)=>e.has(Fr(r)),Or=e=>{const r=e.constructor&&e.constructor.prototype;return R(r)&&r.hasOwnProperty("isPrototypeOf")},We=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function K(e){let r;const o=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(We&&(e instanceof Blob||e instanceof FileList))&&(o||R(e)))if(r=o?[]:{},!o&&!Or(e))r=e;else for(const t in e)e.hasOwnProperty(t)&&(r[t]=K(e[t]));else return e;return r}var ge=e=>Array.isArray(e)?e.filter(Boolean):[],A=e=>e===void 0,p=(e,r,o)=>{if(!r||!R(e))return o;const t=ge(r.split(/[,[\].]+?/)).reduce((i,n)=>P(i)?i:i[n],e);return A(t)||t===e?A(e[r])?o:e[r]:t};const st={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},N={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};L.createContext(null);var Rr=(e,r,o,t=!0)=>{const i={defaultValues:r._defaultValues};for(const n in e)Object.defineProperty(i,n,{get:()=>{const u=n;return r._proxyFormState[u]!==N.all&&(r._proxyFormState[u]=!t||N.all),o&&(o[u]=!0),e[u]}});return i},M=e=>R(e)&&!Object.keys(e).length,Dr=(e,r,o,t)=>{o(e);const{name:i,...n}=e;return M(n)||Object.keys(n).length>=Object.keys(r).length||Object.keys(n).find(u=>r[u]===(!t||N.all))},Oe=e=>Array.isArray(e)?e:[e];function Tr(e){const r=L.useRef(e);r.current=e,L.useEffect(()=>{const o=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{o&&o.unsubscribe()}},[e.disabled])}var G=e=>typeof e=="string",Er=(e,r,o,t,i)=>G(e)?(t&&r.watch.add(e),p(o,e,i)):Array.isArray(e)?e.map(n=>(t&&r.watch.add(n),p(o,n))):(t&&(r.watchAll=!0),o),Ge=e=>/^\w*$/.test(e),wt=e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/));function $(e,r,o){let t=-1;const i=Ge(r)?[r]:wt(r),n=i.length,u=n-1;for(;++t<n;){const b=i[t];let y=o;if(t!==u){const O=e[b];y=R(O)||Array.isArray(O)?O:isNaN(+i[t+1])?{}:[]}e[b]=y,e=e[b]}return e}var Pr=(e,r,o,t,i)=>r?{...o[e],types:{...o[e]&&o[e].types?o[e].types:{},[t]:i||!0}}:{};const Le=(e,r,o)=>{for(const t of o||Object.keys(e)){const i=p(e,t);if(i){const{_f:n,...u}=i;if(n&&r(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else R(u)&&Le(u,r)}}};var it=e=>({isOnSubmit:!e||e===N.onSubmit,isOnBlur:e===N.onBlur,isOnChange:e===N.onChange,isOnAll:e===N.all,isOnTouch:e===N.onTouched}),nt=(e,r,o)=>!o&&(r.watchAll||r.watch.has(e)||[...r.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Cr=(e,r,o)=>{const t=ge(p(e,o));return $(t,"root",r[o]),$(e,o,t),e},ce=e=>typeof e=="boolean",He=e=>e.type==="file",J=e=>typeof e=="function",ve=e=>{if(!We)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},be=e=>G(e),qe=e=>e.type==="radio",we=e=>e instanceof RegExp;const at={value:!1,isValid:!1},lt={value:!0,isValid:!0};var St=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(o=>o&&o.checked&&!o.disabled).map(o=>o.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!A(e[0].attributes.value)?A(e[0].value)||e[0].value===""?lt:{value:e[0].value,isValid:!0}:lt:at}return at};const ct={isValid:!1,value:null};var kt=e=>Array.isArray(e)?e.reduce((r,o)=>o&&o.checked&&!o.disabled?{isValid:!0,value:o.value}:r,ct):ct;function ut(e,r,o="validate"){if(be(e)||Array.isArray(e)&&e.every(be)||ce(e)&&!e)return{type:o,message:be(e)?e:"",ref:r}}var se=e=>R(e)&&!we(e)?e:{value:e,message:""},dt=async(e,r,o,t,i)=>{const{ref:n,refs:u,required:b,maxLength:y,minLength:O,min:j,max:k,pattern:g,validate:B,name:E,valueAsNumber:Z,mount:ye,disabled:$e}=e._f,x=p(r,E);if(!ye||$e)return{};const I=u?u[0]:n,H=S=>{t&&I.reportValidity&&(I.setCustomValidity(ce(S)?"":S||""),I.reportValidity())},D={},ue=qe(n),de=me(n),je=ue||de,U=(Z||He(n))&&A(n.value)&&A(x)||ve(n)&&n.value===""||x===""||Array.isArray(x)&&!x.length,ee=Pr.bind(null,E,o,D),q=(S,v,V,C=X.maxLength,z=X.minLength)=>{const W=S?v:V;D[E]={type:S?C:z,message:W,ref:n,...ee(S?C:z,W)}};if(i?!Array.isArray(x)||!x.length:b&&(!je&&(U||P(x))||ce(x)&&!x||de&&!St(u).isValid||ue&&!kt(u).isValid)){const{value:S,message:v}=be(b)?{value:!!b,message:b}:se(b);if(S&&(D[E]={type:X.required,message:v,ref:I,...ee(X.required,v)},!o))return H(v),D}if(!U&&(!P(j)||!P(k))){let S,v;const V=se(k),C=se(j);if(!P(x)&&!isNaN(x)){const z=n.valueAsNumber||x&&+x;P(V.value)||(S=z>V.value),P(C.value)||(v=z<C.value)}else{const z=n.valueAsDate||new Date(x),W=pe=>new Date(new Date().toDateString()+" "+pe),te=n.type=="time",fe=n.type=="week";G(V.value)&&x&&(S=te?W(x)>W(V.value):fe?x>V.value:z>new Date(V.value)),G(C.value)&&x&&(v=te?W(x)<W(C.value):fe?x<C.value:z<new Date(C.value))}if((S||v)&&(q(!!S,V.message,C.message,X.max,X.min),!o))return H(D[E].message),D}if((y||O)&&!U&&(G(x)||i&&Array.isArray(x))){const S=se(y),v=se(O),V=!P(S.value)&&x.length>+S.value,C=!P(v.value)&&x.length<+v.value;if((V||C)&&(q(V,S.message,v.message),!o))return H(D[E].message),D}if(g&&!U&&G(x)){const{value:S,message:v}=se(g);if(we(S)&&!x.match(S)&&(D[E]={type:X.pattern,message:v,ref:n,...ee(X.pattern,v)},!o))return H(v),D}if(B){if(J(B)){const S=await B(x,r),v=ut(S,I);if(v&&(D[E]={...v,...ee(X.validate,v.message)},!o))return H(v.message),D}else if(R(B)){let S={};for(const v in B){if(!M(S)&&!o)break;const V=ut(await B[v](x,r),I,v);V&&(S={...V,...ee(v,V.message)},H(V.message),o&&(D[E]=S))}if(!M(S)&&(D[E]={ref:I,...S},!o))return D}}return H(!0),D};function Lr(e,r){const o=r.slice(0,-1).length;let t=0;for(;t<o;)e=A(e)?t++:e[r[t++]];return e}function zr(e){for(const r in e)if(e.hasOwnProperty(r)&&!A(e[r]))return!1;return!0}function T(e,r){const o=Array.isArray(r)?r:Ge(r)?[r]:wt(r),t=o.length===1?e:Lr(e,o),i=o.length-1,n=o[i];return t&&delete t[n],i!==0&&(R(t)&&M(t)||Array.isArray(t)&&zr(t))&&T(e,o.slice(0,-1)),e}function Re(){let e=[];return{get observers(){return e},next:i=>{for(const n of e)n.next&&n.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(n=>n!==i)}}),unsubscribe:()=>{e=[]}}}var Se=e=>P(e)||!vt(e);function re(e,r){if(Se(e)||Se(r))return e===r;if(le(e)&&le(r))return e.getTime()===r.getTime();const o=Object.keys(e),t=Object.keys(r);if(o.length!==t.length)return!1;for(const i of o){const n=e[i];if(!t.includes(i))return!1;if(i!=="ref"){const u=r[i];if(le(n)&&le(u)||R(n)&&R(u)||Array.isArray(n)&&Array.isArray(u)?!re(n,u):n!==u)return!1}}return!0}var $t=e=>e.type==="select-multiple",Mr=e=>qe(e)||me(e),De=e=>ve(e)&&e.isConnected,jt=e=>{for(const r in e)if(J(e[r]))return!0;return!1};function ke(e,r={}){const o=Array.isArray(e);if(R(e)||o)for(const t in e)Array.isArray(e[t])||R(e[t])&&!jt(e[t])?(r[t]=Array.isArray(e[t])?[]:{},ke(e[t],r[t])):P(e[t])||(r[t]=!0);return r}function _t(e,r,o){const t=Array.isArray(e);if(R(e)||t)for(const i in e)Array.isArray(e[i])||R(e[i])&&!jt(e[i])?A(r)||Se(o[i])?o[i]=Array.isArray(e[i])?ke(e[i],[]):{...ke(e[i])}:_t(e[i],P(r)?{}:r[i],o[i]):o[i]=!re(e[i],r[i]);return o}var Te=(e,r)=>_t(e,r,ke(r)),Vt=(e,{valueAsNumber:r,valueAsDate:o,setValueAs:t})=>A(e)?e:r?e===""?NaN:e&&+e:o&&G(e)?new Date(e):t?t(e):e;function Ee(e){const r=e.ref;if(!(e.refs?e.refs.every(o=>o.disabled):r.disabled))return He(r)?r.files:qe(r)?kt(e.refs).value:$t(r)?[...r.selectedOptions].map(({value:o})=>o):me(r)?St(e.refs).value:Vt(A(r.value)?e.ref.value:r.value,e)}var Ir=(e,r,o,t)=>{const i={};for(const n of e){const u=p(r,n);u&&$(i,n,u._f)}return{criteriaMode:o,names:[...e],fields:i,shouldUseNativeValidation:t}},he=e=>A(e)?e:we(e)?e.source:R(e)?we(e.value)?e.value.source:e.value:e,Nr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ft(e,r,o){const t=p(e,o);if(t||Ge(o))return{error:t,name:o};const i=o.split(".");for(;i.length;){const n=i.join("."),u=p(r,n),b=p(e,n);if(u&&!Array.isArray(u)&&o!==n)return{name:o};if(b&&b.type)return{name:n,error:b};i.pop()}return{name:o}}var Br=(e,r,o,t,i)=>i.isOnAll?!1:!o&&i.isOnTouch?!(r||e):(o?t.isOnBlur:i.isOnBlur)?!e:(o?t.isOnChange:i.isOnChange)?e:!0,Ur=(e,r)=>!ge(p(e,r)).length&&T(e,r);const Wr={mode:N.onSubmit,reValidateMode:N.onChange,shouldFocusError:!0};function Gr(e={},r){let o={...Wr,...e},t={submitCount:0,isDirty:!1,isLoading:J(o.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},n=R(o.defaultValues)||R(o.values)?K(o.defaultValues||o.values)||{}:{},u=o.shouldUnregister?{}:K(n),b={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},O,j=0;const k={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Re(),array:Re(),state:Re()},B=e.resetOptions&&e.resetOptions.keepDirtyValues,E=it(o.mode),Z=it(o.reValidateMode),ye=o.criteriaMode===N.all,$e=s=>a=>{clearTimeout(j),j=setTimeout(s,a)},x=async s=>{if(k.isValid||s){const a=o.resolver?M((await U()).errors):await q(i,!0);a!==t.isValid&&g.state.next({isValid:a})}},I=s=>k.isValidating&&g.state.next({isValidating:s}),H=(s,a=[],l,h,d=!0,c=!0)=>{if(h&&l){if(b.action=!0,c&&Array.isArray(p(i,s))){const m=l(p(i,s),h.argA,h.argB);d&&$(i,s,m)}if(c&&Array.isArray(p(t.errors,s))){const m=l(p(t.errors,s),h.argA,h.argB);d&&$(t.errors,s,m),Ur(t.errors,s)}if(k.touchedFields&&c&&Array.isArray(p(t.touchedFields,s))){const m=l(p(t.touchedFields,s),h.argA,h.argB);d&&$(t.touchedFields,s,m)}k.dirtyFields&&(t.dirtyFields=Te(n,u)),g.state.next({name:s,isDirty:v(s,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else $(u,s,a)},D=(s,a)=>{$(t.errors,s,a),g.state.next({errors:t.errors})},ue=(s,a,l,h)=>{const d=p(i,s);if(d){const c=p(u,s,A(l)?p(n,s):l);A(c)||h&&h.defaultChecked||a?$(u,s,a?c:Ee(d._f)):z(s,c),b.mount&&x()}},de=(s,a,l,h,d)=>{let c=!1,m=!1;const _={name:s};if(!l||h){k.isDirty&&(m=t.isDirty,t.isDirty=_.isDirty=v(),c=m!==_.isDirty);const F=re(p(n,s),a);m=p(t.dirtyFields,s),F?T(t.dirtyFields,s):$(t.dirtyFields,s,!0),_.dirtyFields=t.dirtyFields,c=c||k.dirtyFields&&m!==!F}if(l){const F=p(t.touchedFields,s);F||($(t.touchedFields,s,l),_.touchedFields=t.touchedFields,c=c||k.touchedFields&&F!==l)}return c&&d&&g.state.next(_),c?_:{}},je=(s,a,l,h)=>{const d=p(t.errors,s),c=k.isValid&&ce(a)&&t.isValid!==a;if(e.delayError&&l?(O=$e(()=>D(s,l)),O(e.delayError)):(clearTimeout(j),O=null,l?$(t.errors,s,l):T(t.errors,s)),(l?!re(d,l):d)||!M(h)||c){const m={...h,...c&&ce(a)?{isValid:a}:{},errors:t.errors,name:s};t={...t,...m},g.state.next(m)}I(!1)},U=async s=>o.resolver(u,o.context,Ir(s||y.mount,i,o.criteriaMode,o.shouldUseNativeValidation)),ee=async s=>{const{errors:a}=await U();if(s)for(const l of s){const h=p(a,l);h?$(t.errors,l,h):T(t.errors,l)}else t.errors=a;return a},q=async(s,a,l={valid:!0})=>{for(const h in s){const d=s[h];if(d){const{_f:c,...m}=d;if(c){const _=y.array.has(c.name),F=await dt(d,u,ye,o.shouldUseNativeValidation&&!a,_);if(F[c.name]&&(l.valid=!1,a))break;!a&&(p(F,c.name)?_?Cr(t.errors,F,c.name):$(t.errors,c.name,F[c.name]):T(t.errors,c.name))}m&&await q(m,a,l)}}return l.valid},S=()=>{for(const s of y.unMount){const a=p(i,s);a&&(a._f.refs?a._f.refs.every(l=>!De(l)):!De(a._f.ref))&&_e(s)}y.unMount=new Set},v=(s,a)=>(s&&a&&$(u,s,a),!re(Xe(),n)),V=(s,a,l)=>Er(s,y,{...b.mount?u:A(a)?n:G(s)?{[s]:a}:a},l,a),C=s=>ge(p(b.mount?u:n,s,e.shouldUnregister?p(n,s,[]):[])),z=(s,a,l={})=>{const h=p(i,s);let d=a;if(h){const c=h._f;c&&(!c.disabled&&$(u,s,Vt(a,c)),d=ve(c.ref)&&P(a)?"":a,$t(c.ref)?[...c.ref.options].forEach(m=>m.selected=d.includes(m.value)):c.refs?me(c.ref)?c.refs.length>1?c.refs.forEach(m=>(!m.defaultChecked||!m.disabled)&&(m.checked=Array.isArray(d)?!!d.find(_=>_===m.value):d===m.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(m=>m.checked=m.value===d):He(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||g.values.next({name:s,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&de(s,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&pe(s)},W=(s,a,l)=>{for(const h in a){const d=a[h],c=`${s}.${h}`,m=p(i,c);(y.array.has(s)||!Se(d)||m&&!m._f)&&!le(d)?W(c,d,l):z(c,d,l)}},te=(s,a,l={})=>{const h=p(i,s),d=y.array.has(s),c=K(a);$(u,s,c),d?(g.array.next({name:s,values:{...u}}),(k.isDirty||k.dirtyFields)&&l.shouldDirty&&g.state.next({name:s,dirtyFields:Te(n,u),isDirty:v(s,c)})):h&&!h._f&&!P(c)?W(s,c,l):z(s,c,l),nt(s,y)&&g.state.next({...t}),g.values.next({name:s,values:{...u}}),!b.mount&&r()},fe=async s=>{const a=s.target;let l=a.name,h=!0;const d=p(i,l),c=()=>a.type?Ee(d._f):Vr(s);if(d){let m,_;const F=c(),oe=s.type===st.BLUR||s.type===st.FOCUS_OUT,Rt=!Nr(d._f)&&!o.resolver&&!p(t.errors,l)&&!d._f.deps||Br(oe,p(t.touchedFields,l),t.isSubmitted,Z,E),Fe=nt(l,y,oe);$(u,l,F),oe?(d._f.onBlur&&d._f.onBlur(s),O&&O(0)):d._f.onChange&&d._f.onChange(s);const Ae=de(l,F,oe,!1),Dt=!M(Ae)||Fe;if(!oe&&g.values.next({name:l,type:s.type,values:{...u}}),Rt)return k.isValid&&x(),Dt&&g.state.next({name:l,...Fe?{}:Ae});if(!oe&&Fe&&g.state.next({...t}),I(!0),o.resolver){const{errors:tt}=await U([l]),Tt=ft(t.errors,i,l),rt=ft(tt,i,Tt.name||l);m=rt.error,l=rt.name,_=M(tt)}else m=(await dt(d,u,ye,o.shouldUseNativeValidation))[l],h=isNaN(F)||F===p(u,l,F),h&&(m?_=!1:k.isValid&&(_=await q(i,!0)));h&&(d._f.deps&&pe(d._f.deps),je(l,_,m,Ae))}},pe=async(s,a={})=>{let l,h;const d=Oe(s);if(I(!0),o.resolver){const c=await ee(A(s)?s:d);l=M(c),h=s?!d.some(m=>p(c,m)):l}else s?(h=(await Promise.all(d.map(async c=>{const m=p(i,c);return await q(m&&m._f?{[c]:m}:m)}))).every(Boolean),!(!h&&!t.isValid)&&x()):h=l=await q(i);return g.state.next({...!G(s)||k.isValid&&l!==t.isValid?{}:{name:s},...o.resolver||!s?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!h&&Le(i,c=>c&&p(t.errors,c),s?d:y.mount),h},Xe=s=>{const a={...n,...b.mount?u:{}};return A(s)?a:G(s)?p(a,s):s.map(l=>p(a,l))},Ke=(s,a)=>({invalid:!!p((a||t).errors,s),isDirty:!!p((a||t).dirtyFields,s),isTouched:!!p((a||t).touchedFields,s),error:p((a||t).errors,s)}),Ft=s=>{s&&Oe(s).forEach(a=>T(t.errors,a)),g.state.next({errors:s?t.errors:{}})},Ye=(s,a,l)=>{const h=(p(i,s,{_f:{}})._f||{}).ref;$(t.errors,s,{...a,ref:h}),g.state.next({name:s,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&h&&h.focus&&h.focus()},At=(s,a)=>J(s)?g.values.subscribe({next:l=>s(V(void 0,a),l)}):V(s,a,!0),_e=(s,a={})=>{for(const l of s?Oe(s):y.mount)y.mount.delete(l),y.array.delete(l),a.keepValue||(T(i,l),T(u,l)),!a.keepError&&T(t.errors,l),!a.keepDirty&&T(t.dirtyFields,l),!a.keepTouched&&T(t.touchedFields,l),!o.shouldUnregister&&!a.keepDefaultValue&&T(n,l);g.values.next({values:{...u}}),g.state.next({...t,...a.keepDirty?{isDirty:v()}:{}}),!a.keepIsValid&&x()},Ve=(s,a={})=>{let l=p(i,s);const h=ce(a.disabled);return $(i,s,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:s}},name:s,mount:!0,...a}}),y.mount.add(s),l?h&&$(u,s,a.disabled?void 0:p(u,s,Ee(l._f))):ue(s,!0,a.value),{...h?{disabled:a.disabled}:{},...o.progressive?{required:!!a.required,min:he(a.min),max:he(a.max),minLength:he(a.minLength),maxLength:he(a.maxLength),pattern:he(a.pattern)}:{},name:s,onChange:fe,onBlur:fe,ref:d=>{if(d){Ve(s,a),l=p(i,s);const c=A(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,m=Mr(c),_=l._f.refs||[];if(m?_.find(F=>F===c):c===l._f.ref)return;$(i,s,{_f:{...l._f,...m?{refs:[..._.filter(De),c,...Array.isArray(p(n,s))?[{}]:[]],ref:{type:c.type,name:s}}:{ref:c}}}),ue(s,!1,void 0,c)}else l=p(i,s,{}),l._f&&(l._f.mount=!1),(o.shouldUnregister||a.shouldUnregister)&&!(Ar(y.array,s)&&b.action)&&y.unMount.add(s)}}},Je=()=>o.shouldFocusError&&Le(i,s=>s&&p(t.errors,s),y.mount),Qe=(s,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let h=K(u);if(g.state.next({isSubmitting:!0}),o.resolver){const{errors:d,values:c}=await U();t.errors=d,h=c}else await q(i);T(t.errors,"root"),M(t.errors)?(g.state.next({errors:{}}),await s(h,l)):(a&&await a({...t.errors},l),Je(),setTimeout(Je)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Ot=(s,a={})=>{p(i,s)&&(A(a.defaultValue)?te(s,p(n,s)):(te(s,a.defaultValue),$(n,s,a.defaultValue)),a.keepTouched||T(t.touchedFields,s),a.keepDirty||(T(t.dirtyFields,s),t.isDirty=a.defaultValue?v(s,p(n,s)):v()),a.keepError||(T(t.errors,s),k.isValid&&x()),g.state.next({...t}))},Ze=(s,a={})=>{const l=s||n,h=K(l),d=s&&!M(s)?h:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||B)for(const c of y.mount)p(t.dirtyFields,c)?$(d,c,p(u,c)):te(c,p(d,c));else{if(We&&A(s))for(const c of y.mount){const m=p(i,c);if(m&&m._f){const _=Array.isArray(m._f.refs)?m._f.refs[0]:m._f.ref;if(ve(_)){const F=_.closest("form");if(F){F.reset();break}}}}i={}}u=e.shouldUnregister?a.keepDefaultValues?K(n):{}:K(d),g.array.next({values:{...d}}),g.values.next({values:{...d}})}y={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&r(),b.mount=!k.isValid||!!a.keepIsValid,b.watch=!!e.shouldUnregister,g.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!re(s,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&s?Te(n,s):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},et=(s,a)=>Ze(J(s)?s(u):s,a);return{control:{register:Ve,unregister:_e,getFieldState:Ke,handleSubmit:Qe,setError:Ye,_executeSchema:U,_getWatch:V,_getDirty:v,_updateValid:x,_removeUnmounted:S,_updateFieldArray:H,_getFieldArray:C,_reset:Ze,_resetDefaultValues:()=>J(o.defaultValues)&&o.defaultValues().then(s=>{et(s,o.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_subjects:g,_proxyFormState:k,get _fields(){return i},get _formValues(){return u},get _state(){return b},set _state(s){b=s},get _defaultValues(){return n},get _names(){return y},set _names(s){y=s},get _formState(){return t},set _formState(s){t=s},get _options(){return o},set _options(s){o={...o,...s}}},trigger:pe,register:Ve,handleSubmit:Qe,watch:At,setValue:te,getValues:Xe,reset:et,resetField:Ot,clearErrors:Ft,unregister:_e,setError:Ye,setFocus:(s,a={})=>{const l=p(i,s),h=l&&l._f;if(h){const d=h.refs?h.refs[0]:h.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:Ke}}function Hr(e={}){const r=L.useRef(),o=L.useRef(),[t,i]=L.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:J(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Gr(e,()=>i(u=>({...u}))),formState:t});const n=r.current.control;return n._options=e,Tr({subject:n._subjects.state,next:u=>{Dr(u,n._proxyFormState,n._updateFormState,!0)&&i({...n._formState})}}),L.useEffect(()=>{e.values&&!re(e.values,o.current)?(n._reset(e.values,n._options.resetOptions),o.current=e.values):n._resetDefaultValues()},[e.values,n]),L.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),r.current.formState=Rr(t,n),r.current}const qr=()=>{const{register:e,getValues:r,setValue:o,formState:t,trigger:i}=Hr({mode:"all",defaultValues:{grounds:"",ratio:""}}),[n,u]=Q.useState(),b=Ie(),y=j=>{i("grounds"),i("ratio"),u(j),r("ratio")||o("ratio",j.recommendedRatio.toString())},O=()=>{const{grounds:j,ratio:k}=r(),g={blooming:!0,grounds:parseInt(j),ratio:parseInt(k)};n&&(b(pt({recipe:n,data:g})),localStorage.setItem(ze,JSON.stringify({recipeName:n.name,data:g})),b(Me("stepper")))};return f.jsxs(vr,{children:[f.jsx(gt,{}),f.jsxs(wr,{children:[f.jsx(ot,{inputProps:{type:"number",placeholder:"coffee grounds",pattern:"[0-9][.]*",inputmode:"numeric"},width:"100%",suffix:"g",register:e("grounds",{required:!0,min:1,pattern:/^[0-9.,]+$/})}),f.jsx(_r,{selectedRecipeName:n==null?void 0:n.name,onSelectRecipe:y}),f.jsx(ot,{inputProps:{type:"number",placeholder:"ratio",pattern:"[0-9][.]*",inputmode:"numeric"},prefix:"1:",width:"100%",suffix:"g:ml",register:e("ratio",{required:!0,min:1,pattern:/^[0-9.,]+$/})}),f.jsx(Nt,{disabled:!n||!t.isValid,variant:"primary",onClick:O,children:"generate"})]})]})},Xr=w.div`
	display: flex;
	height: fit-content;

	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 12px;

	min-width: 520px;
	width: 520px;

	padding: 32px 0;

	overflow: auto;

	@media (max-width: 520px) {
		width: 100%;

		padding: 12px;
	}
`,Kr=w.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;

	height: fit-content;
	width: 100%;
`,ie=w.div`
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
`,Yr=w.div`
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
`,Jr=w.span`
	color: ${({theme:e})=>e.colors.nude1};

	.icon {
		stroke: ${({theme:e})=>e.colors.nude1};
	}

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`,Qr=w.div`
	position: absolute;
	top: 0;
	left: 0;
	min-width: 100vw;
	min-height: 100vh;
	height: 100%;
	display: flex;
	overflow: hidden;
	overflow-y: auto;
`,Zr=w.div`
	position: relative;
	width: 100%;
	height: 100%;
	transition: all 0.1s ease-in-out;
	background: rgba(3, 3, 3, 0.2);
`,eo=Lt`
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
	`,to=w.div`
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

	animation: ${eo} 0.2s linear;

	@media (max-width: 520px) {
		width: 80vw;
	}
`,ro=()=>{const{recipe:e,data:r}=ht(j=>j.recipeMaker),[o,t]=Q.useState(!1),i=Ie();if(!e||!r)return f.jsx("div",{children:"no recipe :("});const n=e.formula(r.grounds,r.ratio),u=(j,k)=>{const{label:g,isTimer:B}=e.stepsObject[j];let E=`${k+1}. ${g}`;return Object.keys(n).forEach(Z=>{g.includes(Z)&&(E=E.replace(Z,n[Z]))}),{label:E,isTimer:B}},b=()=>{localStorage.setItem(ze,""),i(Me("balance"))},y=j=>{j&&(j.preventDefault(),j.stopPropagation()),t(k=>!k)},O=j=>{j.stopPropagation()};return f.jsxs(f.Fragment,{children:[f.jsxs(Xr,{children:[f.jsxs(Jr,{onClick:b,children:[f.jsx(or,{size:14,className:"icon"})," back"]}),f.jsx(gt,{}),f.jsxs(Kr,{children:[f.jsxs(ie,{children:[f.jsx(ae,{children:e.name}),f.jsx(ne,{children:"recipe"})]}),f.jsxs(ie,{children:[f.jsxs(ae,{children:[r.grounds,"g/~",Number(r.grounds*r.ratio).toFixed(0),"ml"]}),f.jsx(ne,{children:"size"})]}),f.jsxs(ie,{children:[f.jsxs(ae,{children:["1:",r.ratio]}),f.jsx(ne,{children:"ratio"})]}),f.jsxs(ie,{children:[f.jsxs(ae,{children:[e.minutes,"m"]}),f.jsx(ne,{children:"time"})]}),f.jsxs(ie,{children:[f.jsx(ae,{children:e.recommendedGrindSize}),f.jsx(ne,{children:"grind"})]}),f.jsxs(ie,{onClick:y,style:{cursor:"pointer"},children:[f.jsx(ae,{children:"?"}),f.jsx(ne,{children:"tip"})]})]}),e.steps.map((j,k)=>{const g=u(j,k);return f.jsx(Yr,{isTimer:g.isTimer,children:g.label},k)})]}),o&&f.jsx(Qr,{children:f.jsx(Zr,{onClick:y,children:f.jsx(to,{onClick:O,dangerouslySetInnerHTML:{__html:e.tip}})})})]})},ao=()=>{const e=ht(t=>t.recipeMaker.step),r=Ie(),o=Q.useCallback(()=>{const t=localStorage.getItem(ze);if(t){const i=JSON.parse(t);if(i){const{data:n}=i,u=Ue.find(b=>b.name===i.recipeName);u&&n&&(r(pt({recipe:u,data:n})),r(Me("stepper")))}}},[]);return Q.useEffect(()=>{o()},[o]),f.jsxs(f.Fragment,{children:[e==="balance"&&f.jsx(qr,{}),e==="stepper"&&f.jsx(ro,{})]})};export{ao as default};
