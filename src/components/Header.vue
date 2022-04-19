<template>
  <div class="flex justify-between border-b-2 h-60">
    <div class="flex h-full">
      <div @click="showDashboards" class="flex h-full cursor-pointer w-250 border-r-2 relative">
        <div class="block relative">
          <p class="text-option">{{ dashboardName }}</p>
          <ul class="cursor-pointer hover:block z-10 bg-white absolute w-250  border-orange-500	 border-solid">
            <li
                class="text-option p-5 border-2 border-gray-400 hover:bg-gray-400 text-left"
                v-if="isDashBoardNamesVisible"
                @click="changeDashboard"
                v-for="(option, index) in dashboardNames"
                :value="option"
                :key="index"
            >
              {{ option }}
            </li>
          </ul>
        </div>
        <ChevronDownIcon v-if="isChevronDown" class="h-7 w-7 cursor-pointer text-gray-600" />
        <ChevronUpIcon v-if="!isChevronDown" class="h-7 w-7 cursor-pointer text-gray-600" />
      </div>
      <div v-if="!isAddingNewBoard" class="flex justify-center items-center border-r-2 h-full w-70">
        <div @click="isAddingNewBoard = true" class="flex items-center">
          <PlusIcon class="cursor-pointer text-gray-600 w-7 h-7" />
        </div>
      </div>
      <div v-if="isAddingNewBoard" class="flex h-full w-300 border-r-2 px-2 bg-gray-100">
        <input ref="dashboardInput" v-model="dashboardInputModel" class=" focus:outline-none text-left p-2 ml-2 w-250 bg-transparent" placeholder="Type Dashboard Name"/>
        <XCircleIcon @click="isAddingNewBoard = false" v-if="!dashboardInputModel" class="cursor-pointer text-white bg-primary rounded w-12 h-8 p-1.5 m-auto align-middle hover:bg-hoverPrimary" />
        <PlusIcon @click="addDashboard" v-if="dashboardInputModel" class="cursor-pointer text-white bg-primary rounded w-12 h-8 p-1.5 m-auto align-middle hover:bg-hoverPrimary" />
      </div>
    </div>
    <div class="flex cursor-pointer bg-primary h-full p-5 hover:bg-hoverPrimary">
      <PlusIcon class="h-7 w-7 cursor-pointer text-white mr-2" />
      <p class="text-white font-bold">Add Widget</p>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon, PlusIcon, ChevronUpIcon, XCircleIcon } from "@heroicons/vue/solid";
export default {
  name: "Header",
  components: { ChevronDownIcon, PlusIcon, ChevronUpIcon, XCircleIcon },
  data: () => {
    return {
      dashboardName: "Key Result Board",
      dashboardNames: [
        "Key Result Board",
      ],
      isDashBoardNamesVisible: false,
      dashboardInputModel: "",
      isAddingNewBoard: false,
      isChevronDown: true
    }
  },
  methods: {
    closeNewBoard : function () {
      if (this.isAddingNewBoard) {
        this.isAddingNewBoard = false
      }
    },
    showDashboards: function () {
      this.isDashBoardNamesVisible = !this.isDashBoardNamesVisible
      this.isChevronDown = !this.isChevronDown
    },
    changeDashboard: function (e) {
      this.dashboardName = e.path[0]._value;
    },
    addDashboard: function () {
      this.isAddingNewBoard = false
      if (this.dashboardInputModel) {
        this.dashboardNames.push(this.dashboardInputModel)
      }
      this.dashboardInputModel = ''
    }
  }
}
</script>

<style scoped>

</style>