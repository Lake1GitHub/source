<template>
    <div class='mBox'>
        <article class='loginBox'>
            <header>
                <span class='headerText'>登录</span>
                <i class='cancelBox right'></i>
            </header>
            <main v-if='loginMethod==="choose"'>
                <div class='login-register left'>
                    <section><i></i></section>
                    <section><a><i>手机号登录</i></a></section>
                    <section><a><i>注&nbsp;&nbsp;&nbsp;册</i></a></section>
                </div>
                <aside class='loginMode left'>
                    <section><a href='http://www.baidu.com' target="_blank"><i></i><span>微信登录</span></a></section>
                    <section><a href='http://www.baidu.com' target="_blank"><i></i><span>QQ登录</span></a></section>
                    <section><a href='http://www.baidu.com' target="_blank"><i></i><span>微博登录</span></a></section>
                    <section><i></i><span>网易邮箱帐号登录</span></section>
                </aside>
                <div class='clear'></div>
            </main>
            <main v-else-if='loginMethod==="tel"'>
                <div class='tel'>
                    <span>
                        <a></a>
                    </span>
                    <input class='phoneNumber' />
                </div>
                <div class='tel-password'></div>
            </main>
            <main v-else-if='loginMethod==="register"'>
            </main>
            <main v-else-if='loginMethod==="netEasyEmail"'>
            </main>
        </article>
    </div>
</template>
<script>
import axios from 'axios'
import data from '../mock/mock.js'
export default{
    data(){
        return {
            loginMethod: 'tel'
        }
    }
}
</script>
<style lang='scss' scoped>
@import '../styles/common.scss';
@import '../styles/mixin.scss';
.mBox{
    position: fixed;
    top: 0;
    left: 0;
    @include wh(100%, 100%);
    z-index: 1000;
    .loginBox{
        width: 530px;
        margin: auto;
        header{
            color: white;
            background-color: rgb(45, 45, 45);
            @include wh(530px, 38px);
            border-radius: 5px 5px 0 0;
            line-height: 38px;
            margin: auto;
            margin-top: 30%;
            .headerText{
                margin-left: 20px;
                font-size: 14px;
                font-weight: bold;
                color: white;
            }
            .cancelBox{
                margin-top: 15px;
                margin-right: 20px;
                @include sprites('../assets/mBox/layer.png', 0, -95px);
                @include wh(10px, 10px);
            }
        }
        main{
            background-color: white;
            box-sizing: border-box;
            width: 530px;
            padding: 35px 15px;
            text-align: center;
            .login-register{
                @include wh(280px, 210px);
                text-align: center;
                border-right: 1px dotted gray;
                section:nth-of-type(1){
                    i{
                        @include sprites('../assets/mBox/platform.png');
                        @include wh(203px, 107px);
                    }
                }
                section:nth-of-type(2){
                    margin-top: 20px;
                    font-size: 14px;
                    a{
                        display: inline-block;
                        line-height: 30px;
                        cursor: pointer;
                        @include wh(200px, 30px);
                        @include sprites('../assets/button2.png', right, -428px);
                        i{
                            color: white;
                            @include wh(195px, 100%);
                            @include sprites('../assets/button2.png', 0, -387px);
                        }
                        &:hover{
                            background-position: right -510px;
                            i{
                                background-position: 0 -469px;
                            }
                        }
                        &:active{
                            background-position: right -592px;
                            i{
                                background-position: 0 -551px;
                            }
                        }
                    }
                }
                section:nth-of-type(3){
                    margin-top: 10px;
                    font-size: 14px;
                    a{
                        display: inline-block;
                        line-height: 30px;
                        cursor: pointer;
                        @include wh(200px, 30px);
                        @include sprites('../assets/button2.png', right, -100px);
                        i{
                            color: black;
                            @include wh(195px, 100%);
                            @include sprites('../assets/button2.png', 0, -59px);
                        }
                        &:hover{
                            background-position: right -182px;
                            i{
                                background-position: 0 -141px;
                            }
                        }
                        &:active{
                            background-position: right -264px;
                            i{
                                background-position: 0 -223px;
                            }
                        }
                    }
                }
            }
            .loginMode{
                font-size: 14px;
                i{
                    margin-right: 15px;
                    vertical-align: middle;
                    @include wh(38px, 38px);
                    background-image: url('../assets/logo.png');
                }
                section{
                    margin-top: 12px;
                    margin-left: 30px;
                    text-align: left;
                }
                section:nth-of-type(1){
                    i{
                        background-position: -150px -670px;
                    }
                }
                section:nth-of-type(2){
                    i{
                        background-position: -190px -670px;
                    }
                }
                section:nth-of-type(3){
                    i{
                        background-position: -231px -670px;
                    }
                }
                section:nth-of-type(4){
                    i{
                        background-position: -271px -670px;
                    }
                }
            }
            .tel{
                font-size: 0;
                .zone{
                    @include wh(50px, 30px);
                }
                .phoneNumber{
                    @include wh(150px, 28px);
                    border: 1px solid lightgray;
                    border-left: 0;
                }
            }
        }
    }
}
</style>
