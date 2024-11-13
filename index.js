import{a as g,S as h,i as n}from"./assets/vendor-DelrUssx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const y="46876672-e8b342777c96e71d5bef3ef8d",v="https://pixabay.com/api/";async function p(e,r=1){const o=await g.get(v,{params:{key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}});if(o.status!==200)throw new Error("Failed to fetch images");return{images:o.data.hits,hits:o.data.totalHits}}function L(){const e=document.getElementById("gallery");e.innerHTML=""}function b(){document.getElementById("loader").classList.remove("hidden")}function u(){document.getElementById("loader").classList.add("hidden")}function I(e){const r=document.getElementById("gallery"),o=e.map(w).join("");r.insertAdjacentHTML("beforeend",o)}function w({likes:e,views:r,comments:o,downloads:a,webformatURL:t,largeImageURL:i}){return`
    <li class="gallery-item">
      <a href="${i}">
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
          <div>${r}</div>
          <div>${o}</div>
          <div>${a}</div>
        </div>
      </div>
    </li>
  `}let E=new h(".gallery a");const B=document.getElementById("search-form"),s=document.getElementById("load-more");let d=1,c="",m=0;B.addEventListener("submit",e=>{if(e.preventDefault(),c=e.target.elements.query.value.trim(),!c){n.error({message:"Please enter a search term."});return}P(),f()});s.addEventListener("click",()=>{d+=1,f(!0)});function P(){d=1,L(),s.classList.add("hidden")}async function f(e=!1){b();try{const{images:r,hits:o}=await p(c,d);if(r.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),u(),s.classList.add("hidden");return}I(r),E.refresh(),m=o,e&&S(),d*15>=m?(n.info({message:"We're sorry, but you've reached the end of search results."}),s.classList.add("hidden")):s.classList.remove("hidden")}catch(r){console.error("Error fetching images:",r),n.error({message:"An error occurred while fetching images. Please try again later."})}finally{u()}}function S(){const{height:e}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
