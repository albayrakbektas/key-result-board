<template>
  <div class="w-full">
    <div class="flex justify-between w-full">
      <div class="flex w-full">
        <TableIcon class="h-7 w-7 text-orange-600" />
        <h1>Key Result Board</h1>
      </div>
      <div class="flex gap-2">
        <div
          class="grid grid-cols-select justify-between min-w-125 cursor-pointer text-left ml-5"
          @mouseover="isTimeFilterVisible = true"
          @mouseleave="isTimeFilterVisible = false"
        >
          <p class="text-left text-select">Time</p>
          <div class="block">
            <p class="text-option">{{ timeSelectedOption }}</p>
            <ul
              class="cursor-pointer hover:block absolute z-10 bg-amber-50 rounded-2xl w-100"
            >
              <li
                class="text-option border-b-2 hover:bg-orange-400 hover:text-white hover:font-bold rounded-md"
                v-if="isTimeFilterVisible"
                @click="timeSelectOption"
                v-for="(option, index) in timeOptions"
                :value="option"
                :key="index"
              >
                {{ option }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="grid grid-cols-select justify-between min-w-125 cursor-pointer text-left"
          @mouseover="isFilterVisible = true"
          @mouseleave="isFilterVisible = false"
        >
          <p class="text-left text-select">Filter</p>
          <div class="block">
            <p class="text-option">{{ filterSelectedOption }}</p>
            <ul
              class="cursor-pointer hover:block absolute z-10 bg-amber-50 rounded-2xl w-100"
            >
              <li
                class="text-option border-b-2 hover:bg-orange-400 hover:text-white hover:font-bold rounded-md"
                v-if="isFilterVisible"
                @click="filterSelectOption"
                v-for="(option, index) in filterCompleted"
                :value="option"
                :key="index"
              >
                {{ option }}
              </li>
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
          <th class="text-left text-sm accent-gray-100 font-light">
            Key Results
          </th>
          <th
            class="text-center text-sm accent-gray-100 font-light"
            v-for="th in tableHead"
          >
            {{ th }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-t-2 border-solid h-20 font-normal"
          v-for="(item, index) in rowData"
        >
          <td class="text-left">{{ item.keyResult }}</td>
          <td class="text-center">{{ item.start }}</td>
          <td class="text-center">
            {{ item.target }}
          </td>
          <td class="text-center">
            <div class="flex items-center justify-center gap-1">
              <div
                v-if="
                  item.checkinProgress[item.checkinProgress.length - 1].rate ===
                  null
                "
                class="bg-white rounded h-5 w-5"
              ></div>
              <div
                v-else-if="
                  item.checkinProgress[item.checkinProgress.length - 1].rate ===
                  0
                "
                class="bg-gray-400 rounded h-5 w-5"
              ></div>
              <div
                v-else-if="
                  item.checkinProgress[item.checkinProgress.length - 1].rate <
                  26
                "
                class="bg-gray-600 rounded h-5 w-5"
              ></div>
              <div
                v-else-if="
                  item.checkinProgress[item.checkinProgress.length - 1].rate <
                  51
                "
                class="bg-red-500 rounded h-5 w-5"
              ></div>
              <div
                v-else-if="
                  item.checkinProgress[item.checkinProgress.length - 1].rate <
                  86
                "
                class="bg-amber-600 rounded h-5 w-5"
              ></div>
              <div v-else class="bg-green-500 rounded h-5 w-5"></div>
              <div>
                {{ item.checkinProgress[item.checkinProgress.length - 1].rate }}
              </div>
            </div>
          </td>
          <td class="w-1/2 max-w-screen-sm">
            <div class="flex items-center">
              <div>
                <ChevronLeftIcon
                  v-if="scrollBarCount[index] > 0"
                  @click="scrollLeft(index)"
                  class="h-10 w-10 hover:cursor-pointer"
                />
              </div>
              <div
                :key="index"
                ref="scrollBar"
                class="overflow-x-scroll overflow-scroll flex scrollbar-hide"
              >
                <div
                  :key="index"
                  v-for="(checkin, index) in item.checkinProgress"
                  class="h-10 w-60 min-w-60 inline-flex items-center cursor-pointer"
                >
                  <div
                    @mouseover="isTooltipVisible = true"
                    v-if="
                      item.checkinProgress[index] === this.act &&
                      isTooltipVisible
                    "
                    ref="tooltip"
                    :id="'tooltip' + index"
                    class="grid w-250 h-175 absolute m-tooltip bg-white rounded-2xl border-2"
                  >
                    <div class="justify-self-start pl-2">
                      Period of Nov {{ checkin.period }}
                    </div>
                    <div class="grid grid-cols-3 border-t-2 border-b-2 py-2">
                      <p>Last Week</p>
                      <p>This Week</p>
                      <p>Changes</p>
                    </div>
                    <div class="grid grid-cols-3 border-b-2">
                      <div class="block">
                        <p v-if="item.checkinProgress[index - 1]">
                          {{ item.checkinProgress[index - 1].rate }}(%{{
                            item.checkinProgress[index - 1].rate
                          }})
                        </p>
                        <div class="flex justify-center gap-x-1">
                          <div
                            class="bg-green-500 w-3.5 h-3.5 rounded-full"
                          ></div>
                          <p>On Track</p>
                        </div>
                      </div>
                      <div class="block">
                        <p>
                          {{ item.checkinProgress[index].rate }}(%{{
                            item.checkinProgress[index].rate
                          }})
                        </p>
                        <div class="flex justify-center gap-x-1">
                          <div
                            class="bg-green-500 w-3.5 h-3.5 rounded-full"
                          ></div>
                          <p>On Track</p>
                        </div>
                      </div>
                      <div class="flex justify-center">
                        <p>
                          {{
                            item.checkinProgress[index].rate -
                            item.checkinProgress[index - 1].rate
                          }}(%{{
                            item.checkinProgress[index].rate -
                            item.checkinProgress[index - 1].rate
                          }})
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-center">
                      <ExternalLinkIcon class="h-4 w-4 text-gray-500" />
                      <p class="text-gray-500">View Activity</p>
                    </div>
                  </div>
                  <div
                    @mouseover="showToolTip(item.checkinProgress[index])"
                    @mouseleave="isTooltipVisible = false"
                    v-if="checkin.rate === null"
                    class="bg-white border-2 grid m-1 rounded w-full h-full"
                  >
                    {{ checkin.rate }}
                  </div>
                  <div
                    @mouseover="showToolTip(item.checkinProgress[index])"
                    @mouseleave="isTooltipVisible = false"
                    v-else-if="checkin.rate < 1"
                    class="bg-gray-400 grid m-1 rounded w-full h-full"
                  >
                    {{ checkin.rate }}
                  </div>
                  <div
                    @mouseover="showToolTip(item.checkinProgress[index])"
                    @mouseleave="isTooltipVisible = false"
                    v-else-if="checkin.rate < 26"
                    class="bg-gray-600 grid m-1 rounded w-full h-full"
                  >
                    {{ checkin.rate }}
                  </div>
                  <div
                    @mouseover="showToolTip(item.checkinProgress[index])"
                    @mouseleave="isTooltipVisible = false"
                    v-else-if="checkin.rate < 51"
                    class="bg-red-500 grid m-1 rounded w-full h-full"
                  >
                    {{ checkin.rate }}
                  </div>
                  <div
                    @mouseover="showToolTip(item.checkinProgress[index])"
                    @mouseleave="isTooltipVisible = false"
                    v-else-if="checkin.rate < 86"
                    class="bg-amber-600 grid m-1 rounded w-full h-full"
                  >
                    {{ checkin.rate }}
                  </div>
                  <div
                    @mouseover="showToolTip(item.checkinProgress[index])"
                    @mouseleave="isTooltipVisible = false"
                    v-else-if="checkin.rate <= 100"
                    class="bg-green-500 grid m-1 rounded w-full h-full"
                  >
                    {{ checkin.rate }}
                  </div>
                </div>
              </div>
              <div>
                <ChevronRightIcon
                  v-if="scrollBarCount[index] < scrollButtonWidth"
                  @click="scrollRight(index)"
                  class="h-10 w-10 hover:cursor-pointer justify-end"
                />
              </div>
            </div>
          </td>
          <td class="text-center">
            <div ref="parent" class="flex justify-center">
              <div
                :key="index"
                :ref="'avatar' + index"
                v-for="(own, index) in item.owners.slice(0, 3)"
                class="bg-avatar rounded-full h-10 w-10 text-center grid relative cursor-pointer hover:bg-primary hover:border-amber-500 hover:border-2"
                :class="avatar17"
              >
                <div>
                  <img
                    class="w-full h-full flex object-cover rounded-full hover:border-avatar hover:border-2"
                    v-if="own.image"
                    :src="own.image"
                    :alt="own.name"
                  />
                  <p class="text-avatar hover:text-white" v-else>
                    {{ own.name.charAt(0) }}
                  </p>
                </div>
              </div>
              <div class="relative">
                <div
                  @click="showPopup(index)"
                  v-if="item.owners.length > 3"
                  class="border-avatar border-2 rounded-full h-10 w-10 text-center grid relative ml-5 cursor-pointer hover:bg-primary"
                >
                  <div class="text-avatar font-bold hover:text-white">
                    +{{ item.owners.length - 3 }}
                  </div>
                </div>
                <div
                  v-if="plusAvatar"
                  class="absolute flex w-100 h-auto justify-end"
                >
                  <div
                    :key="index"
                    ref="plusAvatarRef"
                    class="bg-avatar rounded-full h-10 w-10 text-center grid relative cursor-pointer hover:bg-primary hover:border-amber-500 hover:border-2"
                    v-for="(own, index) in item.owners.slice(3)"
                  >
                    <div>
                      <img
                        class="w-full h-full flex object-cover rounded-full hover:border-avatar hover:border-2"
                        v-if="own.image"
                        :src="own.image"
                        :alt="own.name"
                      />
                      <p class="text-avatar hover:text-white" v-else>
                        +{{ own.name.charAt(0) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td class="text-center">{{ item.lastCheckin }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import tableHead from "../data/table-head.json";
import rowData from "../data/table-row.json";
import timeOptions from "../data/time-options.json";
import filterCompleted from "../data/filter-options.json";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TableIcon,
  DotsVerticalIcon,
  ExternalLinkIcon,
} from "@heroicons/vue/solid";
export default {
  data: function () {
    return {
      rowData: rowData,
      tableHead: tableHead,
      timeOptions: timeOptions,
      filterCompleted: filterCompleted,
      images: [],
      isTimeFilterVisible: false,
      isFilterVisible: false,
      timeSelectedOption: "All Time",
      filterSelectedOption: "All",
      scrollBarCount: [0, 0, 0, 0, 0, 0, 0, 0],
      avatar17: "avatar-17",
      plusAvatar: false,
      act: false,
      isTooltipVisible: false,
      scrollButtonWidth: 1150
    };
  },
  mounted() {},
  name: "Table",
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    TableIcon,
    DotsVerticalIcon,
    ExternalLinkIcon,
  },
  methods: {
    scrollLeft: function (index) {
      const scrollBar = this.$refs.scrollBar[index];
      scrollBar.scrollLeft -= 60;
      if (this.scrollBarCount[index] >= 0) this.scrollBarCount[index] -= 50;
    },
    scrollRight: function (index) {
      const scrollBar = this.$refs.scrollBar[index];
      scrollBar.scrollLeft += 60;
      if (this.scrollBarCount[index] < 1150) this.scrollBarCount[index] += 50;
    },
    timeSelectOption: function (e) {
      this.timeSelectedOption = e.path[0]._value;
      this.isTimeFilterVisible = false;
    },
    filterSelectOption: function (e) {
      this.filterSelectedOption = e.path[0]._value;
      this.isFilterVisible = false;
    },
    showPopup: function (index) {
      this.plusAvatar = !this.plusAvatar;
      const popup = this.$refs.plusAvatarRef[index];
    },
    showToolTip: function (index) {
      this.act = index;
      this.isTooltipVisible = true;
    },
  },
};
</script>

<style scoped>
.avatar-17 {
  margin-right: -17px;
}
</style>
