var p = (h, v, s) => {
  if (!v.has(h))
    throw TypeError("Cannot " + s);
};
var o = (h, v, s) => (p(h, v, "read from private field"), s ? s.call(h) : v.get(h)), n = (h, v, s) => {
  if (v.has(h))
    throw TypeError("Cannot add the same private member more than once");
  v instanceof WeakSet ? v.add(h) : v.set(h, s);
}, i = (h, v, s, g) => (p(h, v, "write to private field"), g ? g.call(h, s) : v.set(h, s), s);
var x = (h, v, s) => (p(h, v, "access private method"), s);
const Z = "rvt-icon", $ = "name", H = `${Z}-registered`, c = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), V = document.createElement("style");
V.setAttribute(`data-${Z}`, "");
document.head.appendChild(V);
const u = V.sheet;
console.log("S", u);
function t(h, v) {
  const s = "Rivet Icon";
  if (!h || typeof h != "string")
    throw new Error(`${s}: Name must be a string.`);
  const g = document.createElement("template");
  if (g.innerHTML = v, g.content.children.length !== 1)
    throw new Error(`${s} (${h}): Content must contain one SVG element.`);
  if (g.content.firstChild.nodeName.toLowerCase() !== "svg")
    throw new Error(`${s} (${h}): Content must be a SVG element.`);
  c.set(h, g);
  const a = c.size;
  M.set(a, h), u.insertRule(`${Z} { --${h}: ${a}; }`);
  const B = new CustomEvent(H, {
    detail: { name: h }
  });
  document.dispatchEvent(B);
}
const C = document.createElement("template");
C.innerHTML = `
	<style>
		:host,
		.container {
			display: inline-flex;
		}
		.sensor {
			position: absolute;
			transition: z-index 0.001ms step-start;
			visibility: hidden;
			z-index: var(--name);
		}
		.alt {
			display: block;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			position: absolute;
			width: 1px;
		}
	</style>
	<span class="container"></span>
	<span class="sensor"></span>
	<slot class="alt"></slot>
`;
var e, r, l, w, m, f, d, L;
class A extends window.HTMLElement {
  constructor() {
    super();
    n(this, m);
    n(this, d);
    n(this, e, void 0);
    n(this, r, void 0);
    n(this, l, void 0);
    n(this, w, void 0);
    const s = this.attachShadow({ mode: "open" });
    s.appendChild(C.content.cloneNode(!0)), i(this, e, s.querySelector(".container")), i(this, w, s.querySelector(".sensor")), i(this, l, b(x(this, d, L).bind(this)));
  }
  static get observedAttributes() {
    return [$];
  }
  connectedCallback() {
    o(this, w).addEventListener("transitionstart", o(this, l)), document.addEventListener(H, o(this, l)), o(this, l).call(this);
  }
  disconnectedCallback() {
    o(this, w).removeEventListener("transitionstart", o(this, l)), document.removeEventListener(H, o(this, l));
  }
  attributeChangedCallback() {
    o(this, l).call(this);
  }
}
e = new WeakMap(), r = new WeakMap(), l = new WeakMap(), w = new WeakMap(), m = new WeakSet(), f = function() {
  if (!o(this, w))
    return;
  const s = window.getComputedStyle(o(this, w)).getPropertyValue(`--${$}`);
  return M.get(parseInt(s));
}, d = new WeakSet(), L = function() {
  const s = x(this, m, f).call(this) || this.getAttribute($);
  if (!o(this, e) || !c.has(s) || o(this, r) === s)
    return;
  const g = c.get(s).content.cloneNode(!0);
  o(this, e).replaceChildren(g);
  const a = o(this, e).querySelector("svg");
  a.setAttribute("aria-hidden", "true"), a.setAttribute("focusable", "false"), i(this, r, s);
};
window.customElements.define(Z, A);
function b(h) {
  let v = !1;
  return function(...s) {
    v || (v = !0, window.requestAnimationFrame(() => {
      h.call(this, ...s), v = !1;
    }));
  };
}
const k = "alarm", y = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4.855.642A8.029 8.029 0 0 0 .642 4.855 3 3 0 0 1 4.855.642Zm10.503 4.213A3 3 0 0 0 11.145.642a8.029 8.029 0 0 1 4.213 4.213ZM9 7.586V5H7v3.414l2 2L10.414 9 9 7.586Z"/>
  <path d="M1 8a7 7 0 1 1 12.606 4.192l2.308 2.308-1.414 1.414-2.308-2.308A6.97 6.97 0 0 1 8 15a6.969 6.969 0 0 1-4.192-1.394L1.5 15.914.086 14.5l2.308-2.308A6.97 6.97 0 0 1 1 8Zm7-5a5 5 0 1 0 0 10A5 5 0 0 0 8 3Z"/>
</svg>
`;
t(k, y);
const E = "alarm-solid", S = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M.642 4.855A8.029 8.029 0 0 1 4.855.642 3 3 0 0 0 .642 4.855Zm14.716 0A3 3 0 0 0 11.145.642a8.029 8.029 0 0 1 4.213 4.213Z"/>
  <path d="M8 15a6.97 6.97 0 0 0 4.192-1.394l2.308 2.308 1.414-1.414-2.308-2.308a7 7 0 1 0-11.213 0L.087 14.5 1.5 15.914l2.308-2.308A6.969 6.969 0 0 0 8 15Zm2.414-6L9 10.414l-2-2V5h2v2.586L10.414 9Z"/>
</svg>
`;
t(E, S);
const N = "arrow-anchor-down-left", q = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13 10V2h2v10H4.414l1.793 1.793-1.414 1.414L.586 11l4.207-4.207 1.414 1.414L4.414 10H13Z"/>
</svg>
`;
t(N, q);
const R = "arrow-anchor-down-right", I = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 2h2v8h8.586L9.793 8.207l1.414-1.414L15.414 11l-4.207 4.207-1.414-1.414L11.586 12H1V2Z"/>
</svg>
`;
t(R, I);
const z = "arrow-anchor-up-left", T = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m4.414 6 1.793 1.793-1.414 1.414L.586 5 4.793.793l1.414 1.414L4.414 4H15v10h-2V6H4.414Z"/>
</svg>
`;
t(z, T);
const F = "arrow-anchor-up-right", G = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11.207.793 15.414 5l-4.207 4.207-1.414-1.414L11.586 6H3v8H1V4h10.586L9.793 2.207 11.207.793Z"/>
</svg>
`;
t(F, G);
const P = "arrow-down", U = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 1v10.844L2.146 7.737.854 9.263 8 15.31l7.146-6.047-1.292-1.526L9 11.844V1H7Z"/>
</svg>
`;
t(P, U);
const j = "arrow-down-left", D = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M12.293 2.293 4 10.586V4H2v10h10v-2H5.414l8.293-8.293-1.414-1.414Z"/>
</svg>
`;
t(j, D);
const J = "arrow-down-right", K = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.707 2.293 12 10.586V4h2v10H4v-2h6.586L2.293 3.707l1.414-1.414Z"/>
</svg>
`;
t(J, K);
const O = "arrow-left", Q = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15 7H4.156l4.107-4.854L6.737.854.69 8l6.047 7.146 1.526-1.292L4.156 9H15V7Z"/>
</svg>
`;
t(O, Q);
const W = "arrow-right", X = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 7h10.844L7.737 2.146 9.263.854 15.31 8l-6.047 7.146-1.526-1.292L11.844 9H1V7Z"/>
</svg>
`;
t(W, X);
const Y = "arrow-up", _ = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 15V4.156l4.854 4.107 1.292-1.526L8 .69.854 6.737l1.292 1.526L7 4.156V15h2Z"/>
</svg>
`;
t(Y, _);
const t1 = "arrow-up-left", s1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2 2h10v2H5.414l8.293 8.293-1.414 1.414L4 5.414V12H2V2Z"/>
</svg>
`;
t(t1, s1);
const h1 = "arrow-up-right", v1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10.586 4H4V2h10v10h-2V5.414l-8.293 8.293-1.414-1.414L10.586 4Z"/>
</svg>
`;
t(h1, v1);
const o1 = "audio", l1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 0v5.401a2.999 2.999 0 0 1 0 5.198V16l-5.333-4H0V4h4.667L10 0ZM8 4 5.333 6H2v4h3.333L8 12V4Z"/>
  <path d="m13.6 3.2-.799-.6L11.6 4.199l.8.6a4 4 0 0 1 .8.802c.503.668.8 1.497.8 2.399 0 .902-.297 1.73-.8 2.4a4.03 4.03 0 0 1-.8.8l-.8.601 1.201 1.6.8-.601a6.028 6.028 0 0 0 1.198-1.2A5.977 5.977 0 0 0 16 8c0-1.35-.447-2.598-1.2-3.6a6.03 6.03 0 0 0-1.2-1.2Z"/>
