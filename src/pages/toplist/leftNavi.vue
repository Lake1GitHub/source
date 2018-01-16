<template>
    <aside class='left'>
        <div>
            <nav>
                云音乐特色榜
            </nav>
            <section v-for='song in specialSongs'>
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
            <section v-for='song in worldSongs'>
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
export default {
    data(){
        return {
            imgPath: 'src/assets/toplist/',
            specialSongs: [
                { index: 1, title: '云音乐飙升榜', updateTime: '每天更新', src: 'biaosheng.png' },
                { index: 2, title: '云音乐新歌榜', updateTime: '每天更新', src: 'xinge.png' },
                { index: 3, title: '网易原创歌曲榜', updateTime: '每周四更新', src: 'yuanchuang.png'},
                { index: 4, title: '云音乐热歌榜', updateTime: '每周四更新', src: 'rege.png' }
            ],
            worldSongs: [
                { index: 5, title: '云音乐电音榜', updateTime: '每周五更新', src: 'dianyin.jpg' },
                { index: 6, title: '云音乐嘻哈榜', updateTime: '刚刚更新', src: 'xiha.png' },
                { index: 7, title: '云音乐ACG音乐榜', updateTime: '每周四更新', src: 'acg.png' },
                { index: 8, title: '云音乐新电力榜', updateTime: '每周五更新', src: 'xindianli.png' },
                { index: 9, title: 'Beatport全球电子舞曲榜', updateTime: '每周四更新', src: 'beatport.jpg' },
                { index: 10, title: '日本Oricon周榜', updateTime: '每周三更新', src: 'oricon.jpg' },
                { index: 11, title: '云音乐古典音乐榜', updateTime: '每周四更新', src: 'gudian.png' },
                { index: 12, title: 'UK排行榜周榜', updateTime: '每周一更新', src: 'uk.jpg' },
                { index: 13, title: '美国Billboard周榜', updateTime: '每周三更新', src: 'billboard.jpg' },
                { index: 14, title: '法国 NRJ Vos Hits 周榜', updateTime: '刚刚更新', src: 'NRJVH.jpg' },
                { index: 15, title: 'iTunes榜', updateTime: '每周一更新', src: 'itunes.jpg' },
                { index: 16, title: 'Hit FM Top榜', updateTime: '每周一更新', src: 'hitfmtop.jpg' },
                { index: 17, title: '英国Q杂志中文版周榜', updateTime: '每周三更新', src: 'Qzazhi.jpg' },
                { index: 18, title: '电竞音乐榜', updateTime: '每周五更新', src: 'dianjing.png' },
                { index: 19, title: 'KTV唛榜', updateTime: '刚刚更新', src: 'KTV.jpg' },
                { index: 20, title: '台湾Hito排行榜', updateTime: '每周一更新', src: 'hito.jpg' },
                { index: 21, title: '中国TOP排行榜（港台榜）', updateTime: '每周一更新', src: 'chinaTopHK.jpg' },
                { index: 22, title: '中国TOP排行榜（内地榜）', updateTime: '每周一更新', src: 'chinaTop.jpg' },
                { index: 23, title: '香港电台中文歌曲龙虎榜', updateTime: '每周一更新', src: 'HKlonghu.jpg'},
                { index: 24, title: '中国嘻哈榜', updateTime: '每周五更新', src: 'chinaxiha.jpg' }
            ],
            currentPage: 1
        }
    }
}
</script>
<style lang='scss' scoped>
@import 'src/styles/common.scss';
@import 'src/styles/mixin.scss';
aside{
    box-sizing: border-box;
    width: 240px;
    padding: 10px;
    padding-top: 25px;
    border-right: 1px solid lightgray;
    nav{
        font-size: 14px;
        font-weight: bold;
        font-family: simsun;
        padding: 10px 0;
        margin-left: 5px;
    }
    section{
        padding: 10px;
        font-size: 12px;
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
</style>
