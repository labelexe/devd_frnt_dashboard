<template>
  <div class="pageHeader">
    <div class="pageHeaderTitle">
      {{ titlePage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "pageHeaderTitle",
  props: {
    titlePage: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>

.pageHeader {
  margin-bottom: 14px;
}

.pageHeaderTitle {
  font-size: 18px;
  font-weight: 500;
}
</style>
