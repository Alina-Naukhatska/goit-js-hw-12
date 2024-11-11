import{a as f,S as g,i as a}from"./assets/vendor-pJyzcLlr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const y="46876672-e8b342777c96e71d5bef3ef8d",h="https://pixabay.com/api/",p=15;async function v(e,o=1){const i=await f.get(h,{params:{key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:p}});if(i.status!==200)throw new Error("Failed to fetch images");return i.data}function L(){const e=document.getElementById("gallery");e.innerHTML=""}function b(){document.getElementById("loader").classList.remove("hidden")}function I(){document.getElementById("loader").classList.add("hidden")}function E(e){const o=document.getElementById("gallery"),i=e.map(w).join("");o.insertAdjacentHTML("beforeend",i)}function w({likes:e,views:o,comments:i,downloads:s,webformatURL:t,largeImageURL:r}){return`
    <li class="gallery-item">
      <a href="${r}">
        <img src="${t}" alt="Image" class="gallery-image">
      </a>
      <div class="info-box">
        <div class="info-box-header">
          <div>Likes</div>
          <div>Views</div>
          <div>Comments</div>
          <div>Downloads</div>
        </div>
        <div class="info-box-values">
          <div>${e}</div>
          <div>${o}</div>
          <div>${i}</div>
          <div>${s}</div>
        </div>
      </div>
    </li>
  `}let B=new g(".gallery a");const P=document.getElementById("search-form"),l=document.getElementById("load-more");let u="",n=1,c=0;P.addEventListener("submit",e=>{if(e.preventDefault(),u=e.target.elements.query.value.trim(),!u){a.error({message:"Please enter a search term."});return}S(),m()});l.addEventListener("click",m);async function m(){try{b();const e=await v(u,n);c=e.totalHits;const o=e.hits;o.length===0&&n===1?a.warning({message:"Sorry, no images found. Please try again!"}):(E(o),B.refresh(),l.classList.toggle("hidden",c<=n*15),x(),n++),n*15>=c&&(l.classList.add("hidden"),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"An error occurred while fetching images. Please try again later."})}finally{I()}}function S(){L(),n=1,l.classList.add("hidden")}function x(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
