import{S as f,i as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();function g(t,r,s){const o=p(t,r,s);return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>(console.log("ERROR:",e),Promise.reject(e)))}function p(t,r,s){const o=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return`${t}?${o}`}const m=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(t,r){t.innerHTML=y(r),m.refresh()}function y(t){return t.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:i,comments:a,downloads:u})=>` <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <figure class="gallery-figure">
          <img class="gallery-image" src="${r}" alt="${o}" width="360" />
          <figcaption class="gallery-figcaption">
            <ul class="gallery-text">
              <li>
                <span>Likes</span>
                <p>${e}</p>
              </li>
              <li>
                <span>Views</span>
                <p>${i}</p>
              </li>
              <li>
                <span>Comments</span>
                <p>${a}</p>
              </li>
              <li>
                <span>Downloads</span>
                <p>${u}</p>
              </li>
            </ul>
          </figcaption>
        </figure>
      </a>
    </li>`).join(" ")}const L="/goit-js-hw-12/assets/icon-error-4f06a8ee.svg",E="43191917-c04fdef32fb86ad7b3c63ee66",b="https://pixabay.com/api/",S=document.querySelector(".search-form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader-wrapper ");S.addEventListener("submit",F);function F(t){t.preventDefault(),c.innerHTML="",n.classList.remove("is-hidden");const r=t.currentTarget.search.value.trim();if(!r){l("Please enter a value in the field!","Error"),t.currentTarget.reset(),n.classList.add("is-hidden");return}g(b,E,r).then(s=>{const o=s.hits;if(o.length===0){l("Sorry, there are no images matching your search query. Please try again!"),n.classList.add("is-hidden");return}h(c,o),n.classList.add("is-hidden")}).catch(s=>{l("Error fetching data. Please try again later","Error"),console.error("Error fetching data:",s)}),t.currentTarget.reset()}const P={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function l(t,r){d.error({...P,title:r||"",message:`${t}`,backgroundColor:"#EF4040",iconUrl:L})}
//# sourceMappingURL=commonHelpers.js.map
