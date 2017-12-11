
<template>
    <header class='header'>
        <nav class='nav'>
            <router-link to='/home' class='logo'></router-link>
            <ul class='top-list'>
                <li class='left'>
                    <router-link to='/home' class='find-music' :class="{isClicked: currentPage==='findMusic'}">发现音乐</router-link>
                    <i v-show='hasNotice("findMusic")' class='dot'></i>
                    <span v-if="currentPage==='findMusic'" class='currentPage-angle'></span>
                </li>
                <li class='left'>
                    <router-link to='/myMusic' class='find-music' :class="{isClicked: currentPage==='myMusic'}">我的音乐</router-link>
                    <i v-show='hasNotice("myMusic")' class='dot'></i>
                    <span v-if="currentPage==='myMusic'" class='currentPage-angle'></span>
                </li>
                <li class='left'>
                    <router-link to='/friend' class='find-music' :class="{isClicked: currentPage==='friend'}">朋友</router-link>
                    <i v-show='hasNotice("friend")' class='dot'></i>
                    <span v-if="currentPage==='friend'" class='currentPage-angle'></span>
                </li>
                <li class='left'>
                    <router-link to='/home' class='find-music'>商城</router-link>
                    <i v-show='hasNotice("shop")' class='dot'></i>
                </li>
                <li class='left'>
                    <router-link to='/home' class='find-music'>音乐人</router-link>
                    <i v-show='hasNotice("article")' class='dot'></i>
                </li>
                <li class='left'>
                    <router-link to='/download' class='find-music' :class="{isClicked: currentPage==='download'}">下载客户端</router-link>
                    <i v-show='hasNotice("download")' class='dot'></i>
                    <span v-if="currentPage==='download'" class='currentPage-angle'></span>
                    <span class='hot'></span>
                </li>
                <div class='right-part'>
                    <div class='right login-box'>
                        <a class='right login' v-on:mouseover="showList" v-on:mouseleave='hideList'>
                                <span v-if='isLogin === false' @click='login'>
                                <span>登录</span>&nbsp;
                                <i class='down-angle'></i>
                            </span>
                            <span v-else>
                                <img class='idImage' :src='idImage' />&nbsp;
                                <i class='down-angle'></i>
                            </span>
                        </a>
                        <div class='login-list hide' :class='{ show: loginIsShow }' v-on:mouseover="showList" v-on:mouseleave='hideList'>
                            <ul v-if='isLogin === false' class='login-ul'>
                                <li v-on:click='postAjax()'><span><i class='login-tel'></i></span>手机号登录</li>
                                <li><span><i class='login-wechat'></i></span>微信登录</li>
                                <li><span><i class='login-qq'></i></span>QQ登录</li>
                                <li><span><i class='login-sina'></i></span>新浪微博登录</li>
                                <li><span><i class='login-neteasy'></i></span>网易邮箱账号登录</li>
                            </ul>
                            <ul v-else class='login-ul'>
                                <li><span><i class='my-index'></i></span>我的主页</li>
                                <li><span><i class='my-message'></i></span>我的消息</li>
                                <li><span><i class='my-level'></i></span>我的等级</li>
                                <li><span><i class='vip-center'></i></span>会员中心</li>
                                <li><span><i class='self-set'></i></span>个人设置</li>
                                <li @click='exit'><span><i class='logout'></i></span>退出</li>
                            </ul>
                            <span class='up-angle'></span>
                        </div>
                    </div>
                    <span class='right post-video color-gray'>视频投稿</span>
                    <div class='right search'>
                        <input v-on:input='searchList' v-on:blur='hideSearch' placeholder='音乐/电台/用户' />
                        <div class='search-detail hide' :class='{ show: searchIsShow }'>
                            <p class='search-container'>搜 "{{ searchMessage }}" 相关用户 ></p>
                            <div v-for='response in searchResult' v-if='' class='detail-box'>
                                <h3 class='left search-type'><i :class='response.icon'></i> {{ response.name }}</h3>
                                <div class='bfc search-list'>
                                    <div  v-for="song in response.context" class='ellipsis search-item'><router-link :to='song.link' class='item-link'>{{ song.name }}</router-link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </nav>
        <div class='list-detail'>
            <div class='list-box center'>
                <ul class='list-wrap center'>
                    <li class='left' :class="{isSelected: currentCut==='discover'}"><router-link to='/home/discover'>推荐</router-link></li>
                    <li class='left' :class="{isSelected: currentCut==='toplist'}"><router-link to='/home/tiplist'>排行榜</router-link></li>
                    <li class='left' :class="{isSelected: currentCut==='playlist'}"><router-link to='/home/playlist'>榜单</router-link></li>
                    <li class='left' :class="{isSelected: currentPage==='djradio'}"><router-link to='/home/djradio'>主播电台</router-link></li>
                    <li class='left' :class="{isSelected: currentPage==='artist'}"><router-link to='/home/artist'>歌手</router-link></li>
                    <li class='left' :class="{isSelected: currentPage==='album'}"><router-link to='/home/album'>新碟上架</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
