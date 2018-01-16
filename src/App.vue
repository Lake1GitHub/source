<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import './mock/mock.js'
export default {
  name: 'app'
}
</script>
<style>
    *{ margin: 0; padding: 0;}
    #app{ background-color: rgb(245, 245, 245); }
</style>
