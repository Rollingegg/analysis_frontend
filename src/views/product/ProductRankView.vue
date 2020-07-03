<template>
    <div class="pro-rank">
        <div class="page-title">每日排行</div>
        <div class="cal-select">
            <div style="font-size: 18px">选择查看日期(范围：2020/04/01~2020/04/30)</div>
            <div>
                <a-date-picker @change="onChange" v-model="searchDate" format="YYYY-MM-DD">
                    <a-icon slot="suffixIcon" type="smile"/>
                </a-date-picker>
            </div>
        </div>
        <div class="rank-container">
            <rank-card v-for="(item,index) in fetchParams" :key="index" :fetch-api="item.fetchApi" :title="item.rankTitle"
                       :description="item.rankDescription"/>
        </div>
    </div>
</template>

<script>
import RankCard from '@/components/product/RankCard'
import { mapMutations } from 'vuex'
import moment from 'moment'

export default {
    name: 'ProductRankView',
    components: { RankCard },
    data () {
        return {
            searchDate: moment('2020-04-01'),
            fetchParams: [{
                rankTitle: '商品销量排行',
                rankDescription: '销售量（件）',
                fetchApi: '/item/sale/daily'
            }, {
                rankTitle: '商品净利润排行',
                rankDescription: '金额（￥）',
                fetchApi: '/item/profit/daily'
            }, {
                rankTitle: '最受欢迎商品排行',
                rankDescription: '购买人数',
                fetchApi: '/item/top_list/daily'
            },
            {
                rankTitle: '最受男性欢迎商品排行',
                rankDescription: '购买人数',
                fetchApi: '/item/top_list/male/daily'
            }, {
                rankTitle: '最受女性欢迎商品排行',
                rankDescription: '购买人数',
                fetchApi: '/item/top_list/female/daily'
            }]
        }
    },
    methods: {
        ...mapMutations(['set_currentSearchDate']),
        onChange (date, dateString) {
            this.$store.commit('set_currentSearchDate', date.format('YYYY-MM-DD'))
        }
    }
}
</script>

<style scoped lang="less">
.pro-rank {
    .page-title {
        font-size: 28px;
        font-weight: 400;
        text-align: center;
    }

    .cal-select {
        display: flex;
        justify-content: space-between;
        margin: 20px;
        height: 30px;
        line-height: 30px;
    }

    .rank-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
}
</style>