import axios from 'axios'
import data from '../mock/mock.js'
export default {
    props: ['currentPage', 'currentCut', 'isLogin'],
    data: function(){
        return {
            loginIsShow: false,   //准备登录
            searchIsShow: false,  //准备检索
            searchMessage: 'asdf', //检索信息
            idImage: '',
            searchResult: [         //检索结果
                {
                    name: '单曲',
                    icon: 'singleIcon',
                    context: [
                        { name: 'Despacito(Remix)-Luis Fonddd', link: 'src/album' },
                        { name: 'Despacito(Remix)-Luis Fonddd', link: 'src/album' },
                        { name: 'Despacito(Remix)-Luis Fonddd', link: 'src/album' },
                        { name: 'Despacito(Remix)-Luis Fonddd', link: 'src/album' }
                    ]
                },
                {
                    name: '歌手',
                    icon: 'singerIcon',
                    context: [
                        { name: 'DJ', link: 'src/album' },
                        { name: '邓丽君', link: 'src/album' },
                        { name: '刀郎', link: 'src/album' }
                    ]
                },
                {
                    name: '专辑',
                    icon: 'albumIcon',
                    context: [
                        { name: '带你去旅行', link: 'src/album' },
                        { name: 'Despacito(Remix)-Luis Fonddd', link: 'src/album'}
                    ]
                },
                {
                    name: 'MV',
                    icon: 'mvIcon',
                    context: [
                        { name: 'Despacito(Remix)-Luis Fonddd', link: 'src/album' },
                        { name: 'Despacito(Remix)-Luis Fonddd', link: 'src/album' }
                    ]
                },
                {
                    name: '歌单',
                    icon: 'songIcon',
                    context: [
                        { name: '不让你通宵的电音不是好电音', link: 'src/album' },
                        { name: '【玩游戏】必备电音Buff', link: 'src/album' },
                        { name: '前奏就让你沦陷的电音和神曲', link: 'src/album' }
                    ]
                }
            ],
            notice:[
                'friend'
            ],
            hasNotice: function( notice ){
                return this.notice.indexOf(notice)!==-1;
            }
        }
    },
    methods:{
        showList: function(){
            this.loginIsShow = true;
        },
        hideList: function(){
            this.loginIsShow = false;
        },
        searchList: function(content){
            console.log(content.target.value);
            this.searchIsShow = true;
            this.searchMessage = content.target.value;
        },
        hideSearch: function(){
            this.searchIsShow = false;
        },
        getId: function( fn ){
             var self = this;
             axios.get('http://g.cn').then(function(response){
                 self.idImage = response.data.img;
             }).catch(function(err){
                 console.log(err);
             })
        },
        exit: function(){
            this.getId();
            this.$emit('exit');
        },
        login: function(){
            this.getId();
            this.$emit('login');
        }
    }
}

