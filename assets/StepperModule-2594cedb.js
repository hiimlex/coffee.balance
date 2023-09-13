import{r as y,R as b,s as l,W as R,u as k,j as t,b as E,a as z,g as P}from"./index-5a3e30f4.js";import{P as m,H as L,u as C,d as M}from"./styles-01ec9a84.js";function v(){return v=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},v.apply(this,arguments)}function N(e,o){if(e==null)return{};var i=T(e,o),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function T(e,o){if(e==null)return{};var i={},n=Object.keys(e),r,s;for(s=0;s<n.length;s++)r=n[s],!(o.indexOf(r)>=0)&&(i[r]=e[r]);return i}var S=y.forwardRef(function(e,o){var i=e.color,n=i===void 0?"currentColor":i,r=e.size,s=r===void 0?24:r,c=N(e,["color","size"]);return b.createElement("svg",v({ref:o,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),b.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),b.createElement("polyline",{points:"12 19 5 12 12 5"}))});S.propTypes={color:m.string,size:m.oneOfType([m.string,m.number])};S.displayName="ArrowLeft";const V=S,A=l.div`
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
`,_=l.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;

	height: fit-content;
	width: 100%;
`,p=l.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 8px;
	border-radius: 8px;
	background-color: ${({theme:e})=>e.colors.brown3};
	color: ${({theme:e})=>e.colors.white1};
`,h=l.span`
	font-size: 12px;
	font-weight: 500;
	text-align: center;
	color: ${({theme:e})=>e.colors.nude1};
`,f=l.span`
	font-size: 16px;
	font-weight: 600;
`,W=l.div`
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

	${({isTimer:e,theme:o})=>!!e&&e&&`
		background-color: ${o.colors.nude1};
		color: ${o.colors.purple2};
	`}
`,I=l.span`
	color: ${({theme:e})=>e.colors.nude1};

	.icon {
		stroke: ${({theme:e})=>e.colors.nude1};
	}

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`,B=l.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`,F=l.div`
	position: relative;
	width: 100%;
	height: 100%;
	transition: all 0.1s ease-in-out;
	background: rgba(3, 3, 3, 0.2);
`,G=R`
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
	`,D=l.div`
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

	animation: ${G} 0.2s linear;

	@media (max-width: 420px) {
		width: 80vw;
	}
`,H=({recipe:e,data:o})=>{const i=e.formula(o.grounds,o.ratio),[n,r]=y.useState(!1),s=k(),c=(a,d)=>{const{label:x,isTimer:$}=e.stepsObject[a];let w=`${d+1}. ${x}`;return Object.keys(i).forEach(j=>{x.includes(j)&&(w=w.replace(j,i[j]))}),{label:w,isTimer:$}},u=()=>{s("/")},g=a=>{a&&(a.preventDefault(),a.stopPropagation()),r(d=>!d)},O=a=>{a.stopPropagation()};return t.jsxs(t.Fragment,{children:[t.jsxs(A,{children:[t.jsxs(I,{onClick:u,children:[t.jsx(V,{size:14,className:"icon"})," back"]}),t.jsx(L,{}),t.jsxs(_,{children:[t.jsxs(p,{children:[t.jsx(f,{children:e.name}),t.jsx(h,{children:"recipe"})]}),t.jsxs(p,{children:[t.jsxs(f,{children:[o.grounds,"g/~",Number(o.grounds*o.ratio).toFixed(0),"ml"]}),t.jsx(h,{children:"size"})]}),t.jsxs(p,{children:[t.jsxs(f,{children:["1:",o.ratio]}),t.jsx(h,{children:"ratio"})]}),t.jsxs(p,{children:[t.jsxs(f,{children:[e.minutes,"m"]}),t.jsx(h,{children:"time"})]}),t.jsxs(p,{children:[t.jsx(f,{children:e.recommendedGrindSize}),t.jsx(h,{children:"grind"})]}),t.jsxs(p,{onClick:g,style:{cursor:"pointer"},children:[t.jsx(f,{children:"?"}),t.jsx(h,{children:"tip"})]})]}),e.steps.map((a,d)=>{const x=c(a,d);return t.jsx(W,{isTimer:x.isTimer,children:x.label},d)})]}),n&&t.jsx(B,{children:t.jsx(F,{onClick:g,children:t.jsx(D,{onClick:O,children:e.tip})})})]})},Y=()=>{const{data:e,recipe:o}=E(r=>r.recipeMaker),i=C(),n=k();return y.useEffect(()=>{const r=localStorage.getItem(z);if(!e&&!o&&!r)n("/");else{const s=JSON.parse(r||"{}");if(s&&Object.keys(s).length>0){const c=s.recipeName;if(c){const u=M.find(g=>g.name===c);u&&i(P({recipe:u,data:s.data}))}}}},[]),t.jsx(t.Fragment,{children:o&&e?t.jsx(H,{recipe:o,data:e}):t.jsx("div",{children:"ops something wrong happened"})})};export{Y as default};
