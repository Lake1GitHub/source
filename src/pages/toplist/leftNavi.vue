<template>
    <aside class='left'>
        <div>
            <nav>
                云音乐特色榜
            </nav>
            <section :class='{hoverGray: isCur(index)}' v-for='(song, index) in specialSongs' @click='colChange(index)'>
                <span class='imgBox left'>
                    <img :src="imgPath + song.src" />
                    <span class='msk'></span>
                </span>
                <div class='bfc'>
                    <div class='listTitle'>{{ song.title }}</div>
                    <div class='listUpdate'>{{ song.updateTime }}</div>
                </div>
            </section>
        </div>
        <div>
            <nav>
                全球媒体榜
            </nav>
            <section :class='{hoverGray: isCur(index+4)}' v-for='(song, index) in worldSongs' @click='colChange(index+4)'>
                <span class='imgBox left'><img :src="imgPath + song.src" /></span>
                <div class='bfc'>
                    <div class='listTitle'>{{ song.title }}</div>
                    <div class='listUpdate'>{{ song.updateTime }}</div>
                </div>
            </section>
        </div>
    </aside>
</template>
<script>
let URL_CLOUMN = 'http://toplist';
export default {
    props: [
        'curColumn'
    ],
    data(){
        return {
            imgPath: 'src/assets/toplist/',
            specialSongs: [
                { index: 1, title: '云音乐飙升榜', updateTime: '每天更新', src: 'biaosheng.png', id: '100001' },
                { index: 2, title: '云音乐新歌榜', updateTime: '每天更新', src: 'xinge.png', id: '100002' },
                { index: 3, title: '网易原创歌曲榜', updateTime: '每周四更新', src: 'yuanchuang.png', id: '100003'},
                { index: 4, title: '云音乐热歌榜', updateTime: '每周四更新', src: 'rege.png', id: '100004' }
            ],
            worldSongs: [
                { index: 5, title: '云音乐电音榜', updateTime: '每周五更新', src: 'dianyin.jpg', id: '100005' },
                { index: 6, title: '云音乐嘻哈榜', updateTime: '刚刚更新', src: 'xiha.png', id: '100006' },
                { index: 7, title: '云音乐ACG音乐榜', updateTime: '每周四更新', src: 'acg.png', id: '100007' },
                { index: 8, title: '云音乐新电力榜', updateTime: '每周五更新', src: 'xindianli.png', id: '100008' },
                { index: 9, title: 'Beatport全球电子舞曲榜', updateTime: '每周四更新', src: 'beatport.jpg', id: '100009' },
                { index: 10, title: '日本Oricon周榜', updateTime: '每周三更新', src: 'oricon.jpg', id: '100010' },
                { index: 11, title: '云音乐古典音乐榜', updateTime: '每周四更新', src: 'gudian.png', id: '100011' },
                { index: 12, title: 'UK排行榜周榜', updateTime: '每周一更新', src: 'uk.jpg', id: '100012' },
                { index: 13, title: '美国Billboard周榜', updateTime: '每周三更新', src: 'billboard.jpg', id: '100013' },
                { index: 14, title: '法国 NRJ Vos Hits 周榜', updateTime: '刚刚更新', src: 'NRJVH.jpg', id: '100014' },
                { index: 15, title: 'iTunes榜', updateTime: '每周一更新', src: 'itunes.jpg', id: '100015' },
                { index: 16, title: 'Hit FM Top榜', updateTime: '每周一更新', src: 'hitfmtop.jpg', id: '100016' },
                { index: 17, title: '英国Q杂志中文版周榜', updateTime: '每周三更新', src: 'Qzazhi.jpg', id: '100017' },
                { index: 18, title: '电竞音乐榜', updateTime: '每周五更新', src: 'dianjing.png', id: '100018' },
                { index: 19, title: 'KTV唛榜', updateTime: '刚刚更新', src: 'KTV.jpg', id: '100019' },
                { index: 20, title: '台湾Hito排行榜', updateTime: '每周一更新', src: 'hito.jpg', id: '100020' },
                { index: 21, title: '中国TOP排行榜（港台榜）', updateTime: '每周一更新', src: 'chinaTopHK.jpg', id: '100021' },
                { index: 22, title: '中国TOP排行榜（内地榜）', updateTime: '每周一更新', src: 'chinaTop.jpg', id: '100022' },
                { index: 23, title: '香港电台中文歌曲龙虎榜', updateTime: '每周一更新', src: 'HKlonghu.jpg', id: '100023' },
                { index: 24, title: '中国嘻哈榜', updateTime: '每周五更新', src: 'chinaxiha.jpg', id: '100024' }
            ]
        }
    },
    methods: {
        isCur(index){
            return this.curColumn==index;
        },
        colChange(index){
            this.$emit('colChange', this.curColumn, index);
        }
    },
    mounted(){
    }
}
</script>
<style lang='scss' scoped>
@import 'src/styles/common.scss';
@import 'src/styles/mixin.scss';
aside{
    box-sizing: border-box;
    @include wh(240px, 100%);
    padding-bottom: 10px;
    padding-top: 25px;
    nav{
        font-size: 14px;
        font-weight: bold;
        font-family: simsun;
        padding: 10px;
        margin-left: 5px;
    }
    section{
        padding: 10px 20px;
        font-size: 12px;
        &:hover{
            cursor: pointer;
            background-color: #f4f2f2;
        }
        .imgBox{
            width: 40px;
            height: 40px;
        }
        .msk{

        }
        .listTitle{
            margin-left: 10px;
        }
        .listUpdate{
            margin-top: 8px;
            margin-left: 10px;
            color: gray;
        }
    }
}
.hoverGray{
    background-color: lightgray;
    &:hover{
        background-color: lightgray;
    }
}
</style>
