<template>
    <div>
        <router-view></router-view> 
    </div>
</template>

<script>
import './mock/mock.js';
import 'babel-polyfill';
export default {
  name: 'app',
  mounted(){
  }
}
</script>
<style>
    *{ margin: 0; padding: 0;}
    #app{ background-color: rgb(245, 245, 245); }
    html{
        overflow-y: scroll;
    }
</style>
