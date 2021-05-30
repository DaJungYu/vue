<template>
    <div class="post-view-page">
        <post-view v-if="post" :post="post"/>
        <p v-else>게시글 불러오는 중...</p>
        <!-- <div class="post-view">
            <div>
                <h1>게시물 제목</h1>
                <span>게시물 번호 1</span>
                <strong>홍길동, 2020-06-27 09:00</strong>
            </div>
            <p>게시물 콘텐츠 내용</p>
        </div> -->
        <router-link :to="{name:'PostEditPage',params:{postId}}">수정</router-link>
        <button @click="onDelete">삭제</button>
        <router-link :to="{name:'PostListPage' }">목록</router-link>
        <comment-list v-if="post" :comments="post.comments"/>
        <comment-form @submit="onCommentSubmit"/>
    </div>
</template>

<script>
import {maptGetters,mapState,mapActions, mapGetters} from 'vuex'
import PostView from '@/components/PostView';
import CommentList from '@/components/CommentList.vue';
import CommentForm from '@/components/CommentForm.vue';

export default {
    name: 'PostViewPage',
    components: {PostView,CommentList,CommentForm},
    methods: {
        ...mapActions(['fetchPost', 'createComment'
        ]),
        onCommentSubmit(comment){
            if(!this.isAuthorized){
                alert('로그인이 필요합니다!')
                this.$router.push({name: 'Signin'})
            }
            else{
                this.createComment(comment)
                    .then(()=> {
                        alert('댓글이 성공적으로 작성되었습니다.')
                    })
                    .catch(err => {
                        alert(err.response.data.msg)
                    })
            }

        },
        onDelete(){
            const{id} = this.post
             api.delete(`/posts/${id}`)
                .then(res => {
                    alert('게시물이 성공적으로 삭제되었습니다.')
                    this.$router.push({name: 'PostListPage'})
                })
                .catch(err => {
                    if(err.response.status === 401){
                        alert('로그인이 필요합니다.')
                        this.$router.push({name: 'Signin'})
                    }
                    else{
                        alert(err.response.data.msg)
                    }
                })
        }

    },
    props:{
        postId:{
            type:String,
            required: true
        }
    },
    computed:{
        ...mapState(['post']),
        ...mapGetters([
            'isAuthorized'
        ]),
    },
    created(){
        this.fetchPost(`${this.postId}`)
            .catch(err => {
                alert(err.response.data.msg);
                this.$router.back()
            })
    },
}
   
</script>
