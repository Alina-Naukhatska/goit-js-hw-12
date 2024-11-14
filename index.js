import{a as m,S as g,i as a}from"./assets/vendor-pJyzcLlr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const h="46876672-e8b342777c96e71d5bef3ef8d",y="https://pixabay.com/api/";async function p(t,r){return(await m.get(y,{params:{key:h,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data.hits}function v(){const t=document.getElementById("gallery");t.innerHTML=""}function L(t){const r=document.getElementById("gallery"),s=t.map(b).join("");r.insertAdjacentHTML("beforeend",s)}function b({likes:t,views:r,comments:s,downloads:n,webformatURL:e,largeImageURL:i}){return`
    <li class="gallery-item">
      <a href="${i}">
        <img src="${e}" alt="Image" class="gallery-image">
      </a>
      <div class="info-box">
        <div class="info-box-header">
          <div>Likes</div>
          <div>Views</div>
          <div>Comments</div>
          <div>Downloads</div>
        </div>
        <div class="info-box-values">
          <div>${t}</div>
          <div>${r}</div>
          <div>${s}</div>
          <div>${n}</div>
        </div>
      </div>
    </li>
  `}let E=new g(".gallery a");const w=document.getElementById("search-form"),o=document.getElementById("load-more");let c="",d=1,f=0;w.addEventListener("submit",t=>{if(t.preventDefault(),c=t.target.elements.query.value.trim(),!c){a.error({message:"Please enter a search term."});return}I(),u()});o.addEventListener("click",()=>{d+=1,u(!0)});function I(){d=1,f=0,v(),o.classList.add("hidden")}async function u(t=!1){try{const r=await p(c,d);r.length===0&&!t?(a.warning({message:"No images found. Please try a different query."}),o.classList.add("hidden")):(L(r),E.refresh(),f+=r.length,r.length<15?(a.info({message:"You've reached the end of search results."}),o.classList.add("hidden")):o.classList.remove("hidden"),t&&P())}catch(r){console.error("Error fetching images:",r),a.error({message:"An error occurred while fetching images. Please try again later."})}}function P(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
