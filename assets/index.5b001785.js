var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;import{P as i}from"./index.291695de.js";import{g as l,u as d,Z as u,R as c}from"./vendor.18683b1f.js";import"./index.46c51c71.js";import"./index.esm.f581a082.js";const m=l`
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
`,f=()=>{var e;const{id:l}=u(),{data:f}=(p=l,console.log(p),d(m,{variables:{userId:p}}));var p;const v=null==(e=null==f?void 0:f.userPosts)?void 0:e.edges;return c.createElement("div",{className:"space-y-2"},null==v?void 0:v.map(((e,l)=>{var d,u,m,f;return c.createElement("div",{className:"flex",key:null==(d=null==e?void 0:e.node)?void 0:d.id},c.createElement("div",{className:"w-full"},c.createElement(i,(m=((e,r)=>{for(var t in r||(r={}))s.call(r,t)&&n(e,t,r[t]);if(a)for(var t of a(r))o.call(r,t)&&n(e,t,r[t]);return e})({},e.node),f={key:null==(u=e.node)?void 0:u.id},r(m,t(f))))))})))};export{f as default};
