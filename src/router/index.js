import Vue from 'vue'
import Router from 'vue-router'

import PostListPage from '@/pages/PostListPage'
import PostViewPage from '@/pages/PostViewPage'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import AppHeader from '@/components/AppHeader'
import PostCreatePage from '@/pages/PostCreatePage'
import store from '@/store'
import PostEditPage from '@/pages/PostEditPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PostListPage',
      component: {
        header:AppHeader,
        default:PostListPage
      } 
    },
    {
      path: '/post:poadId',
      name: 'PostViewPage',
      component: {
        header:AppHeader,
        default:PostViewPage
      },
      props: {
        default:true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: {
        header:AppHeader,
        default: Signup
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: {
        header:AppHeader,
        default: Signin
      }
    },
    {
      path: '/post/create',
      name: 'PostCreatePage',
      component: {
        header:AppHeader,
        default: PostCreatePage
      }
    },
    {
      path: '/post/:postId/edit',
      name: 'PostEditPage',
      component: {
        header:AppHeader,
        default: PostEditPage
      },
      props: {
        default:true
        }
     }
  ],
    
//     beforEnter(to,from,next){
//       const {isAuthorized} = store.getters
//       if(!isAuthorized){
//         alert('로그인이 필요합니다.')
//         next({name:'Signin'})
//         return false
//       }
//       store.dispatch('fetchPost',to.params.postId)
//         .then(() => {
//           const post = store.state.post
//             const isAuthor = post.user.id === store.state.me.id
//             if(isAuthor){
//               next()
//             }
//             else{
//               alert('게시물 작성자만 게시물을 수정할 수 있습니다.')
//               next(from)
//             }
//           })
//           .catch(err => {
//             alert(err.response.data.msg)
//             next(from)

//           })
//       }


  
})
