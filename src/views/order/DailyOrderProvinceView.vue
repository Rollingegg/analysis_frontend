<template>
    <a-card :hoverable="true" :bordered="false">
        <common-echart chart-id="daily-order-province-graph"
                       height="600px"
                       width="100%"
                       :options="options"
        />
    </a-card>
</template>

<script>
import CommonEchart from '@/components/common/CommonEchart'

export default {
    name: 'DailyOrderProvinceView',
    components: {
        CommonEchart
    },
    data () {
        return {
            flowData: []
        }
    },
    mounted () {
        this.fetchFlowData()
    },
    methods: {
        async fetchFlowData () {
            try {
                const res = await this.$get('/flow/area')
                if (res.data) {
                    this.flowData = res.data
                } else {
                    this.$message.error('获取数据失败')
                }
            } catch (e) {
                this.$message.error(`获取数据失败: ${e}`)
            }
        }
    },
    computed: {
        options () {
            const days = []
            const province = ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '海南', '广西', '甘肃', '陕西', '新疆', '青海', '宁夏', '重庆', '四川', '贵州', '云南', '西藏', '台湾', '澳门', '香港']
            const news = []
            const data = []

            for (let i = 0; i < 30 && i < this.flowData.length; i++) {
                const tmpArr = []
                const tmpDate = this.flowData[30 * i].dateTime
                days.push(`${String(tmpDate).substr(5, 2)}月${String(tmpDate).substr(8, 2)}`)
                for (let j = 0; j < 34 && 30 * i + j < this.flowData.length; j++) {
                    tmpArr.push(this.flowData[30 * i + j].buyAmount)
                }
                data.push(tmpArr)
            }
            days.forEach(e => {
                news.push('电商部门销售额地域分布')
            })
            const option = {
                baseOption: {
                    timeline: {
                        axisType: 'category',
                        // realtime: false,
                        // loop: false,
                        autoPlay: true,
                        playInterval: 2000,
                        symbolSize: 12,
                        left: '5%',
                        right: '5%',
                        bottom: '0%',
                        width: '90%',
                        // controlStyle: {
                        //     position: 'left'
                        // },
                        data: days,
                        tooltip: {
                            formatter: days
                        }
                    },

                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            return params.name + '：' + params.value
                        }
                    },
                    visualMap: {
                        type: 'piecewise',
                        pieces: [{
                            min: 100001,
                            color: '#191970'
                        },
                        {
                            min: 50001,
                            max: 100000,
                            color: '#6A5ACD'
                        },
                        {
                            min: 10001,
                            max: 50000,
                            color: '#4B0082'
                        },
                        {
                            min: 1001,
                            max: 10000,
                            color: '#8B008B'
                        },
                        {
                            min: 101,
                            max: 1000,
                            color: '#FF00FF'
                        },
                        {
                            min: 1,
                            max: 100,
                            color: '#DDA0DD'
                        },
                        {
                            value: 0,
                            color: 'white'
                        }
                        ],
                        orient: 'vertical',
                        itemWidth: 25,
                        itemHeight: 15,
                        showLabel: true,
                        seriesIndex: [0],

                        textStyle: {
                            color: '#7B93A7'
                        },
                        bottom: '10%',
                        left: '5%'
                    },
                    grid: {
                        right: '5%',
                        top: '20%',
                        bottom: '10%',
                        width: '20%'
                    },
                    xAxis: {
                        show: false
                    },
                    yAxis: [{
                        inverse: true,
                        offset: '2',
                        type: 'category',
                        data: '',
                        nameTextStyle: {
                            color: '#fff'
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            // rotate:45,
                            textStyle: {
                                fontSize: 14,
                                color: '#000000'
                            },
                            interval: 0
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#333'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#333'
                            }
                        }
                    }],
                    geo: {
                        map: 'china',
                        right: '35%',
                        left: '5%',
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                areaColor: '#00FF00'
                            }
                        }
                    },
                    series: [{
                        name: 'mapSer',
                        type: 'map',
                        map: 'china',
                        roam: false,
                        geoIndex: 0,
                        label: {
                            show: false
                        }
                    },
                    {
                        name: '',
                        type: 'bar',
                        zlevel: 2,
                        barWidth: '40%',
                        label: {
                            normal: {
                                show: true,
                                fontSize: 14,
                                position: 'right',
                                formatter: '{c}'
                            }
                        }
                    }
                    ]

                },
                animationDurationUpdate: 3000,
                animationEasingUpdate: 'quinticInOut',
                options: []
            }
            for (let n = 0; n < days.length; n++) {
                const res = []
                for (let j = 0; j < data[n].length; j++) {
                    res.push({
                        name: province[j],
                        value: data[n][j]
                    })
                }
                res.sort(function (a, b) {
                    return b.value - a.value
                }).slice(0, 6)

                res.sort(function (a, b) {
                    return a.value - b.value
                })
                const res1 = []
                const res2 = []
                for (let t = 0; t < 10; t++) {
                    res1[t] = res[res.length - 1 - t].name
                    res2[t] = res[res.length - 1 - t].value
                }
                // console.log(res1)
                // console.log('----------------')
                // console.log(province)
                option.options.push({
                    title: [{
                        text: days[n] + '日  ' + news[n],
                        textStyle: {
                            color: '#2D3E53',
                            fontSize: 28
                        },
                        left: 20,
                        top: 20
                    },
                    {
                        show: true,
                        text: '日销售额前十的省份',
                        textStyle: {
                            color: '#2D3E53',
                            fontSize: 18
                        },
                        right: '10%',
                        top: '15%'
                    }
                    ],
                    yAxis: {
                        data: res1
                    },
                    series: [{
                        type: 'map',
                        data: res
                    }, {
                        type: 'bar',
                        data: res2,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // build a color map as your need.
                                    const colorList = [{
                                        colorStops: [{
                                            offset: 0,
                                            color: '#FF0000' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: '#990000' // 100% 处的颜色
                                        }]
                                    },
                                    {
                                        colorStops: [{
                                            offset: 0,
                                            color: '#00C0FA' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: '#2F95FA' // 100% 处的颜色
                                        }]
                                    }
                                    ]
                                    if (params.dataIndex < 3) {
                                        return colorList[0]
                                    } else {
                                        return colorList[1]
                                    }
                                }
                            }
                        }
                    }]
                })
            }
            return option
        }
    }
}
</script>

<style scoped>

</style>
