<template>
    <div id="app" v-title data-title="NJUSE数据集成项目分析">
        <router-view/>
    </div>
</template>

<script>

export default {
    name: 'App'
}
</script>
<style lang="less">
#app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.ant-card:hover {
    box-shadow: 0 4px 8px 0 rgba(163, 128, 128, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    border: 2px;
}
</style>