</svg>
`;
t(o1, l1);
const g1 = "audio-off", w1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m9 16-5.333-4H0V4h3.667L9 0v16ZM4.333 6H2v4h2.333L7 12V4L4.333 6Zm7.253 2-1.5 1.5 1.414 1.414 1.5-1.5 1.5 1.5L15.914 9.5l-1.5-1.5 1.5-1.5L14.5 5.086l-1.5 1.5-1.5-1.5L10.086 6.5l1.5 1.5Z"/>
</svg>
`;
t(g1, w1);
const n1 = "audio-off-solid", e1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 0v16l-5.333-4H0V4h3.667L9 0Zm2.586 8-1.5 1.5 1.414 1.414 1.5-1.5 1.5 1.5L15.914 9.5l-1.5-1.5 1.5-1.5L14.5 5.086l-1.5 1.5-1.5-1.5L10.086 6.5l1.5 1.5Z"/>
</svg>
`;
t(n1, e1);
const a1 = "audio-solid", i1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 16v-5.401A2.999 2.999 0 0 0 10 5.4V0L4.667 4H0v8h4.667L10 16Z"/>
  <path d="m13.6 3.2-.799-.6L11.6 4.199l.8.6a4 4 0 0 1 .8.802c.503.668.8 1.497.8 2.399 0 .902-.297 1.73-.8 2.4a4.03 4.03 0 0 1-.8.8l-.8.601 1.201 1.6.8-.601a6.028 6.028 0 0 0 1.198-1.2A5.977 5.977 0 0 0 16 8c0-1.35-.447-2.598-1.2-3.6a6.03 6.03 0 0 0-1.2-1.2Z"/>
</svg>
`;
t(a1, i1);
const r1 = "ban", c1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.109 4.523a6.002 6.002 0 0 0 8.368 8.368L3.109 4.523ZM4.523 3.11l8.368 8.368A6.002 6.002 0 0 0 4.523 3.11Zm-2.18 10.548A8 8 0 1 1 13.657 2.343 8 8 0 0 1 2.343 13.657Z"/>
</svg>
`;
t(r1, c1);
const m1 = "ban-solid", d1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M16 8a7.965 7.965 0 0 1-1.68 4.906 8.05 8.05 0 0 1-1.414 1.414A8 8 0 1 1 16 8Zm-3.11 3.476L4.524 3.11A6.034 6.034 0 0 0 3.11 4.523l8.367 8.368a6.028 6.028 0 0 0 1.415-1.415Z"/>
</svg>
`;
t(m1, d1);
const Z1 = "bell", p1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 14h5.5v-2h-1.382l-.366-.733a2.86 2.86 0 0 1-.298-1.12l-.234-4.209A5.23 5.23 0 0 0 9 1.096V0H7v1.096a5.23 5.23 0 0 0-4.22 4.842l-.234 4.209a2.86 2.86 0 0 1-.298 1.12L1.882 12H.5v2H6a2 2 0 1 0 4 0Zm1.886-2H4.114a4.86 4.86 0 0 0 .429-1.742l.234-4.209a3.228 3.228 0 0 1 6.446 0l.234 4.209A4.86 4.86 0 0 0 11.886 12Z"/>
</svg>
`;
t(Z1, p1);
const x1 = "bell-solid", $1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M.5 14v-2h1.382l.366-.733c.175-.349.276-.73.298-1.12l.234-4.209A5.23 5.23 0 0 1 7 1.096V0h2v1.096a5.23 5.23 0 0 1 4.22 4.842l.234 4.209c.022.39.123.771.298 1.12l.366.733H15.5v2H10a2 2 0 1 1-4 0H.5Z"/>
</svg>
`;
t(x1, $1);
const H1 = "bookmark", V1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m13 15.563-5-2.308-5 2.308V1h10v14.563ZM11 3H5v9.437l3-1.384 3 1.384V3Z"/>
</svg>
`;
t(H1, V1);
const M1 = "bookmark-solid", u1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13 15.563V1H3v14.563l5-2.308 5 2.308Z"/>
</svg>
`;
t(M1, u1);
const C1 = "browser-window", f1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
  <path d="M15 1H1v14h14V1ZM3 7V3h10v4H3Zm0 6V9h10v4H3Z"/>
</svg>
`;
t(C1, f1);
const L1 = "browser-window-solid", B1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 1h14v14H1V1Zm5 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm4 3H3v2h10V7Z"/>
</svg>
`;
t(L1, B1);
const A1 = "building", b1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 4h2v2H5V4Zm6 0H9v2h2V4ZM5 7h2v2H5V7Zm6 0H9v2h2V7Z"/>
  <path d="M2 0h12v14h1v2H1v-2h1V0Zm2 14h3v-2a1 1 0 1 1 2 0v2h3V2H4v12Z"/>
</svg>
`;
t(A1, b1);
const k1 = "building-solid", y1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2 0h12v14h1v2H1v-2h1V0Zm5 4H5v2h2V4Zm4 0H9v2h2V4ZM7 7H5v2h2V7Zm4 0H9v2h2V7Zm-2 5a1 1 0 1 0-2 0v2h2v-2Z"/>
</svg>
`;
t(k1, y1);
const E1 = "bus", S1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15 0H1v14h2v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V14h2V0ZM3.5 2h9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5ZM5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
</svg>
`;
t(E1, S1);
const N1 = "calendar", q1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 9.5v2H5v-2h2Zm4 2v-2H9v2h2Z"/>
  <path d="M5 0a1 1 0 0 1 1 1v1h4V1a1 1 0 1 1 2 0v1h3v13H1V2h3V1a1 1 0 0 1 1-1ZM3 4v2h10V4H3Zm10 4H3v5h10V8Z"/>
</svg>
`;
t(N1, q1);
const R1 = "calendar-solid", I1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6 1a1 1 0 0 0-2 0v1H1v13h14V2h-3V1a1 1 0 1 0-2 0v1H6V1ZM3 6h10v2H3V6Zm2 6.5v-2h2v2H5Zm4 0v-2h2v2H9Z"/>
</svg>
`;
t(R1, I1);
const z1 = "caution", T1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 10V6h2v4H7Zm1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
  <path d="M6.382 0h3.236L16 12.764V16H0v-3.236L6.382 0Zm1.236 2L2 13.236V14h12v-.764L8.382 2h-.764Z"/>
</svg>
`;
t(z1, T1);
const F1 = "caution-solid", G1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.382 0h3.236L16 12.764V16H0v-3.236L6.382 0ZM7 6v4h2V6H7Zm1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
`;
t(F1, G1);
const P1 = "chat", U1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
  <path d="M16 1H0v12h3.586L6 15.414 8.414 13H16V1ZM2 11V3h12v8H7.586L6 12.586 4.414 11H2Z"/>
</svg>
`;
t(P1, U1);
const j1 = "chat-solid", D1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 1h16v12H8.414L6 15.414 3.586 13H0V1Zm6 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
</svg>
`;
t(j1, D1);
const J1 = "check", K1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m14.914 4-9.47 9.47L1.09 8.393 2.608 7.09l2.948 3.44L13.5 2.585 14.914 4Z"/>
</svg>
`;
t(J1, K1);
const O1 = "check-all", Q1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m4.261 13.49 6.614-10.822-1.707-1.043-5.43 8.885-2.394-1.916-1.25 1.562 4.167 3.334ZM16 3h-4v2h4V3Zm0 4h-6v2h6V7Zm0 4v2H8v-2h8Z"/>
</svg>
`;
t(O1, Q1);
const W1 = "check-circle", X1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 11.414 11.914 6.5 10.5 5.086 7 8.586l-1.5-1.5L4.086 8.5 7 11.414Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z"/>
</svg>
`;
t(W1, X1);
const Y1 = "check-circle-breakout", _1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2 8a6 6 0 0 1 8.57-5.423L11.43.77A8 8 0 1 0 16 8h-2A6 6 0 0 1 2 8Z"/>
  <path d="M8 11.414 15.914 3.5 14.5 2.086 8 8.586l-2-2L4.586 8 8 11.414Z"/>
</svg>
`;
t(Y1, _1);
const t0 = "check-circle-solid", s0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm7 3.414L11.914 6.5 10.5 5.086 7 8.586l-1.5-1.5L4.086 8.5 7 11.414Z"/>
</svg>
`;
t(t0, s0);
const h0 = "chevron-down", v0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m15.146 6.263-1.292-1.526L8 9.69 2.146 4.737.854 6.263 8 12.31l7.146-6.047Z"/>
</svg>
`;
t(h0, v0);
const o0 = "chevron-left", l0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9.737.854 3.69 8l6.047 7.146 1.526-1.292L6.31 8l4.953-5.854L9.737.854Z"/>
</svg>
`;
t(o0, l0);
const g0 = "chevron-right", w0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.263 15.146 12.31 8 6.263.854 4.737 2.146 9.69 8l-4.953 5.854 1.526 1.292Z"/>
</svg>
`;
t(g0, w0);
const n0 = "chevron-up", e0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15.146 10.737 8 4.69.854 10.737l1.292 1.526L8 7.31l5.854 4.953 1.292-1.526Z"/>
</svg>
`;
t(n0, e0);
const a0 = "chevrons-left", i0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M.586 8 7 14.414 8.414 13l-5-5 5-5L7 1.586.586 8Z"/>
  <path d="M6.586 8 13 14.414 14.414 13l-5-5 5-5L13 1.586 6.586 8Z"/>
</svg>
`;
t(a0, i0);
const r0 = "chevrons-right", c0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9.414 8 3 1.586 1.586 3l5 5-5 5L3 14.414 9.414 8Z"/>
  <path d="M15.414 8 9 1.586 7.586 3l5 5-5 5L9 14.414 15.414 8Z"/>
</svg>
`;
t(r0, c0);
const m0 = "circle", d0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
</svg>
`;
t(m0, d0);
const Z0 = "circle-solid", p0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"/>
</svg>
`;
t(Z0, p0);
const x0 = "clipboard", $0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 7h6v2H5V7Zm0 3h6v2H5v-2Z"/>
  <path d="M6 0a2 2 0 0 0-2 2H1v14h14V2h-3a2 2 0 0 0-2-2H6ZM3 4h1v1h8V4h1v10H3V4Zm3-1V2h4v1H6Z"/>
</svg>
`;
t(x0, $0);
const H0 = "clipboard-solid", V0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h3v14H1V2h3Zm6 1V2H6v1h4ZM5 7v2h6V7H5Zm0 3v2h6v-2H5Z"/>
</svg>
`;
t(H0, V0);
const M0 = "clock", u0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 7.586V4H7v4.414l2.5 2.5L10.914 9.5 9 7.586Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z"/>
</svg>
`;
t(M0, u0);
const C0 = "clock-solid", f0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm9-.414V4H7v4.414l2.5 2.5L10.914 9.5 9 7.586Z"/>
</svg>
`;
t(C0, f0);
const L0 = "close", B0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m3.5 2.086 4.5 4.5 4.5-4.5L13.914 3.5 9.414 8l4.5 4.5-1.414 1.414-4.5-4.5-4.5 4.5L2.086 12.5l4.5-4.5-4.5-4.5L3.5 2.086Z"/>
</svg>
`;
t(L0, B0);
const A0 = "close-circle", b0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m8 6.586-2-2L4.586 6l2 2-2 2L6 11.414l2-2 2 2L11.414 10l-2-2 2-2L10 4.586l-2 2Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z"/>
</svg>
`;
t(A0, b0);
const k0 = "close-circle-solid", y0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-1.414-2-2L4.586 6l2 2-2 2L6 11.414l2-2 2 2L11.414 10l-2-2 2-2L10 4.586l-2 2Z"/>
</svg>
`;
t(k0, y0);
const E0 = "code", S0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.926 14.412.155 8l5.77-6.412 1.487 1.338L2.845 8l4.567 5.074-1.486 1.338Zm4.148-12.824L15.845 8l-5.77 6.412-1.487-1.338L13.155 8 8.588 2.926l1.486-1.338Z"/>
</svg>
`;
t(E0, S0);
const N0 = "collapse", q0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m.586 14 3-3H1V9h6v6H5v-2.586l-3 3L.586 14ZM15.414 2l-3 3H15v2H9V1h2v2.586l3-3L15.414 2Z"/>
</svg>
`;
t(N0, q0);
const R0 = "copy", I0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11 0H0v11h3V9H2V2h7v1h2V0Z"/>
  <path d="M16 5H5v11h11V5Zm-9 9V7h7v7H7Z"/>
</svg>
`;
t(R0, I0);
const z0 = "copy-solid", T0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11 0H0v11h3V9H2V2h7v1h2V0Z"/>
  <path d="M5 5h11v11H5V5Z"/>
