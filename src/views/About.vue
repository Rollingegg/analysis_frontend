<template>
    <div class="section-container">
        <div class="section">
            <div class="section-title">技术栈</div>
            <div class="section-card-container">
                <a-card @click="open('https://sqoop.apache.org/')" class="data-card" title="Sqoop"
                        :head-style="{fontSize: '24px',fontWeight: '400'}">
                    <a-avatar slot="extra" shape="square" size="large" src="https://sqoop.apache.org/favicon.ico"/>
                    <div class="card-info-item">
                        Sqoop是一款开源的工具，主要用于在Hadoop(Hive)与传统的数据库(mysql、postgresql...)间进行数据的传递，可以将一个关系型数据库（例如 ： MySQL
                        ,Oracle ,Postgres等）中的数据导进到Hadoop的HDFS中，也可以将HDFS的数据导进到关系型数据库中。
                    </div>
                </a-card>
                <a-card @click="open('https://hadoop.apache.org/')" class="data-card" title="Hadoop"
                        :head-style="{fontSize: '24px',fontWeight: '400'}">
                    <a-avatar slot="extra" shape="square" size="large" src="https://hadoop.apache.org/elephant.png"/>
                    <div class="card-info-item">
                        Hadoop是一个由Apache基金会所开发的分布式系统基础架构。用户可以在不了解分布式底层细节的情况下，开发分布式程序。充分利用集群的威力进行高速运算和存储。Hadoop实现了一个分布式文件系统（Hadoop
                        Distributed File System），简称HDFS。HDFS有高容错性的特点，并且设计用来部署在低廉的（low-cost）硬件上。
                    </div>
                </a-card>
                <a-card @click="open('http://flume.apache.org/')" class="data-card" title="Flume"
                        :head-style="{fontSize: '24px',fontWeight: '400'}">
                    <a-avatar slot="extra" shape="square" size="large" src="https://sqoop.apache.org/favicon.ico"/>
                    <div class="card-info-item">
                        Flume是Cloudera提供的一个高可用的，高可靠的，分布式的海量日志采集、聚合和传输的系统，Flume支持在日志系统中定制各类数据发送方，用于收集数据；同时，Flume提供对数据进行简单处理，并写到各种数据接受方（可定制）的能力。
                    </div>
                </a-card>
                <a-card @click="open('https://hive.apache.org/')" class="data-card" title="Hadoop"
                        :head-style="{fontSize: '24px',fontWeight: '400'}">
                    <a-avatar slot="extra" shape="square" size="large" src="https://hive.apache.org/images/hive_logo_medium.jpg"/>
                    <div class="card-info-item">
                        hive是基于Hadoop构建的一套数据仓库分析系统，它提供了丰富的SQL查询方式来分析存储在Hadoop分布式文件系统中的数据：可以将结构化的数据文件映射为一张数据库表，并提供完整的SQL查询功能；可以将SQL语句转换为MapReduce任务运行，通过自己的SQL查询分析需要的内容，这套SQL简称Hive
                        SQL，使不熟悉mapreduce的用户可以很方便地利用SQL语言‘查询、汇总和分析数据。
                    </div>
                </a-card>
            </div>
        </div>
        <div class="section">
            <div class="section-title">数据来源</div>
            <div class="section-card-container">
                <a-card class="data-card" title="某电商应用" :head-style="{fontSize: '24px',fontWeight: '400'}">
                    <a-icon slot="extra" type="shop" :style="{fontSize: '36px' }"/>
                    <div class="card-info-item">
                        数据库（MySQL）：
                        <br/>
                        用户基本信息数据；商品信息；订单数据
                    </div>
                    <div class="card-info-item">
                        外部数据（csv）：
                        <br/>
                        商品成本表
                    </div>
                    <div class="card-info-item">
                        日志（log）：
                        <br/>
                        网站埋点日志
                    </div>
                </a-card>
                <a-card class="data-card" title="某外卖应用" :head-style="{fontSize: '24px',fontWeight: '400'}">
                    <a-icon slot="extra" type="account-book" :style="{fontSize: '36px'}"/>
                    <div class="card-info-item">
                        数据库（MySQL）：
                        <br/>
                        用户基本信息，商家信息，用户下单数据
                    </div>
                </a-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'About',
    methods: {
        open (url) {
            window.open(url)
        }
    }
}
</script>

<style scoped lang="less">
.section-container {
    .section {
        margin-bottom: 60px;

        .section-title {
            text-align: center;
            font-size: 30px;
            font-weight: 400;
            margin-bottom: 30px;
        }

        .section-card-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;

            .data-card {
                margin: 10px;
                min-height: 260px;
                width: 300px;
                color: rgba(0, 0, 0, .6);
                font-size: 16px;

                &:hover {
                    cursor: pointer;
                    background-color: #1890ff;
                    color: #fff;
                }

                .card-info-item {
                    padding-bottom: 10px;
                }
            }

        }
    }
}
</style>
