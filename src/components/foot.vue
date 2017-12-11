<template>
    <div class='box'>
        <footer class='wrap'>
            <div class='page-left'>
                <ul class='footer-nav'>
                    <router-link tag='li' to='/album' class='left border-right'>关于网易</router-link>
                    <router-link tag='li' to='/album' class='left border-right'>客户服务</router-link>
                    <router-link tag='li' to='/album' class='left border-right'>服务条款</router-link>
                    <router-link tag='li' to='/album' class='left border-right'>网站导航</router-link>
                    <router-link tag='li' to='/album' class='left li-right'>意见反馈</router-link>
                </ul>
                <div class='clear'></div>
                <p class='copyright'>网易公司版权所有©1997-2017&nbsp;&nbsp;&nbsp;&nbsp;杭州乐读科技有限公司运营：浙网文[2015] 0415-135号</p>
            </div>
            <div class='page-right'>
                <ul class='footer-col'>
                    <router-link to='/album' tag='li' class='left'></router-link>
                    <router-link to='/album' tag='li' class='left'></router-link>
                    <router-link to='/album' tag='li' class='left'></router-link>
                    <router-link to='/album' tag='li' class='left'></router-link>
                </ul>
            </div>
            <div class='clear'></div>
        </footer>
    </div>
</template>
<script>
export default{
    data(){
        return {

        }
    }
}
</script>
<style lang='scss' scoped>
@import '../styles/common.scss';
@import '../styles/mixin.scss';
.box{
    @include wh(100%, 140px);
    background-color: #f2f2f2;
    border-top: 1px solid #d3d3d3;
}
.page-left{
    box-sizing: border-box;
    width: 60%;
    float: left;
    .footer-nav{
        margin-top: 40px;
        li{
            cursor: pointer;
            font-size: 12px;
            color: rgb(153, 153, 153);
            &:hover{
                text-decoration: underline;
            }
        }
        .border-right{
            $right: 12px;
            line-height: 10px;
            text-align: center;
            padding-right: $right;
            margin-right: $right;
            border-right: 1px solid #999999;
        }
        .li-right{
            line-height: 10px;
        }
    }
    .copyright{
        font-size: 12px;
        color: #666;
        margin-top: 10px;
    }
}
.page-right{
    box-sizing: border-box;
    width: 40%;
    float: right;
    .footer-col{
        margin-top: 25px;
        float: right;
        li{
            margin-right: 40px;
            cursor: pointer;
        }
        li:nth-child(1){
            @include wh(50px, 60px);
            @include sprites('../assets/foot_enter.png', -65px, -80px);
        }
        li:nth-child(2){
            @include wh(44px, 60px);
            @include sprites('../assets/foot_enter.png', -8px, -80px);
        }
        li:nth-child(3){
            @include wh(44px, 60px);
            @include sprites('../assets/foot_enter.png', -8px, 0);
        }
        li:nth-child(4){
            @include wh(44px, 60px);
            @include sprites('../assets/foot_enter.png', -68px, 0);
            margin-right: 10px;
        }
    }
}
</style>