</svg>
`;
t(z0, T0);
const F0 = "credit-card", G0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 2h16v12H0V2Zm2 2v2h10v2H2v4h12V4H2Z"/>
</svg>
`;
t(F0, G0);
const P0 = "credit-card-solid", U0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 2h16v12H0V8h12V6H0V2Z"/>
</svg>
`;
t(P0, U0);
const j0 = "css", D0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 1a3 3 0 0 0-3 3v1.146A2 2 0 0 1 .894 6.935l-.341.17v1.79l.341.17A2 2 0 0 1 2 10.855V12a3 3 0 0 0 3 3h2v-2H5a1 1 0 0 1-1-1v-1.146A4 4 0 0 0 2.803 8 4 4 0 0 0 4 5.146V4a1 1 0 0 1 1-1h2V1H5Zm6 14a3 3 0 0 0 3-3v-1.146a2 2 0 0 1 1.106-1.789l.341-.17v-1.79l-.341-.17A2 2 0 0 1 14 5.145V4a3 3 0 0 0-3-3H9v2h2a1 1 0 0 1 1 1v1.146A4 4 0 0 0 13.197 8 4 4 0 0 0 12 10.854V12a1 1 0 0 1-1 1H9v2h2Z"/>
</svg>
`;
t(j0, D0);
const J0 = "data", K0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 4C1 2.589 2.118 1.58 3.31.984 4.562.358 6.222 0 8 0c1.778 0 3.438.358 4.69.984C13.882 1.58 15 2.59 15 4v8c0 1.411-1.118 2.42-2.31 3.016C11.438 15.642 9.778 16 8 16c-1.778 0-3.438-.358-4.69-.984C2.118 14.42 1 13.41 1 12V4Zm2 0c0 .246.225.737 1.205 1.227C5.125 5.687 6.465 6 8 6c1.535 0 2.876-.313 3.795-.773C12.775 4.737 13 4.246 13 4c0-.246-.225-.737-1.205-1.227C10.875 2.313 9.535 2 8 2c-1.535 0-2.876.313-3.795.773C3.225 3.263 3 3.754 3 4Zm0 6.85V12c0 .246.225.737 1.205 1.227.92.46 2.26.773 3.795.773 1.535 0 2.876-.313 3.795-.773.98-.49 1.205-.981 1.205-1.227v-1.15a6.394 6.394 0 0 1-.31.166C11.438 11.642 9.778 12 8 12c-1.778 0-3.438-.358-4.69-.984A6.335 6.335 0 0 1 3 10.85ZM13 8V6.85a6.492 6.492 0 0 1-.31.166C11.438 7.642 9.778 8 8 8c-1.778 0-3.438-.358-4.69-.984A6.431 6.431 0 0 1 3 6.85V8c0 .246.225.737 1.205 1.227.92.46 2.26.773 3.795.773 1.535 0 2.876-.313 3.795-.773C12.775 8.737 13 8.246 13 8Z"/>
</svg>
`;
t(J0, K0);
const O0 = "data-solid", Q0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15 12c0 1.411-1.118 2.42-2.31 3.016C11.438 15.642 9.778 16 8 16c-1.778 0-3.438-.358-4.69-.984C2.118 14.42 1 13.41 1 12V4C1 2.589 2.118 1.58 3.31.984 4.562.358 6.222 0 8 0c1.778 0 3.438.358 4.69.984C13.882 1.58 15 2.59 15 4v8ZM3 6.85c.102.058.206.114.31.166C4.562 7.642 6.222 8 8 8c1.778 0 3.438-.358 4.69-.984.104-.052.208-.108.31-.166V4c0 .246-.225.737-1.205 1.227C10.875 5.687 9.535 6 8 6c-1.535 0-2.876-.313-3.795-.773C3.225 4.737 3 4.246 3 4v2.85Zm8.795 2.377c-.92.46-2.26.773-3.795.773-1.535 0-2.876-.313-3.795-.773C3.225 8.737 3 8.246 3 8v2.85c.102.058.206.114.31.166C4.562 11.642 6.222 12 8 12c1.778 0 3.438-.358 4.69-.984.104-.052.208-.108.31-.166V8c0 .246-.225.737-1.205 1.227Z"/>
</svg>
`;
t(O0, Q0);
const W0 = "device", X0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 0a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5v1H2v2h6V9H2V2h10v4h2V1a1 1 0 0 0-1-1H1Z"/>
  <path d="M10 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-5Zm1 7V9h3v5h-3Z"/>
</svg>
`;
t(W0, X0);
const Y0 = "device-solid", _0 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-4a2 2 0 0 0-2 2v6H2v-2h4v-1H1a1 1 0 0 1-1-1V1Z"/>
  <path d="M9 8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V8Z"/>
</svg>
`;
t(Y0, _0);
const t2 = "download", s2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 7.826V1H7v6.826L4.392 5.59 3.09 7.108 8 11.318l4.91-4.21-1.302-1.518L9 7.826Z"/>
  <path d="M3 13v-3H1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-2v3H3Z"/>
</svg>
`;
t(t2, s2);
const h2 = "ellipsis", v2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
</svg>
`;
t(h2, v2);
const o2 = "ellipsis-vertical", l2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/>
</svg>
`;
t(o2, l2);
const g2 = "envelope", w2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 2v12h16V2H0Zm2 2.023V4h12v.023L8 7.356 2 4.023ZM2 6.31l6 3.333 6-3.333V12H2V6.31Z"/>
</svg>
`;
t(g2, w2);
const n2 = "envelope-solid", e2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 2h16v.912L8 7.356 0 2.912V2Z"/>
  <path d="M0 5.2V14h16V5.2L8 9.644 0 5.199Z"/>
