var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,l=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))r.call(t,a)&&s(e,a,t[a]);return e},i=(e,o)=>t(e,a(o));import{F as m,g as c,W as d,u,R as p,X as v,Y as f,Z as g,$ as y,a0 as x,a1 as b,a2 as k}from"./vendor.3b6eeff8.js";import{u as h}from"./index.91b4841f.js";import{u as E}from"./index.esm.b855605a.js";function I(e){return m.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},e),m.exports.createElement("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}))}const N=c`
  mutation LikePost($id: ID!) {
    likePost(idPost: $id) {
      id
      authorId
      likeCount
      isUserLiked
    }
  }
`,C=c`
  mutation LikePost($id: ID!) {
    unLikePost(idPost: $id) {
      id
      authorId
      likeCount
      isUserLiked
    }
  }
`,w=c`
  query CommentById(
    $postId: ID!
    $commentId: ID
    $first: Float
    $after: String
  ) {
    comments: commentsById(
      first: $first
      postId: $postId
      commentId: $commentId
      after: $after
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          id
          text
          createdAt
          isUserLiked
          media
          likeCount
          commentCount
          postBelongId
          commentBelongId
          user {
            avatar
            firstName
            lastName
          }
        }
      }
    }
  }
`,P=({postId:e,commentId:t}={})=>u(w,{variables:{postId:e,commentId:t,first:1},returnPartialData:!0}),O=c`
  mutation CreateComment($comment: CreateCommentInput!) {
    createComment(createCommentInput: $comment) {
      id
      text
      createdAt
      media
      likeCount
      commentCount
      postBelongId
      commentBelongId
      user {
        avatar
        firstName
        lastName
      }
    }
  }
`,$=({postId:e,commentId:t})=>{var a;const{data:o}=h(),{register:n,handleSubmit:r}=E(),[s]=d(O,{update(e,{data:{createComment:t}}){console.log(null==t?void 0:t.postBelongId,"sfsf",null==t?void 0:t.commentBelongId);const{comments:a}=e.readQuery({query:w,variables:{postId:null==t?void 0:t.postBelongId,commentId:(null==t?void 0:t.commentBelongId)||void 0}});console.log(a),e.writeQuery({query:w,variables:{postId:null==t?void 0:t.postBelongId,commentId:(null==t?void 0:t.commentBelongId)||void 0},data:{comments:i(l({},a),{edges:[{__typename:"CommentEdge",cursor:t.id,node:l({},t)},...a.edges]})}})}});return p.createElement("form",{className:"flex items-center space-x-2",onSubmit:r((a=>{var n,r;s({variables:{comment:i(l({},a),{postBelongId:e,commentBelongId:t})},optimisticResponse:{createComment:i(l({id:"new"},a),{postBelongId:e,commentBelongId:t,createdAt:Date.now(),user:{avatar:null==(n=null==o?void 0:o.user)?void 0:n.avatar,lastName:null==(r=null==o?void 0:o.user)?void 0:r.lastName,firstName:0},media:[],likeCount:0,__typename:"Comment",isCreating:!0})}})}))},p.createElement("img",{src:null==(a=null==o?void 0:o.user)?void 0:a.avatar,alt:"",className:"w-8 h-8 rounded-full"}),p.createElement("input",l({type:"text",className:"flex-auto w-full bg-transparent bg-gray-100 border-none rounded-lg dark:bg-gray-800",placeholder:"Write your comment..."},n("text"))))};var j,L=(j=function(e,t){return(j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}j(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),_=function(){return(_=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dom=null,t}return L(t,e),t.prototype.componentDidMount=function(){this.renderTimeAgo()},t.prototype.componentDidUpdate=function(){this.renderTimeAgo()},t.prototype.renderTimeAgo=function(){var e,t=this.props,a=t.live,o=t.datetime,n=t.locale,r=t.opts;v(this.dom),!1!==a&&(this.dom.setAttribute("datetime",""+((e=o)instanceof Date?e.getTime():e)),f(this.dom,n,r))},t.prototype.componentWillUnmount=function(){v(this.dom)},t.prototype.render=function(){var e=this,t=this.props,a=t.datetime;t.live;var o=t.locale,n=t.opts,r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a}(t,["datetime","live","locale","opts"]);return m.exports.createElement("time",_({ref:function(t){e.dom=t}},r),g(a,o,n))},t.defaultProps={live:!0,className:""},t}(m.exports.Component);const D=c`
  query GetMorePostComment($id: ID!, $after: String) {
    post(id: $id) {
      id
      commentCount
      likeCount
      comments(first: 10, after: $after) {
        edges {
          cursor
          node {
            id
            likeCount
            createdAt
            text
            media
            user {
              avatar
              firstName
              lastName
              id
            }
          }
        }
      }
    }
  }
