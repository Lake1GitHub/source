<template>
    <div>
        <head-top currentPage='toplist' Chapter='discover'></head-top>
        <router-view></router-view>
        <foot></foot>
    </div>
</template>
<script>
import headTop from '../components/head.vue'
import foot from '../components/foot.vue'
import loginBox from '../components/loginBox.vue'
import axios from 'axios'
import {mapGetters, mapMutations} from 'vuex'
import '../mock/mock.js'
export default {
    data(){
        return {

        }
    },
    name: 'toplist',
    components:{
        headTop,
        foot
    },
    methods:{

    },
    mounted(){
    }
}
</script>
<style lang='scss' scoped>
</style>