</svg>
`;
t(n2, e2);
const a2 = "exclamation-mark", i2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 11V1H7v10h2Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
`;
t(a2, i2);
const r2 = "exclamation-mark-circle", c2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 9V4h2v5H7Zm1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"/>
</svg>
`;
t(r2, c2);
const m2 = "exclamation-mark-circle-solid", d2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm7 1h2V4H7v5Zm2 2a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
</svg>
`;
t(m2, d2);
const Z2 = "expand", p2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m11.586 3-3 3L10 7.414l3-3V7h2V1H9v2h2.586ZM4.414 13l3-3L6 8.586l-3 3V9H1v6h6v-2H4.414Z"/>
</svg>
`;
t(Z2, p2);
const x2 = "eye", $2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="m15.356 7.478.027.051.235.471-.236.47-.026.052a12.804 12.804 0 0 1-.464.794 14 14 0 0 1-1.399 1.853C12.303 12.492 10.427 14 8 14c-2.427 0-4.302-1.508-5.493-2.831A14 14 0 0 1 .644 8.522a5.45 5.45 0 0 1-.027-.051L.382 8l.235-.47a5.45 5.45 0 0 1 .125-.232 13.998 13.998 0 0 1 1.765-2.467C3.697 3.508 5.573 2 8 2c2.427 0 4.302 1.508 5.493 2.831a13.999 13.999 0 0 1 1.863 2.647Zm-12.558.768c.276.436.68 1.013 1.195 1.585C5.053 11.008 6.427 12 8 12c1.573 0 2.948-.992 4.007-2.169A11.992 11.992 0 0 0 13.354 8a11.992 11.992 0 0 0-1.347-1.831C10.947 4.992 9.573 4 8 4c-1.573 0-2.948.992-4.007 2.169A11.999 11.999 0 0 0 2.646 8c.045.075.096.157.152.246Z"/>
</svg>
`;
t(x2, $2);
const H2 = "eye-off", V2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M.456 14.456 14.414.414l1.293 1.293-2.657 2.657c.157.157.305.313.443.467a13.999 13.999 0 0 1 1.863 2.647c.063.12.123.241.183.363l.079.159-.079.159a8.615 8.615 0 0 1-.28.543 13.994 13.994 0 0 1-1.765 2.467C12.301 12.492 10.426 14 8 14c-1.34 0-2.511-.46-3.492-1.094l-2.8 2.801-1.252-1.25Zm11.18-8.678L9.932 7.482a2.002 2.002 0 0 1-2.45 2.45l-1.516 1.516C6.594 11.79 7.276 12 8 12c1.573 0 2.948-.992 4.007-2.169A12.003 12.003 0 0 0 13.354 8a12.164 12.164 0 0 0-1.347-1.831 9.89 9.89 0 0 0-.371-.39ZM1.78 10.287A14.436 14.436 0 0 1 .743 8.702a8.706 8.706 0 0 1-.098-.18c-.063-.12-.123-.241-.183-.363L.382 8l.079-.159a15.828 15.828 0 0 1 .28-.543 13.998 13.998 0 0 1 1.765-2.467C3.699 3.508 5.574 2 8 2c.62 0 1.206.099 1.752.268L8.03 4H8c-1.573 0-2.948.992-4.007 2.169A11.998 11.998 0 0 0 2.646 8a11.717 11.717 0 0 0 .561.852l-1.426 1.435Z"/>
</svg>
`;
t(H2, V2);
const M2 = "eye-off-solid", u2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m14.293.293 1.414 1.414-2.657 2.657c.157.157.305.313.443.467a13.999 13.999 0 0 1 1.863 2.647l.027.051.007.016.003.005.001.002.224.448-.224.449-.001.001-.003.005-.007.016a5.591 5.591 0 0 1-.125.23 14 14 0 0 1-1.765 2.467C12.303 12.492 10.427 14 8 14c-1.34 0-2.511-.46-3.492-1.094l-2.8 2.801-1.415-1.414 14-14Zm-4.36 7.19-2.451 2.45a2.003 2.003 0 0 0 2.45-2.45Zm-.131-5.2A5.91 5.91 0 0 0 8 2C5.573 2 3.698 3.508 2.507 4.831A13.997 13.997 0 0 0 .644 7.478a5.45 5.45 0 0 0-.026.051l-.008.016-.003.005v.001c-.232.463-.091.182-.069.137L.382 8l.224.447.001.003.003.005.008.016a5.45 5.45 0 0 0 .124.23 14.417 14.417 0 0 0 1.047 1.596l8.013-8.014Z"/>
</svg>
`;
t(M2, u2);
const C2 = "eye-solid", f2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m15.356 8.522.027-.051.235-.471-.236-.47-.026-.052a12.804 12.804 0 0 0-.464-.794 13.999 13.999 0 0 0-1.399-1.853C12.303 3.508 10.427 2 8 2 5.573 2 3.698 3.508 2.507 4.831A13.996 13.996 0 0 0 .644 7.478l-.027.051-.16.322L.381 8l.235.47a5.427 5.427 0 0 0 .125.232 13.998 13.998 0 0 0 1.765 2.467C3.697 12.492 5.573 14 8 14c2.427 0 4.302-1.508 5.493-2.831a14 14 0 0 0 1.863-2.647ZM8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
</svg>
`;
t(C2, f2);
const L2 = "file", B2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2 1h8.414L14 4.586V15H2V1Zm2 2v10h8V7.5H7.5V3H4Zm5.5 0v2.5H12v-.086L9.586 3H9.5Z"/>
</svg>
`;
t(L2, B2);
const A2 = "file-solid", b2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10.414 1H2v14h12V4.586L10.414 1ZM9.5 5.5V3h.086L12 5.414V5.5H9.5Z"/>
</svg>
`;
t(A2, b2);
const k2 = "filter", y2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6 1a3.001 3.001 0 0 0-2.83 2H0v2h3.17a3.001 3.001 0 0 0 5.66 0H16V3H8.83A3.001 3.001 0 0 0 6 1ZM5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm5 5a3.001 3.001 0 0 0-2.83 2H0v2h7.17a3.001 3.001 0 0 0 5.66 0H16v-2h-3.17A3.001 3.001 0 0 0 10 9Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
</svg>
`;
t(k2, y2);
const E2 = "filter-solid", S2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6 1a3.001 3.001 0 0 0-2.83 2H0v2h3.17a3.001 3.001 0 0 0 5.66 0H16V3H8.83A3.001 3.001 0 0 0 6 1Zm4 8a3.001 3.001 0 0 0-2.83 2H0v2h7.17a3.001 3.001 0 0 0 5.66 0H16v-2h-3.17A3.001 3.001 0 0 0 10 9Z"/>
</svg>
`;
t(E2, S2);
const N2 = "flag", q2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 1v1h9.387l-1.333 4 1.333 4H5v5H3V1h2Zm0 3v4h6.613l-.667-2 .667-2H5Z"/>
</svg>
`;
t(N2, q2);
const R2 = "flag-solid", I2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 2V1H3v14h2v-5h9.387l-1.333-4 1.333-4H5Z"/>
</svg>
`;
t(R2, I2);
const z2 = "gear", T2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1.304l1.13-.652a1.5 1.5 0 0 1 2.048.549l1.5 2.598a1.5 1.5 0 0 1-.549 2.05L14 8l1.13.652a1.5 1.5 0 0 1 .548 2.049l-1.5 2.598a1.5 1.5 0 0 1-2.049.55L11 13.195V14.5A1.5 1.5 0 0 1 9.5 16h-3A1.5 1.5 0 0 1 5 14.5v-1.304l-1.13.652a1.5 1.5 0 0 1-2.048-.549l-1.5-2.598a1.5 1.5 0 0 1 .549-2.05L2 8 .87 7.348A1.5 1.5 0 0 1 .323 5.3l1.5-2.598a1.5 1.5 0 0 1 2.049-.55L5 2.805V1.5ZM7 2v1.67c0 .169-.027.329-.076.476a3.996 3.996 0 0 0-1.722.996 1.513 1.513 0 0 1-.452-.173l-1.446-.835-1 1.732 1.446.835c.146.084.271.188.375.304a4.007 4.007 0 0 0 0 1.99c-.104.116-.229.22-.375.304l-1.446.835 1 1.732 1.446-.835a1.52 1.52 0 0 1 .452-.173 3.995 3.995 0 0 0 1.722.996c.05.147.076.307.076.476V14h2v-1.67c0-.169.027-.329.076-.476a3.995 3.995 0 0 0 1.722-.996c.153.032.305.088.452.173l1.446.835 1-1.732-1.446-.835a1.514 1.514 0 0 1-.375-.304 4.007 4.007 0 0 0 0-1.99c.104-.116.229-.22.375-.304l1.446-.835-1-1.732-1.446.835a1.514 1.514 0 0 1-.452.173 3.996 3.996 0 0 0-1.722-.996A1.513 1.513 0 0 1 9 3.67V2H7Z"/>
</svg>
`;
t(z2, T2);
const F2 = "gear-solid", G2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1.304l-1.13-.652a1.5 1.5 0 0 0-2.048.549l-1.5 2.598a1.5 1.5 0 0 0 .549 2.05L2 8l-1.13.652A1.5 1.5 0 0 0 .323 10.7l1.5 2.598a1.5 1.5 0 0 0 2.049.55L5 13.195V14.5A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-1.304l1.13.652a1.5 1.5 0 0 0 2.048-.549l1.5-2.598a1.5 1.5 0 0 0-.549-2.05L14 8l1.13-.652a1.5 1.5 0 0 0 .548-2.049l-1.5-2.598a1.5 1.5 0 0 0-2.049-.55L11 2.805V1.5A1.5 1.5 0 0 0 9.5 0h-3ZM8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
</svg>
`;
t(F2, G2);
const P2 = "gears", U2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.83 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.245a3.012 3.012 0 0 0-1.485 1.392A3 3 0 0 0 3.59 4.134l-1 1.732A3 3 0 0 0 2.672 9a3.014 3.014 0 0 0-.47 1.346 1 1 0 0 1-1.068-.48l-1-1.732A1 1 0 0 1 .5 6.768l.202-.117a.258.258 0 0 0 .126-.245 5.068 5.068 0 0 1 0-.812.258.258 0 0 0-.126-.245L.5 5.232a1 1 0 0 1-.366-1.366l1-1.732A1 1 0 0 1 2.5 1.768l.21.12c.085.05.192.044.274-.012.22-.151.453-.285.697-.4a.258.258 0 0 0 .15-.232V1Z"/>
  <path d="M9.019 3a1 1 0 0 0-1 1v.244c0 .1-.06.19-.15.232a4.993 4.993 0 0 0-.697.4.258.258 0 0 1-.274.013l-.21-.121a1 1 0 0 0-1.366.366l-1 1.732a1 1 0 0 0 .366 1.366l.202.117c.086.05.134.145.126.245a5.067 5.067 0 0 0 0 .812c.008.1-.04.196-.126.245l-.202.117a1 1 0 0 0-.366 1.366l1 1.732a1 1 0 0 0 1.366.366l.21-.12a.258.258 0 0 1 .274.012c.22.151.453.285.697.4a.26.26 0 0 1 .15.232V14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.261c0-.1.058-.189.147-.231.237-.114.463-.246.678-.395a.258.258 0 0 1 .275-.013l.23.132a1 1 0 0 0 1.366-.366l1-1.732a1 1 0 0 0-.366-1.366l-.238-.137a.258.258 0 0 1-.126-.244 5.11 5.11 0 0 0 0-.774.258.258 0 0 1 .126-.244l.238-.137a1 1 0 0 0 .366-1.366l-1-1.732a1 1 0 0 0-1.366-.366l-.23.132a.258.258 0 0 1-.275-.013 4.995 4.995 0 0 0-.678-.395.258.258 0 0 1-.148-.23V4a1 1 0 0 0-1-1h-2ZM12 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>
`;
t(P2, U2);
const j2 = "globe", D2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm4.17-1a16.97 16.97 0 0 1 .624-3.67l.14-.488A6.005 6.005 0 0 0 2.083 7H4.17Zm0 2H2.083a6.005 6.005 0 0 0 2.85 4.159l-.139-.489A17 17 0 0 1 4.17 9Zm3.07 4.952a6.059 6.059 0 0 0 1.52 0l.523-1.831c.292-1.023.473-2.07.543-3.121H6.174c.07 1.052.251 2.098.543 3.12l.524 1.832ZM6.175 7h3.652a15 15 0 0 0-.543-3.12L8.76 2.048a6.057 6.057 0 0 0-1.518 0l-.524 1.831A15 15 0 0 0 6.174 7Zm5.032 5.67-.14.489A6.005 6.005 0 0 0 13.917 9H11.83a17.004 17.004 0 0 1-.624 3.67Zm0-9.34c.343 1.202.551 2.433.624 3.67h2.087a6.005 6.005 0 0 0-2.85-4.158l.139.488Z"/>
</svg>
`;
t(j2, D2);
const J2 = "globe-solid", K2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7.76.004 6.652 3.985c-.275.99-.446 2-.514 3.015H9.86a15 15 0 0 0-.514-3.015L8.24.004a8.149 8.149 0 0 0-.482 0ZM5.58.372 4.727 3.45A17 17 0 0 0 4.136 7H.061A8.012 8.012 0 0 1 5.58.372ZM.062 9a8.01 8.01 0 0 0 5.519 6.628l-.855-3.078A17 17 0 0 1 4.136 9H.061Zm7.698 6.996a8.035 8.035 0 0 0 .48 0l1.107-3.981A15 15 0 0 0 9.86 9H6.139a15 15 0 0 0 .514 3.015l1.106 3.981Zm2.659-.368A8.008 8.008 0 0 0 15.939 9h-4.074a16.994 16.994 0 0 1-.591 3.55l-.855 3.078ZM15.938 7A8.008 8.008 0 0 0 10.42.372l.855 3.078c.323 1.164.52 2.354.59 3.55h4.074Z"/>
</svg>
`;
t(J2, K2);
const O2 = "grid", Q2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 0H0v7h7V0ZM2 5V2h3v3H2Zm14-5H9v7h7V0Zm-5 5V2h3v3h-3ZM9 9h7v7H9V9Zm2 2v3h3v-3h-3ZM7 9H0v7h7V9Zm-5 5v-3h3v3H2Z"/>
</svg>
`;
t(O2, Q2);
const W2 = "grid-horizontal", X2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3 3H1v2h2V3Zm0 4H1v2h2V7Zm-2 4h2v2H1v-2Zm6-8H5v2h2V3ZM5 7h2v2H5V7Zm2 4H5v2h2v-2Zm2-8h2v2H9V3Zm6 0h-2v2h2V3ZM9 7h2v2H9V7Zm6 0h-2v2h2V7Zm-6 4h2v2H9v-2Zm6 0h-2v2h2v-2Z"/>
</svg>
`;
t(W2, X2);
const Y2 = "grid-solid", _2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 0h7v7H0V0Zm9 0h7v7H9V0Zm7 9H9v7h7V9ZM0 9h7v7H0V9Z"/>
</svg>
`;
t(Y2, _2);
const t6 = "grid-vertical", s6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 1v2H3V1h2Zm4 2V1H7v2h2Zm4 0V1h-2v2h2Zm0 4V5h-2v2h2ZM9 5v2H7V5h2ZM5 7V5H3v2h2Zm8 2v2h-2V9h2Zm0 6v-2h-2v2h2ZM9 9v2H7V9h2Zm0 6v-2H7v2h2ZM5 9v2H3V9h2Zm0 6v-2H3v2h2Z"/>
</svg>
`;
t(t6, s6);
const h6 = "happy", v6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4.86 8.732a1 1 0 0 1 1.398.116l.005.005c.01.01.03.031.062.06.064.057.169.142.315.23.287.172.736.357 1.36.357.624 0 1.073-.185 1.36-.357a2.05 2.05 0 0 0 .377-.29l.005-.005a1 1 0 0 1 1.526 1.292l-.001.002-.001.001-.003.004-.007.008-.018.02a2.42 2.42 0 0 1-.225.224c-.145.13-.352.296-.623.459A4.603 4.603 0 0 1 8 11.5a4.603 4.603 0 0 1-2.39-.643 4.046 4.046 0 0 1-.795-.624 2.269 2.269 0 0 1-.053-.057l-.018-.021-.007-.008-.003-.004v-.001l-.002-.001a1 1 0 0 1 .128-1.41Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z"/>
</svg>
`;
t(h6, v6);
const o6 = "happy-solid", l6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm11-2a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM6.258 8.848a1 1 0 0 0-1.526 1.292l.001.002.001.001.003.004.007.008.018.02.053.058a4.046 4.046 0 0 0 .796.625A4.603 4.603 0 0 0 8 11.5a4.603 4.603 0 0 0 2.39-.643 4.042 4.042 0 0 0 .795-.624 2.42 2.42 0 0 0 .053-.057l.018-.021.007-.008.003-.004.002-.002a1 1 0 0 0-1.526-1.293l-.005.005c-.01.01-.03.031-.062.06a2.05 2.05 0 0 1-.314.23A2.605 2.605 0 0 1 8 9.5a2.605 2.605 0 0 1-1.36-.357 2.05 2.05 0 0 1-.377-.29l-.005-.005ZM7 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
</svg>
`;
t(o6, l6);
const g6 = "headphones", w6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0v8h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2A6 6 0 0 0 2 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H0V8Zm2 2v4h2v-4H2Zm12 0h-2v4h2v-4Z"/>
</svg>
`;
t(g6, w6);
const n6 = "headphones-solid", e6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 0 0-8 8v8h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H2a6 6 0 1 1 12 0h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4V8a8 8 0 0 0-8-8Z"/>
</svg>
`;
t(n6, e6);
const a6 = "heart", i6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 5.5 6.32 3.82a2.375 2.375 0 0 0-3.358 3.36L8 12.216l5.038-5.038A2.375 2.375 0 1 0 9.68 3.821L8 5.5Zm0 9.546L1.548 8.594a4.375 4.375 0 0 1 6.187-6.188L8 2.672l.265-.266a4.375 4.375 0 1 1 6.187 6.188L8 15.046Z"/>
</svg>
`;
t(a6, i6);
const r6 = "heart-solid", c6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path stroke="currentColor" stroke-width="2" d="M13.745 7.886 8 13.632 2.255 7.886a3.375 3.375 0 0 1 4.773-4.772l.265.265.707.707.707-.707.265-.265a3.375 3.375 0 1 1 4.773 4.772Z"/>
</svg>
`;
t(r6, c6);
const m6 = "home", d6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m8 .798 7 4.667V15H9v-4.444H7V15H1V5.465L8 .798ZM3 6.535V13h2V8.556h6V13h2V6.535L8 3.202 3 6.535Z"/>
</svg>
`;
t(m6, d6);
const Z6 = "home-solid", p6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15 5.465 8 .798 1 5.465V15h6v-4.444h2V15h6V5.465Z"/>
</svg>
`;
t(Z6, p6);
const x6 = "image", $6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M15 1H1v14h14V1ZM3 6.92V3h10v7.132l-1.928-1.286-1.914.957-4.624-4.11L3 6.918Zm7.928 4.234L13 12.535V13H3V9.48l1.466-1.172 4.376 3.89 2.086-1.044Z"/>
</svg>
`;
t(x6, $6);
const H6 = "image-solid", V6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 1h14v14H1V1Zm11 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-9 7h10v-.465l-2.072-1.381-2.086 1.043-4.376-3.89L3 9.482V13Z"/>
</svg>
`;
t(H6, V6);
const M6 = "inbox", u6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 4.086V0H7v4.086l-1.5-1.5L4.086 4 8 7.914 11.914 4 10.5 2.586 9 4.086ZM6 8H0v8h16V8h-6v2H6V8Zm6 4v-2h2v4H2v-4h2v2h8Z"/>
</svg>
`;
t(M6, u6);
const C6 = "inbox-complete", f6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 6.914 13.414 1.5 12 .086l-4 4-2-2L4.586 3.5 8 6.914ZM6 8H0v8h16V8h-6v2H6V8Zm6 4v-2h2v4H2v-4h2v2h8Z"/>
</svg>
`;
t(C6, f6);
const L6 = "inbox-complete-solid", B6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13.414 1.5 12 .086l-4 4-2-2L4.586 3.5 8 6.914 13.414 1.5ZM0 8h6v2h4V8h6v8H0V8Z"/>
</svg>
`;
t(L6, B6);
const A6 = "inbox-solid", b6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 4.086V0H7v4.086l-1.5-1.5L4.086 4 8 7.914 11.914 4 10.5 2.586 9 4.086ZM0 8h6v2h4V8h6v8H0V8Z"/>
</svg>
`;
t(A6, b6);
const k6 = "info-circle", y6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 7v5H7V7h2ZM8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"/>
</svg>
`;
t(k6, y6);
const E6 = "info-circle-solid", S6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm7-3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm2 2H7v5h2V7Z"/>
</svg>
`;
t(E6, S6);
const N6 = "laptop", q6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6h1v6H0V9h1V3Zm1 8v2h12v-2h-2v1H4v-1H2Zm4-1h4V9h3V3H3v6h3v1Z"/>
</svg>
`;
t(N6, q6);
const R6 = "laptop-solid", I6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3 1a2 2 0 0 0-2 2v6H0v6h16V9h-1V3a2 2 0 0 0-2-2H3ZM2 13v-2h2v1h8v-1h2v2H2Z"/>
</svg>
`;
t(R6, I6);
const z6 = "lightning", T6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9.5 6.5 10 0H9L2 9.5h4.5L6 16h1l7-9.5H9.5Z"/>
</svg>
`;
t(z6, T6);
const F6 = "lightning-box", G6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8.5 4 5 9h2v3h.5L11 7H9V4h-.5Z"/>
  <path d="M15 1H1v14h14V1ZM3 13V3h10v10H3Z"/>
</svg>
`;
t(F6, G6);
const P6 = "lightning-box-solid", U6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 1h14v14H1V1Zm7.5 3L5 9h2v3h.5L11 7H9V4h-.5Z"/>
</svg>
`;
t(P6, U6);
const j6 = "link", D6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M12.243 3.757a2 2 0 0 0-2.829 0L7.293 5.88 5.879 4.464 8 2.344a4 4 0 0 1 5.657 0l.707.706-.09.09A4.002 4.002 0 0 1 13.658 8l-2.121 2.121-1.415-1.414 2.122-2.121a2 2 0 0 0 0-2.829Zm-8.486 8.486a2 2 0 0 0 2.829 0l2.121-2.122 1.414 1.415L8 13.655a4 4 0 0 1-5.657 0l-.707-.706.09-.09A4.002 4.002 0 0 1 2.342 8l2.121-2.121L5.88 7.293 3.757 9.414a2 2 0 0 0 0 2.829Z"/>
  <path d="M10.828 6.586 9.414 5.172 5.172 9.414l1.414 1.414 4.242-4.242Z"/>
</svg>
`;
t(j6, D6);
const J6 = "link-external", K6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2V1Z"/>
  <path d="M7 3H1v12h12V9h-2v4H3V5h4V3Z"/>
