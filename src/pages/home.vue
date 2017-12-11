<template>
    <div style='background-color: rgb(245, 245, 245);'>
        <head-top current-page='findMusic' current-cut='discover' :isLogin=isLogin @exit = 'exit' @login = 'login'></head-top>
        <div class='swiper-container swiper1'>
            <div class='swiper-wrapper'>
                <!-- 由于swiper的原因，不能直接在 swiper-slide 上添加背景颜色-->
                <div v-for='swiper in swipers' class='swiper-slide'>
                    <div :style='swiper.style'>
                        <img :src='swiper.src'/>
                    </div>
                </div>
            </div>
            <div class='swiper-pagination'></div>
            <div class='swiper-button-container'>
                <div class='swiper-button-box'>
                    <div class='swiper-button-prev swiper-button-white swiper-prev'></div>
                    <div class='swiper-button-next swiper-button-white swiper-next'></div>
                    <div class='swiper-download'>
                        <router-link to='/download' class='download-btn'></router-link>
                        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    </div>
                </div>
            </div>
        </div>
        <div class='page-detail'>
            <div class='page-left'>
                <section class='hot'>
                    <p class='title'>
                        <i class='circle-icon'></i>
                        <router-link to="/discover/playlist" params class='section-title'>热门推荐</router-link>
                        <router-link to='/discover/playlist?cat=华语' class='hot-fragm'>华语</router-link>
                        <router-link to='/discover/playlist?cat=流行' class='hot-fragm'>流行</router-link>
                        <router-link to='/discover/playlist?cat=摇滚' class='hot-fragm'>摇滚</router-link>
                        <router-link to='/discover/playlist?cat=民谣' class='hot-fragm'>民谣</router-link>
                        <router-link to='/discover/playlist?cat=电子' class='hot-fragm'>电子</router-link>
                        <router-link to='/discover/playlist' class='see-more'>更多</router-link>
                    </p>
                    <div class='container'>
                        <ul class='hot-songs-list'>
                            <li v-for='hot in hots' class='hot-li'>
                                <div class='rela'>
                                    <img :src='hot.src'/>
                                    <router-link :to='hot.to' class='cover'></router-link>
                                    <span class='hot-songs-unit'>
                                        <span class='hot-songs-container'>
                                            <i class='listener'></i>
                                            <span class='listener-count'>{{ hot.count }}</span>
                                            <i class='go-listen'></i>
                                        </span>
                                    </span>
                                </div>
                                <router-link class='hotText' :to='hot.to'>{{ hot.text }}</router-link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class='disc'>
                    <p class='title'>
                        <i class='circle-icon'></i>
                        <router-link to="/discover/album" class='section-title'>新碟上架</router-link>
                        <router-link to='/discover/album' class='see-more'>更多</router-link>
                    </p>
                    <div class='container disc-swiper'>
                        <div class='swiper-container swiper2'>
                            <div class='swiper-wrapper'>
                                <span v-for='(album, index) in albums'  class='swiper-slide' v-on:mouseenter="show('albumsShow', index)" v-on:mouseleave="hide('albumsShow', index)">
                                    <img :src= 'album.src' >
                                    <router-link to='/discover/album'></router-link>
                                    <span class='disc-go-listen' v-show='forShow.albumsShow[index]'></span>
                                        <p class='disc-name ellipsis'>{{ album.name }}</p>
                                    <p class='disc-artist ellipsis'>{{ album.artist }}</p>
                                </span>
                            </div>
                        </div>
                        <span class='swiper-button-prev2'></span>
                        <span class='swiper-button-next2'></span>
                    </div>
                </section>
                <section class='list'>
                    <p class='title'>
                        <i class='circle-icon'></i>
                        <router-link to="/discover/toplist" class='section-title'>榜单</router-link>
                        <router-link to='/discover/toplist' class='see-more'>更多</router-link>
                    </p>
                    <div class='container'>
                        <div class='list-table'>
                            <ul class='table-one'>
                                <li class='list-type'>
                                    <span class='list-left'>
                                        <img class='bottom-shadow' src='../assets/list_up.jpg' />
                                        <a class='list-cover'></a>
                                    </span><span class='list-right'>
                                        <p>云音乐飙升榜</p>
                                        <i class='play'></i>
                                        <i class='collect'></i>
                                    </span>
                                </li>
                                <li v-for='(up, index) in musicUps' class='list-item ellipsis' v-on:mouseenter="show('upsShow', index)" v-on:mouseleave="hide('upsShow', index)">
                                    <span class='order-i' v-show="forShow.upsShow[index]">
                                        <i class='order-play'></i>
                                        <i class='order-add'></i>
                                        <i class='order-collection'></i>
                                    </span>
                                    <span class='clear'></span>
                                    <span class='list-order'>{{ index+1 }} </span>
                                    <span class='context ellipsis'><router-link :to='up.href'> {{ up.context }} </router-link></span>
                                </li>
                                <router-link tag='li' class='seeAll list-item' to="/album">查看全部></router-link>
                            </ul>
                            <ul class='table-two'>
                                <li class='list-type'>
                                    <span class='list-left'>
                                        <img class='bottom-shadow' src='../assets/list_new.jpg' />
                                        <a class='list-cover'></a>
                                    </span>
                                    <span class='list-right'>
                                        <p>云音乐新歌榜</p>
                                        <i class='play'></i>
                                        <i class='collect'></i>
                                    </span>
                                </li>
                                <li v-for='(news, index) in musicNews' class='list-item ellipsis' v-on:mouseenter="show('newsShow', index)" v-on:mouseleave="hide('newsShow', index)">
                                    <span class='order-i' v-show="forShow.newsShow[index]">
                                        <i class='order-play'></i>
                                        <i class='order-add'></i>
                                        <i class='order-collection'></i>
                                    </span>
                                    <span class='list-order'>{{ index+1 }} </span>
                                    <span class='context ellipsis'><router-link :to='news.href'> {{ news.context }} </router-link></span>
                                </li>
                                <router-link tag='li' class='seeAll list-item' to="/album">查看全部></router-link>
                            </ul>
                            <ul class='table-three'>
                                <li class='list-type'>
                                    <span class='list-left'>
                                        <img class='bottom-shadow' src='../assets/list_origin.jpg' />
                                        <a class='list-cover'></a>
                                    </span>
                                    <span class='list-right'>
                                        <p>网易原创歌曲榜</p>
                                        <i class='play'></i>
                                        <i class='collect'></i>
                                    </span>
                                </li>
                                <li v-for='(power, index) in musicPower' class='list-item ellipsis' v-on:mouseenter="show('powerShow', index)" v-on:mouseleave="hide('powerShow', index)">
                                    <span class='order-i' v-show="forShow.powerShow[index]">
                                        <i class='order-play'></i>
                                        <i class='order-add'></i>
                                        <i class='order-collection'></i>
                                    </span>
                                    <span class='list-order'>{{ index+1 }} </span>
                                    <span class='context ellipsis'><router-link :to='power.href'> {{ power.context }} </router-link></span>
                                </li>
                                <router-link tag='li' class='seeAll list-item' to="/album">查看全部></router-link>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div class='page-right'>
                <section v-if='isLogin === false' class='user-login'>
                    <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    <router-link class='login' to='/login'>用户登录</router-link>
                </section>
                <section v-else class='user-login'>
                    <div class='user-message'>
                        <span class='user-pic'><img src='../assets/user.jpg' /></span>
                        <span class='user-detail'>
                            <router-link tag='div' to='/album' class='user-name ellipsis'>{{ user.name }}</router-link>
                            <router-link tag='div' to='/album' class='user-level'>
                                {{ user.level }}
                                <i class='level-icon'>
                                </i>
                            </router-link>
                            <router-link class='user-sign' tag='button' to='/album'>
                                <i class='btn-icon'>
                                    签 到
                                </i>
                            </router-link>
                        </span>
                    </div>
                    <div class='user-social'>
                        <router-link tag='span' to='/album' class='user-actions'>
                            <span>{{ user.action }}</span><br />
                            <span>动态</span>
                        </router-link>
                        <router-link tag='span' to='/album' class='user-follows'>
                            <span>{{ user.followers }}</span><br />
                            <span>关注</span>
                        </router-link>
                        <router-link tag='span' to='/album' class='user-fans'>
                            <span>{{ user.following }}</span><br />
                            <span>粉丝</span>
                        </router-link>
                    </div>
                </section>
                <section class='singerSet'>
                    <div class='right-box'>
                        <p class='tip-title'><span class='singer'>入驻歌手</span><router-link class='seeAll' to='/album'>查看全部></router-link></p>
                        <section class='singerList' v-for='(singer, index) in singerSet'>
                            <img class='left' :src='singer.src'>
                            <span class='detail'>
                                <span class='ellipsis name'>{{ singer.name }}</span><br />
                                <span class='ellipsis desc'>{{ singer.desc }}</span>
                            </span>
                        </section>
                        <div class='register'>
                            <router-link tag='button' to='register'>申请成为网易音乐人</router-link>
                        </div>
                    </div>
                </section>
                <section class='tverHot'>
                    <p class='tip-title'><span class='singer'>热门主播</span></p>
                    <section class='hotTver' v-for='(tver, index) in tvers'>
                        <img class='left' :src='tver.src' />
                        <span class='detail'>
                            <span class='ellipsis name'>{{ tver.name }} <i class='i-V'></i></span><br />
                            <span class='ellipsis desc'>{{ tver.desc }}</span>
                        </span>
                    </section>
                </section>
            </div>
            <div class='clear'></div>
        </div>
        <foot></foot>
    </div>
