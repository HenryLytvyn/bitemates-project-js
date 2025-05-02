import{A as I,a as P,i as m,S as B}from"./assets/vendor-vFHD_W4z.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const O=document.querySelector(".burger-btn"),a=document.querySelector(".mobile-menu"),T=document.querySelector(".mobile-menu-close"),M=document.querySelectorAll(".mobile-menu-list a");O.addEventListener("click",()=>{a.classList.remove("visually-hidden"),document.body.classList.add("no-scroll"),setTimeout(()=>{a.classList.add("active")},10)});T.addEventListener("click",()=>{a.classList.remove("active"),setTimeout(()=>{a.classList.add("visually-hidden")},900),document.body.classList.remove("no-scroll")});M.forEach(t=>{t.addEventListener("click",()=>{a.classList.add("visually-hidden"),setTimeout(()=>{a.classList.add("visually-hidden")},900),document.body.classList.remove("no-scroll")})});const $=document.querySelectorAll(".marquee");$.forEach(t=>{t.innerHTML+=t.innerHTML});const q="/bitemates-project-js/assets/power_pulse-BgjLBqjJ.jpg",C="/bitemates-project-js/assets/power_pulse_x2-Ppn17XRL.jpg",N="/bitemates-project-js/assets/mimino-CkslG5LS.jpg",R="/bitemates-project-js/assets/mimino_x2-DbeI2toA.jpg",J="/bitemates-project-js/assets/vyshyvanka-UlcVfbNV.jpg",A="/bitemates-project-js/assets/vyshyvanka_x2-DiDICNCc.jpg",H="/bitemates-project-js/assets/chego_jewelry-CITsuXea.jpg",D="/bitemates-project-js/assets/chego_jewelry_x2-B8ygxpnb.jpg",G="/bitemates-project-js/assets/energy_flow-Zbn7jXAI.jpg",V="/bitemates-project-js/assets/energy_flow_x2-IXkVHgUv.jpg",Z="/bitemates-project-js/assets/fruitbox-BOuuMRoQ.jpg",W="/bitemates-project-js/assets/fruitbox_x2-DilK7Izj.jpg",F="/bitemates-project-js/assets/starlight_studio-OG2NcmAD.jpg",z="/bitemates-project-js/assets/starlight_studio_x2-Cy7aUKve.jpg",y="/bitemates-project-js/assets/sprite-NSoCJ2e1.svg#arrow-visit-btn",v=[{original:q,originZoom:C,description:"Power pulse webservice",technologis:"React, JavaScript, Node JS, Git",nameOfProject:"Power pulse webservice",link:"https://github.com/HenryLytvyn/bitemates-project-js"},{original:N,originZoom:R,description:"Mimino website",technologis:"React, JavaScript, Node JS, Git",nameOfProject:"Mimino website",link:"https://github.com/HenryLytvyn/bitemates-project-js"},{original:J,originZoom:A,description:"Vyshyvanka vibes Landing Page",technologis:"React, JavaScript, Node JS, Git",nameOfProject:"Vyshyvanka vibes Landing Page",link:"https://github.com/HenryLytvyn/bitemates-project-js"},{original:H,originZoom:D,description:"Chego jewelry website",technologis:"React, JavaScript, Node JS, Git",nameOfProject:"Chego jewelry website",link:"https://github.com/HenryLytvyn/bitemates-project-js"},{original:G,originZoom:V,description:"Energy flow webservice ",technologis:"React, JavaScript, Node JS, Git",nameOfProject:"Energy flow webservice ",link:"https://github.com/HenryLytvyn/bitemates-project-js"},{original:Z,originZoom:W,description:"Fruitbox online store",technologis:"React, JavaScript, Node JS, Git",nameOfProject:"Fruitbox online store",link:"https://github.com/HenryLytvyn/bitemates-project-js"},{original:F,originZoom:z,description:"Starlight studio landing page",technologis:"React, JavaScript, Node JS, Git",nameOfProject:"Starlight studio landing page",link:"https://github.com/HenryLytvyn/bitemates-project-js"}],S=document.querySelector(".btn_load_more"),E=document.querySelector(".list");let c=0;const f=3,U=t=>t.map(e=>` <li class="item_list">
        <img
          class="item_img"
          alt="${e.description}"
          src="${e.original}"
          srcset="${e.originZoom}"
        />
        <p class="item_text">${e.technologis}</p>
        <div class="div_tablet_desktop_vision">
          <h3 class="item_h3">${e.nameOfProject}</h3>
          <button class="btn_visit tablet_desktop_vision" type="button" data-link="${e.link}">
            VISIT<svg width="18" height="18" class="item_svg">
              <use href="${y}"></use>
            </svg>
          </button>
        </div>
        <div class="item_div_link mobile-only">
          <button class="btn_visit" type="button" data-link="${e.link}">
            VISIT<svg width="18" height="18" class="item_svg">
              <use href="${y}"></use>
            </svg>
          </button>
        </div>
      </li>
