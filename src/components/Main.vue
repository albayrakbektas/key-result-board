<template>
  <div class="w-full">
    <Header class="w-full" />
    <Table />
  </div>
</template>

<script>
import Table from "./Table.vue";
import Header from "./Header.vue";
export default {
  name: "Main",
  components: { Header, Table },
};
</script>

<style scoped></style>
