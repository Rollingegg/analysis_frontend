<template>
    <common-echart chartId="supplier-income-month-graph"
                   :height="height"
                   width="100%"
                   :options="options"/>
</template>

<script>
import CommonEchart from '../common/CommonEchart'

/**
 * @description 供应商每月流水图
 * @param {String} height 图高度
 * @param {String} searchName 餐厅名称
 * @see CommonEchart Echart包装
 */
export default {
    name: 'SupplierIncomeGraph',
    components: {
        CommonEchart
    },
    data () {
        return {
            incomeData: []
        }
    },
    props: {
        height: String,
        searchName: String
    },
    watch: {
        searchName () {
            this.fetchSupplierIncome()
        }
    },
    mounted () {
        this.fetchSupplierIncome()
    },
    methods: {
        async fetchSupplierIncome () {
            try {
                const res = await this.$get('/supplier/income',
                    { supplierName: this.searchName })
                if (res.data) {
                    this.incomeData = res.data
                } else {
                    this.$message.error('获取数据失败')
                }
            } catch (e) {
                this.$message.error(`获取数据失败: ${e}`)
            } finally {
                this.loading = false
            }
        }
    },
    computed: {
        category () {
            const category = []
            this.incomeData.forEach(e => {
                category.push(e.date)
            })
            return category
        },
        highOrders () {
            const highList = []
            this.incomeData.forEach(e => {
                highList.push(e.highDiscountNum)
            })
            return highList
        },
        lowOrders () {
            const lowList = []
            this.incomeData.forEach(e => {
                lowList.push(e.lowDiscountNum)
            })
            return lowList
        },
        orderAmountData () {
            const orderAmounts = []
            this.incomeData.forEach(e => {
                orderAmounts.push(e.amount)
            })
            return orderAmounts
        },
        options () {
            return {
                title: {
                    text: `2019-2020外卖业务 ${this.searchName} 流水`,
                    textStyle: {
                        align: 'center',
                        color: 'blue',
                        fontSize: 20
                    },
                    top: '0',
                    left: '0'
                },
                grid: {
                    top: '10%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        dataView: {
                            show: true,
                            readOnly: false
                        },
                        magicType: {
                            show: true,
                            type: ['line', 'bar']
                        },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    data: ['折扣力度大的订单数', '折扣力度小的订单数', '销售额']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.category,
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '订单数',
                        axisLabel: {
                            formatter: '{value} 则'
                        }
                    },
                    {
                        type: 'value',
                        name: '销售额',
                        axisLabel: {
                            formatter: '{value} 元'
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                dataZoom: [{
                    xAxisIndex: [0],
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z'
                }],
                series: [
                    {
                        name: '折扣力度大的订单数',
                        type: 'bar',
                        data: this.highOrders,
                        stack: '订单数'
                    },
                    {
                        name: '折扣力度小的订单数',
                        type: 'bar',
                        barMaxWidth: 30, // 柱子的宽度
                        data: this.lowOrders,
                        stack: '订单数'
                    },
                    {
                        name: '销售额',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                        data: this.orderAmountData
                    }
                ]
            }
        }
    }
}
</script>
