<template>
    <a-card :hoverable="true" :bordered="false">
        <paper-year-graph height="600px" search-type="affiliation_name" :search-id="13"/>
    </a-card>
</template>

<script>
import PaperYearGraph from '@/components/graphs/PaperYearGraph'

export default {
    name: 'ScholarGraphView',
    components: {
        PaperYearGraph
    }
}
</script>

<style scoped>

</style>
