var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{P as m}from"./index.eadeeb0c.js";import{g as n,u as o,b as d,R as i}from"./vendor.3b6eeff8.js";import{E as u}from"./index.de8ac30e.js";import"./index.91b4841f.js";import"./index.esm.b855605a.js";import"./UploadIcon.fc9fb733.js";const v=n`
  query GetUserPost($after: String, $userId: ID!) {
    userPosts(userId: $userId, first: 10, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          author {
            avatar
            lastName
            firstName
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
`;export default()=>{var e;const n=d((e=>{var t,a;return null==(a=null==(t=e.userStatus)?void 0:t.userInfo)?void 0:a.id})),{data:p}=(f=n,console.log(f),o(v,{variables:{userId:f}}));var f;const x=null==(e=null==p?void 0:p.userPosts)?void 0:e.edges;return i.createElement("div",{className:"space-y-2"},null==x?void 0:x.map(((e,n)=>{var o,d,u,v;return i.createElement("div",{className:"flex",key:null==(o=null==e?void 0:e.node)?void 0:o.id},i.createElement("div",{className:"w-1/4"}),i.createElement("div",{className:"w-3/4 px-3"},i.createElement(m,(u=((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&c(e,a,t[a]);return e})({},e.node),v={key:null==(d=e.node)?void 0:d.id},t(u,a(v))))))})),i.createElement("div",{className:"flex"},i.createElement("div",{className:"w-1/4"},i.createElement(u,null)),i.createElement("div",{className:"w-3/4 px-3"},i.createElement("div",{className:"space-y-2"},i.createElement("div",{className:"p-2 space-y-2"},i.createElement("div",{className:"flex space-x-1"},i.createElement("img",{src:"https://dummyimage.com/50x50.png",alt:"",className:"rounded-full"}),i.createElement("div",null,i.createElement("div",{className:"font-bold dark:text-gray-50"},"Name of user"),i.createElement("div",{className:"text-gray-500 dark:text-gray-400"},"Day"))),i.createElement("div",{className:"dark:text-gray-50"},"So happy to be here")),i.createElement("div",{className:"flex w-full space-x-1"},i.createElement("div",{className:"flex-1 overflow-hidden rounded-xl"},i.createElement("img",{src:"https://dummyimage.com/500x500.png",alt:"",className:"object-cover"})),i.createElement("div",{className:"flex-1 object-cover overflow-hidden rounded-xl"},i.createElement("img",{src:"https://dummyimage.com/500x500.png",alt:"",className:"object-cover"}))),i.createElement("div",{className:"flex"},i.createElement("div",{className:"flex-1 p-2 text-center dark:text-gray-50"},"Like"),i.createElement("div",{className:"flex-1 p-2 text-center dark:text-gray-50"},"Comment"),i.createElement("div",{className:"flex-1 p-2 text-center dark:text-gray-50"},"Share"))))))};
