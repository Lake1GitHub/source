<template>
    <div class='wrap'>
        <left-navi :curColumn='curColumn' @colChange='colChange'></left-navi>
        <article class='bfc'>
            <header>
                <span class='left titleImgBox'>
                    <img width="150" height="150" :src='listData.headImg' />
                    <span class='cover'>
                    </span>
                </span>
                <div class='titleBox bfc'>
                    <div class='title'>{{listData.title}}</div>
                    <div class='lastUpdate'><i class='updateIcon'></i> 最近更新 : {{listData.lastUpdate}}<span class='updateTime'>{{listData.updateTime}}</span></div>
                    <div class='listOptions'>
                        <span class='playBox'>
                            <button class='btnPlay' @click='goPage("toplist")'>
                                <i class='playIcon'></i>播放
                            </button><button class='temAdd'>
                            </button>
                        </span>
                        <button class='btnAdd'>
                            <i class='addIcon'>
                                ({{listData.addCount}})
                            </i>
                        </button>
                        <button class='share'>
                            <i class='shareIcon'>
                                ({{listData.shareCount}})
                            </i>
                        </button>
                        <button class='download'>
                            <i class='downloadIcon'>
                                下载
                            </i>
                        </button>
                        <button class='recommend'>
                            <i class='recommendIcon'>
                                ({{listData.recommendCount}})
                            </i>
                        </button>
                    </div>
                </div>
            </header>
            <main>
                <h3>
                    歌曲列表 <span class='songsCount'>{{listData.songsCount}}首歌</span> <span class='playCount'>播放 : <strong class='count'>{{listData.playTimes}}</strong>次</span>
                </h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>
                                <div class='wp'>
                                    标题
                                </div>
                            </th>
                            <th>
                                <div class='wp'>
                                    时长
                                </div>
                            </th>
                            <th>
                                <div class='wp'>
                                    歌手
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class='rank' :class='{ frontRank: rank.sortBy<4 }' v-for='(rank, index) in songsTopRank' @mouseenter='enter(index)' @mouseleave='leave(index)'>
                            <td class='ellipsis'>
                                <div class='tableTd1'>
                                    <span class='rankSort'>{{ rank.sortBy }}</span>
                                    <span v-if='rank.isOld'>
                                        <i :class='{ up: rank.isUp, down: !rank.isUp }'></i>
                                        <span class='rankChange'>{{ rank.rankChange }}</span>
                                    </span>
                                    <span v-else>
                                        <i class='new'></i>
                                    </span>
                                </div>
                            </td>
                            <td class='ellipsis'>
                                <div class='tableTd2'>
                                    <span v-if='rank.src' class='songsListBox'><img :src='rank.src' /></span>
                                    <i class='play'></i>
                                    <router-link class='songsName' :to="{ name: '', params: {} }">{{rank.songsName}}</router-link>
                                    <span class='songsDesc'>{{ rank.songsDesc }}</span>
                                </div>
                            </td>
                            <td class='ellipsis'>
                                <div class='tableTd3'>
                                    <span v-if='rank.isHover' class='duration'>
                                        <a class='icon'></a>
                                        <a class='icon'></a>
                                        <a class='icon'></a>
                                        <a class='icon'></a>
                                    </span>
                                    <span v-else class='duration'>
                                        {{rank.time}}
                                    </span>
                                </div>
                            </td>
                            <td class='singer'>
                                <div class='ellipsis singerText tableTd4'>
                                    <router-link :to="{ name: '', params: {} }">
                                        {{rank.singer}}
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                        <!-- <tr v-for class='rank'></tr> -->
                    </tbody>
                </table>
            </main>
        </article>
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
            isOld: false,
            isUp: false,
            songsTopRank:[
            ],
            curColumn: 0,
            listData:{
                title: '云音乐飙升榜',
                headImg: 'src/assets/toplist/biaosheng.png',
                addCount: 716015,
                shareCount: 2810,
                recommendCount: 91542,
                songsCount: 100,
                playTimes: 747487168,
                lastUpdate: '01月15日',
                updateTime: '（每天更新）'
            }
        }
    },
    name: 'toplist',
    components:{
        headTop,
        foot,
        leftNavi
    },
    computed:{
        getTop(index){
            return index;
        }
    },
    methods:{
        enter(index){
            this.$set(this.songsTopRank[index], 'isHover', true);
        },
        leave(index){
            this.$set(this.songsTopRank[index], 'isHover', false);
        },
        colChange(cur, next){
            this.getCol(next);
            this.curColumn = next;
        },
        getCol(key){
            let self = this;
            let url = `http://toplist.cn?key=${key}`;
            axios.get(url).then(function(response){
                let data = response.data;
                self.songsTopRank = data.songsTopRank;
                self.listData = data.listData;
            }).catch(function(){
            });
        },
        goPage(){
            this.$emit('goPage', 'toplist');
        }
    },
    mounted(){
        let self = this;
        axios.get('http://toplist.cn').then(function(response){
            let rank = response.data.songsTopRank
            self.songsTopRank = rank
        });
    }
}
</script>
<style lang='scss' scoped>
@import 'src/styles/common.scss';
@import 'src/styles/mixin.scss';
.wrap{
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    background-color: rgb(249, 249, 249);
}
article{
    background-color: white;
    padding: 40px;
    border-left: 1px solid lightgray;
    header{
        overflow: hidden;
        .titleImgBox{
            position: relative;
            vertical-align: middle;
            width: 150px;
            height: 150px;
            padding: 2px;
            border: 1px solid lightgray;
            .cover{
                position: absolute;
                top: 2px;
                left: 2px;
                @include wh(150px, 150px);
                @include sprites('../../assets/coverall.png', -230px, -380px);
            }
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
                    outline: none;
                    @include sprites('../../assets/button2.png', 0, -387px);
                    &:hover{
                        outline: none;
                        background-position: 0 -469px;
                        .playIcon{
                            background-position: -28px -1622px;
                        }
                    }
                    &:active{
                        outline: none;
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
            & > button{
                height: 30px;
                padding-right: 5px;
                cursor: pointer;
                i{
                    vertical-align: top;
                    box-sizing: border-box;
                    font-size: 12px;
                    padding: 6px 3px 0 29px;
                    height: 30px;
                }
            }
            .btnAdd{
                @include sprites('../../assets/button2.png', 100%, -1020px);
                .addIcon{
                    @include sprites('../../assets/button2.png', 0, -977px);
                }
                &:active{
                    background-position: 100% -1106px;
                    .addIcon{
                        background-position: 0 -1063px;
                    }
                }
            }
            .share{
                @include sprites('../../assets/button2.png', 100%, -1020px);
                .shareIcon{
                    @include sprites('../../assets/button2.png', 0, -1225px);
                }
                &:active{
                    background-position: 100% -1106px;
                    .shareIcon{
                        background-position: 0 -1268px;
                    }
                }
            }
            .download{
                @include sprites('../../assets/button2.png', 100%, -1020px);
                .downloadIcon{
                    @include sprites('../../assets/button2.png', 0, -2761px);
                }
                &:active{
                    background-position: 100% -2640px;
                    .downloadIcon{
                        background-position: 0 -2805px;
                    }
                }
            }
            .recommend{
                @include sprites('../../assets/button2.png', 100%, -1020px);
                .recommendIcon{
                    @include sprites('../../assets/button2.png', 0, -1465px);
                }
                &:active{
                    background-position: 100% -2640px;
                    .recommendIcon{
                        background-position: 0 -1508px;
                    }
                }
            }
        }
    }
}
main{
    margin-top: 45px;
    h3{
        .songsCount{
            margin-left: 20px;
            font-size: 12px;
            vertical-align: bottom;
            color: gray;
        }
        .playCount{
            float: right;
            font-size: 12px;
            vertical-align: bottom;
            .count{
                color: rgb(194, 12, 12);
            }
        }
    }
    table{
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
        margin-top: 5px;
        border-top: 2px solid #c20c0c;
        border-bottom: 1px solid lightgray;
        border-collapse:collapse;
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
        thead{
            @include wh(100%, 38px);
            th{
                box-sizing: border-box;
                font-size: 12px;
                color: lightgray;
                height: 38px;
                text-align: left;
                &:nth-child(1){
                    min-width: 75px;
                    @include sprites('../../assets/table.png');
                }
                &:nth-child(2){
                    min-width: 300px;
                    @include sprites('../../assets/table.png');
                    background-repeat: repeat-x;
                }
                &:nth-child(3){
                    min-width: 91px;
                    @include sprites('../../assets/table.png');
                }
                &:nth-child(4){
                    @include sprites('../../assets/table.png');
                }
                .wp{
                    width: 100%;
                    color: gray;
                    @include sprites('../../assets/table.png', 0, -56px);
                    padding: 8px 10px;
                }
            }
        }
        tbody{
            tr{
                height: 30px;
                line-height: 30px;
                &:nth-child(odd){
                    background-color: rgb(247, 247, 247);
                }
                &:nth-child(even){
                    background-color: white;
                }
                td{
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    &:nth-child(1){
                        color: gray;
                    }
                    &:nth-child(2){
                        padding-left: 10px;
                    }
                    &:nth-child(3){
                        padding-left: 8px;
                        div{
                            width: 100%;
                        }
                    }
                    &:nth-child(4){
                        padding: 0 10px;
                    }
                }
                .tableTd1{
                    overflow: hidden;
                    width: 77px;
                }
                .tableTd2{
                    overflow: hidden;
                    width: 390px;
                }
                .tableTd3{
                    overflow: hidden;
                    width: 90px;
                }
                .tableTd4{
                    overflow: hidden;
                    width: 74px;
                }
            }
            .frontRank{
                height: 70px;
            }
            .rank{
                color: gray;
                .rankSort{
                    font-size: 12px;
                    width: 25px;
                    padding-left: 15px;
                    color: gray;
                }
                .songsListBox{
                    @include wh(50px, 50px);
                    vertical-align: middle;
                }
                .play{
                    margin-left: 10px;
                    margin-right: 5px;
                    vertical-align: middle;
                    @include sprites('../../assets/table.png', 0, -103px);
                    @include wh(17px, 17px);
                    &:hover{
                        cursor: pointer;
                        background-position: 0 -128px;
                    }
                }
                .songsName{
                    font-size: 12px;
                }
                .songsDesc{
                    color: #aeaeae;
                    font-size: 12px;
                }
                .up{
                    @include sprites('../../assets/icon.png', -74px, -304px);
                    @include wh(6px, 6px);
                }
                .down{
                    @include sprites('../../assets/icon.png', -74px, -324px);
                    @include wh(6px, 6px);
                }
                .new{
                    @include sprites('../../assets/icon.png', -67px, -289px);
                    @include wh(16px, 5px);
                }
                .rankChange{
                    font-size: 8px;
                    color: darkred;
                }
                .duration{
                    font-size: 12px;
                    color: gray;
                    a:hover{
                        cursor: pointer;
                    }
                    a:nth-child(1){
                        @include sprites('../../assets/icon.png', 0, -700px);
                        @include wh(13px, 15px);
                        &:hover{
                            background-position: -22px -700px;
                        }
                    }
                    a:nth-child(2){
                        @include sprites('../../assets/icon.png', -45px, -87px);
                        @include wh(16px, 15px);
                        margin-right: 1px;
                        &:hover{
                            background-position: -45px -110px;
                        }
                    }
                    a:nth-child(3){
                        @include sprites('../../assets/icon.png', -45px, -137px);
                        @include wh(15px, 15px);
                        margin-right: 1px;
                        &:hover{
                            background-position: -45px -160px;
                        }
                    }
                    a:nth-child(4){
                        @include sprites('../../assets/table.png', -83px, -174px);
                        @include wh(15px, 15px);
                        &:hover{
                            background-position: -106px -174px;
                        }
                    }
                }
                .singer{
                    font-size: 12px;
                    color: black;
                    .singerText{
                        box-sizing: border-box;
                    }
                }
            }
        }
    }
}
a:hover{
    text-decoration: underline;
}
</style>
