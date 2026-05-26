"use strict";(globalThis.webpackChunkhomework_react_34=globalThis.webpackChunkhomework_react_34||[]).push([[863],{863(e,t,n){n.r(t),n.d(t,{default:()=>B});var o=n(403);const r=o.Ay.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36px 40px;
    background: #14202E;
`,a=o.Ay.p`
    display: flex;
    align-items: center;
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
    gap: 8px
`,i=o.Ay.span`
    font-weight: 500;
`,s=o.Ay.button`
    display: flex;
    width: 50px;
    height: 48px;
    justify-content: center;
    align-items: center;
    background: #980000;
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    border: 3px solid #980000;

    &:hover {
        background: #770000;
        border: 3px solid #770000;
    }

    &:focus {
        background:#770000;
        border: 3px solid #ffffff;
    }
`;var l=n(3),d=n(977),c=n(714),p=n(579);const x=e=>{let{id:t,name:n,number:o}=e;const x=(0,l.wA)();return(0,p.jsxs)(r,{id:t,children:[(0,p.jsxs)(a,{children:[n,":",(0,p.jsx)(i,{children:o})]}),(0,p.jsx)(s,{type:"button",onClick:()=>{x((0,d.xk)(t)),x((0,c.Sm)({id:t,name:n,number:o}))},children:"\u2716"})]})},f=o.Ay.div`
    padding-bottom: 180px;
`,h=o.Ay.h2`
    color: #FFF;
    font-size: 64px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 76px;
`,g=o.Ay.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 64px;
`,u=o.Ay.label`
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 36px;
`,m=o.Ay.input`
    width: 353px;
    padding: 18px 30px;
    background: #14202E;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    border: none;

    &::placeholder {
    font-weight: 400;
    color: rgba(255, 219, 219, 0.60);
    }
`;var b=n(719);const y=e=>e.filter,j=e=>{const t=(e=>e.contacts)(e),n=y(e);return n?t.contacts.filter(e=>e.name.toLowerCase().includes(n.toLowerCase())):t.contacts},w=e=>e.contacts.lastDeletedContact,A=()=>{const e=(0,l.wA)(),t=(0,l.d4)(y);return(0,p.jsxs)(u,{children:["Filter",(0,p.jsx)(m,{type:"text",name:"filter",value:t,onChange:t=>{e((0,b.R)(t.target.value))},placeholder:"Search..."})]})},F=o.Ay.div`
    padding-top: 88px;
`,k=o.Ay.p`
    color: rgba(255, 219, 219, 0.60);
    font-size: 24px;
    font-weight: 700;
`,v=()=>(0,p.jsx)(F,{children:(0,p.jsx)(k,{children:"There are any numbers..."})});var C=n(208);const z=o.Ay.button`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 380px;
    background: #980000;
    padding: 18px 30px;
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    margin: 64px auto 0;
    border: 3px solid #980000;

    &:hover {
        background: #770000;
        border: 3px solid #770000;
    }

    &:focus {
        background:#770000;
        border: 3px solid #ffffff;
    }
`,S=()=>{const e=(0,l.wA)(),t=(0,l.d4)(w);return(0,p.jsx)(z,{onClick:()=>{t&&e((0,d.Cq)(t))},id:"restore-button",type:"button",children:"Restore last deleted contact"})},E=()=>{const e=(0,l.d4)(w),t=(0,l.d4)(j);return console.log(t),(0,p.jsx)(C.m,{children:(0,p.jsxs)(f,{children:[(0,p.jsx)(h,{children:"Your Contacts"}),(0,p.jsx)(A,{}),0===t.length?(0,p.jsx)(v,{}):(0,p.jsx)(g,{children:t.map(e=>(0,p.jsx)(x,{id:e.id,name:e.name,number:e.number},e.id))}),e&&(0,p.jsx)(S,{})]})})},_=o.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 108px 0;
`,q=o.Ay.form`
`,N=o.Ay.h2`
    color: #FFF;
    font-size: 64px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 32px;
`,T=o.Ay.label`
    display: flex;
    flex-direction: column;
    gap: 48px;
`,D=o.Ay.label`
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
`,L=o.Ay.input`
    display: flex;
    width: 667px;
    padding: 18px 30px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    background: #14202E;
    border: none;

    &::placeholder {
    font-weight: 400;
    color: rgba(255, 219, 219, 0.60);
    }
`,R=o.Ay.button`
    display: flex;
    width: 667px;
    justify-content: center;
    align-items: center;
    background: #980000;
    padding: 18px 30px;
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    margin-top: 64px;
    border: 3px solid #980000;

    &:hover {
        background: #770000;
        border: 3px solid #770000;
    }

    &:focus {
        background:#770000;
        border: 3px solid #ffffff;
    }
`;var Z=n(43);const $=()=>{const e=(0,l.wA)(),[t,n]=(0,Z.useState)(""),[o,r]=(0,Z.useState)(""),a=e=>{const t=e.target.name;"name"===t?n(e.target.value):"number"===t&&r(e.target.value)};return(0,p.jsx)(C.m,{children:(0,p.jsxs)(_,{children:[(0,p.jsx)(N,{children:"Add contact"}),(0,p.jsxs)(q,{onSubmit:a=>{a.preventDefault(),e((0,d.rG)({name:t,number:o})),n(""),r("")},children:[(0,p.jsxs)(T,{children:[(0,p.jsxs)(D,{children:["Name",(0,p.jsx)(L,{type:"text",name:"name",value:t,onChange:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+((['\\- ][a-zA-Z\u0430-\u044f\u0410-\u042f]+)?)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Elis Cupper"})]}),(0,p.jsxs)(D,{children:["Number",(0,p.jsx)(L,{type:"tel",name:"number",value:o,onChange:a,pattern:"^\\+?[0-9\\s\\-]{5,20}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"5423-423-647",required:!0})]})]}),(0,p.jsx)(R,{type:"submit",children:"Add contact"})]})]})})},B=()=>(0,p.jsxs)("div",{children:[(0,p.jsx)($,{}),(0,p.jsx)(E,{})]})}}]);
//# sourceMappingURL=863.e8b63c2a.chunk.js.map