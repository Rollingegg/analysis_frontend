<template>
    <a-layout id="container">
        <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
            <div class="logo" @click="back2home">
                <img class="logo-img" src="../assets/logo.svg" alt="ETL">
            </div>
            <a-menu theme="dark" mode="inline" :default-selected-keys="[$route.name]">

                <a-sub-menu key="group">
                    <span slot="title"><a-icon type="shop"/><span>集团总览</span></span>
                    <a-menu-item key="take_outIncome">
                        <router-link to="/group/take_out">
                            每月外卖收入
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="shopIncome">
                        <router-link to="/group/shop">
                            每日电商收入
                        </router-link>
                    </a-menu-item>
                </a-sub-menu>
<!--                <a-menu-item key="user">-->
<!--                    <router-link to="/user">-->
<!--                        <a-icon type="user"/>-->
<!--                        <span class="nav-text">用户主题</span>-->
<!--                    </router-link>-->
<!--                </a-menu-item>-->
                <a-menu-item key="order">
                    <router-link to="/order">
                        <a-icon type="account-book"/>
                        <span class="nav-text">订单主题</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="product">
                    <router-link to="/product">
                        <a-icon type="appstore-o"/>
                        <span class="nav-text">商品主题</span>
                    </router-link>
                </a-menu-item>
                <a-sub-menu key="take_out">
                    <span slot="title"><a-icon type="bar-chart"/><span>外卖主题</span></span>
                    <a-menu-item key="supplier">
                        <router-link to="/take_out/supplier">
                            每月外卖商家流水
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="supplierRank">
                        <router-link to="/take_out/rank">
                            每月外卖商家排行
                        </router-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="flow">
                    <span slot="title"><a-icon type="cloud"/><span>流量主题</span></span>
                    <a-menu-item key="activeUser">
                        <router-link to="/flow/active-user">
                            日活跃用户数
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="province">
                        <router-link to="/flow/province">
                            日流量省份分布
                        </router-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="about">
                    <router-link to="/about">
                        <a-icon type="info-circle"/>
                        <span class="nav-text">关于我们</span>
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '200px' }">
            <a-layout-header :style="{ background: '#fff', padding: 0 }">
                <div class="title">NJUSE 数据集成项目分析</div>
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
                <div class="main">
                    <transition name="fade-transform" mode="out-in">
                        <router-view/>
                    </transition>
                </div>
            </a-layout-content>
            <a-layout-footer :style="{ textAlign: 'center' }">
                <div class="copyright">
                    Copyright
                    <a-icon type="copyright"/>
                    <span v-html="copyright"></span>
                </div>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
// @ is an alias to /src

import { mapState } from 'vuex'

/**
 * @see HeaderBar
 */
export default {
    name: 'Home',
    data () {
        return {
            authorList: []
        }
    },
    components: {},
    computed: {
        ...mapState({
            copyright: state => state.copyright
        })
    },
    mounted () {
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
<style lang="less" scoped>
@title-font-size: 32px;
#container {
    min-height: 100vh;
    /* fade-transform */

    .fade-transform-leave-active,
    .fade-transform-enter-active {
        transition: all .5s;
    }

    .fade-transform-enter {
        opacity: 0;
        transform: translateX(-30px);
    }

    .fade-transform-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    /*logo*/

    .logo {
        height: 48px;
        /*background: rgba(255, 255, 255, 0.2);*/
        margin: 8px 16px;

        :hover {
            cursor: pointer;
        }

        .logo-img {
            width: 100%;
            height: 100%;
        }
    }

    .title {
        font-size: @title-font-size;
        color: rgba(132, 21, 121, 0.85);
        font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
        font-weight: 600;
        position: relative;
        text-align: center;
    }

    .main {
        padding: 24px;
        background: #fff
    }

    .copyright {
        color: rgba(0, 0, 0, .45);
        font-size: 14px;

        i {
            font-size: .8rem !important;
        }
    }

    &a {
        text-decoration: none;
    }
}
</style>
