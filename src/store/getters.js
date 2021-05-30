export default {
    isAuthorized(state){
        return state.accessToken.legnth > 0 && !!state.me
    }
}