import{a as E,S as v,i as w}from"./assets/vendor-f736e62a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function F(a,r,o,i,e){const t=P(a,r,o,i,e),{data:s}=await E.get(t);return s}function P(a,r,o,i,e){const t=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:e});return`${a}?${t}`}const C=new v(".gallery a",{captionsData:"alt",captionDelay:250});function $(a,r){a.insertAdjacentHTML("beforeend",q(r)),C.refresh()}function q(a){return a.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:s,downloads:S})=>` <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <figure class="gallery-figure">
          <img class="gallery-image" src="${r}" alt="${i}" width="360" />
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
                <p>${s}</p>
              </li>
              <li>
                <span>Downloads</span>
                <p>${S}</p>
              </li>
            </ul>
          </figcaption>
        </figure>
      </a>
    </li>`).join(" ")}const M="/goit-js-hw-12/assets/icon-error-4f06a8ee.svg",g="https://pixabay.com/api/",p="43191917-c04fdef32fb86ad7b3c63ee66";let l=1,m=15,h=null,u=null,d=null;const y=document.querySelector(".search-form"),L=document.querySelector(".gallery"),f=document.querySelector(".loader-wrapper "),n=document.querySelector(".load-more-btn");y.addEventListener("submit",D);n.addEventListener("click",I);async function D(a){a.preventDefault(),L.innerHTML="",n.classList.add("is-hidden"),l=1;const r=a.currentTarget.search.value.trim();if(!r){c("Please enter a value in the field!","Error"),a.currentTarget.reset();return}f.classList.remove("is-hidden"),await b(g,p,r,l,m),h=r}async function b(a,r,o,i,e){try{const t=await F(a,r,o,i,e),s=t.hits;if(s.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}u=t.totalHits,d=Math.ceil(u/e),$(L,s),d>1&&n.classList.remove("is-hidden")}catch(t){c("Error fetching data. Please try again later","Error"),console.error("Error fetching data:",t)}finally{y.reset(),f.classList.add("is-hidden")}}async function I(){if(l+=1,n.disabled=!0,f.classList.remove("is-hidden"),await b(g,p,h,l,m),H(),n.disabled=!1,l===d){n.classList.add("is-hidden"),c(`We are sorry, but you have reached the end of search results. We have only ${u} images!`,"","#6C8CFF");return}}function H(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"})}const O={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function c(a,r,o="#EF4040"){w.error({...O,title:r||"",message:`${a}`,backgroundColor:o,iconUrl:M})}
//# sourceMappingURL=commonHelpers.js.map
