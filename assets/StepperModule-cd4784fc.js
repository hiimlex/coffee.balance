import{r as y,R as g,s as p,u as b,j as n,b as S,a as O,g as k}from"./index-cdb6ca8f.js";import{P as d,H as R,u as $,d as E}from"./styles-3c24d65e.js";function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},w.apply(this,arguments)}function L(e,t){if(e==null)return{};var i=z(e,t),o,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}function z(e,t){if(e==null)return{};var i={},o=Object.keys(e),r,s;for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&(i[r]=e[r]);return i}var j=y.forwardRef(function(e,t){var i=e.color,o=i===void 0?"currentColor":i,r=e.size,s=r===void 0?24:r,c=L(e,["color","size"]);return g.createElement("svg",w({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),g.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),g.createElement("polyline",{points:"12 19 5 12 12 5"}))});j.propTypes={color:d.string,size:d.oneOfType([d.string,d.number])};j.displayName="ArrowLeft";const P=j,N=p.div`
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
`,V=p.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;

	height: fit-content;
	width: 100%;
`,h=p.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 8px;
	border-radius: 8px;
	background-color: ${({theme:e})=>e.colors.brown3};
	color: ${({theme:e})=>e.colors.white1};
`,x=p.span`
	font-size: 12px;
	font-weight: 500;
	text-align: center;
	color: ${({theme:e})=>e.colors.nude1};
`,m=p.span`
	font-size: 16px;
	font-weight: 600;
`,A=p.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	font-size: 14px;
	font-weight: 400;

	padding: 12px;
	border-radius: 8px;

	background-color: ${({theme:e})=>e.colors.purple1};
	color: ${({theme:e})=>e.colors.white1};

	${({isTimer:e,theme:t})=>!!e&&e&&`
		background-color: ${t.colors.nude1};
		color: ${t.colors.purple2};
	`}
`,T=p.span`
	color: ${({theme:e})=>e.colors.white1};

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`,_=({recipe:e,data:t})=>{const i=e.formula(t.grounds,t.ratio),o=b(),r=(c,l)=>{const{label:a,isTimer:v}=e.stepsObject[c];let f=`${l+1}. ${a}`;return Object.keys(i).forEach(u=>{a.includes(u)&&(f=f.replace(u,i[u]))}),{label:f,isTimer:v}},s=()=>{o("/coffee-balance")};return n.jsxs(N,{children:[n.jsxs(T,{onClick:s,children:[n.jsx(P,{size:14,className:"icon"})," back"]}),n.jsx(R,{}),n.jsxs(V,{children:[n.jsxs(h,{children:[n.jsx(m,{children:e.name}),n.jsx(x,{children:"recipe"})]}),n.jsxs(h,{children:[n.jsxs(m,{children:[t.grounds,"g/~",Number(t.grounds*t.ratio).toFixed(0),"ml"]}),n.jsx(x,{children:"size"})]}),n.jsxs(h,{children:[n.jsxs(m,{children:[e.minutes,"m"]}),n.jsx(x,{children:"time"})]})]}),e.steps.map((c,l)=>{const a=r(c,l);return n.jsx(A,{isTimer:a.isTimer,children:a.label},l)})]})},I=()=>{const{data:e,recipe:t}=S(r=>r.recipeMaker),i=$(),o=b();return y.useEffect(()=>{const r=localStorage.getItem(O);if(!e&&!t&&!r)o("/");else{const s=JSON.parse(r||"{}");if(s&&Object.keys(s).length>0){const c=s.recipeName;if(c){const l=E.find(a=>a.name===c);l&&i(k({recipe:l,data:s.data}))}}}},[]),n.jsx(n.Fragment,{children:t&&e?n.jsx(_,{recipe:t,data:e}):n.jsx("div",{children:"ops something wrong happened"})})};export{I as default};
