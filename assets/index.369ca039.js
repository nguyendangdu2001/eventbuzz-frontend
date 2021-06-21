var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&n(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&n(e,a,t[a]);return e},m=(e,r)=>t(e,a(r));import{g as i,W as o,F as d,R as u,L as p,V as g,J as f,a5 as x,a6 as E,e as v}from"./vendor.3b6eeff8.js";import{u as y}from"./index.91b4841f.js";import{u as h}from"./index.esm.b855605a.js";import{P as N}from"./index.eadeeb0c.js";const b=i`
  mutation ($post: CreatePostInput!) {
    createPost(createPostInput: $post) {
      authorId
      commentCount
      content
      createdAt
      eventId
      id
      isUserLiked
      likeCount
      media
    }
  }
`;var w=new Map,k=new WeakMap,P=0;function j(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(a=e.root)?(k.has(a)||(P+=1,k.set(a,P.toString())),k.get(a)):"0":e[t]);var a})).toString()}function S(e,t,a){if(void 0===a&&(a={}),!e)return function(){};var r=function(e){var t=j(e),a=w.get(t);if(!a){var r,s=new Map,l=new IntersectionObserver((function(t){t.forEach((function(t){var a,l=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=l),null==(a=s.get(t.target))||a.forEach((function(e){e(l,t)}))}))}),e);r=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:t,observer:l,elements:s},w.set(t,a)}return a}(a),s=r.id,l=r.observer,n=r.elements,c=n.get(e)||[];return n.has(e)||n.set(e,c),c.push(t),l.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(n.delete(e),l.unobserve(e)),0===n.size&&(l.disconnect(),w.delete(s))}}const O=({img:e})=>u.createElement(p,{to:`/detail/${1+Math.ceil(17*Math.random())}`,className:"flex p-3 bg-white shadow gap-x-3 rounded-2xl dark:bg-gray-900"},u.createElement("img",{src:e||"https://dummyimage.com/500x500.jpg",alt:"",className:"rounded-2xl h-80 w-80"}),u.createElement("div",{className:"flex flex-col p-5 gap-y-3"},u.createElement("div",{className:"flex gap-x-3"},u.createElement("div",{className:"p-3 text-center text-indigo-800 bg-blue-200 rounded-2xl"},u.createElement("div",{className:"font-medium"},"May"),u.createElement("div",{className:"text-3xl font-bold"},"08")),u.createElement("div",null,u.createElement("h4",{className:"text-xl font-bold dark:text-gray-50"},"SomeFestival"),u.createElement("p",{className:"mt-auto text-gray-500"},"Thu 10:00"))),u.createElement("div",{className:"flex-grow pb-3 text-gray-400 border-b border-gray-200 dark:border-gray-500"},"Rmay not be possble to squeeze mos time in the day without sacrificing sleep. So how do you achieve"),u.createElement("div",{className:"flex creater-section gap-x-3"},u.createElement("img",{src:"https://dummyimage.com/50x50.jpg",alt:"",className:"w-12 h-12 rounded-full"}),u.createElement("div",{className:"space-y-1"},u.createElement("div",{className:"font-bold name dark:text-gray-50"},"SOme oneeeee"),u.createElement("div",{className:"text-sm font-medium text-gray-400"},"Subcriver"))),u.createElement("div",{className:"flex items-center space-x-1"},u.createElement("div",{className:"flex -space-x-2"},u.createElement("img",{src:"https://i.pravatar.cc/50?u=1",alt:"",className:"w-9 h-9 p-0.5 bg-white rounded-full"}),u.createElement("img",{src:"https://i.pravatar.cc/50?u=2",alt:"",className:"w-9 h-9 p-0.5 bg-white rounded-full"}),u.createElement("img",{src:"https://i.pravatar.cc/50?u=3",alt:"",className:"w-9 h-9 p-0.5 bg-white rounded-full"}),u.createElement("img",{src:"https://i.pravatar.cc/50?u=5",alt:"",className:"w-9 h-9 p-0.5 bg-white rounded-full"}),u.createElement("img",{src:"https://i.pravatar.cc/50?u=6",alt:"",className:"w-9 h-9 p-0.5 bg-white rounded-full"})),u.createElement("div",{className:"text-sm font-medium dark:text-gray-400"},"And 3000 people"))));i`
  query GetPosts($after: String) {
    posts(first: 10, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          comments(first: 1) {
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
            edges {
              node {
                user {
                  avatar
                  firstName
                  lastName
                }
                text
              }
            }
          }
          author {
            avatar
            firstName
            lastName
            id
          }
          id
          likeCount
          content
          media
          createdAt
          commentCount
          isUserLiked
        }
      }
    }
  }
`;const I=()=>{const[e,t]=d.exports.useState(6),{ref:a,inView:r}=function(e){var t=void 0===e?{}:e,a=t.threshold,r=t.delay,s=t.trackVisibility,l=t.rootMargin,n=t.root,c=t.triggerOnce,m=t.skip,i=t.initialInView,o=d.exports.useRef(),u=d.exports.useState({inView:!!i}),p=u[0],g=u[1],f=d.exports.useCallback((function(e){void 0!==o.current&&(o.current(),o.current=void 0),m||e&&(o.current=S(e,(function(e,t){g({inView:e,entry:t}),t.isIntersecting&&c&&o.current&&(o.current(),o.current=void 0)}),{root:n,rootMargin:l,threshold:a,trackVisibility:s,delay:r}))}),[Array.isArray(a)?a.toString():a,n,l,c,m,s,r]);d.exports.useEffect((function(){o.current||!p.entry||c||m||g({inView:!!i})}));var x=[f,p.inView,p.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}({rootMargin:"100px",delay:100});return d.exports.useEffect((()=>(!0===r&&t((e=>e+6)),()=>{})),[r]),u.createElement("div",{className:"space-y-4"},[...Array(e)].map(((e,t)=>u.createElement(d.exports.Fragment,{key:t},u.createElement(O,{img:"https://picsum.photos/500/500.jpg?random="+3*t}),u.createElement(N,{img:["https://picsum.photos/500/500.jpg?random="+(3*t+1),"https://picsum.photos/500/500.jpg?random="+(3*t+2)]})))),u.createElement("div",{ref:a}))},V=()=>{const[e]=o(b,{update(e,{data:{createPost:t}}){e.modify({fields:{posts(a){if(console.log(a),!a)return;const r=e.writeFragment({data:t,fragment:i`
                fragment NewPost on Post {
                  authorId
                  commentCount
                  content
                  createdAt
                  eventId
                  id
                  isUserLiked
                  likeCount
                  media
                }
              `});return console.log(r),m(c({},a),{edges:[{__typename:"PostEdge",cursor:null==t?void 0:t.id,node:r},...a.edges]})}}})}});y();const{register:t,handleSubmit:a}=h();return u.createElement("div",{className:"w-full max-h-full px-6 py-2 space-y-4"},u.createElement("div",{className:"p-12 space-y-6 bg-white shadow dark:bg-gray-900 rounded-xl"},u.createElement("div",{className:"text-2xl font-semibold"},"Create post"),u.createElement("form",{className:"flex space-x-2",onSubmit:a((t=>{e({variables:{post:t}})}))},u.createElement("textarea",m(c({type:"text",name:""},t("content")),{className:"flex-auto font-medium placeholder-gray-400 bg-gray-100 border-none rounded-lg dark:placeholder-gray-300",placeholder:"You want to share somthing ?"}))),u.createElement("div",{className:"flex justify-between"},u.createElement("div",{className:"flex py-2 divide-x divide-gray-300"},u.createElement("div",{className:"flex px-2 py-2 space-x-2 font-medium dark:text-gray-400"},u.createElement(g,{className:"w-6 h-6"}),u.createElement("span",null,"Video")),u.createElement("div",{className:"flex px-2 py-2 space-x-2 font-medium dark:text-gray-400"},u.createElement(f,{className:"w-6 h-6"}),u.createElement("span",null,"Photo"))),u.createElement("button",{type:"submit",className:"flex items-center justify-center px-8 py-3 space-x-2 text-base font-bold text-white bg-blue-500 rounded-full"},u.createElement(x,{className:"w-6 h-6 transform rotate-90"}),u.createElement("span",null,"Post")))),u.createElement(I,null))},C=()=>u.createElement("div",{className:"flex items-center gap-x-4"},u.createElement("img",{src:"http://loremflickr.com/80/80/human",alt:"",className:"w-8 h-8 rounded-full"}),u.createElement("span",{className:"font-semibold dark:text-gray-50"},"Name"),u.createElement("div",{className:"ml-auto text-sm font-medium text-gray-400"},"15 min")),A=()=>u.createElement("div",{className:"space-y-6"},u.createElement("h3",{className:"font-semibold text-gray-500 uppercase dark:text-gray-50"},"Friends"),u.createElement("div",{className:"space-y-5"},u.createElement(C,null),u.createElement(C,null),u.createElement(C,null))),M=()=>u.createElement("div",{className:"flex p-2 bg-white shadow rounded-xl gap-x-3 dark:bg-gray-900"},u.createElement("img",{src:"http://fakeimg.pl/90x90?font=museo",alt:"",className:"object-cover rounded-lg w-[90px] h-[90px]"}),u.createElement("div",{className:"space-y-1"},u.createElement("div",{className:"flex items-center gap-x-2"},u.createElement("img",{src:"http://placekitten.com/32/32",alt:"",className:"rounded-full"}),u.createElement("span",{className:"dark:text-gray-400"},"Name of inviter")),u.createElement("div",{className:"font-semibold dark:text-gray-50"},"Name of Event"),u.createElement("div",{className:"text-sm font-medium dark:text-gray-300"},"Saturday, Sep 14, 2019 at 20:30 PM"),u.createElement("div",{className:"dark:text-gray-400"},"Some where"))),F=()=>u.createElement("div",{className:"space-y-6"},u.createElement("h3",{className:"font-semibold text-gray-500 uppercase dark:text-gray-50"},"Invitation"),u.createElement("div",{className:"space-y-5"},u.createElement(M,null),u.createElement(M,null),u.createElement(M,null))),R=()=>u.createElement("div",{className:"min-h-full p-6 bg-gray-100 space-y-7 dark:bg-transparent"},u.createElement(F,null),u.createElement(A,null)),$=()=>u.createElement("div",{className:"p-4 space-y-2 bg-white rounded-lg shadow dark:bg-gray-900 dark:text-gray-50"},u.createElement("div",{className:"flex space-x-2"},u.createElement("img",{src:"https://dummyimage.com/50x50.png",alt:"",className:"rounded-full"}),u.createElement("div",null,u.createElement("span",{className:"font-semibold"},"Someone")," want to be your friend")),u.createElement("div",{className:"flex items-center space-x-3"},u.createElement("div",{className:"flex-auto p-3 font-semibold text-center text-white bg-green-500 rounded-lg dark:bg-green-800"},"Accept"),u.createElement("div",{className:"flex justify-center flex-auto h-full p-3 rounded-lg ring-2 ring-red-500"},u.createElement(E,{className:"flex w-6 h-6"})))),L=()=>u.createElement("div",{className:"space-y-6"},u.createElement("h3",{className:"font-semibold text-gray-500 uppercase dark:text-gray-50"},"Friend Request"),u.createElement("div",{className:"space-y-3"},[...Array(3)].map(((e,t)=>u.createElement($,{key:t}))))),q=()=>u.createElement("div",{className:"flex gap-x-2 py-2.5 first:pt-0"},u.createElement("img",{src:"",alt:""}),u.createElement("div",null,u.createElement("div",{className:"flex items-center gap-x-1"},u.createElement(v,{className:"w-4 h-4 dark:text-gray-300"}),u.createElement("span",{className:"text-sm dark:text-gray-300"},"Some where")),u.createElement("div",{className:"font-bold line-clamp-1 dark:text-gray-50"},"SOme event"),u.createElement("div",{className:"capitalize dark:text-gray-200"},"in 2 days"))),z=()=>u.createElement("div",{className:"space-y-6"},u.createElement("h3",{className:"font-semibold text-gray-500 uppercase dark:text-gray-50"},"Recent Event"),u.createElement("div",{className:"divide-y divide-gray-500 "},[...Array(3)].map(((e,t)=>u.createElement(q,{key:t}))))),U=()=>u.createElement("div",{className:"min-h-full p-6 bg-gray-100 space-y-7 dark:bg-transparent"},u.createElement(z,null),u.createElement(L,null));export default()=>u.createElement("div",{className:"grid w-full grid-cols-12"},u.createElement("div",{className:"col-span-3"},u.createElement("div",{className:"sticky top-[88px] min-h-[calc(100vh-88px)] max-h-0"},u.createElement("div",{className:"absolute inset-0"},u.createElement(R,null)))),u.createElement("div",{className:"col-span-6"},u.createElement(V,null)),u.createElement("div",{className:"col-span-3"},u.createElement("div",{className:"sticky top-[88px] min-h-[calc(100vh-88px)] max-h-0"},u.createElement("div",{className:"absolute inset-0"},u.createElement(U,null)))));
