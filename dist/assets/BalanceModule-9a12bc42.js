import{j as C,R as J,r as dt,u as yt,g as gt,a as ht}from"./index-cdb6ca8f.js";import{S as vt,a as Vt,b as _t,c as xt,d as bt,e as At,u as mt,f as wt,H as pt,g as Ft,I as qe,h as St}from"./styles-3c24d65e.js";const Dt=({children:e,variant:i,...s})=>C.jsx(vt,{...s,variant:i,children:e}),kt=({onSelectRecipe:e,selectedRecipeName:i})=>C.jsxs(Vt,{children:[C.jsx(_t,{children:"pour-over recipe"}),C.jsx(xt,{children:bt.map((s,r)=>C.jsx(At,{onClick:()=>e(s),selected:i===s.name,children:s.name},r))})]});var le=e=>e.type==="checkbox",te=e=>e instanceof Date,R=e=>e==null;const Xe=e=>typeof e=="object";var D=e=>!R(e)&&!Array.isArray(e)&&Xe(e)&&!te(e),Et=e=>D(e)&&e.target?le(e.target)?e.target.checked:e.target.value:e,Rt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ot=(e,i)=>e.has(Rt(i)),Lt=e=>{const i=e.constructor&&e.constructor.prototype;return D(i)&&i.hasOwnProperty("isPrototypeOf")},Ee=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function G(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Ee&&(e instanceof Blob||e instanceof FileList))&&(s||D(e)))if(i=s?[]:{},!s&&!Lt(e))i=e;else for(const r in e)e.hasOwnProperty(r)&&(i[r]=G(e[r]));else return e;return i}var oe=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,d=(e,i,s)=>{if(!i||!D(e))return s;const r=oe(i.split(/[,[\].]+?/)).reduce((u,l)=>R(u)?u:u[l],e);return S(r)||r===e?S(e[i])?s:e[i]:r};const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},$={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};J.createContext(null);var Ct=(e,i,s,r=!0)=>{const u={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(u,l,{get:()=>{const f=l;return i._proxyFormState[f]!==I.all&&(i._proxyFormState[f]=!r||I.all),s&&(s[f]=!0),e[f]}});return u},N=e=>D(e)&&!Object.keys(e).length,Tt=(e,i,s,r)=>{s(e);const{name:u,...l}=e;return N(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(f=>i[f]===(!r||I.all))},we=e=>Array.isArray(e)?e:[e];function Mt(e){const i=J.useRef(e);i.current=e,J.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",Nt=(e,i,s,r,u)=>H(e)?(r&&i.watch.add(e),d(s,e,u)):Array.isArray(e)?e.map(l=>(r&&i.watch.add(l),d(s,l))):(r&&(i.watchAll=!0),s),Re=e=>/^\w*$/.test(e),Ze=e=>oe(e.replace(/["|']|\]/g,"").split(/\.|\[/));function A(e,i,s){let r=-1;const u=Re(i)?[i]:Ze(i),l=u.length,f=l-1;for(;++r<l;){const b=u[r];let _=s;if(r!==f){const O=e[b];_=D(O)||Array.isArray(O)?O:isNaN(+u[r+1])?{}:[]}e[b]=_,e=e[b]}return e}var Ut=(e,i,s,r,u)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[r]:u||!0}}:{};const ke=(e,i,s)=>{for(const r of s||Object.keys(e)){const u=d(e,r);if(u){const{_f:l,...f}=u;if(l&&i(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else D(f)&&ke(f,i)}}};var We=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),Ke=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),Bt=(e,i,s)=>{const r=oe(d(e,s));return A(r,"root",i[s]),A(e,s,r),e},re=e=>typeof e=="boolean",Oe=e=>e.type==="file",Y=e=>typeof e=="function",de=e=>{if(!Ee)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},fe=e=>H(e),Le=e=>e.type==="radio",ye=e=>e instanceof RegExp;const $e={value:!1,isValid:!1},Ge={value:!0,isValid:!0};var et=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?Ge:{value:e[0].value,isValid:!0}:Ge:$e}return $e};const Je={isValid:!1,value:null};var tt=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,Je):Je;function Ye(e,i,s="validate"){if(fe(e)||Array.isArray(e)&&e.every(fe)||re(e)&&!e)return{type:s,message:fe(e)?e:"",ref:i}}var ee=e=>D(e)&&!ye(e)?e:{value:e,message:""},ze=async(e,i,s,r,u)=>{const{ref:l,refs:f,required:b,maxLength:_,minLength:O,min:P,max:w,pattern:v,validate:U,name:T,valueAsNumber:ve,mount:ce,disabled:Ve}=e._f,h=d(i,T);if(!ce||Ve)return{};const B=f?f[0]:l,W=x=>{r&&B.reportValidity&&(B.setCustomValidity(re(x)?"":x||""),B.reportValidity())},k={},se=Le(l),ie=le(l),_e=se||ie,j=(ve||Oe(l))&&S(l.value)&&S(h)||de(l)&&l.value===""||h===""||Array.isArray(h)&&!h.length,z=Ut.bind(null,T,s,k),K=(x,V,p,L=$.maxLength,M=$.minLength)=>{const q=x?V:p;k[T]={type:x?L:M,message:q,ref:l,...z(x?L:M,q)}};if(u?!Array.isArray(h)||!h.length:b&&(!_e&&(j||R(h))||re(h)&&!h||ie&&!et(f).isValid||se&&!tt(f).isValid)){const{value:x,message:V}=fe(b)?{value:!!b,message:b}:ee(b);if(x&&(k[T]={type:$.required,message:V,ref:B,...z($.required,V)},!s))return W(V),k}if(!j&&(!R(P)||!R(w))){let x,V;const p=ee(w),L=ee(P);if(!R(h)&&!isNaN(h)){const M=l.valueAsNumber||h&&+h;R(p.value)||(x=M>p.value),R(L.value)||(V=M<L.value)}else{const M=l.valueAsDate||new Date(h),q=ae=>new Date(new Date().toDateString()+" "+ae),Q=l.type=="time",ne=l.type=="week";H(p.value)&&h&&(x=Q?q(h)>q(p.value):ne?h>p.value:M>new Date(p.value)),H(L.value)&&h&&(V=Q?q(h)<q(L.value):ne?h<L.value:M<new Date(L.value))}if((x||V)&&(K(!!x,p.message,L.message,$.max,$.min),!s))return W(k[T].message),k}if((_||O)&&!j&&(H(h)||u&&Array.isArray(h))){const x=ee(_),V=ee(O),p=!R(x.value)&&h.length>+x.value,L=!R(V.value)&&h.length<+V.value;if((p||L)&&(K(p,x.message,V.message),!s))return W(k[T].message),k}if(v&&!j&&H(h)){const{value:x,message:V}=ee(v);if(ye(x)&&!h.match(x)&&(k[T]={type:$.pattern,message:V,ref:l,...z($.pattern,V)},!s))return W(V),k}if(U){if(Y(U)){const x=await U(h,i),V=Ye(x,B);if(V&&(k[T]={...V,...z($.validate,V.message)},!s))return W(V.message),k}else if(D(U)){let x={};for(const V in U){if(!N(x)&&!s)break;const p=Ye(await U[V](h,i),B,V);p&&(x={...p,...z(V,p.message)},W(p.message),s&&(k[T]=x))}if(!N(x)&&(k[T]={ref:B,...x},!s))return k}}return W(!0),k};function It(e,i){const s=i.slice(0,-1).length;let r=0;for(;r<s;)e=S(e)?r++:e[i[r++]];return e}function Pt(e){for(const i in e)if(e.hasOwnProperty(i)&&!S(e[i]))return!1;return!0}function E(e,i){const s=Array.isArray(i)?i:Re(i)?[i]:Ze(i),r=s.length===1?e:It(e,s),u=s.length-1,l=s[u];return r&&delete r[l],u!==0&&(D(r)&&N(r)||Array.isArray(r)&&Pt(r))&&E(e,s.slice(0,-1)),e}function pe(){let e=[];return{get observers(){return e},next:u=>{for(const l of e)l.next&&l.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(l=>l!==u)}}),unsubscribe:()=>{e=[]}}}var ge=e=>R(e)||!Xe(e);function X(e,i){if(ge(e)||ge(i))return e===i;if(te(e)&&te(i))return e.getTime()===i.getTime();const s=Object.keys(e),r=Object.keys(i);if(s.length!==r.length)return!1;for(const u of s){const l=e[u];if(!r.includes(u))return!1;if(u!=="ref"){const f=i[u];if(te(l)&&te(f)||D(l)&&D(f)||Array.isArray(l)&&Array.isArray(f)?!X(l,f):l!==f)return!1}}return!0}var rt=e=>e.type==="select-multiple",jt=e=>Le(e)||le(e),Fe=e=>de(e)&&e.isConnected,st=e=>{for(const i in e)if(Y(e[i]))return!0;return!1};function he(e,i={}){const s=Array.isArray(e);if(D(e)||s)for(const r in e)Array.isArray(e[r])||D(e[r])&&!st(e[r])?(i[r]=Array.isArray(e[r])?[]:{},he(e[r],i[r])):R(e[r])||(i[r]=!0);return i}function it(e,i,s){const r=Array.isArray(e);if(D(e)||r)for(const u in e)Array.isArray(e[u])||D(e[u])&&!st(e[u])?S(i)||ge(s[u])?s[u]=Array.isArray(e[u])?he(e[u],[]):{...he(e[u])}:it(e[u],R(i)?{}:i[u],s[u]):s[u]=!X(e[u],i[u]);return s}var Se=(e,i)=>it(e,i,he(i)),nt=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:r})=>S(e)?e:i?e===""?NaN:e&&+e:s&&H(e)?new Date(e):r?r(e):e;function De(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Oe(i)?i.files:Le(i)?tt(e.refs).value:rt(i)?[...i.selectedOptions].map(({value:s})=>s):le(i)?et(e.refs).value:nt(S(i.value)?e.ref.value:i.value,e)}var qt=(e,i,s,r)=>{const u={};for(const l of e){const f=d(i,l);f&&A(u,l,f._f)}return{criteriaMode:s,names:[...e],fields:u,shouldUseNativeValidation:r}},ue=e=>S(e)?e:ye(e)?e.source:D(e)?ye(e.value)?e.value.source:e.value:e,Ht=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Qe(e,i,s){const r=d(e,s);if(r||Re(s))return{error:r,name:s};const u=s.split(".");for(;u.length;){const l=u.join("."),f=d(i,l),b=d(e,l);if(f&&!Array.isArray(f)&&s!==l)return{name:s};if(b&&b.type)return{name:l,error:b};u.pop()}return{name:s}}var Wt=(e,i,s,r,u)=>u.isOnAll?!1:!s&&u.isOnTouch?!(i||e):(s?r.isOnBlur:u.isOnBlur)?!e:(s?r.isOnChange:u.isOnChange)?e:!0,Kt=(e,i)=>!oe(d(e,i)).length&&E(e,i);const $t={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Gt(e={},i){let s={...$t,...e},r={submitCount:0,isDirty:!1,isLoading:Y(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},u={},l=D(s.defaultValues)||D(s.values)?G(s.defaultValues||s.values)||{}:{},f=s.shouldUnregister?{}:G(l),b={action:!1,mount:!1,watch:!1},_={mount:new Set,unMount:new Set,array:new Set,watch:new Set},O,P=0;const w={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:pe(),array:pe(),state:pe()},U=e.resetOptions&&e.resetOptions.keepDirtyValues,T=We(s.mode),ve=We(s.reValidateMode),ce=s.criteriaMode===I.all,Ve=t=>n=>{clearTimeout(P),P=setTimeout(t,n)},h=async t=>{if(w.isValid||t){const n=s.resolver?N((await j()).errors):await K(u,!0);n!==r.isValid&&v.state.next({isValid:n})}},B=t=>w.isValidating&&v.state.next({isValidating:t}),W=(t,n=[],a,y,c=!0,o=!0)=>{if(y&&a){if(b.action=!0,o&&Array.isArray(d(u,t))){const g=a(d(u,t),y.argA,y.argB);c&&A(u,t,g)}if(o&&Array.isArray(d(r.errors,t))){const g=a(d(r.errors,t),y.argA,y.argB);c&&A(r.errors,t,g),Kt(r.errors,t)}if(w.touchedFields&&o&&Array.isArray(d(r.touchedFields,t))){const g=a(d(r.touchedFields,t),y.argA,y.argB);c&&A(r.touchedFields,t,g)}w.dirtyFields&&(r.dirtyFields=Se(l,f)),v.state.next({name:t,isDirty:V(t,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else A(f,t,n)},k=(t,n)=>{A(r.errors,t,n),v.state.next({errors:r.errors})},se=(t,n,a,y)=>{const c=d(u,t);if(c){const o=d(f,t,S(a)?d(l,t):a);S(o)||y&&y.defaultChecked||n?A(f,t,n?o:De(c._f)):M(t,o),b.mount&&h()}},ie=(t,n,a,y,c)=>{let o=!1,g=!1;const m={name:t};if(!a||y){w.isDirty&&(g=r.isDirty,r.isDirty=m.isDirty=V(),o=g!==m.isDirty);const F=X(d(l,t),n);g=d(r.dirtyFields,t),F?E(r.dirtyFields,t):A(r.dirtyFields,t,!0),m.dirtyFields=r.dirtyFields,o=o||w.dirtyFields&&g!==!F}if(a){const F=d(r.touchedFields,t);F||(A(r.touchedFields,t,a),m.touchedFields=r.touchedFields,o=o||w.touchedFields&&F!==a)}return o&&c&&v.state.next(m),o?m:{}},_e=(t,n,a,y)=>{const c=d(r.errors,t),o=w.isValid&&re(n)&&r.isValid!==n;if(e.delayError&&a?(O=Ve(()=>k(t,a)),O(e.delayError)):(clearTimeout(P),O=null,a?A(r.errors,t,a):E(r.errors,t)),(a?!X(c,a):c)||!N(y)||o){const g={...y,...o&&re(n)?{isValid:n}:{},errors:r.errors,name:t};r={...r,...g},v.state.next(g)}B(!1)},j=async t=>s.resolver(f,s.context,qt(t||_.mount,u,s.criteriaMode,s.shouldUseNativeValidation)),z=async t=>{const{errors:n}=await j();if(t)for(const a of t){const y=d(n,a);y?A(r.errors,a,y):E(r.errors,a)}else r.errors=n;return n},K=async(t,n,a={valid:!0})=>{for(const y in t){const c=t[y];if(c){const{_f:o,...g}=c;if(o){const m=_.array.has(o.name),F=await ze(c,f,ce,s.shouldUseNativeValidation&&!n,m);if(F[o.name]&&(a.valid=!1,n))break;!n&&(d(F,o.name)?m?Bt(r.errors,F,o.name):A(r.errors,o.name,F[o.name]):E(r.errors,o.name))}g&&await K(g,n,a)}}return a.valid},x=()=>{for(const t of _.unMount){const n=d(u,t);n&&(n._f.refs?n._f.refs.every(a=>!Fe(a)):!Fe(n._f.ref))&&xe(t)}_.unMount=new Set},V=(t,n)=>(t&&n&&A(f,t,n),!X(Ce(),l)),p=(t,n,a)=>Nt(t,_,{...b.mount?f:S(n)?l:H(t)?{[t]:n}:n},a,n),L=t=>oe(d(b.mount?f:l,t,e.shouldUnregister?d(l,t,[]):[])),M=(t,n,a={})=>{const y=d(u,t);let c=n;if(y){const o=y._f;o&&(!o.disabled&&A(f,t,nt(n,o)),c=de(o.ref)&&R(n)?"":n,rt(o.ref)?[...o.ref.options].forEach(g=>g.selected=c.includes(g.value)):o.refs?le(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(c)?!!c.find(m=>m===g.value):c===g.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(g=>g.checked=g.value===c):Oe(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||v.values.next({name:t,values:{...f}})))}(a.shouldDirty||a.shouldTouch)&&ie(t,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ae(t)},q=(t,n,a)=>{for(const y in n){const c=n[y],o=`${t}.${y}`,g=d(u,o);(_.array.has(t)||!ge(c)||g&&!g._f)&&!te(c)?q(o,c,a):M(o,c,a)}},Q=(t,n,a={})=>{const y=d(u,t),c=_.array.has(t),o=G(n);A(f,t,o),c?(v.array.next({name:t,values:{...f}}),(w.isDirty||w.dirtyFields)&&a.shouldDirty&&v.state.next({name:t,dirtyFields:Se(l,f),isDirty:V(t,o)})):y&&!y._f&&!R(o)?q(t,o,a):M(t,o,a),Ke(t,_)&&v.state.next({...r}),v.values.next({name:t,values:{...f}}),!b.mount&&i()},ne=async t=>{const n=t.target;let a=n.name,y=!0;const c=d(u,a),o=()=>n.type?De(c._f):Et(t);if(c){let g,m;const F=o(),Z=t.type===He.BLUR||t.type===He.FOCUS_OUT,ot=!Ht(c._f)&&!s.resolver&&!d(r.errors,a)&&!c._f.deps||Wt(Z,d(r.touchedFields,a),r.isSubmitted,ve,T),Ae=Ke(a,_,Z);A(f,a,F),Z?(c._f.onBlur&&c._f.onBlur(t),O&&O(0)):c._f.onChange&&c._f.onChange(t);const me=ie(a,F,Z,!1),ct=!N(me)||Ae;if(!Z&&v.values.next({name:a,type:t.type,values:{...f}}),ot)return w.isValid&&h(),ct&&v.state.next({name:a,...Ae?{}:me});if(!Z&&Ae&&v.state.next({...r}),B(!0),s.resolver){const{errors:Pe}=await j([a]),ft=Qe(r.errors,u,a),je=Qe(Pe,u,ft.name||a);g=je.error,a=je.name,m=N(Pe)}else g=(await ze(c,f,ce,s.shouldUseNativeValidation))[a],y=isNaN(F)||F===d(f,a,F),y&&(g?m=!1:w.isValid&&(m=await K(u,!0)));y&&(c._f.deps&&ae(c._f.deps),_e(a,m,g,me))}},ae=async(t,n={})=>{let a,y;const c=we(t);if(B(!0),s.resolver){const o=await z(S(t)?t:c);a=N(o),y=t?!c.some(g=>d(o,g)):a}else t?(y=(await Promise.all(c.map(async o=>{const g=d(u,o);return await K(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!y&&!r.isValid)&&h()):y=a=await K(u);return v.state.next({...!H(t)||w.isValid&&a!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:a}:{},errors:r.errors,isValidating:!1}),n.shouldFocus&&!y&&ke(u,o=>o&&d(r.errors,o),t?c:_.mount),y},Ce=t=>{const n={...l,...b.mount?f:{}};return S(t)?n:H(t)?d(n,t):t.map(a=>d(n,a))},Te=(t,n)=>({invalid:!!d((n||r).errors,t),isDirty:!!d((n||r).dirtyFields,t),isTouched:!!d((n||r).touchedFields,t),error:d((n||r).errors,t)}),at=t=>{t&&we(t).forEach(n=>E(r.errors,n)),v.state.next({errors:t?r.errors:{}})},Me=(t,n,a)=>{const y=(d(u,t,{_f:{}})._f||{}).ref;A(r.errors,t,{...n,ref:y}),v.state.next({name:t,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&y&&y.focus&&y.focus()},ut=(t,n)=>Y(t)?v.values.subscribe({next:a=>t(p(void 0,n),a)}):p(t,n,!0),xe=(t,n={})=>{for(const a of t?we(t):_.mount)_.mount.delete(a),_.array.delete(a),n.keepValue||(E(u,a),E(f,a)),!n.keepError&&E(r.errors,a),!n.keepDirty&&E(r.dirtyFields,a),!n.keepTouched&&E(r.touchedFields,a),!s.shouldUnregister&&!n.keepDefaultValue&&E(l,a);v.values.next({values:{...f}}),v.state.next({...r,...n.keepDirty?{isDirty:V()}:{}}),!n.keepIsValid&&h()},be=(t,n={})=>{let a=d(u,t);const y=re(n.disabled);return A(u,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...n}}),_.mount.add(t),a?y&&A(f,t,n.disabled?void 0:d(f,t,De(a._f))):se(t,!0,n.value),{...y?{disabled:n.disabled}:{},...s.progressive?{required:!!n.required,min:ue(n.min),max:ue(n.max),minLength:ue(n.minLength),maxLength:ue(n.maxLength),pattern:ue(n.pattern)}:{},name:t,onChange:ne,onBlur:ne,ref:c=>{if(c){be(t,n),a=d(u,t);const o=S(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,g=jt(o),m=a._f.refs||[];if(g?m.find(F=>F===o):o===a._f.ref)return;A(u,t,{_f:{...a._f,...g?{refs:[...m.filter(Fe),o,...Array.isArray(d(l,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),se(t,!1,void 0,o)}else a=d(u,t,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||n.shouldUnregister)&&!(Ot(_.array,t)&&b.action)&&_.unMount.add(t)}}},Ne=()=>s.shouldFocusError&&ke(u,t=>t&&d(r.errors,t),_.mount),Ue=(t,n)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let y=G(f);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:o}=await j();r.errors=c,y=o}else await K(u);E(r.errors,"root"),N(r.errors)?(v.state.next({errors:{}}),await t(y,a)):(n&&await n({...r.errors},a),Ne(),setTimeout(Ne)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(r.errors),submitCount:r.submitCount+1,errors:r.errors})},lt=(t,n={})=>{d(u,t)&&(S(n.defaultValue)?Q(t,d(l,t)):(Q(t,n.defaultValue),A(l,t,n.defaultValue)),n.keepTouched||E(r.touchedFields,t),n.keepDirty||(E(r.dirtyFields,t),r.isDirty=n.defaultValue?V(t,d(l,t)):V()),n.keepError||(E(r.errors,t),w.isValid&&h()),v.state.next({...r}))},Be=(t,n={})=>{const a=t||l,y=G(a),c=t&&!N(t)?y:l;if(n.keepDefaultValues||(l=a),!n.keepValues){if(n.keepDirtyValues||U)for(const o of _.mount)d(r.dirtyFields,o)?A(c,o,d(f,o)):Q(o,d(c,o));else{if(Ee&&S(t))for(const o of _.mount){const g=d(u,o);if(g&&g._f){const m=Array.isArray(g._f.refs)?g._f.refs[0]:g._f.ref;if(de(m)){const F=m.closest("form");if(F){F.reset();break}}}}u={}}f=e.shouldUnregister?n.keepDefaultValues?G(l):{}:G(c),v.array.next({values:{...c}}),v.values.next({values:{...c}})}_={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&i(),b.mount=!w.isValid||!!n.keepIsValid,b.watch=!!e.shouldUnregister,v.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:n.keepDirty?r.isDirty:!!(n.keepDefaultValues&&!X(t,l)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:n.keepDirtyValues?r.dirtyFields:n.keepDefaultValues&&t?Se(l,t):{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Ie=(t,n)=>Be(Y(t)?t(f):t,n);return{control:{register:be,unregister:xe,getFieldState:Te,handleSubmit:Ue,setError:Me,_executeSchema:j,_getWatch:p,_getDirty:V,_updateValid:h,_removeUnmounted:x,_updateFieldArray:W,_getFieldArray:L,_reset:Be,_resetDefaultValues:()=>Y(s.defaultValues)&&s.defaultValues().then(t=>{Ie(t,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:v,_proxyFormState:w,get _fields(){return u},get _formValues(){return f},get _state(){return b},set _state(t){b=t},get _defaultValues(){return l},get _names(){return _},set _names(t){_=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ae,register:be,handleSubmit:Ue,watch:ut,setValue:Q,getValues:Ce,reset:Ie,resetField:lt,clearErrors:at,unregister:xe,setError:Me,setFocus:(t,n={})=>{const a=d(u,t),y=a&&a._f;if(y){const c=y.refs?y.refs[0]:y.ref;c.focus&&(c.focus(),n.shouldSelect&&c.select())}},getFieldState:Te}}function Jt(e={}){const i=J.useRef(),s=J.useRef(),[r,u]=J.useState({isDirty:!1,isValidating:!1,isLoading:Y(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Y(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Gt(e,()=>u(f=>({...f}))),formState:r});const l=i.current.control;return l._options=e,Mt({subject:l._subjects.state,next:f=>{Tt(f,l._proxyFormState,l._updateFormState,!0)&&u({...l._formState})}}),J.useEffect(()=>{e.values&&!X(e.values,s.current)?(l._reset(e.values,l._options.resetOptions),s.current=e.values):l._resetDefaultValues()},[e.values,l]),J.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),i.current.formState=Ct(r,l),i.current}const Yt=()=>{const{register:e,getValues:i,formState:s,trigger:r}=Jt({mode:"all",defaultValues:{method:"",grounds:"",ratio:""}}),[u,l]=dt.useState(),f=yt(),b=mt(),_=P=>{r("grounds"),r("ratio"),r("method"),l(P)},O=()=>{const{grounds:P,method:w,ratio:v}=i(),U={method:w,blooming:!0,grounds:parseInt(P),ratio:parseInt(v)};u&&(b(gt({recipe:u,data:U})),localStorage.setItem(ht,JSON.stringify({recipeName:u.name,data:U})),f("/stepper"))};return C.jsxs(wt,{children:[C.jsx(pt,{}),C.jsxs(Ft,{children:[C.jsx(qe,{inputProps:{type:"number",placeholder:"coffee grounds"},width:"100%",suffix:"g",register:e("grounds",{required:!0,min:1})}),C.jsx(qe,{inputProps:{type:"number",placeholder:"ratio"},prefix:"1:",width:"100%",suffix:"g:ml",register:e("ratio",{required:!0,min:1})}),C.jsx(St,{placeholder:"brew method",options:[{label:"v60",value:"v60"}],width:"100%",register:e("method",{required:!0})}),C.jsx(kt,{selectedRecipeName:u==null?void 0:u.name,onSelectRecipe:_}),C.jsx(Dt,{disabled:!u||!s.isValid,variant:"primary",onClick:O,children:"generate"})]})]})},tr=()=>C.jsx(Yt,{});export{tr as default};
