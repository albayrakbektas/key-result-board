<template>
  <div class="flex justify-between border-b-2 h-70">
    <div class="flex h-full">
      <div @click="isChevronDown = !isChevronDown" class="flex h-full cursor-pointer w-250 border-r-2">
        <p>Key Result Board</p>
        <ChevronDownIcon v-if="isChevronDown" class="h-7 w-7 cursor-pointer text-gray-600" />
        <ChevronUpIcon v-if="!isChevronDown" class="h-7 w-7 cursor-pointer text-gray-600" />
      </div>
      <div v-if="!isAddingNewBoard" class="flex justify-center items-center border-r-2 h-full w-70">
        <div @click="isAddingNewBoard = true" class="flex items-center">
          <PlusIcon class="cursor-pointer text-gray-600 w-7 h-7" />
        </div>
      </div>
      <div v-if="isAddingNewBoard" class="flex h-full w-300 border-r-2 px-2 bg-gray-100">
        <input ref="dashboardInput" v-model="dashboardInputValue" class=" focus:outline-none text-left p-2 ml-2 w-250 bg-transparent" placeholder="Type Dashboard Name"/>
        <PlusIcon v-if="dashboardInputValue" class="cursor-pointer text-white bg-primary rounded w-12 h-8 p-1.5 m-auto align-middle hover:bg-hoverPrimary" />
      </div>
    </div>
    <div class="flex cursor-pointer bg-primary h-full p-5 hover:bg-hoverPrimary">
      <PlusIcon class="h-7 w-7 cursor-pointer text-white mr-2" />
      <p class="text-white font-bold">Add Widget</p>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon, PlusIcon, ChevronUpIcon } from "@heroicons/vue/solid";
export default {
  name: "Header",
  components: { ChevronDownIcon, PlusIcon, ChevronUpIcon },
  data: () => {
    return {
      dashboardInputValue: "",
      isAddingNewBoard: false,
      isChevronDown: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>