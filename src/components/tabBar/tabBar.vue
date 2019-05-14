<style rel="stylesheet/less" lang="less">
.ui-tab-bar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .ui-list, .ui-my{
        flex: 1;
        height: rem(40px);
        text-align: center;
        line-height: rem(40px);
    }
}
</style>

<template>
  <div class="ui-tab-bar">
      
    <div class="ui-list">
        <router-link to="/">全部课程</router-link>
    </div>
    <div class="ui-my">
        <router-link to="/my">我的</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
}
</script>

<style>
.box{
    background: red;
    width: 200px;
}
</style>
