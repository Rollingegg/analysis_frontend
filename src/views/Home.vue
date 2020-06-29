<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    data () {
        return {
            authorList: []
        }
    },
    components: {
        HelloWorld
    },
    mounted () {
        this.fetchAuthor()
    },
    methods: {
        async fetchAuthor () {
            try {
                const r = await this.$get('/statistics/maxPublishAuthor', {
                    num: 5
                })
                if (r.data.status) {
                    this.authorList = r.data.result
                    console.log(this.authorList)
                } else {
                    this.authorList = []
                }
            } catch (e) {
                this.authorList = []
                this.$message.error(e)
            }
        }
    }
}
</script>
<style lang="less">
.home {
    text-align: center;
}
</style>
