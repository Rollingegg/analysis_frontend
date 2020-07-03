<template>
    <a-card class="rank-card">
        <a-card-meta class="card-header">
            <a-icon
                slot="avatar"
                type="fund"
                :style="{fontSize: '54px'}"
            />
            <div slot="title" class="card-meta-title">{{title}}</div>
            <div slot="description" class="card-meta-des">{{description}}</div>
        </a-card-meta>
        <div class="card-content">
            <a-skeleton active :loading="loading" :paragraph="{ rows: 10 }" >
                <div class="rank-item" v-for="(item,index) in rankList" :key="index">
                    <div class="rank-item-index">{{index+1}}</div>
                    <div class="rank-item-name">
                        <a-tooltip placement="topLeft">
                            <template slot='title'>
                                {{item.name||item.supplierLocation}}
                            </template>
                            {{item.name||item.supplierName}}
                        </a-tooltip>
                    </div>
                    <div class="rank-item-value">{{item.metric||item.orderNum}}</div>
                </div>
            </a-skeleton>
        </div>
    </a-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'RankCard',
    data () {
        return {
            loading: false,
            rankList: []
        }
    },
    computed: {
        ...mapGetters(['currentSearchDate'])
    },
    watch: {
        currentSearchDate (newVal) {
            this.fetchRankList(newVal)
        }
    },
    props: {
        title: String,
        description: String,
        fetchApi: String
    },
    mounted () {
        this.fetchRankList(this.currentSearchDate)
    },
    methods: {
        async fetchRankList (searchDate) {
            this.loading = true
            try {
                const res = await this.$get(this.fetchApi, {
                    date: searchDate
                })
                if (res.data) {
                    this.rankList = res.data
                } else {
                    this.$message.error('获取数据失败')
                }
            } catch (e) {
                this.$message.error(`获取数据失败: ${e}`)
            } finally {
                this.loading = false
            }
        }
    }
}
</script>

<style scoped lang="less">
.rank-card {
    margin: 10px;
    width: 400px;
    min-height: 500px;

    .card-header {
        height: 80px;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;

        .card-meta-title {
            font-size: 20px;
            font-weight: 500;
        }

        .card-meta-des {
            font-size: 16px;
        }
    }

    .card-content {

        .rank-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            height: 40px;
            font-size: 18px;
            font-weight: 400;

            .rank-item-index {
                width: 30px;
                margin: 0 10px;
            }

            .rank-item-name {
                width: 300px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
            }

            .rank-item-value {
                /*width: 120px;*/
                margin: 0 10px;
            }
        }
    }
}
</style>
