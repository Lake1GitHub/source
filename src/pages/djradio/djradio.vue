<template>
    <div>
        <slider></slider>
    </div>
</template>
<script>
import headTop from '../../components/head.vue'
import foot from '../../components/foot.vue'
import slider from './slider.vue'
import loginBox from '../../components/loginBox.vue'
import axios from 'axios'
import {mapGetters, mapMutations} from 'vuex'
import '../../mock/mock.js'
export default {
    data(){
        return {
        }
    },
    name: 'toplist',
    components:{
        headTop,
        foot,
        slider
    },
    methods:{
    },
    mounted(){
        //console.log(this.currentPage);
    }
}
</script>
<style lang='scss' scoped>
@import '../../styles/common.scss';
@import '../../styles/mixin.scss';
</style>
