<template>
    <div class="sup-rank">
        <div class="page-title">外卖商家每月排行</div>
        <div class="cal-select">
            <div style="font-size: 18px">选择查看月份(范围：2019/12~2020/05)</div>
            <div>
                <a-month-picker @change="onChange" v-model="searchDate" format="YYYY-MM">
                    <a-icon slot="suffixIcon" type="smile"/>
                </a-month-picker>
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
import moment from 'moment'

export default {
    name: 'SupplierRankView',
    components: { RankCard },
    data () {
        return {
            searchDate: moment('2020-01'),
            fetchParams: [{
                rankTitle: '餐厅流行度排行',
                rankDescription: '订单数',
                fetchApi: '/supplier/popular'
            }]
        }
    },
    methods: {
        onChange (date, dateString) {
            this.$store.commit('set_currentSearchDate', date.format('YYYY-MM'))
        }
    }
}
</script>

<style scoped lang="less">

.sup-rank {
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
