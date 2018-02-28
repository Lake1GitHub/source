<template>
    <div class='container'>
        <ul class='slider'>
            <li v-for='(icon, index) in icons'>
                <a>
                    <i>
                    </i>
                    <span></span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            icons:[
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    }
}
</script>
<style lang='scss' scoped>
@import '../../styles/common.scss';
@import '../../styles/mixin.scss';
i{
    @include wh(27px, 32px);
}
.slider{
    @for $i from 1 through 20{
        li:nth-of-type(#{$i}) i{
            @include sprites('../../assets/djradio/icon#{$i}.png', -10px, -8px);
        }
    }
    // li:nth-of-type(1) i{
    //     @include sprites('../../assets/djradio/icon1.png', -10px, -8px);
    // }
    // li:nth-of-type(2) i{
    //     @include sprites('../../assets/djradio/icon2.png', -10px, -8px);
    // }
    // li:nth-of-type(3) i{
    //     @include sprites('../../assets/djradio/icon3.png', -10px, -8px);
    // }
}
ul{
    margin-left: 100px;
}
</style>
