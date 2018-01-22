var Mock = require('mockjs');
var Random = Mock.Random;
const LOGIN = 'http://g.cn';
const PIC_SLIDER = 'http://picSlider.cn';
const PIC_HOT = 'http://picHot.cn';
const TOP_LIST = 'http://toplist.cn';
const TOP_LIST_BIAOSHENG = 'http://toplist.cn/key=0';
const TOP_LIST_XINGE = 'http://toplist.cn?key=1';
const TOP_LIST_YUANCHUANG = 'http://toplist.cn?key=2';
const TOP_LIST_REGE = 'http://toplist.cn?key=3';
const TOP_LIST_DIANYIN = 'http://toplist.cn?key=4';
const TOP_LIST_XIHA = 'http://toplist.cn?key=5';
const TOP_LIST_ACG = 'http://toplist.cn?key=6';
const TOP_LIST_XINDIANLI = 'http://toplist.cn?key=7';
const TOP_LIST_BEATPORT = 'http://toplist.cn?key=8';
const TOP_LIST_ORICON = 'http://toplist.cn?key=9';
const TOP_LIST_GUDIAN = 'http://toplist.cn?key=10';
const TOP_LIST_UK = 'http://toplist.cn?key=11';
const TOP_LIST_BILLBOARD = 'http://toplist.cn?key=12';
const TOP_LIST_NRJVH = 'http://toplist.cn?key=13';
const TOP_LIST_ITUNES = 'http://toplist.cn?key=14';
const TOP_LIST_HITFMTOP = 'http://toplist.cn?key=15';
const TOP_LIST_QZAZHI = 'http://toplist.cn?key=16';
const TOP_LIST_DIANJING = 'http://toplist.cn?key=17';
const TOP_LIST_KTV = 'http://toplist.cn?key=18';
const TOP_LIST_HITO = 'http://toplist.cn?key=19';
const TOP_LIST_CHINATOPHK = 'http://toplist.cn?key=20';
const TOP_LIST_CHINATOP = 'http://toplist.cn?key=21';
const TOP_LIST_HKLONGHU = 'http://toplist.cn?key=22';
const TOP_LIST_CHINAXIHA = 'http://toplist.cn?key=23';
const TOP_LIST_ARRAY = [{
    title: '云音乐飙升榜',
    src: 'src/assets/toplist/biaosheng.png'
},{
    title: '云音乐新歌榜',
    src: 'src/assets/toplist/xinge.png'
},{
    title: '网易原创歌曲榜',
    src: 'src/assets/toplist/yuanchuang.png'
},{
    title: '云音乐热歌榜',
    src: 'src/assets/toplist/rege.png'
},{
    title: '云音乐电音榜',
    src: 'src/assets/toplist/dianyin.jpg'
},{
    title: '云音乐嘻哈榜',
    src: 'src/assets/toplist/xiha.png'
},{
    title: '云音乐ACG音乐榜',
    src: 'src/assets/toplist/acg.png'
},{
    title: '云音乐新电力榜',
    src: 'src/assets/toplist/xindianli.png'
},{
    title: 'Beatport全球电子舞曲榜',
    src: 'src/assets/toplist/beatport.jpg'
},{
    title: '日本Oricon周榜',
    src: 'src/assets/toplist/oricon.jpg'
},{
    title: '云音乐古典音乐榜',
    src: 'src/assets/toplist/gudian.png'
},{
    title: 'UK排行榜周榜',
    src: 'src/assets/toplist/uk.jpg'
},{
    title: '美国Billboard周榜',
    src: 'src/assets/toplist/billboard.jpg'
},{
    title: '法国 NRJ Vos Hits 周榜',
    src: 'src/assets/toplist/NRJVH.jpg'
},{
    title: 'iTunes榜',
    src: 'src/assets/toplist/itunes.jpg'
},{
    title: 'Hit FM Top榜',
    src: 'src/assets/toplist/hitfmtop.jpg'
},{
    title: '英国Q杂志中文版周榜',
    src: 'src/assets/toplist/Qzazhi.jpg'
},{
    title: '电竞音乐榜',
    src: 'src/assets/toplist/dianjing.png'
},{
    title: 'KTV唛榜',
    src: 'src/assets/toplist/KTV.jpg'
},{
    title: '台湾Hito排行榜',
    src: 'src/assets/toplist/hito.jpg'
},{
    title: '中国TOP排行榜（港台榜）',
    src: 'src/assets/toplist/chinaTopHK.jpg'
},{
    title: '中国TOP排行榜（内地榜）',
    src: 'src/assets/toplist/chinaTop.jpg'
},{
    title: '香港电台中文歌曲龙虎榜',
    src: 'src/assets/toplist/HKlonghu.jpg'
},{
    title: '中国嘻哈榜',
    src: 'src/assets/toplist/chinaxiha.jpg'
}]

Mock.mock(LOGIN,{
    'name': '@name',
    'age|1-100': 100,
    'level|1-10': 10,
    'action|1-100': 100,
    'followers|1-100': 100,
    'following|1-100': 100,
    'color': '@color',
    'img': Random.image('30x30')
});
Mock.mock(PIC_SLIDER, {
    'albums|10': [
        { link: '123', listen: '123', 'name': ()=>Random.sentence(8, 16), artist: ()=>Random.name(), src: ()=>Random.image('100x100') },
    ]
});
Mock.mock(PIC_HOT, {
    'hots|8':[
        { src: ()=>Random.image('140x140'), to: '/discover/playlist', count: ()=>Random.natural(100, 10000), text: ()=>Random.csentence(10, 20) }
    ]
});

let index = 0;
let objData = {};
objData.songsTopRank = [];
objData.listData = [];
for(let i=1; i<101; i++){
    objData.songsTopRank[i-1] = {
        'sortBy': ()=>i,
        'src': ()=>{if(i<=3) return Random.image('50x50');},
        'songsName': ()=>Random.csentence(4,10),
        'songsDesc': ()=>Random.csentence(8, 20),
        'isOld': ()=>Random.boolean(0, 1), isUp: ()=>Random.boolean(0, 1),
        'rankChange': ()=>Random.natural(1, 50),
        'time': ()=>Random.time('mm:ss'),
        'singer': ()=>Random.name(),
        'isHover': false
    };
}
objData.listData = {
    'title': TOP_LIST_ARRAY,
    'headImg': 'src/assets/toplist/biaosheng.png',
    'addCount': ()=>Random.natural(1, 1000000),
    'shareCount': ()=>Random.natural(1, 10000),
    'recommendCount': ()=>Random.natural(1, 100000),
    'songsCount': 100,
    'playTimes': ()=>Random.natural(100000000, 1000000000),
    'lastUpdate': ()=>Random.date('MM月dd日'),
    'updateTime': ()=>'('+Random.csentence(4, 5)+')'
}
let url = 'http://toplist.cn?key=';
 Mock.mock(TOP_LIST, objData);
 for(let i = 0; i < 24; i++){
     objData.listData = {
         'title': TOP_LIST_ARRAY[i].title,
         'headImg': TOP_LIST_ARRAY[i].src,
         'addCount': ()=>Random.natural(1, 1000000),
         'shareCount': ()=>Random.natural(1, 10000),
         'recommendCount': ()=>Random.natural(1, 100000),
         'songsCount': 100,
         'playTimes': ()=>Random.natural(100000000, 1000000000),
         'lastUpdate': ()=>Random.date('MM月dd日'),
         'updateTime': ()=>'('+Random.csentence(4, 5)+')'
     }
     Mock.mock(url+i, Object.assign({}, objData));
 }
