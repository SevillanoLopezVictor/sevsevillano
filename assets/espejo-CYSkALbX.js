(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Date.parse(`2026-10-25T20:00:00+01:00`),t=0,n=()=>Date.now()+t,r=e=>String(e).padStart(2,`0`);async function i(){try{let e=Date.now(),n=await fetch(location.href,{method:`HEAD`,cache:`no-store`}),r=Date.parse(n.headers.get(`date`));Number.isNaN(r)||(t=r+(Date.now()-e)/2-Date.now())}catch{}}var a=`
  .estreno-dvd {
    position: fixed; inset: 0; z-index: 2147483000; background: #000; color: #f2f6ff;
    display: grid; place-content: center; justify-items: center; gap: clamp(14px, 2.4vh, 26px);
    padding: 16px; text-align: center; font-family: Michroma, system-ui, sans-serif;
    transition: opacity 0.9s ease; user-select: none; -webkit-user-select: none; touch-action: none;
  }
  .estreno-dvd.fuera { opacity: 0; pointer-events: none; }
  .estreno-dvd-titulo { margin: 0; font-weight: 400; font-size: clamp(13px, 2.4vw, 24px); letter-spacing: 0.34em;
    padding-left: 0.34em; }
  .estreno-dvd-reloj { margin: 0; font-size: clamp(46px, 13vw, 150px); letter-spacing: 0.04em;
    font-variant-numeric: tabular-nums; text-shadow: 0 0 28px rgba(95, 200, 255, 0.35); }
  .estreno-dvd-reloj span + span::before { content: ':'; opacity: 0.55; }
  .estreno-dvd-hora { margin: 0; font-size: clamp(10px, 1.4vw, 13px); letter-spacing: 0.4em; padding-left: 0.4em;
    color: rgba(242, 246, 255, 0.45); }
  @media (prefers-reduced-motion: reduce) { .estreno-dvd { transition: none; } }
`;function o(){let e=document.createElement(`style`);e.textContent=a,document.head.append(e);let t=document.createElement(`section`);return t.className=`estreno-dvd`,t.setAttribute(`aria-labelledby`,`estreno-dvd-titulo`),t.innerHTML=`
    <h1 id="estreno-dvd-titulo" class="estreno-dvd-titulo">DVD MIXTAPE DROPS IN</h1>
    <p class="estreno-dvd-reloj" role="timer" aria-live="off"><span data-parte="h"></span><span data-parte="m"></span><span data-parte="s"></span></p>
    <p class="estreno-dvd-hora">HOY · 20:00</p>`,document.body.append(t),{caja:t,estilo:e}}function s(e,t){let n=Math.max(0,Math.ceil(t/1e3)),i={h:Math.floor(n/3600),m:Math.floor(n%3600/60),s:n%60},a=e.querySelector(`.estreno-dvd-reloj`);for(let[e,t]of Object.entries(i))a.querySelector(`[data-parte="${e}"]`).textContent=r(t);a.setAttribute(`aria-label`,`Faltan ${i.h} horas, ${i.m} minutos y ${i.s} segundos`)}var c=e=>{e.stopImmediatePropagation(),e.key!==`Tab`&&e.preventDefault()};async function l(){if(Date.now()>=e+6e4)return;let{caja:t,estilo:r}=o();document.addEventListener(`keydown`,c,!0),s(t,e-n()),await i(),await new Promise(r=>{let i=()=>{let a=e-n();s(t,a),a<=0?r():setTimeout(i,Math.min(1e3,a%1e3+5))};i()}),document.removeEventListener(`keydown`,c,!0),t.classList.add(`fuera`),setTimeout(()=>{t.remove(),r.remove()},1e3)}var u=`https://sevsevillano.com`,d=`/sevsevillano`;async function f(){if(location.hostname===new URL(`https://sevsevillano.com`).hostname)return;let e=new URLSearchParams(location.search);if(e.has(`desde`)||e.has(`espejo`))return;let t=new AbortController,n=setTimeout(()=>t.abort(),3500);try{await fetch(`${u}/favicon.svg?ping=${Date.now()}`,{mode:`no-cors`,cache:`no-store`,signal:t.signal}),clearTimeout(n);let e=location.pathname.startsWith(d)&&location.pathname.slice(13)||`/`;location.replace(`${u}${e}${location.search}${location.hash}`),await new Promise(()=>{})}catch{clearTimeout(n)}}function p(){document.documentElement.classList.add(`espejo`);let e=document.createElement(`style`);e.textContent=`
    html.espejo [data-formato="wav"], html.espejo .mixtape-wav { display: none !important; }
    .aviso-espejo { position: fixed; z-index: 2147482000; left: 50%; top: max(8px, env(safe-area-inset-top));
      transform: translateX(-50%); max-width: calc(100% - 32px); padding: 7px 14px; border-radius: 3px;
      background: rgba(8, 10, 20, 0.82); border: 1px solid rgba(255, 196, 90, 0.55); color: #ffe2a8;
      font: 11px/1.35 system-ui, sans-serif; letter-spacing: 0.04em; text-align: center; pointer-events: none; }
    .nota-solo-mp3 { margin: 0 0 4px; padding: 6px 10px; border: 1px solid rgba(255, 196, 90, 0.5);
      color: #ffd890; font: 11px/1.35 system-ui, sans-serif; letter-spacing: 0.06em; }
  `,document.head.append(e);let t=document.createElement(`p`);t.className=`aviso-espejo`,t.setAttribute(`role`,`status`),t.textContent=`Estamos teniendo dificultades con el servidor: por ahora solo se puede descargar en MP3.`,document.body.append(t);for(let e of[`#ficha-formatos`,`#pack`,`#mixtape`]){let t=document.querySelector(e);if(!t)continue;let n=document.createElement(`p`);n.className=`nota-solo-mp3`,n.textContent=`Por el momento solo está disponible en MP3.`;let r=t.querySelector(`h2`);r?r.after(n):t.prepend(n)}}function m(e=`./`){}export{l as i,f as n,m as r,p as t};