var Mock = require('mockjs');
var Random = Mock.Random;
const PLAY_LIST = 'http://playlist.com';
Mock.mock(PLAY_LIST, {
    'datas|7': [
        [{ src: ()=>Random.image('140x140'), listen: ()=>Random.natural(1000, 100000), text: ()=>Random.csentence(5, 10), author: ()=>Random.cname() },
        { src: ()=>Random.image('140x140'), listen: ()=>Random.natural(1000, 100000), text: ()=>Random.csentence(5, 10), author: ()=>Random.cname() },
        { src: ()=>Random.image('140x140'), listen: ()=>Random.natural(1000, 100000), text: ()=>Random.csentence(5, 10), author: ()=>Random.cname() },
        { src: ()=>Random.image('140x140'), listen: ()=>Random.natural(1000, 100000), text: ()=>Random.csentence(5, 10), author: ()=>Random.cname() },
        { src: ()=>Random.image('140x140'), listen: ()=>Random.natural(1000, 100000), text: ()=>Random.csentence(5, 10), author: ()=>Random.cname() }]
    ]
});
