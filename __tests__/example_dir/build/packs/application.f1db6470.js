const e=e=>{const t=document.createElement("div");t.innerText="hello from javascript",e.appendChild(t)},t=e=>{const t=document.createElement("div");t.dataset.testId="consumer",t.innerText="hello from channels",e.appendChild(t)},n=document.createElement("style"),d=document.createTextNode("body {\n  background: blue;\n  color: white;\n}\n\ndiv {\n  width: 50%;\n  margin: 2rem auto;\n}\n");n.type="text/css",n.appendChild(d),document.head.appendChild(n);let o="hi";document.addEventListener("DOMContentLoaded",()=>{const n=document.createElement("img");n.src="/assets/logo.svg",n.alt="logo",n.className="logo",n.height=200,n.width=200;const d=document.createElement("div");d.innerText=o;const a=document.querySelector("body");a.appendChild(d),a.appendChild(n),e(a),t(a);const c=document.createElement("img");c.alt="apple image",c.className="apple-image",c.height=200,c.width=200,a.appendChild(c)});