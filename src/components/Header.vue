<template>
  <div class="flex justify-between border-b-2 h-50">
    <div class="flex h-full">
      <div class="flex h-full">
        <p>Key Result Board</p>
        <ChevronDownIcon class="h-7 w-7 cursor-pointer text-gray-600" />
      </div>
      <div class="border-l-2 border-r-2 h-full w-50 align-middle pt-3">
        <PlusIcon class="cursor-pointer text-gray-600 w-7 h-7 m-auto align-middle" />
      </div>
    </div>
    <div class="flex cursor-pointer bg-primary h-full">
      <PlusIcon class="h-7 w-7 cursor-pointer text-white mr-2" />
      <p class="text-white font-bold">Add Widget</p>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon, PlusIcon } from "@heroicons/vue/solid";
export default {
  name: "Header",
  components: { ChevronDownIcon, PlusIcon }
}
</script>

<style scoped>

</style>