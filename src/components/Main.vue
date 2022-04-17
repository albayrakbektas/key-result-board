<template>
  <div>
    <Header />
    <Table />
    <div class="grid w-250 h-150">
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
  </div>
</template>

<script>
import Table from "./Table.vue";
import Header from "./Header.vue";
export default {
  name: "Main",
  components: {Header, Table}
}
</script>

<style scoped>

</style>