</svg>
`;
t(J6, K6);
const O6 = "list", Q6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm3 1h11V2H4v2Zm11 5H4V7h11v2ZM1 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm14 6H4v-2h11v2ZM1 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
</svg>
`;
t(O6, Q6);
const W6 = "lock-closed", X6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 10a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Z"/>
  <path d="M7 0a3 3 0 0 0-3 3v2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2V3a3 3 0 0 0-3-3H7Zm3 5H6V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2Zm-6 9V7h8v7H4Z"/>
</svg>
`;
t(W6, X6);
const Y6 = "lock-closed-solid", _6 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2V3Zm2 2h4V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2Zm3 5a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Z"/>
</svg>
`;
t(Y6, _6);
const t3 = "lock-open", s3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 10a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Z"/>
  <path d="M7 0a3 3 0 0 0-3 3v2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3H7ZM4 14V7h8v7H4Z"/>
</svg>
`;
t(t3, s3);
const h3 = "lock-open-solid", v3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2V3Zm5 7a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Z"/>
</svg>
`;
t(h3, v3);
const o3 = "magnifying-glass", l3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 2a5 5 0 1 0 0 10A5 5 0 0 0 7 2ZM0 7a7 7 0 1 1 12.606 4.192l3.101 3.1-1.414 1.415-3.1-3.1A7 7 0 0 1 0 7Z"/>
</svg>
`;
t(o3, l3);
const g3 = "map-pin", w3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 6.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
  <path d="M7.193 15.162a18.223 18.223 0 0 1-2.666-2.283C3.1 11.386 1.5 9.145 1.5 6.5 1.5 3.245 4.141 0 8 0s6.5 3.245 6.5 6.5c0 2.645-1.6 4.886-3.027 6.379a18.22 18.22 0 0 1-2.666 2.283c-.263.183-.536.351-.807.523-.27-.172-.544-.34-.807-.523ZM8 2C5.359 2 3.5 4.232 3.5 6.5c0 1.855 1.15 3.614 2.473 4.996A16.217 16.217 0 0 0 8 13.28a16.22 16.22 0 0 0 2.027-1.783C11.35 10.114 12.5 8.356 12.5 6.5 12.5 4.232 10.641 2 8 2Z"/>
</svg>
`;
t(g3, w3);
const n3 = "map-pin-solid", e3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m7.385 15.293-.192-.13a18.223 18.223 0 0 1-2.666-2.283C3.1 11.385 1.5 9.144 1.5 6.499 1.5 3.245 4.141 0 8 0s6.5 3.245 6.5 6.5c0 2.645-1.6 4.886-3.027 6.379a18.22 18.22 0 0 1-2.666 2.283c-.081.057-.146.1-.192.13-.203.135-.41.263-.615.393-.205-.13-.412-.258-.615-.392ZM8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
</svg>
`;
t(n3, e3);
const a3 = "megaphone", i3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15 5.764V1.382L9.975 3.894A1 1 0 0 1 9.528 4H3a3 3 0 0 0-3 3v2a3 3 0 0 0 2.83 2.995L.59 14.61l1.518 1.301L5.46 12h4.068a1 1 0 0 1 .447.106L15 14.618v-4.382c.614-.55 1-1.347 1-2.236 0-.888-.386-1.687-1-2.236Zm-4.13-.08L13 4.617v6.764l-2.13-1.065A3 3 0 0 0 9.527 10H7V6h2.528a3 3 0 0 0 1.341-.317ZM5 6v4H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2Z"/>
</svg>
`;
t(a3, i3);
const r3 = "megaphone-solid", c3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15 1.382v4.382c.614.55 1 1.348 1 2.236a2.99 2.99 0 0 1-1 2.236v4.382l-5.025-2.512A1 1 0 0 0 9.528 12H5.46l-3.352 3.91L.59 14.608l2.24-2.613A3 3 0 0 1 0 9V7a3 3 0 0 1 3-3h6.528a1 1 0 0 0 .447-.106L15 1.382ZM7 10V6H5v4h2Z"/>
</svg>
`;
t(r3, c3);
const m3 = "menu", d3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15 4H1V2h14v2Zm0 5H1V7h14v2ZM1 14h14v-2H1v2Z"/>
</svg>
`;
t(m3, d3);
const Z3 = "microphone", p3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 0a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3ZM7 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V3Z"/>
  <path d="M8 11a4 4 0 0 1-4-4H2a6.002 6.002 0 0 0 5 5.917V14H5v2h6v-2H9v-1.083A6.002 6.002 0 0 0 14 7h-2a4 4 0 0 1-4 4Z"/>
