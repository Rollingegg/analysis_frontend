<template>
    <div class="header">
        <div class="label">
            <img src="@/assets/logo.png" class="logo" alt="logo" @click="back2home"/>
            <span class="title">NJUSE 数据集成项目分析</span>
        </div>
        <a-menu :default-selected-keys="[route||'Home']" mode="horizontal" theme="light">
            <a-menu-item key="Home">
                <router-link to="/home">
                    <a-icon type="home"/>
                    首页
                </router-link>
            </a-menu-item>
            <a-menu-item key="About">
                <router-link to="/about">
                    <a-icon type="user"/>
                    个人中心
                </router-link>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
    name: 'HeaderBar',
    data () {
        return {
            route: this.$route.name
        }
    },
    mounted () {
        // if (this.$route.name === 'home') {
        //     this.current = ['1']
        // } else if (this.$route.name === 'about') {
        //     this.current = ['2']
        // }
        console.log(this.route)
    },
    updated () {
        // if (this.$route.name === 'home') {
        //     this.current = ['1']
        // } else if (this.$route.name === 'about') {
        //     this.current = ['2']
        // }
    },
    methods: {
        back2home () {
            if (this.$route.path !== '/home') {
                this.$router.push({ path: '/' })
            }
        }
    }
}
</script>

<style scoped lang="less">
@line-height: 48px;
@title-font-size: 28px;
.header {
    display: flex;
    line-height: @line-height;
    height: @line-height;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 0 20px;

    .label {
        height: 44px;
        line-height: 44px;
        vertical-align: middle;
        min-width: 400px;

        .logo {
            height: 44px;
            vertical-align: top;
            margin-right: 16px;
            border-style: none;
            cursor: pointer;
        }

        .title {
            font-size: @title-font-size;
            color: rgba(0, 0, 0, 0.85);
            font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
        }
    }
}
</style>
