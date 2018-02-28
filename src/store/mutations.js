export default {
    setLoginIn: state=>{
        state.isLogin = true;
    },
    setLoginOut: state=>{
        state.isLogin = false;
    },
    setPage: (state, next)=>{
        state.curPage = next;
    },
    setChapter: (state, next)=>{
        state.Chapter = next;
    }
}
