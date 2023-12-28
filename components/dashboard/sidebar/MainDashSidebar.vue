<template>
  <div>
    <div class="dashSidebar">
      <div class="px-3 py-2">
        <div style="margin-bottom: 10px; padding: 0 14px; font-size: 14px; font-weight: 500;">
          Управление
        </div>
        <div class="sidebarMenu">
          <div class="sidebarMenuWrapper">
            <div class="sidebarMenuItem">
              <button @click="$router.push({name:'davdamer-merchants'})"
                      class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start w-full justify-start">
                Продавцы
              </button>
            </div>
            <div class="sidebarMenuItem">
              <button @click="$router.push({name:'davdamer-products'})"
                      class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start w-full justify-start">
                Товары
              </button>
            </div>
            <div class="sidebarMenuItem">
              <button
                @click="$router.push({name:'davdamer-orders'})"
                class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start w-full justify-start">
                Заказы
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainDashSidebar"
}
</script>

<style scoped>
.dashSidebar {
  width: 100%;
  min-width: 320px;
  max-width: 320px;
  min-height: 100vh;
  /*background: var(--bg-second-color);*/
  flex: 1;
  padding: 24px 0;
  border-right: solid 1px var(--bg-separate-color);
}

.sidebarMenu {

}

.sidebarMenu .sidebarMenuItem {
  margin-bottom: 6px;
}

.sidebarMenu .sidebarMenuItem button {
  color: var(--text-primary-color);
  background: transparent;
  font-size: 12px;
  font-weight: 400;
}
.sidebarMenu .sidebarMenuItem button:hover,
.sidebarMenu .sidebarMenuItem button:focus{
  opacity: 0.7;
}
</style>
