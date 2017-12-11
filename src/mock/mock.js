var Mock = require('mockjs');
var Random = Mock.Random;
module.exports = Mock.mock('http://g.cn',{
    'name': '@name',
    'age|1-100': 100,
    'level|1-10': 10,
    'action|1-100': 100,
    'followers|1-100': 100,
    'following|1-100': 100,
    'color': '@color',
    'img': Random.image('30x30')
})