</svg>
`;
t(Z3, p3);
const x3 = "microphone-off", $3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 0a3 3 0 0 1 2.761 1.825L9 3.585V3a1 1 0 0 0-2 0v2.586L5.048 7.538A3.018 3.018 0 0 1 5 7V3a3 3 0 0 1 3-3Zm-.538 9.952-.814.814A4 4 0 0 0 12 7h2a6.002 6.002 0 0 1-5 5.917V14h2v2H5v-2h2v-1.083a5.96 5.96 0 0 1-1.861-.642l-3.432 3.432-1.414-1.414 14-14 1.414 1.414L11 6.414V7a3 3 0 0 1-3.538 2.952ZM4 7c0 .474.083.93.234 1.352L2.724 9.86A5.973 5.973 0 0 1 2 7h2Z"/>
</svg>
`;
t(x3, $3);
const H3 = "microphone-off-solid", V3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m14.293.293 1.414 1.414L11 6.414V7a3 3 0 0 1-3.538 2.952l-.814.814A4 4 0 0 0 12 7h2a6.002 6.002 0 0 1-5 5.917V14h2v2H5v-2h2v-1.083a5.957 5.957 0 0 1-1.861-.642l-3.432 3.432-1.414-1.414 14-14Zm-3.532 1.532A3 3 0 0 0 5 3v4c0 .184.016.363.048.538l5.713-5.713ZM4.234 8.352A3.993 3.993 0 0 1 4 7H2c0 1.036.263 2.01.725 2.861l1.51-1.51Z"/>
</svg>
`;
t(H3, V3);
const M3 = "microphone-solid", u3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 3a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0V3Z"/>
  <path d="M8 11a4 4 0 0 1-4-4H2a6.002 6.002 0 0 0 5 5.917V14H5v2h6v-2H9v-1.083A6.002 6.002 0 0 0 14 7h-2a4 4 0 0 1-4 4Z"/>
</svg>
`;
t(M3, u3);
const C3 = "minus", f3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15 9H1V7h14v2Z"/>
</svg>
`;
t(C3, f3);
const L3 = "minus-circle", B3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M12 7H4v2h8V7Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z"/>
</svg>
`;
t(L3, B3);
const A3 = "minus-circle-solid", b3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm12-1H4v2h8V7Z"/>
</svg>
`;
t(A3, b3);
const k3 = "money", y3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 2H5a3.5 3.5 0 1 0 0 7h2v3H2.5v2H7v2h2v-2h2a3.5 3.5 0 1 0 0-7H9V4h4.5V2H9V0H7v2Zm2 7h2a1.5 1.5 0 0 1 0 3H9V9ZM7 7H5a1.5 1.5 0 1 1 0-3h2v3Z"/>
</svg>
`;
t(k3, y3);
const E3 = "neutral", S3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.5 9a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5ZM11 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z"/>
</svg>
`;
t(E3, S3);
const N3 = "neutral-solid", q3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm11-2a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-6.5 4a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-5a1 1 0 0 0-1 1ZM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
`;
t(N3, q3);
const R3 = "newspaper", I3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 5h4v2H8V5Zm4 3H8v2h4V8Z"/>
  <path d="M16 1H4v2H0v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V1ZM5.83 13c.11-.313.17-.65.17-1V3h8v9a1 1 0 0 1-1 1H5.83ZM2 12V5h2v7a1 1 0 1 1-2 0Z"/>
</svg>
`;
t(R3, I3);
const z3 = "newspaper-solid", T3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M16 1H4v2H0v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V1ZM4 12a1 1 0 1 1-2 0V5h2v7Zm8-8v2H8V4h4Zm0 3v2H8V7h4Z"/>
</svg>
`;
t(z3, T3);
const F3 = "note", G3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 8H6V6h4v2Zm0 3H6V9h4v2Z"/>
  <path d="M10.414 1H2v14h12V4.586L10.414 1ZM4 13V3h5.586L12 5.414V13H4Z"/>
</svg>
`;
t(F3, G3);
const P3 = "note-solid", U3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2 1h8.414L14 4.586V15H2V1Zm8 7V6H6v2h4Zm0 3V9H6v2h4Z"/>
</svg>
`;
t(P3, U3);
const j3 = "ordered-list", D3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2 1h3v6H3V3H2V1Zm6 4h7V3H8v2Zm0 8h7v-2H8v2ZM2 9h4v1.236L4.618 13H6v2H2v-1.236L3.382 11H2V9Z"/>
</svg>
`;
t(j3, D3);
const J3 = "page-bottom", K3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 3h14V1H1v2Zm8 8.826V5H7v6.826L4.392 9.59 3.09 11.108 8 15.319l4.91-4.21-1.302-1.518L9 11.826Z"/>
</svg>
`;
t(J3, K3);
const O3 = "page-top", Q3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 3h14V1H1v2Zm6 5.174V15h2V8.174l2.608 2.236 1.302-1.518L8 4.682l-4.91 4.21 1.302 1.518L7 8.174Z"/>
</svg>
`;
t(O3, Q3);
const W3 = "parking", X3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 4H5v8h2v-2h2a3 3 0 1 0 0-6Zm0 4H7V6h2a1 1 0 0 1 0 2Z"/>
  <path d="M15 1H1v14h14V1ZM3 13V3h10v10H3Z"/>
</svg>
`;
t(W3, X3);
const Y3 = "parking-solid", _3 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 8H7V6h2a1 1 0 0 1 0 2Z"/>
  <path d="M1 1h14v14H1V1Zm8 3H5v8h2v-2h2a3 3 0 1 0 0-6Z"/>
