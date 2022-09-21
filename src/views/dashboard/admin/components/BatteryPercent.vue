<template>
  <dv-percent-pond :config="config" style="width:200px;height:100px;" />
</template>

<script>
import { percentPond } from '@jiaminghi/data-view'
import Vue from 'vue'

Vue.use(percentPond)

export default {
  name: 'BatteryPercent',
  emits: [],
  components: {},
  props: {},
  data() {
    return {
      config: {
        value: 66,
        lineDash: [10, 2],
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped>

</style>
