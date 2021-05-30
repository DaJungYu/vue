<template>
    <div class="post-list-page">
        <h1>포스트 게시글</h1>
        <post-list :posts="posts"/>
        <router-link :to="{name: 'PostCreatePage'}">글쓰기</router-link>
        <!-- <div>
            <table>
                <colgroup>
                    <col style="width:10%;"/>
                    <col style="width:60%;"/>
                    <col style="width:10%;"/>
                    <col style="width:20%;"/>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성자</th>
                        <th scope="col">작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">1</td>
                        <td scope="col">게시물 제목[댓글수]</td>
                        <td scope="col">홍길동</td>
                        <td scope="col">2020-06-27 09:00</td>
                    </tr>
                </tbody>
            </table>
        </div> -->
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import {mapActions, mapState} from 'vuex'

export default {
    name: 'PostListPage',
    components:{
        PostList
    },
    // data(){
    //     return {
    //         posts: []
    //     }
    // },
    created(){
        // api.get('/posts')
        //     .then(res => {
        //         this.posts=res.data
        //     })
        this.fetchPostList()
    },
    methods:{
        ...mapActions([
            'fetchPostList'
        ])
    },
    computed:{
        ...mapState([
            'posts'
        ])
    }
}
</script>