</svg>
`;
t(Y3, _3);
const tt = "pause", st = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6 15V1H4v14h2Zm6 0V1h-2v14h2Z"/>
</svg>
`;
t(tt, st);
const ht = "pencil", vt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15.353 2.938 13.06.646a1.5 1.5 0 0 0-2.122 0L1 10.586v4.359h4.413l9.937-9.882a1.5 1.5 0 0 0 .003-2.125Zm-4.439.562L12 2.414l1.584 1.584-1.089 1.083-1.58-1.581ZM9.5 4.914l1.577 1.577-6.49 6.454H3v-1.53l6.5-6.5Z"/>
</svg>
`;
t(ht, vt);
const ot = "pencil-solid", lt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M12.707 1 15 3.292a1 1 0 0 1-.002 1.416l-1.441 1.434-3.702-3.703L11.293 1a1 1 0 0 1 1.414 0ZM8.44 3.854 1.5 10.793v3.652h3.706l6.932-6.893-3.699-3.698Z"/>
</svg>
`;
t(ot, lt);
const gt = "phone", wt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 1h1l1.5 5L5 7c0 2 2 4 4 4l1-1.5 5 1.5v1a3 3 0 0 1-3 3C5 15 1 10 1 4a3 3 0 0 1 3-3Z"/>
</svg>
`;
t(gt, wt);
const nt = "phone-mobile", et = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6 13h4v-2H6v2Z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4Zm3.5 3h1a2 2 0 0 0 1.732-1H12v12H4V2h1.768A2 2 0 0 0 7.5 3Z"/>
</svg>
`;
t(nt, et);
const at = "phone-mobile-solid", it = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm4 11h4v-2H6v2Z"/>
</svg>
`;
t(at, it);
const rt = "pin", ct = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3 0h10v1c0 1.173-.294 2.075-.606 2.697a4.748 4.748 0 0 1-.394.656v2.175A5.987 5.987 0 0 1 14 11v1H9v3a1 1 0 1 1-2 0v-3H2v-1c0-1.778.774-3.375 2-4.472V4.353a4.758 4.758 0 0 1-.394-.656C3.294 3.075 3 2.173 3 1V0Zm2.11 2c.076.332.183.6.284.803a2.699 2.699 0 0 0 .316.492.545.545 0 0 0 .006.006L6 3.586v3.913l-.4.3A4.002 4.002 0 0 0 4.127 10h7.748A4.002 4.002 0 0 0 10.4 7.8l-.4-.3V3.585l.284-.284.006-.007a2.694 2.694 0 0 0 .315-.492c.102-.204.209-.47.285-.803H5.11Z"/>
</svg>
`;
t(rt, ct);
const mt = "pin-solid", dt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13 0H3v1c0 1.173.294 2.075.606 2.697.137.275.277.493.394.656v2.175A5.987 5.987 0 0 0 2 11v1h5v3a1 1 0 1 0 2 0v-3h5v-1a5.987 5.987 0 0 0-2-4.472V4.353c.117-.163.257-.381.394-.656C12.706 3.075 13 2.173 13 1V0Z"/>
</svg>
`;
t(mt, dt);
const Zt = "plane", pt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15.662 8 .684 15.815 1.986 8 .684.185 15.662 8ZM3.847 9l-.53 3.185L11.337 8 3.316 3.815 3.847 7H7v2H3.847Z"/>
</svg>
`;
t(Zt, pt);
const xt = "plane-solid", $t = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15.662 8 .684 15.815 1.82 9H7V7H1.82L.684.185 15.662 8Z"/>
</svg>
`;
t(xt, $t);
const Ht = "play", Vt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15.662 8 1 15.65V.35L15.662 8Zm-4.324 0L3 3.65v8.7L11.338 8Z"/>
</svg>
`;
t(Ht, Vt);
const Mt = "play-solid", ut = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 15.65 15.662 8 1 .35v15.3Z"/>
</svg>
`;
t(Mt, ut);
const Ct = "plus", ft = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 7V.5h2V7h6.5v2H9v6.5H7V9H.5V7H7Z"/>
</svg>
`;
t(Ct, ft);
const Lt = "plus-circle", Bt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 4v3H4v2h3v3h2V9h3V7H9V4H7Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z"/>
</svg>
`;
t(Lt, Bt);
const At = "plus-circle-solid", bt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm7-4v3H4v2h3v3h2V9h3V7H9V4H7Z"/>
</svg>
`;
t(At, bt);
const kt = "printer", yt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
  <path d="M13 0H3v4H0v9h3v3h10v-3h3V4h-3V0Zm-2 4H5V2h6v2Zm0 10H5v-2h6v2Zm-9-3V6h12v5h-1v-1H3v1H2Z"/>
</svg>
`;
t(kt, yt);
const Et = "printer-solid", St = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13 0H3v4H0v9h3v3h10v-3h3V4h-3V0Zm0 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2-4H5V2h6v2Zm0 10H5v-2h6v2Z"/>
</svg>
`;
t(Et, St);
const Nt = "question-mark", qt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.5 4A2.5 2.5 0 0 0 5 6.5h2a.5.5 0 0 1 .5-.5h.646a.382.382 0 0 1 .17.724L7 7.382V9h2v-.382l.211-.106A2.382 2.382 0 0 0 8.146 4H7.5Z"/>
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"/>
</svg>
`;
t(Nt, qt);
const Rt = "question-mark-solid", It = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm5-1.5h2a.5.5 0 0 1 .5-.5h.646a.382.382 0 0 1 .17.724L7 7.382V9h2v-.382l.211-.106A2.382 2.382 0 0 0 8.146 4H7.5A2.5 2.5 0 0 0 5 6.5ZM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
`;
t(Rt, It);
const zt = "redo", Tt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 10.5v-1A4.5 4.5 0 0 1 4.5 5h7.586l-2-2L11.5 1.586 15.914 6 11.5 10.414 10.086 9l2-2H4.5a2.5 2.5 0 0 0 0 5H12v2H4.5a4.502 4.502 0 0 1-4.388-3.5H0Z"/>
</svg>
`;
t(zt, Tt);
const Ft = "rss", Gt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2 3c6.075 0 11 4.925 11 11h2C15 6.82 9.18 1 2 1v2Z"/>
  <path d="M2 5a9 9 0 0 1 9 9H9a7 7 0 0 0-7-7V5Zm4 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>
`;
t(Ft, Gt);
const Pt = "sad", Ut = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
  <path d="M11 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.742 5.152a1 1 0 0 0 1.526-1.292l-.001-.002-.001-.001-.003-.004-.007-.008-.018-.02a3.123 3.123 0 0 0-.225-.224 4.046 4.046 0 0 0-.623-.458A4.603 4.603 0 0 0 8 8.5a4.603 4.603 0 0 0-2.39.643 4.046 4.046 0 0 0-.795.624 2.242 2.242 0 0 0-.053.057l-.018.021-.007.008-.003.004v.001l-.002.001a1 1 0 0 0 1.526 1.293l.005-.005c.01-.01.03-.031.062-.06a2.05 2.05 0 0 1 .314-.23A2.605 2.605 0 0 1 8 10.5c.624 0 1.073.185 1.36.357a2.049 2.049 0 0 1 .382.295Z"/>
</svg>
`;
t(Pt, Ut);
const jt = "sad-solid", Dt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm6-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1.258 5.152a1 1 0 0 0 1.526-1.293h-.001l-.001-.002-.003-.004-.007-.008-.018-.02a2.454 2.454 0 0 0-.225-.225 4.043 4.043 0 0 0-.623-.457A4.603 4.603 0 0 0 8 8.5a4.603 4.603 0 0 0-2.39.643 4.047 4.047 0 0 0-.795.624 2.28 2.28 0 0 0-.053.057l-.018.021-.007.008-.003.004v.001l-.002.002a1 1 0 0 0 1.526 1.292l.005-.005c.01-.01.03-.031.062-.06a2.05 2.05 0 0 1 .315-.23A2.605 2.605 0 0 1 8 10.5c.624 0 1.073.185 1.36.357a2.05 2.05 0 0 1 .377.29l.005.005Z"/>
</svg>
`;
t(jt, Dt);
const Jt = "save", Kt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 4H4v2h5V4Z"/>
  <path d="M10.414 1H1v14h14V5.586L10.414 1ZM3 13V3h6.586L13 6.414V13h-1V9H4v4H3Zm7-2v2H6v-2h4Z"/>
