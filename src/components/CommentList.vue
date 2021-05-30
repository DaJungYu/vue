<template>
    <ul class="comments">
        <li v-for="comment in comments" :key="comment.id">
            <comment-item :comment="comment" @edit="onEdit" @delete="onDelete" />
            <div class="comment-item">
                <strong>{{comment.user.name}}</strong><span>{{comment.createdAt}}</span>
                <p>{{comment.contents}}</p>

            </div>
        </li>
        <li v-if="comments.legth <= 0">
            입력된 댓글이 없습니다.
        </li>
    </ul>
</template>

<script>
import {mapActions} from 'vuex'
import CommentItem from '@/components/CommentItem'
export default {
  components: { CommentItem },
    name: 'CommentList',
    components:{CommentItem},
    props:{
        comments:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    methods:{
        onEdit({id,commet}){
            this.editComment({commentId:id,comment})
                .then(res => {
                    alert('댓글이 수정되었습니다.')
                })
                .catch(err => {
                    if(err.response.status ===401){
                        alert('로그인이 필요합니다.')
                        this.$router.push({name:'Signin'})
                    }
                    else{
                        alert(err.response.data.msg)
                    }
                })
        },
        onDelete(commentId){
            this.deleteComment(commentId)
                .then(res => {
                    alert('댓글이 삭제되었습니다.')
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
        },

        ...mapActions([
            'editComment',
        ])
    }
}
</script>
