import{a as S,S as v,i as w}from"./assets/vendor-f736e62a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function P(a,r,o,s,e){const t=E(a,r,o,s,e),{data:i}=await S.get(t);return i}function E(a,r,o,s,e){const t=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:e});return`${a}?${t}`}const F=new v(".gallery a",{captionsData:"alt",captionDelay:250});function C(a,r){a.insertAdjacentHTML("beforeend",$(r)),F.refresh()}function $(a){return a.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:i,downloads:f})=>` <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <figure class="gallery-figure">
          <img class="gallery-image" src="${r}" alt="${s}" width="360" />
          <figcaption class="gallery-figcaption">
            <ul class="gallery-text">
              <li>
                <span>Likes</span>
                <p>${e}</p>
              </li>
              <li>
                <span>Views</span>
                <p>${t}</p>
              </li>
              <li>
                <span>Comments</span>
                <p>${i}</p>
              </li>
              <li>
                <span>Downloads</span>
                <p>${f}</p>
              </li>
            </ul>
          </figcaption>
        </figure>
      </a>
    </li>`).join(" ")}const q="/goit-js-hw-12/assets/icon-error-4f06a8ee.svg",p="43191917-c04fdef32fb86ad7b3c63ee66",m="https://pixabay.com/api/";let l=1,h=15,y=null,u=null,d=null;const M=document.querySelector(".search-form"),L=document.querySelector(".gallery"),g=document.querySelector(".loader-wrapper "),n=document.querySelector(".load-more-btn");M.addEventListener("submit",D);n.addEventListener("click",T);async function D(a){a.preventDefault(),L.innerHTML="",n.classList.add("is-hidden"),l=1;const r=a.currentTarget.search.value.trim();if(!r){c("Please enter a value in the field!","Error"),a.currentTarget.reset();return}g.classList.remove("is-hidden"),a.currentTarget.reset(),await b(m,p,r,l,h)}async function b(a,r,o,s,e){try{const t=await P(a,r,o,s,e),i=t.hits;if(i.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}y=o,u=t.totalHits,d=Math.ceil(u/e),C(L,i),d>1&&n.classList.remove("is-hidden")}catch(t){c("Error fetching data. Please try again later","Error"),console.error("Error fetching data:",t)}finally{g.classList.add("is-hidden")}}async function T(){if(l+=1,n.disabled=!0,g.classList.remove("is-hidden"),await b(m,p,y,l,h),H(),n.disabled=!1,l===d){n.classList.add("is-hidden"),c(`We are sorry, but you have reached the end of search results. We have only ${u} images!`,"","#6C8CFF");return}}function H(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}const I={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function c(a,r,o="#EF4040"){w.error({...I,title:r||"",message:`${a}`,backgroundColor:o,iconUrl:q})}
//# sourceMappingURL=commonHelpers.js.map
