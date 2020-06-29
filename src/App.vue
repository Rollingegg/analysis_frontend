<template>
    <div id="app" v-title data-title="NJUSE数据集成项目分析">
        <a-layout id="container">
            <header-bar/>
            <a-layout-content>
                <transition name="fade-transform" mode="out-in">
                    <router-view/>
                </transition>
            </a-layout-content>

            <a-layout-footer style="padding: .29rem 0" class="copyright">
                <footer-bar :copyright="copyright"/>
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import { mapState } from 'vuex'

export default {
    name: 'App',
    components: {
        HeaderBar,
        FooterBar
    },
    computed: {
        ...mapState({
            copyright: state => state.copyright
        })
    }
}
</script>
<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
#container{
    min-height: 100vh;
}
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
</style>