</script>
<style lang='scss' scoped>
@import '../styles/common.scss';
@import '../styles/mixin.scss';
.search{
    margin-right: 10px;
    input{
        font-size: 12px;
        box-sizing: border-box;
        border-radius: 32px;
        width: 158px;
        height: 32px;
        background: url('../assets/topbar.png') 0px -99px no-repeat;
        background-color: white;
        padding-left: 30px;
    }
}
.right-part{
    position: relative;
}
.search-list{
    box-sizing: border-box;
    width: 160px;
    text-align: left;
    padding: 5px 0;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgray;
    .search-item{
        padding: 0 10px;
        height: 24px;
        line-height: 24px;
        .item-link{
            height: 24px;
            width: 100%;
        }
    }
    .search-item:hover{
        background-color: lightgray;
    }
}
.detail-box{
    .search-type{
        width: 60px;
        &:first-of-type{
            border-top: 1px solid lightgray;
        }
    }
    .single-list{
        width: 160px;
        text-align: left;
    }
}
.search-detail{
    border-radius: 5px;
    background-color: white;
    position: absolute;
    width: 230px;
    top: 60px;
    font-size: 12px;
    line-height: 28px;
    box-shadow: 0 0 10px black;
    z-index: 100;
    .search-container{
        text-align: left;
        padding: 5px 0;
        padding-left: 10px;
    }
    .singleIcon{
        vertical-align: middle;
        @include wh(10px, 13px);
        @include sprites('../assets/icon.png', -36px, -301px);
    }
    .singerIcon{
        vertical-align: middle;
        @include wh(14px, 14px);
        @include sprites('../assets/icon.png', -50px, -300px);
    }
    .albumIcon{
        vertical-align: middle;
        @include wh(14px, 14px);
        @include sprites('../assets/icon.png', -35px, -320px);
    }
    .mvIcon{
        vertical-align: middle;
        @include wh(13px, 12px);
        @include sprites('../assets/icon.png', -60px, -862px);
    }
    .songIcon{
        vertical-align: middle;
        @include wh(14px, 13px);
        @include sprites('../assets/icon.png', -50px, -320px);
    }
}
.post-video{
    box-sizing: border-box;
    line-height: 32px;
    padding-left: 20px;
    margin-top: 19px;
    width: 90px;
    height: 32px;
    font-size: 12px;
    background: url('../assets/topbar.png') 0 -140px no-repeat;
    &:hover{
        cursor: pointer;
        background: url('../assets/topbar.png') -100px -140px no-repeat;
    }
}
.login-box{
    position: relative;
    .login span{
        color: #999;
        img{
            border-radius: 50%;
        }
        &:hover{
            color: #787878;
            text-decoration: underline;
        }
    }
}
.top-list .login-list{
    z-index: 10;
    position: relative;
    .up-angle{
        position: absolute;
        width: 14px;
        height: 8px;
        background: url('../assets/toplist.png') -20px 0 no-repeat;
        top: 48px;
        left: 24px;
    };
}
.top-list .login-ul{
    width: 158px;
    position: absolute;
    left: -50px;
    top: 54px;
    border: 1px solid black;
    background-color: rgb(43, 43, 43);
    span{
        width: 50px;
    }
    li{
        color: #cccccc;
        border-top: 1px solid black;
        font-size: 12px;
        line-height: 38px;
        text-align: left;
        width: 158px;
        height: 38px;
        i{
            display: inline-block;
            vertical-align: middle;
            margin: 0 20px;
        }
        &:hover{
            color: white;
            background-color: rgb(53, 53, 53);
            cursor: pointer;
        }
        &:nth-child(1){
            border-top: 0;
        }
        .login-tel{
            @include wh(10px, 14px);
            @include sprites('../assets/toplist.png', -3px, -2px);
        }
        .login-wechat{
            @include wh(18px, 15px);
            @include sprites('../assets/toplist.png', -20px, -22px);
        }
        .login-qq{
            @include wh(14px, 16px);
            @include sprites('../assets/toplist.png', -20px, -41px);
        }
        .login-sina{
            @include wh(16px, 13px);
            @include sprites('../assets/toplist.png', 0, -23px);
        }
        .login-neteasy{
            @include wh(12px, 15px);
            @include sprites('../assets/toplist.png', -2px, -42px);
        }
        .my-index{
            @include wh(14px, 14px);
            @include sprites('../assets/toplist.png', -1px, -82px);
        }
        .my-message{
            @include wh(16px, 13px);
            @include sprites('../assets/toplist.png', -21px, -123px);
        }
        .my-level{
            @include wh(14px, 17px);
            @include sprites('../assets/toplist.png', -1px, -101px);
        }
        .vip-center{
            @include wh(18px, 15px);
            @include sprites('../assets/toplist.png', 0, -222px);
        }
        .self-set{
            @include wh(14px, 14px);
            @include sprites('../assets/toplist.png', -1px, -142px);
        }
        .logout{
            @include wh(14px, 14px);
            @include sprites('../assets/toplist.png', -1px, -202px);
        }
    }
}
.login{
    position: relative;
    font-size: 12px;
    width: 50px;
    padding:  0 10px;
    height: 50px;
    margin-top: 10px;
    line-height: 50px;
    color: rgb(120, 120, 120);
    .down-angle{
        width: 12px;
        height: 7px;
        background: url('../assets/topbar.png') -228px -60px no-repeat;
    }
    &:hover{
        cursor: pointer;
        color: rgb(148, 148, 148);
    }
}
.header{
    height: 105px;
    background-color: rgb(36, 36, 36);
    color: white;
    text-align: center;
    line-height: 105px;
    .nav{
        width: 1100px;
        height: 70px;
        line-height: 70px;
        vertical-align: middle;
        margin: 0 auto;
        .logo{
            float:left;
            display: inline-block;
            border: 0;
            width: 153px;
            height: 28px;
            line-height: 28px;
            margin: 20px 20px 20px 0;
            background: url('../assets/topbar.png') 0 -21px no-repeat;
        }
        .logo:after{
            content: '';
            display:block;
            clear:both;
        }
    }
}
.top-list{
    .dot{
        position: absolute;
        @include wh(5px, 5px);
        top: 25px;
        right: 10px;
        background-color: red;
        border-radius: 50%;
    }
    li{
        position: relative;
        list-style: none;
        text-align: center;
        height: 70px;
        a{
            display: inline-block;
            height: 69px;
            padding: 0 20px;
            text-decoration: none;
            font-size: 14px;
            color: rgb(204, 204, 204);
            &:hover{
                height: 69px;
                background-color: black;
                color: white;
                margin-top: -1px;
            }
        }
        .currentPage-angle{
            position: absolute;
            top: 64px;
            left: 50%;
            transform: translateX(-6px);
            width: 12px;
            height: 6px;
            background: url('../assets/topbar.png') -226px 0 no-repeat;
        }
    }
}
.top-list:after{
    content:'';
    display:block;
    clear:both;
}
.list-detail{
    height: 35px;
    line-height: 35px;
    background-color: #C20C0C;
    .list-box{
        width: 1000px;
        height: 100%;
    }
}
.list-wrap{
    width: 710px;
    height: 100%;
    line-height: 35px;
    li{
        height: 20px;
        line-height: 20px;
        border-radius: 35px;
        font-size: 12px;
        color: white;
        padding: 0 15px;
        margin: 7px 32px 7px 0;
        &:hover{
            background-color: #9B0909;
            cursor: pointer;
        }
        a{
            color: white;
        }
    }
}
.hot{
    position: absolute;
    top: 20px;
    left: 100px;
    width: 26px;
    height: 13px;
    background: url('../assets/topbar.png') -192px 0 no-repeat;
}
.isSelected{
    background-color: #9B0909;
}
.isClicked{
    background-color: black;
}
</style>
