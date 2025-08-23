import"../chunks/DsnmJJEf.js";import{i as C}from"../chunks/CTPDFn7T.js";import{s as g,o as T,e as w}from"../chunks/Bxe4cZQu.js";import{o as L,q as R,i as _,t as y,k as x,m as n,n as l,s as h,p as $,l as N,v as O,w as P,g as u,x as j,y as k}from"../chunks/DPXeFzPj.js";import{p as A,i as q}from"../chunks/2gDZFvQP.js";function B(c,r,t,o,i){L&&R();var e=r.$$slots?.[t],s=!1;e===!0&&(e=r.children,s=!0),e===void 0||e(c,s?()=>o:o)}var D=_('<pre class="code"><code> </code></pre>'),E=_('<section class="slide"><h1 class="text-4xl font-bold mb-6"> </h1> <!> <!></section>');function I(c,r){let t=A(r,"title",8,""),o=A(r,"code",8,"");var i=E(),e=n(i),s=n(e,!0);l(e);var d=h(e,2);{var p=f=>{var a=D(),b=n(a),v=n(b,!0);l(b),l(a),y(()=>g(v,o())),x(f,a)};q(d,f=>{o()&&f(p)})}var m=h(d,2);B(m,r,"default",{}),l(i),y(()=>g(s,t())),x(c,i)}var M=_('<main class="w-full h-screen bg-gray-900 text-white"><!> <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-4"><button class="px-4 py-2 bg-gray-700 rounded">Prev</button> <button class="px-4 py-2 bg-gray-700 rounded">Next</button></div></main>');function J(c,r){$(r,!1);let t=j(0);const o=[{title:"Introduction to Rust",content:"An introduction Rust concepts"},{title:"Ownership",code:`let x = 5;
let y = x; // move
println!("{}", x); // error`},{title:"Algebraic Data Types",code:`enum List<T> {
    Nil,
    Cons(T, Box<List<T>>),
}`},{title:"Traits",code:`use std::ops::Add;
			impl Add for Complex {
    type Output = Complex;
    fn add(self, other: Complex) -> Complex {
        Complex { re: self.re + other.re, im: self.im + other.im }
    }
}`}];function i(){u(t)<o.length-1&&k(t)}function e(){u(t)>0&&k(t,-1)}T(()=>{window.addEventListener("keydown",a=>{a.key==="ArrowRight"&&i(),a.key==="ArrowLeft"&&e()})}),C();var s=M(),d=n(s);I(d,{get title(){return o[u(t)].title},get code(){return o[u(t)].code},children:(a,b)=>{O();var v=P();y(()=>g(v,o[u(t)].content)),x(a,v)},$$slots:{default:!0}});var p=h(d,2),m=n(p),f=h(m,2);l(p),l(s),w("click",m,e),w("click",f,i),x(c,s),N()}export{J as component};