`,U=c`
  mutation LikePost($id: ID!) {
    likeComment(id: $id) {
      isUserLiked
      id
      likeCount
    }
  }
`,A=c`
  mutation unlikeComment($id: ID!) {
    unlikeComment(id: $id) {
      isUserLiked
      id
      likeCount
    }
  }
`,S=({postId:e,commentId:t})=>{var a,o,n,r;const{data:s,fetchMore:m,loading:c}=P({postId:e,commentId:t}),d=null==(a=null==s?void 0:s.comments)?void 0:a.edges,{hasNextPage:u,endCursor:v}=(null==(o=null==s?void 0:s.comments)?void 0:o.pageInfo)||{};return console.log(d),!c&&(null==d?void 0:d.length)>0&&p.createElement("div",{className:"p-2 space-y-2"},p.createElement("div",{className:"space-y-1"},null==(r=null==(n=[...d])?void 0:n.reverse())?void 0:r.map((e=>{var t;return p.createElement(R,i(l({},null==e?void 0:e.node),{key:null==(t=null==e?void 0:e.node)?void 0:t.id}))}))),u&&p.createElement("button",{className:"flex items-center space-x-1 text-base font-semibold text-gray-500",onClick:()=>m({variables:{after:v,first:10}})},p.createElement(y,{className:"w-5 h-5 transform rotate-180"}),p.createElement("span",null,"See more comment")))},R=({id:e,likeCount:t,text:a,media:o,createdAt:n,user:r,postBelongId:s,commentBelongId:l,commentCount:i,isUserLiked:c})=>{console.log(c);const[u,v]=m.exports.useState(!1),[f]=d(U),[g]=d(A);return p.createElement("div",{className:"flex space-x-1 "+("new"===e?"opacity-70":"")},p.createElement("img",{src:null==r?void 0:r.avatar,alt:"",className:"w-10 h-10 rounded-full"}),p.createElement("div",{className:"flex flex-col flex-grow space-y-1"},p.createElement("div",{className:"relative self-start p-2 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-50"},p.createElement("div",{className:"font-medium"},`${(null==r?void 0:r.firstName)||""} ${r.lastName}`),p.createElement("div",null,a),t>0&&p.createElement("div",{className:"absolute flex items-center px-2 py-1 space-x-1 text-xs text-white transform translate-x-1/2 translate-y-1/2 bg-gray-600 rounded-full bottom-2 right-1"},p.createElement(I,{className:"w-4 h-4"}),p.createElement("span",null,t))),p.createElement("div",{className:"text-sm dark:text-gray-400"},p.createElement("button",{onClick:()=>{c?g({variables:{id:e},optimisticResponse:{unlikeComment:{id:e,likeCount:t--,isUserLiked:!1,__typename:"Comment"}}}):f({variables:{id:e},optimisticResponse:{likeComment:{id:e,likeCount:t++,isUserLiked:!0,__typename:"Comment"}}})},className:(c?"text-blue-600":"")+" text-sm font-semibold"},c?"Liked":"Like")," ","·"," ",p.createElement("button",{className:"text-sm font-semibold",onClick:()=>{v(!0)}},"Reply")," ","· ",p.createElement(B,{datetime:n})),!l&&p.createElement(p.Fragment,null,u&&p.createElement(S,{postId:s,commentId:e}),u&&p.createElement($,{postId:s,commentId:e}),!u&&!!i&&p.createElement("button",{className:"flex items-center space-x-1 text-base font-semibold cursor-pointer dark:text-gray-400",onClick:()=>v(!0)},p.createElement(y,{className:"w-5 h-5 transform rotate-180"}),p.createElement("span",null,i," reply")))))},M=({postId:e})=>{var t,a;const{data:o,fetchMore:n,loading:r}=P({postId:e}),s=null==(t=null==o?void 0:o.comments)?void 0:t.edges,{hasNextPage:m,endCursor:c}=(null==(a=null==o?void 0:o.comments)?void 0:a.pageInfo)||{};return p.createElement("div",{className:"p-3 space-y-2"},p.createElement($,{postId:e}),p.createElement("div",{className:"space-y-2"},null==s?void 0:s.map((e=>{var t;return p.createElement(R,i(l({},null==e?void 0:e.node),{key:null==(t=null==e?void 0:e.node)?void 0:t.id}))}))),m&&p.createElement("button",{className:"text-base font-semibold text-gray-500",onClick:()=>n({variables:{after:c,first:10}})},"More comment"))},q=({id:e,name:t="Name of user",content:a="So happy to be here",media:o=["https://picsum.photos/500/500.jpg?random=1","https://picsum.photos/500/500.jpg?random=2"],author:n={lastName:"Name of user"},likeCount:r,createdAt:s=Date.now(),isUserLiked:l,comments:i})=>{var m;const[c]=d(N),[v]=d(C),{fetchMore:f}=(e=>u(D,{variables:{id:e},skip:!0}))(e),g=null==(m=null==i?void 0:i.pageInfo)?void 0:m.endCursor;return p.createElement("div",{className:"space-y-2 bg-white rounded-lg shadow dark:bg-gray-900"},p.createElement("div",{className:"p-3 space-y-2"},p.createElement("div",{className:"flex space-x-2"},p.createElement("img",{src:(null==n?void 0:n.avatar)||"https://dummyimage.com/50x50.png",alt:"",className:"rounded-full h-[50px] w-[50px]"}),p.createElement("div",null,p.createElement("div",{className:"font-bold dark:text-gray-50"},n.lastName),p.createElement("div",{className:"text-gray-500 dark:text-gray-400"},p.createElement(B,{locale:"es",datetime:s})))),p.createElement("div",{className:"dark:text-gray-50"},a)),p.createElement("div",{className:"flex w-full space-x-1"},null==o?void 0:o.map(((e,t)=>p.createElement("div",{className:"flex-1 overflow-hidden rounded-xl",key:t},p.createElement("img",{src:e,alt:"",className:"object-cover"}))))),p.createElement("div",{className:"flex"},p.createElement("button",{onClick:()=>l?v({variables:{id:e},optimisticResponse:{unLikePost:{id:e,likeCount:r-1,isUserLiked:!1,__typename:"Post"}}}):c({variables:{id:e},optimisticResponse:{likePost:{id:e,likeCount:r+1,isUserLiked:!0,__typename:"Post"}}}),className:"flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"},l?p.createElement(I,{className:"w-6 h-6"}):p.createElement(x,{className:"w-6 h-6"})," ",p.createElement("span",{className:"text-base"},"Like")),p.createElement("button",{onClick:()=>f({variables:{after:g}}),className:"flex items-center justify-center flex-1 p-2 space-x-2 text-base text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"},p.createElement(b,{className:"w-6 h-6"}),p.createElement("span",null,"Comment")),p.createElement("div",{className:"flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"},p.createElement(k,{className:"w-6 h-6"}),p.createElement("span",null,"Share"))),p.createElement(M,{postId:e}))};export{q as P};
