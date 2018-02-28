<template>
    <div class='wrap'>
        <header>
            <span class='title'>全部</span>
            <a class='choose'>
                <i>选择分类<em></em></i>
            </a>
            <span class='toggle'>
                <span class='hot'>热门</span>
                <span class='new'>最新</span>
            </span>
        </header>
        <main>
            <div class='datas' v-for='data in datas'>
                <div class='left' :class='{firstData: !index, data: index}' v-for='(singer, index) in data' >
                    <div class='dataImgBox'>
                        <img :src='singer.src' />
                        <span class='msk'></span>
                        <div class='listenMsk'>
                            <i class='listen'></i>
                            <span class='listenCount'>
                                {{singer.listen}}
                            </span>
                            <i class='play'></i>
                        </div>
                    </div>
                    <div class='dataName ellipsis'>{{singer.text}}</div>
                    <div class='dataAuthor'>
                        by <span class='author ellipsis'>{{singer.author}}</span>
                        <i class='authorVip'></i>
                    </div>
                </div>
                <div class='clear'></div>
            </div>
        </main>
        <footer>
            <pagination></pagination>
        </footer>
    </div>
</template>
<script>
import axios from 'axios'
import {mapGetters, mapMutations} from 'vuex'
import '../../mock/mock_playlist.js'
import pagination from '../../components/pagination.vue'
export default {
    data(){
        return {
            datas: [
                [{ src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 }],

                [{ src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 }],

                [{ src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 },
                { src: 'src/assets/playlist/WSF.jpg', listen: 100, text: 12345, author: 1234 }]
            ]
        }
    },
    components:{
        pagination
    },
    mounted(){
        let self = this;
        let url = 'http://playlist.com';
        axios.get(url).then(function(res){
            console.log(res.data.datas);
            self.datas = res.data.datas;
        })
    }
}
</script>
<style lang='scss' scoped>
@import '../../styles/common.scss';
@import '../../styles/mixin.scss';
.wrap{
    box-sizing: border-box;
    background-color: white;
    padding: 38px;
    padding-top: 20px;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
}
header{
    position: relative;
    padding-bottom: 7px;
    margin-top: 25px;
    margin-bottom: 30px;
    border-bottom: 2px solid rgb(194, 12, 12);
    .title{
        font-size: 24px;
        vertical-align: middle;
    }
    .choose{
        display: inline-block;
        text-align: center;
        cursor: pointer;
        margin-left: 10px;
        @include sprites('../../assets/button2.png', 100%, -100px);
        @include wh(90px, 30px);
        i{
            color: rgb(12, 115, 194);
            font-size: 12px;
            line-height: 30px;
            @include sprites('../../assets/button2.png', 0, -59px);
            @include wh(85px, 30px);
            em{
                display: inline-block;
                vertical-align: middle;
                margin-left: 5px;
                @include wh(8px, 5px);
                @include sprites('../../assets/icon.png', -70px, -543px);
            }
        }
        &:hover{
            background-position: 100% -182px;
            i{
                background-position: 0 -141px;
            }
        }
        &:active{
            background-position: 100% -264px;
            i{
                background-position: 0 -223px;
            }
        }
    }
    .toggle{
        position: absolute;
        right: 0;
        font-size: 12px;
        line-height: 29px;
        @include wh(92px, 29px);
        @include sprites('../../assets/button.png', 0, 0);
        .hot{
            margin-left: 12px;
            color: white;
        }
        .new{
            margin-left: 17px;
        }
    }
}
main{
    .datas{
        margin-bottom: 25px;
        .data{
            width: 140px;
            margin-left: 50px;
        }
        .firstData{
            width: 140px;
            maring-left: 0;
        }
        .dataImgBox{
            @include wh(140px, 140px);
            position: relative;
            .msk{
                position: absolute;
                left: 0;
                top: 0;
                @include wh(140px, 140px);
                @include sprites('../../assets/coverall.png', 0, 0);
            }
            .listenMsk{
                position: absolute;
                left: 0;
                bottom: 0;
                @include wh(140px, 27px);
                @include sprites('../../assets/coverall.png', 0, -537px);
                .listen{
                    position: absolute;
                    left: 12px;
                    bottom: 30%;
                    @include wh(14px, 11px);
                    @include sprites('../../assets/iconall.png', 0, -24px);
                }
                .play{
                    position: absolute;
                    right: 12px;
                    bottom: 20%;
                    @include wh(16px, 17px);
                    @include sprites('../../assets/iconall.png', 0, 0);
                }
                .listenCount{
                    margin-left: 30px;
                    margin-top: 5px;
                    font-size: 12px;
                    color: #ccc;
                }
            }
        }
        .dataName{
            margin-top: 8px;
            margin-bottom: 2px;
            font-size: 14px;
        }
        .dataAuthor{
            line-height: 16px;
            height: 16px;
            color: rgb(153, 153, 153);
            font-size: 12px;
            margin-top: 3px;
            .author{
                vertical-align: bottom;
                color: rgb(102, 102, 102);
            }
        }
        .authorVip{
            vertical-align: bottom;
            @include sprites('../../assets/icon.png', 0, 0);
            @include wh(11px, 12px);
        }
    }
}
</style>
