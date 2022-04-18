<template>
  <div class="w-full">
    <Header class="w-full"/>
    <Table />
    <div class="grid w-250 h-150 absolute z-10">
      <div>Period of Nov 14-20</div>
      <div class="grid grid-cols-3">
        <p>Last Week</p>
        <p>Next Week</p>
        <p>Changes</p>
      </div>
      <div class="grid grid-cols-3">
        <div class="block">
          <p>60(%60)</p>
          <div class="flex justify-center">
            <div class="bg-green-500 w-2 h-2"></div>
            <p>On Track</p>
          </div>
        </div>
        <div class="block">
          <p>70(%70)</p>
          <div class="flex justify-center">
            <div class="bg-green-500 w-2 h-2"></div>
            <p>On Track</p>
          </div>
        </div>
        <div class="flex justify-center">
          <p>19(%19)</p>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="bg-green-500 w-2 h-2"></div>
        <p>View Activity</p>
      </div>
    </div>
    <div ref="tooltip" id="tooltip-default" role="tooltip" class="mt-10 inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700 relative">
      Tooltip content
      <div class="tooltip-arrow  relative" data-popper-arrow></div>
    </div>
    <button @mouseover="showTool" @mouseleave="hideTool" data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>

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