<template>
  <nav class="dashboardNavbar">
    <nuxt-link :to="{name: 'index'}">
      DavDam - Личный кабинет
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: "MainDashNav"
}
</script>

<style scoped>
.dashboardNavbar {
  /*background: var(--bg-second-color);*/
  color: var(--accent-color);
  padding: 14px 16px;
  border-bottom: solid 1px var(--bg-separate-color);
}

.dashboardNavbar > a {
  color: var(--accent-color);
  font-weight: 500;
}
</style>
