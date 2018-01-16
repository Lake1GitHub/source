var Mock = require('mockjs');
var Random = Mock.Random;
const LOGIN = 'http://g.cn';
const PIC_SLIDER = 'http://picSlider.cn';
const PIC_HOT = 'http://picHot.cn';
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
    'albums': [
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
    ]
});
Mock.mock(PIC_HOT, {
    'hots':[
        { src: 'src/assets/songs/pic1.jpg', to: '/discover/playlist', count: '100', text: '北欧后摇氛围,如梦似幻的落寞之旅' },
        { src: 'src/assets/songs/pic2.jpg', to: '/discover/playlist', count: '200', text: '[独立女嗓] 许你一场浮生若梦'},
        { src: 'src/assets/songs/pic3.jpg', to: '/discover/playlist', count: '300', text: '我知道风里有诗，那正是民谣的歌。'},
        { src: 'src/assets/songs/pic4.jpg', to: '/discover/playlist', count: '400', text: '霓虹回忆（六十至八十年代）-2'},
        { src: 'src/assets/songs/pic5.jpg', to: '/discover/playlist', count: '500', text: '【怀疑耳机坏了系列】耳机你对耳朵做了什么'},
        { src: 'src/assets/songs/pic6.jpg', to: '/discover/playlist', count: '600', text: '马戏 : 谁在钢丝上行走？'},
        { src: 'src/assets/songs/pic7.jpg', to: '/discover/playlist', count: '700', text: '论正确背诗的方式【文言已补充】'},
        { src: 'src/assets/songs/pic8.jpg', to: '/discover/playlist', count: '800', text: '不后悔，我们爱过'}
    ]
})
