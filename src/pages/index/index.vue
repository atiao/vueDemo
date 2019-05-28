<style rel="stylesheet/less" lang="less">
</style>

<template>
  <div >
    <div class="box">55555</div>
    <tab-Bar />
  </div>
</template>

<script>
import TabBar from 'components/tabBar/tabBar'
console.log('4444',TabBar)

export default {
  name: 'index',
  components: {
    TabBar,
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
   
  }
}
</script>

<style>

.box{
  font-size: 16Px;
  background: red;
  width: 200px;
  height: 200px;
  /* overflow: hidden; */
}
</style>
