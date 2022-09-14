<template>
  <div>
    kkkkk
<!--    <dv-percent-pond :config="config" style="width:200px;height:100px;" />-->
  </div>
</template>

<script>
import { percentPond } from '@jiaminghi/data-view'

export default {
  name: 'TestDataV',
  emits: [],
  components: {
    'dv-percent-pond': percentPond
  },
  props: {},
  data() {
    return {
      config: {
        value: 66,
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
