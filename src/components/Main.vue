<template>
  <div class="w-full">
    <Header class="w-full"/>
    <Table />
  </div>
</template>

<script>
import Table from "./Table.vue";
import Header from "./Header.vue";
export default {
  name: "Main",
  components: {Header, Table},
  methods: {
    showTool: function () {
      const tooltip = this.$refs.tooltip
      tooltip.classList.remove('invisible')
      tooltip.classList.remove('opacity-0')
      tooltip.classList.add('visible')
      tooltip.classList.add('opacity-1')
    },
    hideTool: function () {
      const tooltip = this.$refs.tooltip
      tooltip.classList.add('invisible')
      tooltip.classList.add('opacity-0')
      tooltip.classList.remove('visible')
      tooltip.classList.remove('opacity-1')
    }
  }
}
</script>

<style scoped>

</style>