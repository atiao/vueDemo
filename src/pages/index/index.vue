<style rel="stylesheet/less" lang="less">
</style>

<template>
  <div >
    <div class="box" :class="{minwidht: flag}">
      <ul>
        <li>
          <router-link to="/detail">课程课程课程课程课程课程课程课程</router-link>
        </li>
        <li>
          <router-link to="/detail">课程课程课程课程课程课程课程课程</router-link>
        </li>
        <li>
          <router-link to="/detail">课程课程课程课程课程课程课程课程</router-link>
        </li>
        <li>
          <router-link to="/detail">课程课程课程课程课程课程课程课程</router-link>
        </li>
      </ul>
    </div>
    <div @click="change">clickbutton</div>
    <tab-Bar />
  </div>
</template>

<script>
import TabBar from 'components/tabBar/tabBar'
console.log('4444',TabBar)

export default {
  name: 'index',
  components: {
    TabBar
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
    change() {
      this.flag = !this.flag
    }
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
.minwidht{
  width: 20px;
}

</style>
