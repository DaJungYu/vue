<template>
    <div class="post-list-page">
        <h1>포스트 게시글</h1>
        <div>
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
                    <tr v-for="post in posts" :key="post.id">
                        <td scope="col">{{post.id}}</td>
                        <td scope="col">
                            <router-link :to="{name: 'PostViewPage', params: {PostId:post.id.toString()}}">{{post.title}}</router-link>
                            [{{ post.comments.length}}]
                        </td>
                        <td scope="col">{{ post.user.name}}</td>
                        <td scope="col">{{post.createAt}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PostList',
    props: {
        posts:{
            type:Array
        }
    }
}
</script>