</template>
<script>
import headTop from '../components/head.vue'
import foot from '../components/foot.vue'
import data from '../mock/mock.js'
import axios from 'axios'
import '../plugins/swiper.min.js'
import '../styles/swiper.min.css'

export default {
    data(){
        return {
            currentPage: 'findMusic',
            currentCut: 'discover',
            slideBackground: ['#F0F3FC','#7E7D83','#831218','#000000','#004799','#596B75'],
            forShow: {
                albumsShow: [],
                powerShow: [],
                newsShow: [],
                upsShow: []
            },
            user: {
                name: '',
                level: 0,
                action: 1,
                followers: 0,
                following: 0
            },
            isLogin: false,
            // 这里路径注意一下，
            albums: [
                { link: '123', listen: '123', name: '孙燕姿', artist: '孙燕姿No.13作品集', src: 'src/assets/slide2/1.jpg' },
                { link: '123', listen: '123', name: '孙燕姿', artist: '孙燕姿No.13作品集', src: 'src/assets/slide2/2.jpg' },
                { link: '123', listen: '123', name: '孙燕姿', artist: '孙燕姿No.13作品集', src: 'src/assets/slide2/3.jpg' },
                { link: '123', listen: '123', name: '孙燕姿', artist: '孙燕姿No.13作品集', src: 'src/assets/slide2/4.jpg' },
                { link: '123', listen: '123', name: '孙燕姿', artist: '孙燕姿No.13作品集', src: 'src/assets/slide2/5.jpg' },
                { link: '123', listen: '123', name: '孙燕姿', artist: '孙燕姿No.13作品集', src: 'src/assets/slide2/6.jpg' },
                { link: '123', listen: '123', name: '孙燕姿', artist: '孙燕姿No.13作品集', src: 'src/assets/slide2/7.jpg' },
                { link: '123', listen: '123', name: '孙燕姿', artist: '孙燕姿No.13作品集', src: 'src/assets/slide2/8.jpg' },
                { link: '123', listen: '123', name: '孙燕姿', artist: '孙燕姿No.13作品集', src: 'src/assets/slide2/9.jpg' },
                { link: '123', listen: '123', name: '孙燕姿', artist: '孙燕姿No.13作品集', src: 'src/assets/slide2/10.jpg' }
            ],
            hots: [
                { src: 'src/assets/songs/pic1.jpg', to: '/discover/playlist', count: '100', text: '北欧后摇氛围,如梦似幻的落寞之旅' },
                { src: 'src/assets/songs/pic2.jpg', to: '/discover/playlist', count: '200', text: '[独立女嗓] 许你一场浮生若梦'},
                { src: 'src/assets/songs/pic3.jpg', to: '/discover/playlist', count: '300', text: '我知道风里有诗，那正是民谣的歌。'},
                { src: 'src/assets/songs/pic4.jpg', to: '/discover/playlist', count: '400', text: '霓虹回忆（六十至八十年代）-2'},
                { src: 'src/assets/songs/pic5.jpg', to: '/discover/playlist', count: '500', text: '【怀疑耳机坏了系列】耳机你对耳朵做了什么'},
                { src: 'src/assets/songs/pic6.jpg', to: '/discover/playlist', count: '600', text: '马戏 : 谁在钢丝上行走？'},
                { src: 'src/assets/songs/pic7.jpg', to: '/discover/playlist', count: '700', text: '论正确背诗的方式【文言已补充】'},
                { src: 'src/assets/songs/pic8.jpg', to: '/discover/playlist', count: '800', text: '不后悔，我们爱过'},
            ],
            swipers: [
                { src: 'src/assets/slide/slide1.jpg', style: 'background-color: #F0F3Fc; width: 100%;' },
                { src: 'src/assets/slide/slide2.jpg', style: 'background-color: #7E7D83; width: 100%;' },
                { src: 'src/assets/slide/slide3.jpg', style: 'background-color: #831218; width: 100%;' },
                { src: 'src/assets/slide/slide4.jpg', style: 'background-color: #000000; width: 100%;' },
                { src: 'src/assets/slide/slide5.jpg', style: 'background-color: #004799; width: 100%;' },
                { src: 'src/assets/slide/slide6.jpg', style: 'background-color: #596B75; width: 100%;' },
            ],
            musicUps: [
                { context: '姗姗', href: '/song?id=1234' },
                { context: '只剩一分钟', href: '/song?id=1234' },
                { context: '娱乐', href: '/song?id=1234' },
                { context: '那年幸福', href: '/song?id=1234' },
                { context: 'Only You', href: '/song?id=1234' },
                { context: '她', href: '/song?id=1234' },
                { context: '做我的猫', href: '/song?id=1234' },
                { context: '枕边人', href: '/song?id=1234' },
                { context: '纠结', href: '/song?id=1234' },
                { context: '想你', href: '/song?id=1234' }
            ],
            musicNews: [
                { context: '骆驼', href: '/song?id=4321' },
                { context: '9420', href: '/song?id=4321' },
                { context: '像风一样', href: '/song?id=4321' },
                { context: '世界上的另一个我', href: '/song?id=4321' },
                { context: '做我的猫', href: '/song?id=4321' },
                { context: '遥远的歌', href: '/song?id=4321' },
                { context: '别', href: '/song?id=4321' },
                { context: '渡', href: '/song?id=4321' },
                { context: 'All Falls Down', href: '/song?id=4321' },
                { context: '多想留在你身边', href: '/song?id=4321' }
            ],
            musicPower: [
                { context: 'DENDROBATIDAE', href: '/song?id=yang'},
                { context: 'Move On（中国风remix）', href: '/song?id=yang' },
                { context: 'Move On', href: '/song?id=yang' },
                { context: 'Afterdark', href: '/song?id=yang' },
                { context: 'Shelter(N2V Bootleg)', href: '/song?id=yang' },
                { context: 'Come to me', href: '/song?id=yang' },
                { context: 'teardrops', href: '/song?id=yang' },
                { context: 'she\'s my crystal.', href: '/song?id=yang' },
                { context: 'Stand Back(Original Mix)', href: '/song?id=yang' },
                { context: 'Outlier(Extended Mix)', href: '/song?id=yang' }
            ],
            singerSet: [
                { src: 'src/assets/ZHM.jpg', name: '张惠妹aMEI', desc: '台湾歌手张惠妹' },
                { src: 'src/assets/Fine.jpg', name: 'Fine乐团', desc: '独立音乐人' },
                { src: 'src/assets/YXL.jpg', name: '萬曉利', desc: '民谣歌手、中国现代民谣的代表人物之一' },
                { src: 'src/assets/ZL.jpg', name: '音乐人赵雷', desc: '民谣歌手' },
                { src: 'src/assets/WSF.jpg', name: '王三溥', desc: '音乐人' }
            ],
            tvers: [
                { src: 'src/assets/CL.jpg', name: '陈立', desc: '心理学家、美食家陈立教授' },
                { src: 'src/assets/DJ_YQ.jpg', name: 'DJ艳秋', desc: '著名音乐节目主持人' },
                { src: 'src/assets/GJDJY.jpg', name: '国家大剧院古典音乐频道', desc: '国家大剧院古典音乐官方' },
                { src: 'src/assets/XXST.jpg', name: '谢谢收听', desc: '南京电台主持人王罄' },
                { src: 'src/assets/DJ_XS.jpg', name: 'DJ晓苏', desc: '独立DJ，CRI环球旅游广播特邀DJ' }
            ],
        }
    },
    name: 'home',
    components: {
        headTop,
        foot
    },
    methods: {
        getShow: function(array, index){
            return true;
        },
        show: function(context, index){
            this.$set(this.forShow[context], index, true);
        },
        hide: function(context, index){
            this.$set(this.forShow[context], index, false);
        },
        exit: function(){
            this.isLogin = false;
        },
        login: function(){
            var user;
            var self = this;
            console.log(this.user);
            axios.get('http://g.cn').then(function(response){
                user = response.data;
                self.user = user;
                console.log(user);
            }).catch(function(err){
                console.log(err);
            })
            this.isLogin = true;
        }
    },
    mounted(){
        new Swiper('.swiper1', {
            effect : 'fade',
            loop: true,
            autoplay: 3000,
            autoHeight: true,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            pagination: '.swiper-pagination',
        });
        new Swiper('.swiper2', {
            loop: true,
            slidesPerView : 5,
            slidesPerGroup: 5,
            speed: 1000,
            prevButton: '.swiper-button-prev2',
            nextButton: '.swiper-button-next2',
        });
        if(this.isLogin === true){
            axios.get('http://g.cn').then(function(response){
                self.idImage = response.data.name;
            }).catch(function(err){
                console.log(err);
            })
        }
    }
}
</script>
<style lang='scss' scoped>
@import '../styles/common.scss';
@import '../styles/mixin.scss';
.page-right{
    .tip-title{
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid lightgray;
    }
    .singer{
        font-weight: bold;
    }
    .seeAll{
        float: right;
        &:hover{
            text-decoration: underline;
        }
    }
    .tverHot{
        width: 80%;
        text-align: left;
        margin: 15px auto;
        font-size: 12px;
        .hotTver{
            @include wh(100%, 40px);
            margin-top: 10px;
            .detail{
                @include wh(150px, 100%);
                padding-left: 10px;
                .i-V{
                    @include wh(11px, 12px);
                    @include sprites('../assets/icon.png');
                    vertical-align: middle;
                }
                .name, .desc{
                    width: 100%;
                    margin-top: 2px;
                }
            }
        }
    }
    .singerSet{
        .right-box{
            width: 80%;
            text-align: left;
            margin: 15px auto;
            font-size: 12px;
            .register{
                margin-top: 15px;
                button{
                    @include linearGradient(rgb(254, 254, 254), rgb(241, 241, 241));
                    border: 1px solid darkgray;
                    border-radius: 5px;
                    box-shadow: 0 0 1px darkgray;
                    font-weight: bold;
                    @include wh(200px, 30px);
                    &:hover{
                        cursor: pointer;
                        background: white;
                    }
                }
            }
            .singerList{
                display: inline-block;
                @include wh(100%, 62px);
                background: rgb(250, 250, 250);
                margin-top: 15px;
                &:hover{
                    background: rgb(244, 244, 244);
                    cursor: pointer;
                }
                .detail{
                    border: 1px solid lightgray;
                    border-left: none;
                    @include wh(137px, 60px);
                    span{
                        margin-left: 15px;
                        width: 120px;
                    }
                }
                .name{
                    margin-top: 9px;
                    font-weight: bold;
                    font-size: 14px;
                }
                .desc{
                    margin-top: 5px;
                }
            }
        }
    }
    .user-login{
        display: inline-block;
        @include linearGradient(rgb(252, 252, 252), rgb(225, 225, 225));
        text-align: center;
        border-bottom: 1px solid lightgray;
        padding: 20px;
        width: 100%;
        box-sizing: border-box;
        .user-social{
            margin-top: 15px;
            text-align: left;
            line-height: 1;
            >span{
                color: gray;
                font-size: 18px;
                >span:nth-of-type(2){
                    font-size: 12px;
                }
                &:hover{
                    span{
                        color: #0c73c2;
                    }
                    cursor: pointer;
                }
            }
            .user-actions{
                padding-right: 18px;
            }
            .user-follows{
                padding: 0 18px;
                border-left: 1px solid lightgray;
                border-right: 1px solid lightgray;
            }
            .user-fans{
                padding-left: 18px;
            }
        }
        .user-message{
            text-align: left;
            width: 100%;
            .user-pic{
                height: 84px;
                text-align: center;
                float: left;
                border: 1px solid lightgray;
                background-color: white;
                img{
                    margin: 2px;
                }
            }
            .user-detail{
                width: 49%;
                margin-left: 20px;
                .user-name{
                    font-size: 14px;
                    font-weight: bold;
                    margin-bottom: 5px;
                    &:hover{
                        cursor: pointer;
                        text-decoration: underline;
                    }
                }
                .user-level{
                    box-sizing: border-box;
                    line-height: 18px;
                    text-align: right;
                    @include wh(45px, 17px);
                    @include sprites('../assets/icon2.png',-130px, -64px);
                    padding-left: 20px;
                    font-style: italic;
                    font-weight: bold;
                    color: #999;
                    font-family: "Arial", "Helvetica", "sans-serif";
                    font-size: 12px;
                    margin-bottom: 15px;
                     &:hover{
                         cursor: pointer;
                         color: #777;
                         background-position: -130px -84px;
                         .level-icon{
                             background-position: -192px -84px;
                         }
                     }
                    .level-icon{
                        float: right;
                        @include wh(8px, 17px);
                        @include sprites('../assets/icon2.png', -192px, -64px);
                     }
                }
                .user-sign{
                    @include wh(100px, 31px);
                    @include sprites('../assets/button2.png', right, -428px);
                    padding-right: 5px;
                    &:hover{
                        background-position: right -510px;
                    }
                    &:active{
                        background-position: right -592px;
                    }
                    .btn-icon{
                        cursor: pointer;
                        text-align: center;
                        line-height: 30px;
                        color: white;
                        padding-left: 2px;
                        @include wh(100%, 100%);
                        @include sprites('../assets/button2.png', left, -387px);
                        &:hover{
                             background-position: left -469px;
                        }
                        &:active{
                            background-position: left -551px;
                        }
                    }
                }
            }
        }
        p{
            color: gray;
            font-size: 12px;
            margin: auto;
            width: 100%;
            text-align: left;
            line-height:20px;
        }
        .login{
            display: inline-block;
            margin-top: 20px;
            line-height: 30px;
            font-size: 12px;
            @include wh(40%, 30px);
            @include linearGradient(rgb(228, 24, 32), rgb(188, 7, 12));
            @include borderRadius(5px);
            box-shadow: 0 0 1px black;
            color: white;
        }
    }
}
.list-table{
    margin-top: 10px;
    background-color: rgb(244, 244, 244);
    border: 1px solid lightgray;
    overflow: hidden;
    .table-one, .table-two, .table-three{
        float: left;
        border-right: 1px solid lightgray;
        @include wh(33%, 100%);
        &:nth-child(3){
            border-right: 0;
        }

        .list-item{
            position: relative;
            padding-left: 20px;
            font-size: 12px;
            height: 30px;
            line-height: 30px;
            &:hover{
                & .context{
                    width: 100px;
                    text-decoration: underline;
                }
            }
            .list-order{
                vertical-align: top;
                white-space: pre-wrap;
                text-align: center;
                font-size: 16px;
                width: 30px;
            }
            &:nth-child(even){
                background-color: rgb(232, 232, 232);
            }
            &:nth-child(2), &:nth-child(3), &:nth-child(4){
                .list-order{
                    color: red;
                }
            }
            .context{
            }
            .order-i{
                float: right;
                margin-right: 15px;
                width: 55px;
                line-height: 30px;
                .order-play{
                    vertical-align: middle;
                    @include wh(17px, 17px);
                    @include sprites('../assets/index.png', -267px, -268px);
                    &:hover{
                        cursor: pointer;
                        background-position: -267px -288px;
                    }
                }
                .order-add{
                    margin-left: 5px;
                    vertical-align: middle;
                    @include wh(13px, 13px);
                    @include sprites('../assets/icon.png', 0, -700px);
                    &:hover{
                        cursor: pointer;
                        background-position: -22px -700px;
                    }
                }
                .order-collection{
                    margin-left: 5px;
                    vertical-align: middle;
                    @include wh(16px, 14px);
                    @include sprites('../assets/index.png', -297px, -270px);
                    &:hover{
                        cursor: pointer;
                        background-position: -297px -290px;
                    }
                }
            }
        }
        .seeAll{
            &:hover{
                cursor: pointer;
                text-decoration: underline;
            }
            text-align: right;
            padding-right: 30px;
        }
        .list-type{
            padding-top: 20px;
            padding-left: 25px;
            margin-bottom: 10px;
        }
        .play{
            @include wh(22px, 22px);
            @include sprites('../assets/index.png', -267px, -205px);
        }
        .collect{
            @include wh(22px, 22px);
            @include sprites('../assets/index.png', -300px, -205px);
            margin-left: 8px;
        }
        .list-left{
            position: relative;
            @include wh(80px, 80px);
            vertical-align: top;
            box-shadow: 0 2px 2px black;
            img{
                @include wh(80px, 80px);
            }
            a{
                display: inline-block;
                position: absolute;
                top: 0;
                left: 0;
                @include wh(80px, 80px);
                @include sprites('../assets/coverall.png', -145px, -57px);
            }
        }
        .list-right{
            @include wh(49%, 80px);
            padding-top: 8px;
            margin-left: 10px;
            p{
                font-size: 14px;
                font-weight: bolder;
            }
            i{
                margin-top: 10px;
            }
            .play:hover{
                cursor: pointer;
                background-position: -267px -235px;
            }
            .collect:hover{
                cursor: pointer;
                background-position: -300px -235px;
            }
        }
    }
}
.disc-swiper{
    position: relative;
    background-color: rgb(245, 245, 245);
    border: 1px solid lightgray;
    height: 170px;
    margin: 25px 0;
    .swiper2{
        position: relative;
        @include wh(660px, 170px);
        margin: 0 auto;
    }
    .swiper-wrapper{
        position: relative;
        margin: 0 auto;
        margin-left: -5px;
        height: 170px;
    }
    .swiper-slide{
        position: relative;
        margin-top: 25px;
        display: inline-block;
        text-align: center;
        font-size: 12px;
        @include wh(100px, 100px);
        .disc-go-listen{
            position: absolute;
            left: 90px;
            top: 75px;
            @include wh(20px, 20px);
            @include sprites('../assets/iconall.png', -1px, -86px);
            &:hover{
                cursor: pointer;
                @include sprites('../assets/iconall.png', -1px, -111px);
            }
        }
        .disc-name, .disc-artist{
            padding-left: 15px;
            width: 100px;
            text-align: left;
        }
        .disc-artist{
            color: rgb(135, 135, 135);
        }
        img{
            margin-left: 0;
            @include wh(100px, 100px);
        }
        a{
            @include wh(115px, 100px);
            @include sprites('../assets/coverall.png', 0, -570px);
            display: inline-block;
            position: absolute;
            top: 0;
            left: 14px;
        }
    }
    .swiper-button-prev2{
        position: absolute;
        top: 50%;
        transform: translateY(-17px);
        left: 8px;
        @include wh(8px, 14px);
        @include sprites('../assets/index.png', -265px, -77px);
        &:hover{
            cursor: pointer;
            background-position: -285px -77px;
        }
        z-index: 1;
    }
    .swiper-button-next2{
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-17px);
        @include wh(8px, 14px);
        @include sprites('../assets/index.png', -305px, -77px);
        &:hover{
            cursor: pointer;
            background-position: -325px -77px;
        }
        z-index: 1;
    }
}
.cover{
    @include wh(140px, 140px);
    @include sprites('../assets/coverall.png');
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
}
.download-btn{
    display: block;
    @include wh(215px, 56px);
    border: 0;
    outline: 0;
    margin-top: 212px;
    margin-left: 19px;
    &:hover{
        cursor: pointer;
        @include sprites('../assets/download.png', 0, -340px);
    }
}
.swiper1{
    .swiper-download{
        position: absolute;
        top: 0;
        left: 436px;
        z-index: 1;
        @include wh(254px, 336px);
        @include sprites('../assets/download.png');
        box-shadow: 0 0 10px black;
        p{
            font-size: 12px;
            color: rgb(141, 141, 141);
            text-align: center;
            margin-top: 10px;
        }
    }
    .swiper-slide{
        text-align: center;
        @include wh(730px, 336px);
        img{
            @include wh(730px, 336px);
            margin-left: -250px;
        }
    }
    .swiper-container{
    }
    .swiper-button-container{
        @include wh(400px, 336px);
        position: absolute;
        margin-left: 50%;
        left: -200px;
        top: 0;
    }
    .swiper-button-box{
        @include wh(400px, 336px);
        position: relative;
    }
    .swiper-prev{
        @include wh(40px, 60px);
        position: absolute;
        left: -350px;
        top: 135px;
        &:hover{
            background-color: rgba(50,50,50,.2);
        }
    }
    .swiper-next{
        @include wh(40px, 60px);
        position: absolute;
        right: -370px;
        top: 135px;
        &:hover{
            background-color: rgba(50,50,50,.2);
        }
    }
    .swiper-pagination{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
    }

}
.page-detail{
    box-sizing: border-box;
    background-color: white;
    @include wh(980px, auto);
    margin: 0 auto;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
}
.page-left{
    box-sizing: border-box;
    border-right: 1px solid lightgray;
    width: 726px;
    float: left;
    padding: 20px 15px;
}
.page-right{
    box-sizing: border-box;
    @include wh(251px, auto);
    float: right;
}
.circle-icon{
    @include wh(14px, 14px);
    @include sprites('../assets/index.png', -235px, -164px);
}
.see-more{
    float: right;
    font-size: 12px;
    &:hover{
        text-decoration: underline;
    }
    &:after{
        content: '';
        display: inline-block;
        @include wh(12px, 12px);
        @include sprites('../assets/index.png', 0, -240px);
    }
}
.section-title{
    font-size: 20px;
}
.title{
    padding: 5px 10px;
    border-bottom: 2px solid #C10D0C;
}
.hot{
    line-height: 26px;
    .hot-fragm{
        font-size: 12px;
        padding: 0 15px;
        line-height: 12px;
        border-left: 2px solid lightgray;
        &:hover{
            text-decoration: underline;
        }
        &:nth-of-type(2){
            padding: 0 15px;
            line-height: 12px;
            border-left: 0;
        }
    }
    .hot-songs-list{
        font-size: 14px;
        .hot-li{
            margin-left: 17px;
            margin-right: 14px;
        }
        .rela{
            height: 140px;
            margin-bottom: 10px;
            .hot-songs-unit{
                position: absolute;
                bottom: 0;
                left: 0;
                @include wh(140px, 27px);
                @include sprites('../assets/coverall.png', 0, -537px);
                .hot-songs-container{
                    position: relative;
                    width: 100%;
                    .listener{
                        vertical-align: middle;
                        @include wh(14px, 11px);
                        @include sprites('../assets/iconall.png', 0, -24px);
                        margin-left: 10px;
                    }
                    .listener-count{
                        font-size: 12px;
                        color: rgb(201, 201, 201);
                    }
                    .go-listen{
                        position: absolute;
                        vertical-align: middle;
                        @include wh(16px, 17px);
                        @include sprites('../assets/iconall.png');
                        right: 10px;
                        top: 5px;
                        &:hover{
                            cursor: pointer;
                            background-position: 0 -60px;
                        }
                    }
                }
            }
        }
        li{
            display: inline-block;
            vertical-align: top;
            @include wh(140px, 210px);
            margin-top: 20px;
            div img{
                vertical-align: top;
            }
        }
        .hotText{
            display: inline-block;
            line-height: 20px;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
</style>
