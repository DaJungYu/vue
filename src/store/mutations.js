import { FETCH_POST_LIST, 
    FETCH_POST,
    SET_ACCESS_TOKEN,
    SET_MY_INFO, 
    DESTORY_ACCESS_TOKEN, 
    DESTORY_MY_INFO, 
    UPDATE_COMMENT, 
    EDIT_COMMNET, 
    DELETE_COMMENT} from './mutations-types'


import api from '@/api'
import Cookies from 'js-cookie'
//import { delete } from 'vue/types/umd'

export default{
    [FETCH_POST_LIST](state,posts){
        state.posts = posts
    },
    [FETCH_POST](state,post){
        state.post=post
    },
    [SET_ACCESS_TOKEN](state, accessToken){
        state.accessToken=accessToken
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
        Cookies.set('accessToken',accessToken)
    },
    [SET_MY_INFO](state, me){
        if(me){
            state.me=me
        }
    },
    [DESTORY_ACCESS_TOKEN](state){
        state.accessToken=''
        delete api.defaults.headers.common.Authorization
        Cookies.remove('accessToken')
    },
    [DESTORY_MY_INFO](state){
        state.me=null
    },
    [UPDATE_COMMENT](state,payload){
        state.post.common.push(payload)
    },
    [EDIT_COMMNET](state,payload){
        const {id:commentId, contents, updateAt}=payload
        const targetComment=state.post.comments.find(comment => comment.id===commentId)
        targetComment.contents=contents
        targetComment.updateAt=updateAt
    },
    [DELETE_COMMENT](state,commentId){
        const targetIndex=state.post.comments.findIndex(comment => comment.id===commentId)
        state.post.comments.splice(targetIndex,1)
    },
}