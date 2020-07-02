<template>
    <a-card :hoverable="true" :bordered="false">
        <area-stack-graph height="600px"/>
    </a-card>
</template>

<script>
import AreaStackGraph from '@/components/graphs/AreaStackGraph'

export default {
    name: 'DailyActiveUserView',
    components: { AreaStackGraph }
}
</script>

<style scoped>

</style>