`).join("");function X(){const t=v.slice(c,c+f);E.insertAdjacentHTML("beforeend",U(t)),c+=f,c>=v.length&&(S.style.display="none")}S.addEventListener("click",X);E.addEventListener("click",t=>{const e=t.target.closest(".btn_visit");if(e){const i=e.dataset.link;i&&window.open(i,"_blank")}});const K=[{info:"What programming language are most often used in your project?",more:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{info:"What are the deadlines for the project?",more:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{info:"What payment methods do you accept?",more:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{info:"How can I contact you?",more:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{info:"Do you provide advice or support?",more:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{info:"What does the process of developing a software product look like from idea to implementation?",more:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],Q={duration:300,showMultiple:!1,openOnInit:[0]},Y=(t,e)=>`

  <li class="ac">
    <h2 class="ac-header">
      <button
        class="ac-trigger"
        type="button"
        id="trigger-${e}"
        aria-controls="panel-${e}"
        aria-expanded="${e===0}"
      >
        ${t.info}
        <span class="arrow" aria-hidden="true"></span>
      </button>
    </h2>
    <div
      class="ac-panel"
      id="panel-${e}"
      role="region"
      aria-labelledby="trigger-${e}"
    >
      <p class="ac-text">${t.more}</p>
    </div>
  </li>
`,b=()=>{const t=document.querySelector(".accordion-container");t&&(t.innerHTML=K.map(Y).join(""),new I(".accordion-container",Q))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();const ee="https://portfolio-js.b.goit.study/api/reviews",p=document.querySelector(".reviews-list-js"),j=document.querySelector(".reviews-placeholder-js"),w=document.querySelector(".prev-btn-js"),L=document.querySelector(".next-btn-js");async function te(){try{const{data:t}=await P.get(ee);if(!t.length){j.classList.remove("visually-hidden");return}const e=t.map(({avatar_url:i,author:n,review:s})=>`
        <li class="swiper-slide review-item">
          <div class="review-text-wrap">
            <p class="review-text">${s}</p> 
          </div>
          <div class="review-author-info">
              <img class="review-author-img" src="${i}" width="40" heigh="40" alt="${n}" />
              <p class="reviewer-name">${n}</p>
          </div>
        </li>`).join("");p.innerHTML=e,se()}catch{m.error({message:"Not found",position:"topRight"}),j.classList.remove("visually-hidden")}}function se(){new B(".reviews-slider-js",{slidesPerView:1,spaceBetween:16,loop:!1,speed:500,navigation:{prevEl:".prev-btn-js",nextEl:".next-btn-js"},keyboard:{enabled:!0},breakpoints:{1280:{slidesPerView:2,slidesPerGroup:1,spaceBetween:32}},on:{reachBeginning(){w.disabled=!0},fromEdge(){w.disabled=!1,L.disabled=!1},reachEnd(){L.disabled=!0}}})}function oe(){p.addEventListener("click",t=>{if(window.innerWidth>=1280)return;const e=t.target.closest(".review-item");e&&e.classList.toggle("is-expanded")})}te().then(oe);p.addEventListener("click",t=>{if(window.innerWidth>=1280)return;const e=t.target.closest(".review-item"),i=t.target.closest(".review-text-wrap");e&&!i&&e.classList.toggle("is-expanded")});const l=document.getElementById("email"),_=document.getElementById("email-error"),k=document.getElementById("success-icon");l.addEventListener("input",function(){/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(l.value.trim())?(l.classList.remove("invalid"),_.hidden=!0,k.classList.add("show")):(l.classList.add("invalid"),_.hidden=!1,k.classList.remove("show"))});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("contactForm"),e=document.getElementById("modalBackdrop"),i=document.getElementById("modalCloseBtn");function n(){e.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function s(){e.classList.add("is-hidden"),document.body.style.overflow=""}i.addEventListener("click",s),e.addEventListener("click",o=>{o.target===e&&s()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&s()}),t.addEventListener("submit",async o=>{o.preventDefault();const r=t.elements.email.value.trim(),g=t.elements.message.value.trim();if(!r||!g){m.warning({title:"Warning",message:"Please fill in the required fields.",position:"topRight"});return}const x={email:r,comment:g};try{if(!(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)})).ok)throw new Error("Something went wrong when submitting the application");n(),t.reset()}catch(h){m.error({title:"Error",message:h.message||"An error occurred. Try again!",position:"topRight"})}})});const d=document.querySelector("#theme-toggle-js"),u=document.body;d.addEventListener("change",()=>{d.checked?(u.classList.add("dark"),localStorage.setItem("theme","dark")):(u.classList.remove("dark"),localStorage.setItem("theme","light")),document.body.classList.toggle("dark",d.checked)});const ie=localStorage.getItem("theme");ie==="dark"&&(u.classList.add("dark"),d.checked=!0);
//# sourceMappingURL=index.js.map
