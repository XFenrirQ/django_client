<template>
  <div>
    <button
        v-for="tab in tabs"
        :key="tab"
        @click="selected = tab;"
        :class="['tab-btn', { active: selected === tab }]"
    >
      {{ tab }}
    </button>

    <component :is="selected" class="tab"></component>
  </div>
</template>

<script>
import DescriptionMain from "./DescriptionMain";
import ReviewsMain from "./ReviewsMain";

export default {
  name: "ContractInfo",
  data: function() {
    return {
      tabs: ["DescriptionMain", "ReviewsMain"],
      selected: "DescriptionMain"
    };
  },
  components: {
    DescriptionMain,
    ReviewsMain
  }
};
</script>

<style>
.tab-btn {
  padding: 6px 10px;
  background: #ffffff;
  cursor: pointer;
  margin-bottom: 1rem;
  border: 2px solid #cccccc;
  outline: none;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
