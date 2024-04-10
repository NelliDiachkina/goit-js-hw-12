import{a as b,S as E,i as S}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function v(r,o,s,i,e){const t=w(r,o,s,i,e);try{const{data:a}=await b.get(t);return a}catch(a){throw console.error("Error fetching data:",a),a}}function w(r,o,s,i,e){const t=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:e});return`${r}?${t}`}const P=new E(".gallery a",{captionsData:"alt",captionDelay:250});function F(r,o){r.insertAdjacentHTML("beforeend",$(o)),P.refresh()}function $(r){return r.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:L})=>` <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <figure class="gallery-figure">
          <img class="gallery-image" src="${o}" alt="${i}" width="360" />
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
                <p>${a}</p>
              </li>
              <li>
                <span>Downloads</span>
                <p>${L}</p>
              </li>
            </ul>
          </figcaption>
        </figure>
      </a>
    </li>`).join(" ")}const C="/goit-js-hw-12/assets/icon-error-4f06a8ee.svg",g="43191917-c04fdef32fb86ad7b3c63ee66",f="https://pixabay.com/api/";let n=1,u=15,p=null,m=null;const q=document.querySelector(".search-form"),h=document.querySelector(".gallery"),d=document.querySelector(".loader-wrapper "),c=document.querySelector(".load-more-btn");q.addEventListener("submit",M);c.addEventListener("click",D);function M(r){r.preventDefault(),h.innerHTML="",c.classList.add("is-hidden"),n=1;const o=r.currentTarget.search.value.trim();if(!o){l("Please enter a value in the field!","Error"),r.currentTarget.reset();return}d.classList.remove("is-hidden"),y(f,g,o,n,u),r.currentTarget.reset()}async function y(r,o,s,i,e){try{const t=await v(r,o,s,i,e),a=t.hits;if(a.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}p=s,m=t.totalHits,F(h,a),c.classList.remove("is-hidden"),T()}catch(t){l("Error fetching data. Please try again later","Error"),console.error("Error fetching data:",t)}finally{d.classList.add("is-hidden")}}function D(){const r=Math.ceil(m/u);if(n>=r){c.classList.add("is-hidden"),l("We are sorry, but you have reached the end of search results","Error");return}n+=1,d.classList.remove("is-hidden"),y(f,g,p,n,u)}function T(){const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}const H={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function l(r,o){S.error({...H,title:o||"",message:`${r}`,backgroundColor:"#EF4040",iconUrl:C})}
//# sourceMappingURL=commonHelpers.js.map
