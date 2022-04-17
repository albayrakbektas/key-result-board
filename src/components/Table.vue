<template>
  <div>
    <div class="flex justify-between">
      <div class="flex">
        <TableIcon class="h-7 w-7 text-gray-600" />
        <h1>Key Result Board</h1>
      </div>
      <div class="flex gap-10">
        <div class="grid grid-cols-select justify-between min-w-100 cursor-pointer text-left"  @mouseover="isTimeFilterVisible = true" @mouseleave="isTimeFilterVisible = false">
          <p class="text-left">Time</p>
          <div class="block">
            <p>{{timeSelectedOption}}</p>
            <ul class="cursor-pointer hover:block absolute">
              <li v-if="isTimeFilterVisible" @click="timeSelectOption" v-for="(option, index) in timeOptions" :value="option" :key="index">{{option}}</li>
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-select justify-between min-w-125 cursor-pointer text-left"  @mouseover="isFilterVisible = true" @mouseleave="isFilterVisible = false">
          <p class="text-left">Filter</p>
          <div class="block">
            <p>{{filterSelectedOption}}</p>
            <ul class="cursor-pointer hover:block absolute">
              <li v-if="isFilterVisible" @click="filterSelectOption" v-for="(option, index) in filterCompleted" :value="option" :key="index">{{option}}</li>
            </ul>
          </div>
        </div>
        <div>
          <DotsVerticalIcon class="h-7 w-7 cursor-pointer text-gray-600" />
        </div>
      </div>
    </div>
    <table class="table-auto w-full border-collapse relative">
      <thead>
      <tr class="h-10">
        <th class="text-left text-sm accent-gray-100 font-light">Key Results</th>
        <th class="text-center text-sm accent-gray-100 font-light" v-for="th in tableHead">{{th}}</th>
      </tr>
      </thead>
      <tbody>
      <tr class="border-t-2 border-solid h-20 font-normal" v-for="(item, index) in rowData">
        <td class="text-left">{{item.keyResult}}</td>
        <td class="text-center">{{item.start}}</td>
        <td class="text-center">{{item.target}}</td>
        <td class="text-center">
          <div class="flex items-center justify-center">
            <div class="bg-green-500 rounded"></div>
            <div>{{item.current}}</div>
          </div>
        </td>
        <td class=" w-1/2 max-w-screen-sm">
          <div class="flex items-center">
            <div>
              <ChevronLeftIcon @click="scrollLeft()" class="h-10 w-10 hover:cursor-pointer" />
            </div>
            <div ref="scrollBar" class="overflow-x-scroll flex scrollbar-hide">
              <div v-for="(checkin, index) in item.checkinProgress" class="h-10 w-60 min-w-60 inline-flex items-center cursor-pointer">
                <div class="grid w-250 h-150 absolute top-0 bg-white">
                  <div>Period of Nov {{checkin.period}}</div>
                  <div class="grid grid-cols-3">
                    <p>Last Week</p>
                    <p>Next Week</p>
                    <p>Changes</p>
                  </div>
                  <div class="grid grid-cols-3">
                    <div class="block">
                      <p>{{ checkin.rate }}(%{{ checkin.rate }})</p>
                      <div class="flex justify-center">
                        <div class="bg-green-500 w-2 h-2"></div>
                        <p>On Track</p>
                      </div>
                    </div>
                    <div class="block">
                      <p>{{ checkin.rate }}(%{{ checkin.rate }})</p>
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
                <div v-if="checkin.rate === null " class="bg-white border-2 grid m-1 rounded w-full h-full">{{checkin.rate}}</div>
                <div v-else-if="checkin.rate < 1 " class="bg-gray-400 grid m-1 rounded w-full h-full">{{checkin.rate}}</div>
                <div v-else-if="checkin.rate < 26 "  class="bg-gray-600 grid m-1 rounded w-full h-full">{{checkin.rate}}</div>
                <div v-else-if="checkin.rate < 51 "  class="bg-red-500 grid m-1 rounded w-full h-full">{{checkin.rate}}</div>
                <div v-else-if="checkin.rate < 86 "  class="bg-amber-600 grid m-1 rounded w-full h-full">{{checkin.rate}}</div>
                <div v-else-if="checkin.rate <= 100 "  class="bg-green-500 grid m-1 rounded w-full h-full">{{checkin.rate}}</div>
              </div>
            </div>
            <div>
              <ChevronRightIcon @click="scrollRight()" class="h-10 w-10 hover:cursor-pointer justify-end" />
            </div>
          </div>
        </td>
        <td class="text-center">
          <div ref="parent" class="flex justify-center">
            <div v-for="(own, index) in item.owners" class="bg-green-500 rounded-full h-10 w-10 text-center grid">
              <p class="h-full w-full bg-white" v-if="own.id > 3">+ {{own.id - 3}}</p>
              <div v-else>
                <img class="w-full h-full flex" v-if="own.image" :src="own.image"  :alt=own.name />
                <p v-else>{{own.name.charAt(0)}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="text-center">{{item.lastCheckin}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import tableHead from '../data/table-head.json'
import rowData from '../data/table-row.json'
import timeOptions from '../data/time-options.json'
import filterCompleted from '../data/filter-options.json'
import { ChevronLeftIcon, ChevronRightIcon, TableIcon, DotsVerticalIcon } from "@heroicons/vue/solid";
import OwnerAvatar from "./OwnerAvatar.vue";
export default {
  data: function() {
    return {
      rowData: rowData,
      tableHead: tableHead,
      timeOptions: timeOptions,
      filterCompleted: filterCompleted,
      images: [],
      isTimeFilterVisible: false,
      isFilterVisible: false,
      timeSelectedOption: "All Time",
      filterSelectedOption: "Completed"
    }
  },
  created() {

  },
  name: "Table",
  components: {OwnerAvatar, ChevronLeftIcon, ChevronRightIcon, TableIcon, DotsVerticalIcon },
  methods: {
    scrollLeft: function () {
      const scrollBar = this.$refs.scrollBar
      scrollBar.scrollLeft -= 50;
      console.log('left')
    },
    scrollRight: function () {
      const scrollBar = this.$refs.scrollBar
      scrollBar.scrollLeft += 50;
      console.log('rgiht')
    },
    timeSelectOption: function (e) {
      this.timeSelectedOption = e.path[0]._value
    },
    filterSelectOption: function (e) {
      this.filterSelectedOption = e.path[0]._value
    }
  }
};
</script>

<style scoped></style>
