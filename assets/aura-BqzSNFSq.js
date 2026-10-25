var e=!1,t=null,n=null,r=null;function i(){t=document.createElement(`div`),t.className=`aura`,t.hidden=!0,t.innerHTML=`
    <div class="aura-caja panel" role="dialog" aria-modal="true" aria-labelledby="aura-titulo" aria-describedby="aura-texto">
      <h2 id="aura-titulo">ANTES DE DESCARGAR</h2>
      <p id="aura-texto">Todo es gratis. Solo te pido una cosa: sigue a Sevillano en Instagram, que así no te pierdes lo que venga.</p>
      <div class="aura-botones">
        <button type="button" data-aura="si">OK, TENGO AURA</button>
        <button type="button" data-aura="no">NO TENGO NADA DE AURA</button>
      </div>
    </div>`,document.body.append(t),t.addEventListener(`click`,e=>{let n=e.target.closest(`[data-aura]`);n?a(n.dataset.aura===`si`):e.target===t&&a(!1)}),t.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&a(!1),e.key===`Tab`){let n=[...t.querySelectorAll(`button`)],r=n.indexOf(document.activeElement);e.preventDefault(),n[(r+(e.shiftKey?n.length-1:1))%n.length].focus()}})}function a(i){t.hidden=!0;let a=n;n=null,r&&r.focus&&r.focus({preventScroll:!0}),i&&(e=!0,window.open(`https://www.instagram.com/sevsevillano/`,`_blank`,`noopener`),a&&a())}function o(a){if(e){a();return}t||i(),n=a,r=document.activeElement,t.hidden=!1,t.querySelector(`[data-aura="si"]`).focus({preventScroll:!0})}export{o as t};