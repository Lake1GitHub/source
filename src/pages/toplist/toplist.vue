<template>
    <div class='wrap'>
        <left-navi></left-navi>
        <article class='bfc'>
            <header>
                <span class='left titleImgBox'><img src='../../assets/toplist/biaosheng.png' /></span>
                <div class='titleBox bfc'>
                    <div class='title'>云音乐飙升榜</div>
                    <div class='lastUpdate'><i class='updateIcon'></i> 最近更新 : 01月15日<span class='updateTime'>（每天更新）</span></div>
                    <div class='listOptions'>
                        <span class='playBox'>
                            <button class='btnPlay'>
                                <i class='playIcon'></i>播放
                            </button><button class='temAdd'>
                            </button>
                        </span>
                        <button class='btnAdd'>
                            <i class='addIcon'>
                                (716015)
                            </i>
                        </button>
                        <button class='share'>
                            <i class='shareIcon'>
                                (2810)
                            </i>
                        </button>
                        <button class='download'>
                            <i class='downloadIcon'></i>
                        </button>
                        <button class='recommend'>
                            <i class='recommendIcon'></i>
                        </button>
                    </div>
                </div>
            </header>
        </article>
        <div class='clear'></div>
    </div>
</template>
<script>
import headTop from '../../components/head.vue'
import foot from '../../components/foot.vue'
import loginBox from '../../components/loginBox.vue'
import leftNavi from './leftNavi.vue'
import axios from 'axios'
import {mapGetters, mapMutations} from 'vuex'
import '../../mock/mock.js'
const path = require('path');
export default {
    data(){
        return {
        }
    },
    name: 'toplist',
    components:{
        headTop,
        foot,
        leftNavi
    },
    methods:{

    },
    mounted(){
        let self = this;
        console.log(path.resolve());
    }
}
</script>
<style lang='scss' scoped>
@import 'src/styles/common.scss';
@import 'src/styles/mixin.scss';
.wrap{
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
}
article{
    background-color: white;
    padding: 40px;
    header{
        overflow: hidden;
        .titleImgBox{
            vertical-align: middle;
            width: 150px;
            height: 150px;
            padding: 2px;
            border: 1px solid lightgray;
        }
        .titleBox{
            padding-left: 30px;
            padding-top: 10px;
        }
        .title{
            font-size: 20px;
        }
        .lastUpdate{
            height: 13px;
            line-height: 13px;
            font-size: 12px;
            margin-top: 10px;
            color: gray;
            .updateTime{
                color: gray;
            }
            .updateIcon{
                vertical-align: top;
                @include sprites('../../assets/icon.png', -70px, -140px);
                @include wh(13px, 13px);
            }
        }
        .listOptions{
            margin-top: 40px;
            button{
                vertical-align: top;
            }
            .playBox{
                vertical-align: top;
                height: 30px;
                .btnPlay{
                    box-sizing: border-box;
                    color: white;
                    padding: 5px 8px;
                    height: 30px;
                    cursor: pointer;
                    @include sprites('../../assets/button2.png', 0, -387px);
                    &:hover{
                        background-position: 0 -469px;
                        .playIcon{
                            background-position: -28px -1622px;
                        }
                    }
                    &:active{
                        background-position: 0 -551px;
                        .playIcon{
                            background-position: -56px -1622px;
                        }
                    }
                    .playIcon{
                        @include sprites('../../assets/button2.png', 0, -1622px);
                        @include wh(20px, 18px);
                    }
                }
                .temAdd{
                    vertical-align: top;
                    @include sprites('../../assets/button2.png', 0, -1588px);
                    @include wh(32px, 30px);
                    cursor: pointer;
                    &:hover{
                        background-position: -40px -1588px;
                    }
                    &:active{
                        background-position: -80px -1588px;
                    }
                }
            }
            .btnAdd{
                @include sprites('../../assets/button2.png', 100%, -1020px);
                height: 30px;
                padding-right: 5px;
                .addIcon{
                    vertical-align: top;
                    box-sizing: border-box;
                    font-size: 12px;
                    padding: 6px 3px 0 29px;
                    height: 30px;
                    @include sprites('../../assets/button2.png', 0, -977px);
                }
            }
            .share{
                @include sprites('../../assets/button2.png', 100%, -1020px);
                height: 30px;
                padding-right: 5px;
                .shareIcon{
                    vertical-align: top;
                    box-sizing: border-box;
                    font-size: 12px;
                    padding: 6px 3px 0 29px;
                    height: 30px;
                    @include sprites('../../assets/button2.png', 0, -1225px);
                }
            }
        }
    }
}
</style>
