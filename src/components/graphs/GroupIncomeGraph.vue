<template>
    <common-echart chartId="group-income-graph"
                   :height="height"
                   width="100%"
                   :options="options"/>
</template>

<script>
import CommonEchart from '../common/CommonEchart'

export default {
    name: 'GroupIncomeGraph',
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
        fetchApi: String,
        title: String
    },
    mounted () {
        this.fetchIncome()
    },
    methods: {
        async fetchIncome () {
            try {
                const res = await this.$get(this.fetchApi)
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
                category.push(e.dateTime)
            })
            return category
        },
        orderAmountData () {
            const orderAmounts = []
            this.incomeData.forEach(e => {
                orderAmounts.push(e.income)
            })
            return orderAmounts
        },
        options () {
            return {
                title: {
                    text: this.title,
                    x: '4.5%',
                    top: '3%',
                    textStyle: {
                        color: '#5c6076'
                    }
                },
                backgroundColor: '#293042',
                grid: {
                    top: '15%',
                    containLabel: true
                },
                tooltip: {
                    show: true,
                    backgroundColor: '#384157',
                    borderColor: '#384157',
                    borderWidth: 1,
                    formatter: '{b}: {c}元',
                    extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
                },
                legend: {
                    right: '3%',
                    top: '3%',
                    data: ['金额'],
                    textStyle: {
                        color: '#5c6076'
                    }
                },
                xAxis: {
                    data: this.category,
                    boundaryGap: false,
                    axisLine: {
                        show: true
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#5c6076'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    ayisLine: {
                        show: true
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#5c6076'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#2e3547'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#384157'
                        }
                    }
                },

                series: [
                    {
                        type: 'bar',
                        name: '收入柱',

                        tooltip: {
                            show: false
                        },
                        animation: false,
                        barWidth: 1.4,
                        hoverAnimation: false,
                        data: this.orderAmountData,
                        itemStyle: {
                            normal: {
                                color: '#f17a52',
                                opacity: 0.6,
                                label: {
                                    show: false
                                }
                            }
                        }
                    },
                    {
                        type: 'line',
                        name: '收入线',
                        smooth: true,
                        symbolSize: 10,
                        animation: false,
                        lineWidth: 1.2,
                        hoverAnimation: false,
                        data: this.orderAmountData,
                        symbol: 'circle',
                        itemStyle: {
                            normal: {
                                color: '#f17a52',
                                shadowBlur: 40,
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        color: '#f17a52'

                                    }
                                }
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: '#f17a52',
                                opacity: 0.08
                            }
                        }

                    }
                ]
            }
        }
    }
}
</script>

<style scoped>

</style>
