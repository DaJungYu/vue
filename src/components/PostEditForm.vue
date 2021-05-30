<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <label>게시물 번호</label>
            <input type="text"
                   disabled 
                   :value="post.id"/>
            <label>게시물 생성일</label>
            <input type="text"
                   disabled 
                   :value="post.createdAt"/>
            <label>제목</label>
            <input v-model="title"  type="text" placeholder="게시물 제목을 입력해주세요."/>
            <label>내용</label>
            <textarea v-model="contents" row="5"  placeholder="게시물 내용을 입력해주세요.">
            </textarea>
            <button type="submit">수정하기</button>
            <router-link :to="{name: 'PostViewPage', params: {postId: post.id}}">취소</router-link>
        </fieldset>
    </form>
</template>

<script>
export default {
    name: 'PostEditForm',
    data(){
        return {
            title: '',
            contents: ''
        }
    },
    methods: {
        onSubmit(){
            const {title, contents} = this
            this.$emit('submit', {title, contents})
        },
    },
    props: {
        post: {
            type: Object,
            required: true,
            validator(post){
                const isValidPostId = typeof post.id === 'number'
                const isValidTitle = !!post.title && post.title.length
                const isValidContents = post.contents && post.contents.length
                return isValidPostId && isValidTitle && isValidContents
            }
        }
    },
    created(){
        this.title = this.post.title
        this.contents = this.post.contents
    }
}
</script>
