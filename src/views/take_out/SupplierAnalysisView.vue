<template>
    <a-card :bordered="false">
        <div style="text-align: center;margin-bottom: 10px">
            <a-select default-value="餐厅0" style="width: 300px" @change="handleChange">
                <a-select-option v-for="i in 50" :key="`餐厅${i-1}`">
                    {{`餐厅${i-1}`}}
                </a-select-option>
            </a-select>
        </div>
        <supplier-income-month-graph height="600px" :search-name="searchSupplierName"/>
    </a-card>
</template>

<script>
import SupplierIncomeMonthGraph from '@/components/graphs/SupplierIncomeMonthGraph'

export default {
    name: 'SupplierAnalysisView',
    data () {
        return {
            searchSupplierName: '餐厅0'
        }
    },
    components: { SupplierIncomeMonthGraph },
    methods: {
        handleChange (val) {
            this.searchSupplierName = val
        }
    }
}
</script>

<style scoped>

</style>
