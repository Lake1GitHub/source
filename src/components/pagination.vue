<template>
    <div class='pagination'>
        <span class='lastPage'>
            <span class='lastText'> 上一页</span>
        </span>
        <span class='pageBox'>
            <a class='pagePiece' :class='{ curPage: false }'>{{firstIndex}}</a>
        </span>
        <span class='dots'>...</span>
        <span v-for='(page, index) in pages' class='pageBox'>
            <a class='pagePiece' :class='{ curPage: centerPage(index) }'>{{page}}</a>
        </span>
        <span class='dots'>...</span>
        <span class='pageBox'>
            <a class='pagePiece' :class='{ curPage: false }'>{{lastIndex}}</a>
        </span>
        <span class='nextPage'>
            <span class='nextText'>下一页 </span>
        </span>
    </div>
</template>
<script>
import axios from 'axios'
import {mapGetters, mapMutations} from 'vuex'
import '../mock/mock_playlist.js'
export default {
    props: {
        'curPagination': Number,
        'maxPagination': Number,
        'centerCount': Number
    },
    data(){
        return {
            firstIndex: 1,
            lastIndex: 20,
            pages: [3, 4, 5, 6, 7, 8, 9],
        }
    },
    computed:{
    },
    methods:{
        centerPage(index){
            return index===Math.floor(this.centerCount/2);
        }
    },
    mounted(){
    }
}
</script>
<style lang='scss' scoped>
@import '../styles/common.scss';
@import '../styles/mixin.scss';
.pagination{
    height: 26px;
    line-height: 26px;
    text-align: center;
}
.lastPage{
    border: 1px solid lightgray;
    border-radius: 2px;
    font-size: 12px;
    text-align: center;
    padding-left: 6px;
    line-height: 24px;
    @include sprites('../assets/button.png', 0, -560px);
    @include wh(63px, 24px);
    &:hover{
        cursor: pointer;
        background-position: 0 -590px;
    }
}
.nextPage{
    border: 1px solid lightgray;
    border-radius: 2px;
    font-size: 12px;
    line-height: 24px;
    padding-right: 6px;
    text-align: center;
    @include sprites('../assets/button.png', -75px, -560px);
    @include wh(63px, 24px);
    &:hover{
        cursor: pointer;
        background-position: -75px -590px;
    }
}
.pagePiece{
    cursor: pointer;
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 2px;
    padding: 0 8px;
    height: 22px;
    line-height: 22px;
    border: 1px solid lightgray;
    border-radius: 2px;
    background-color: white;
    &:hover{
        border-color: gray;
    }
}
.curPage{
    color: white;
    cursor: default;
    @include sprites('../assets/button.png', 0, -650px);
}
.dots{
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
}
// @mixin arrow(){
//     vertical-align: middle;
//     transform: rotate(45deg);
//     @include wh(6px, 6px);
//     margin-bottom: 2px;
// }
// .arrowLeft{
//     border-left: 1px solid gray;
//     border-bottom: 1px solid gray;
//     @include arrow;
// }
// .arrowRight{
//     border-right: 1px solid gray;
//     border-top: 1px solid gray;
//     @include arrow;
// }
</style>