</svg>
`;
t(Jt, Kt);
const Ot = "save-solid", Qt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10.414 1H1v14h14V5.586L10.414 1ZM4 4h5v2H4V4Zm8 5v4h-2v-2H6v2H4V9h8Z"/>
</svg>
`;
t(Ot, Qt);
const Wt = "settings", Xt = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 0v7.268a2 2 0 1 1-2 0V0h2Zm0 12v4H2v-4h2Zm5-9.732V0H7v2.268a2 2 0 1 0 2 0ZM9 16V7H7v9h2Zm5-8.732V0h-2v7.268a2 2 0 1 0 2 0ZM14 16v-4h-2v4h2Z"/>
</svg>
`;
t(Wt, Xt);
const Yt = "share", _t = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 .917 2.16l-4.94 2.47a3.03 3.03 0 0 1 0 .74l4.94 2.47a3 3 0 1 1-.895 1.789l-4.94-2.47a3 3 0 1 1 0-4.319l4.94-2.47A3.023 3.023 0 0 1 10 3ZM3 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
</svg>
`;
t(Yt, _t);
const t4 = "share-solid", s4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13 0a3 3 0 0 0-2.977 3.37l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3.03 3.03 0 0 0 0-.74l4.94-2.47A3 3 0 1 0 13 0Z"/>
</svg>
`;
t(t4, s4);
const h4 = "shirt", v4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m5 .882.447.224c1.719.859 3.387.859 5.106 0L11 .882l5 2.5V9h-3v6H3V9H0V3.382l5-2.5Zm.016 2.228L2 4.618V7h3v6h6V7h3V4.618L10.984 3.11c-1.979.853-3.99.853-5.968 0Z"/>
</svg>
`;
t(h4, v4);
const o4 = "shirt-solid", l4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.447 1.106 5 .882l-5 2.5V9h3v6h10V9h3V3.382l-5-2.5-.447.224c-1.719.859-3.387.859-5.106 0Z"/>
</svg>
`;
t(o4, l4);
const g4 = "shopping-bag", w4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 4a4 4 0 1 1 8 0h4v12H0V4h4Zm0 2H2v8h12V6h-2v2h-2V6H6v2H4V6Zm6-2a2 2 0 1 0-4 0h4Z"/>
</svg>
`;
t(g4, w4);
const n4 = "shopping-bag-solid", e4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 4a4 4 0 1 1 8 0h4v12H0V4h4Zm4-2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2ZM4 6v2h2V6H4Zm6 0v2h2V6h-2Z"/>
</svg>
`;
t(n4, e4);
const a4 = "shopping-cart", i4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 2h2.117l.845 6.755-.24.358C1.616 10.775 2.807 13 4.803 13H14v-2H4.803a.5.5 0 0 1-.416-.777L4.535 10H14.82l1.16-5.804a1 1 0 0 0-.738-1.166L3.123 0H0v2Zm13.832 2.739L13.18 8H4.883l-.71-5.676 9.66 2.415ZM5 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
</svg>
`;
t(a4, i4);
const r4 = "shopping-cart-solid", c4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 2h2.117l.845 6.755-.24.358C1.616 10.775 2.807 13 4.803 13H14v-2H4.803a.5.5 0 0 1-.416-.777L4.535 10H14.82l1.16-5.804a1 1 0 0 0-.738-1.166L3.123 0H0v2Zm4 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
`;
t(r4, c4);
const m4 = "sidebyside", d4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 1h14v14H1V1Zm2 2v10h4V3H3Zm6 0v10h4V3H9Z"/>
</svg>
`;
t(m4, d4);
const Z4 = "sidebyside-solid", p4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 15V1h14v14H1ZM9 3H7v10h2V3Z"/>
</svg>
`;
t(Z4, p4);
const x4 = "star", $4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m8 .684 2.231 4.66 5.629.266-4.18 4.04 1.336 5.254L8 12.324l-5.016 2.58L4.32 9.65.14 5.61l5.629-.265L8 .684Zm0 4.632-.943 1.97-2.197.104 1.684 1.629-.528 2.077L8 10.076l1.984 1.02-.528-2.077 1.684-1.63-2.197-.103L8 5.316Z"/>
</svg>
`;
t(x4, $4);
const H4 = "star-solid", V4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10.231 5.345 8 .684l-2.231 4.66-5.628.266 4.18 4.04-1.337 5.254L8 12.324l5.016 2.58L11.68 9.65l4.18-4.04-5.629-.265Z"/>
</svg>
`;
t(H4, V4);
const M4 = "sync", u4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8v1h.1A5.002 5.002 0 0 0 5 13v-2a3 3 0 0 1-.5-5.959v1.827L8.803 4 4.5 1.131v1.894A5 5 0 0 0 0 8Zm16 0V7h-.1A5.002 5.002 0 0 0 11 3h-1v2h1a3 3 0 0 1 .5 5.959V9.13L7.197 12l4.303 2.868v-1.893A5 5 0 0 0 16 8Z"/>
</svg>
`;
t(M4, u4);
const C4 = "thumbs-down", f4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1.617 1H16v9h-4.323l-2 5H8a3 3 0 0 1-3-3v-1H2.633A2 2 0 0 1 .648 8.752L1.618 1ZM12 8h2V3h-2v5Zm-2-5H3.383l-.75 6H7v3a1 1 0 0 0 1 1h.323L10 8.807V3Z"/>
</svg>
`;
t(C4, f4);
const L4 = "thumbs-down-solid", B4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M12.5 10H16V1h-3.5v9Zm-2-9H1.617L.648 8.752A2 2 0 0 0 2.633 11H5v1a3 3 0 0 0 3 3h.677l1.823-4.557V1Z"/>
</svg>
`;
t(L4, B4);
const A4 = "thumbs-up", b4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.323 1H8a3 3 0 0 1 3 3v1h2.367a2 2 0 0 1 1.985 2.248L14.382 15H0V6h4.323l2-5ZM4 8H2v5h2V8Zm2 5h6.617l.75-6H9V4a1 1 0 0 0-1-1h-.323L6 7.193V13Z"/>
</svg>
`;
t(A4, b4);
const k4 = "thumbs-up-solid", y4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7.323 1H8a3 3 0 0 1 3 3v1h2.367a2 2 0 0 1 1.985 2.248L14.382 15H5.5V5.557L7.323 1ZM3.5 6H0v9h3.5V6Z"/>
</svg>
`;
t(k4, y4);
const E4 = "transfer", S4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11.586 3H1v2h10.586l-1.5 1.5L11.5 7.914 15.414 4 11.5.086 10.086 1.5l1.5 1.5ZM4.414 13H15v-2H4.414l1.5-1.5L4.5 8.086.586 12 4.5 15.914 5.914 14.5l-1.5-1.5Z"/>
</svg>
`;
t(E4, S4);
const N4 = "transfer-alt", q4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3 4.414V15h2V4.414l1.5 1.5L7.914 4.5 4 .586.086 4.5 1.5 5.914l1.5-1.5Zm10 7.172V1h-2v10.586l-1.5-1.5L8.086 11.5 12 15.414l3.914-3.914-1.414-1.414-1.5 1.5Z"/>
</svg>
`;
t(N4, q4);
const R4 = "trash", I4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 7v5h2V7H7Z"/>
  <path d="M11 0H5v3H0v2h1.165l1.553 8.537A3 3 0 0 0 5.669 16h4.662a3 3 0 0 0 2.952-2.463L14.835 5H16V3h-5V0ZM9 3H7V2h2v1ZM4.685 13.179 3.198 5h9.604l-1.487 8.179a1 1 0 0 1-.984.821H5.669a1 1 0 0 1-.984-.821Z"/>
</svg>
`;
t(R4, I4);
const z4 = "trash-solid", T4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 0h6v3h5v2h-1.165l-1.553 8.537A3 3 0 0 1 10.332 16H5.669a3 3 0 0 1-2.951-2.463L1.165 5H0V3h5V0Zm2 3h2V2H7v1Zm0 4v5h2V7H7Z"/>
</svg>
`;
t(z4, T4);
const F4 = "undo", G4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M16 10.5v-1A4.5 4.5 0 0 0 11.5 5H3.914l2-2L4.5 1.586.086 6 4.5 10.414 5.914 9l-2-2H11.5a2.5 2.5 0 0 1 0 5H4v2h7.5a4.502 4.502 0 0 0 4.389-3.5H16Z"/>
</svg>
`;
t(F4, G4);
const P4 = "upload", U4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 4.174V11h2V4.174l2.608 2.236 1.302-1.518L8 .682l-4.91 4.21L4.392 6.41 7 4.174Z"/>
  <path d="M3 13v-3H1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-2v3H3Z"/>
</svg>
`;
t(P4, U4);
const j4 = "user", D4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 5a3 3 0 0 0-3 3v4h10v-4a3 3 0 0 0-3-3H6Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H5v-2Z"/>
</svg>
`;
t(j4, D4);
const J4 = "user-add", K4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM0 12a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4H0v-4Zm3-1a1 1 0 0 0-1 1v2h6v-2a1 1 0 0 0-1-1H3Zm13-3h-2v2h-2V8h-2V6h2V4h2v2h2v2Z"/>
</svg>
`;
t(J4, K4);
const O4 = "user-add-solid", Q4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-1 8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4H0v-4Zm16-4h-2v2h-2V8h-2V6h2V4h2v2h2v2Z"/>
</svg>
`;
t(O4, Q4);
const W4 = "user-group", X4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM5 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-4 7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3H0v-3Zm3-1a1 1 0 0 0-1 1v1h6v-1a1 1 0 0 0-1-1H3Zm6-5v2h4a1 1 0 0 1 1 1v1h-3v2h5v-3a3 3 0 0 0-3-3H9Z"/>
</svg>
`;
t(W4, X4);
const Y4 = "user-group-solid", _4 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 3a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM0 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3H0v-3Z"/>
  <path d="M8.873 7.003a4 4 0 0 1-1.278 2.041A4 4 0 0 1 11 13h5v-3a3 3 0 0 0-3-3H9c-.042 0-.085 0-.127.003ZM5 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
</svg>
`;
t(Y4, _4);
const t5 = "user-remove", s5 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM0 12a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4H0v-4Zm3-1a1 1 0 0 0-1 1v2h6v-2a1 1 0 0 0-1-1H3Zm7-3h6V6h-6v2Z"/>
</svg>
`;
t(t5, s5);
const h5 = "user-remove-solid", v5 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-1 8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4H0v-4Zm10-4h6V6h-6v2Z"/>
</svg>
`;
t(h5, v5);
const o5 = "user-solid", l5 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 9a3 3 0 0 0-3 3v4h10v-4a3 3 0 0 0-3-3H6Z"/>
</svg>
`;
t(o5, l5);
const g5 = "utensils", w5 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m9.975 3.44 1.94-1.94L10.5.086l-1.94 1.94a3.501 3.501 0 0 0-.429 4.428L8 6.586l-5.5-5.5-.94.94a3.5 3.5 0 0 0 0 4.949L4.587 10l-4 4L2 15.414l4-4 2 2 2-2 4 4L15.414 14l-6-6 .132-.131a3.501 3.501 0 0 0 4.429-.43l1.94-1.939L14.5 4.086l-1.94 1.94a1.5 1.5 0 0 1-1.534.362L13.914 3.5 12.5 2.086 9.612 4.974a1.5 1.5 0 0 1 .363-1.535ZM8.585 10 8 10.586 2.975 5.56a1.5 1.5 0 0 1-.363-1.535L8.586 10Z"/>
</svg>
`;
t(g5, w5);
const n5 = "utensils-solid", e5 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m9.975 3.44 1.94-1.94L10.5.086l-1.94 1.94a3.501 3.501 0 0 0-.429 4.428L8 6.586l-5.5-5.5-.94.94a3.5 3.5 0 0 0 0 4.949L4.587 10l-4 4L2 15.414l4-4 2 2 2-2 4 4L15.414 14l-6-6 .132-.131a3.501 3.501 0 0 0 4.429-.43l1.94-1.939L14.5 4.086l-1.94 1.94a1.5 1.5 0 0 1-1.534.362L13.914 3.5 12.5 2.086 9.612 4.974a1.5 1.5 0 0 1 .363-1.535Z"/>
</svg>
`;
t(n5, e5);
const a5 = "video", i5 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 2h12v2.367l4-.5v8.266l-4-.5V14H0V2Zm2 2v8h8V9.367l4 .5V6.133l-4 .5V4H2Z"/>
</svg>
`;
t(a5, i5);
const r5 = "video-off", c5 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m13.197 4.218 2.51-2.51L14.293.292l-14 14 1.414 1.414L3.414 14H12v-2.367l4 .5V3.867l-2.803.35ZM10.893 6.52 14 6.133v3.734l-4-.5V12H5.414l5.48-5.479ZM0 2h10.586l-2 2H2v6.586l-2 2V2Z"/>
</svg>
`;
t(r5, c5);
const m5 = "video-off-solid", d5 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m14.293.293 1.414 1.414-2.51 2.51L16 3.868v8.266l-4-.5V14H3.414l-1.707 1.707-1.414-1.414 14-14ZM10.086 2H0v10.086L10.086 2Z"/>
</svg>
`;
t(m5, d5);
const Z5 = "video-solid", p5 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M12 2H0v12h12v-2.367l4 .5V3.867l-4 .5V2Z"/>
</svg>
`;
t(Z5, p5);
