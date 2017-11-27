
<template>
    <header class='header'>
        <nav class='nav'>
            <router-link to='/home' class='logo'></router-link>
            <ul class='top-list'>
                <li class='left'>
                    <router-link to='/home' class='find-music' :class="{isClicked: currentPage==='findMusic'}">发现音乐</router-link>
                    <span v-if="currentPage==='findMusic'" class='currentPage-angle'></span>
                </li>
                <li class='left'>
                    <router-link to='/myMusic' class='find-music' :class="{isClicked: currentPage==='myMusic'}">我的音乐</router-link>
                    <span v-if="currentPage==='myMusic'" class='currentPage-angle'></span>
                </li>
                <li class='left'>
                    <router-link to='/friend' class='find-music' :class="{isClicked: currentPage==='friend'}">朋友</router-link>
                    <span v-if="currentPage==='friend'" class='currentPage-angle'></span>
                </li>
                <li class='left'>
                    <router-link to='/home' class='find-music'>商城</router-link>
                </li>
                <li class='left'>
                    <router-link to='/home' class='find-music'>音乐人</router-link>
                </li>
                <li class='left'>
                    <router-link to='/download' class='find-music' :class="{isClicked: currentPage==='download'}">下载客户端</router-link>
                    <span v-if="currentPage==='download'" class='currentPage-angle'></span>
                    <span class='hot'></span>
                </li>
                <div class='right-part'>
                    <div class='right login-box'>
                        <a class='right login' v-on:mouseover="showList" v-on:mouseleave='hideList'>登录&nbsp; &nbsp;<span class='down-angle'></span></a>
                        <div class='login-list hide' :class='{ show: loginIsShow }' v-on:mouseover="showList" v-on:mouseleave='hideList'>
                            <ul class='login-ul'>
                                <li><i></i>手机号登录</li>
                                <li><i></i>微信登录</li>
                                <li><i></i>QQ登录</li>
                                <li><i></i>新浪微博登录</li>
                                <li><i></i>网易邮箱账号登录</li>
                            </ul>
                            <span class='up-angle'></span>
                        </div>
                    </div>
                    <span class='right post-video color-gray'>视频投稿</span>
                    <div class='right search'>
                        <input v-on:input='searchList' v-on:blur='hideSearch' placeholder='音乐/电台/用户' />
                        <div class='search-detail hide' :class='{ show: searchIsShow }'>
                            <p class='search-container'>搜 "{{ searchMessage }}" 相关用户 ></p>
                            <div class='detail-box' style='vertical-align: top;'>
                                <h3 class='left search-type'><i class='singleIcon'></i>单曲</h3>
                                <div class='bfc search-list'>
                                    <div>Despacito(Remix)-Luis Fon</div>
                                    <div>Despacito(Remix)-Luis Fo121212dfdfdfdfdfdfdd5fd65f4d56fd56f564dn</div>
                                    <div>Despacito(Remix)-Luis Fon</div>
                                    <div>Despacito(Remix)-Luis Fon</div>
                                </div>
                            </div>
                            <div class='detail-box'>
                                <h3 class='left search-type'><i class='singerIcon'></i>歌手</h3>
                                <div class='bfc search-list'>
                                    <div>DJ</div>
                                    <div>邓丽君</div>
                                    <div>刀郎</div>
                                </div>
                            </div>
                            <div class='detail-box'>
                                <h3 class='left search-type'><i class='albumIcon'></i>专辑</h3>
                                <div class='bfc search-list'>
                                    <div>带你去旅行</div>
                                    <div>Despacito(Remix)-Luis Fon</div>
                                </div>
                            </div>
                            <div class='detail-box'>
                                <h3 class='left search-type'><i class='mvIcon'></i>MV</h3>
                                <div class='bfc search-list'>
                                    <div>Despacito-Luis Fonsi</div>
                                    <div>Despacito-Madilyn Bailey</div>
                                </div>
                            </div>
                            <div class='detail-box'>
                                <h3 class='left search-type'><i class='songIcon'></i>歌单</h3>
                                <div class='bfc search-list'>
                                    <div>不让你通宵的电音不是好</div>
                                    <div>【玩游戏】必备电音Buff</div>
                                    <div>前奏就让你沦陷的电音和神</div>
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
export default {
    props: ['currentPage', 'currentCut'],
    data: function(){
        return {
            loginIsShow: false,   //准备登录
            searchIsShow: false,  //准备检索
            searchMessage: 'asdf' //检索信息
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
        }
    }
}

</script>
<style lang='scss' scoped>
@import '../styles/common.scss';
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
    padding-left: 15px;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgray;
    div{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        width: 10px;
        height: 13px;
        background: url('../assets/icon.png') -36px -301px no-repeat;
    }
    .singerIcon{
        width: 14px;
        height: 14px;
        background: url('../assets/icon.png') -50px -300px no-repeat;
    }
    .albumIcon{
        width: 14px;
        height: 14px;
        background: url('../assets/icon.png') -35px -320px no-repeat;
    }
    .mvIcon{
        width: 13px;
        height: 12px;
        background: url('../assets/icon.png') -60px -862px no-repeat;
    }
    .songIcon{
        width: 14px;
        height: 13px;
        background: url('../assets/icon.png') -50px -320px no-repeat;
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
        &:nth-child(1) i{
            width: 10px;
            height: 14px;
            background: url('../assets/toplist.png') -3px -2px no-repeat;
        }
        &:nth-child(2) i{
            width: 18px;
            height: 15px;
            background: url('../assets/toplist.png') -20px -22px no-repeat;
        }
        &:nth-child(3) i{
            width: 14px;
            height: 16px;
            background: url('../assets/toplist.png') -20px -41px no-repeat;
        }
        &:nth-child(4) i{
            width: 16px;
            height: 13px;
            background: url('../assets/toplist.png') 0 -23px no-repeat;
        }
        &:nth-child(5) i{
            width: 12px;
            height: 15px;
            background: url('../assets/toplist.png') -2px -42px no-repeat;
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
