import{F as e}from"./vendor.b7c2e3e2.js";function t(t){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"}))}function r(t){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}))}function a(t){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}))}function n(t){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}))}function s(t){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}))}function l(t){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},t),e.createElement("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}))}const o=({name:a="Name of user",text:s="So happy to be here",img:o=["https://picsum.photos/500/500.jpg?random=1","https://picsum.photos/500/500.jpg?random=2"]})=>{const[c,m]=e.useState(!1);return e.createElement("div",{className:"space-y-2"},e.createElement("div",{className:"p-2 space-y-2"},e.createElement("div",{className:"flex space-x-1"},e.createElement("img",{src:"https://dummyimage.com/50x50.png",alt:"",className:"rounded-full"}),e.createElement("div",null,e.createElement("div",{className:"font-bold dark:text-gray-50"},a),e.createElement("div",{className:"text-gray-500 dark:text-gray-400"},"Day"))),e.createElement("div",{className:"dark:text-gray-50"},s)),e.createElement("div",{className:"flex w-full space-x-1"},null==o?void 0:o.map(((t,r)=>e.createElement("div",{className:"flex-1 overflow-hidden rounded-xl",key:r},e.createElement("img",{src:t,alt:"",className:"object-cover"}))))),e.createElement("div",{className:"flex"},e.createElement("button",{onClick:()=>m(!c),className:"flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"},c?e.createElement(l,{className:"w-6 h-6"}):e.createElement(r,{className:"w-6 h-6"})," ",e.createElement("span",{className:"text-base"},"Like")),e.createElement("div",{className:"flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"},e.createElement(t,{className:"w-6 h-6"}),e.createElement("span",null,"Comment")),e.createElement("div",{className:"flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"},e.createElement(n,{className:"w-6 h-6"}),e.createElement("span",null,"Share"))))};export{a as P,s as V,o as a};