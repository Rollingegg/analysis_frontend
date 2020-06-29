<template>
    <div class="header">
        <div class="label">
            <img src="@/assets/logo.png" class="logo" alt="logo" @click="back2home"/>
            <span class="title">NJUSE 数据集成项目分析</span>
        </div>
        <a-menu v-model="current" mode="horizontal" theme="light">
            <a-menu-item key="1">
                <router-link to="/home">
                    <a-icon type="home"/>
                    首页
                </router-link>
            </a-menu-item>
            <a-menu-item key="2">
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
            current: ['1'],
            route: this.$route.name
        }
    },
    mounted () {
        if (this.$route.name === 'home') {
            this.current = ['1']
        } else if (this.$route.name === 'about') {
            this.current = ['2']
        }
    },
    updated () {
        if (this.$route.name === 'home') {
            this.current = ['1']
        } else if (this.$route.name === 'about') {
            this.current = ['2']
        }
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
.header {
    display: flex;
    line-height: 44px;
    height: 44px;
    align-items: center;
    justify-content: space-between;
    background-color: white;

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
            font-size: 33px;
            color: rgba(0, 0, 0, 0.85);
            font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
        }
    }
}
</style>
