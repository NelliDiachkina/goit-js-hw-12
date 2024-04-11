import{a as S,S as v,i as P}from"./assets/vendor-f736e62a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function w(a,r,o,s,e){const t=E(a,r,o,s,e),{data:n}=await S.get(t);return n}function E(a,r,o,s,e){const t=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:e});return`${a}?${t}`}const F=new v(".gallery a",{captionsData:"alt",captionDelay:250});function C(a,r){a.insertAdjacentHTML("beforeend",$(r)),F.refresh()}function $(a){return a.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:n,downloads:f})=>` <li class="gallery-item">
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
                <p>${n}</p>
              </li>
              <li>
                <span>Downloads</span>
                <p>${f}</p>
              </li>
            </ul>
          </figcaption>
        </figure>
      </a>
    </li>`).join(" ")}const q="/goit-js-hw-12/assets/icon-error-4f06a8ee.svg",p="43191917-c04fdef32fb86ad7b3c63ee66",m="https://pixabay.com/api/";let i=1,h=15,y=null,u=null,d=null;const M=document.querySelector(".search-form"),L=document.querySelector(".gallery"),g=document.querySelector(".loader-wrapper "),c=document.querySelector(".load-more-btn");M.addEventListener("submit",D);c.addEventListener("click",T);function D(a){a.preventDefault(),L.innerHTML="",c.classList.add("is-hidden"),i=1;const r=a.currentTarget.search.value.trim();if(!r){l("Please enter a value in the field!","Error"),a.currentTarget.reset();return}g.classList.remove("is-hidden"),b(m,p,r,i,h),a.currentTarget.reset()}async function b(a,r,o,s,e){try{const t=await w(a,r,o,s,e),n=t.hits;if(n.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}y=o,u=t.totalHits,d=Math.ceil(u/e),C(L,n),d>1&&c.classList.remove("is-hidden")}catch(t){l("Error fetching data. Please try again later","Error"),console.error("Error fetching data:",t)}finally{g.classList.add("is-hidden")}}async function T(){if(i+=1,g.classList.remove("is-hidden"),await b(m,p,y,i,h),H(),i===d){c.classList.add("is-hidden"),l(`We are sorry, but you have reached the end of search results. We have only ${u} images!`,"","#6C8CFF");return}}function H(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}const I={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function l(a,r,o="#EF4040"){P.error({...I,title:r||"",message:`${a}`,backgroundColor:o,iconUrl:q})}
//# sourceMappingURL=commonHelpers.js.map
