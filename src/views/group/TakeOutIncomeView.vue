<template>
    <a-card :bordered="false" style="background-color: #293042">
        <group-income-graph height="600px" title="外卖部门收入流水" fetch-api="/order/takeout"/>
    </a-card>
</template>

<script>
import GroupIncomeGraph from '@/components/graphs/GroupIncomeGraph'

export default {
    name: 'TakeOutIncomeView',
    components: { GroupIncomeGraph }
}
</script>

<style scoped>

</style>
