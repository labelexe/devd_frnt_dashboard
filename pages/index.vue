<template>
  <DashMainLt>
    <template #Body>
      123
    </template>
  </DashMainLt>
</template>

<script>
import DashMainLt from "~/layout/dashMainLt.vue";

export default {
  async asyncData({store}) {
    // console.log(store.state);
    return {};
  },
  methods: {},
  computed: {},
  components: {DashMainLt},
}
</script>

<style scoped>
</style>
