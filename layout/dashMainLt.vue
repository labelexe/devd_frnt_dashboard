<template>
  <div class="AppLw">
    <div class="hidden flex-col md:flex">
      <div class="flex flex-wrap">
        <div class="flex flex-1 h-16 items-center px-4">
          <!--        <TeamSwitcher/>-->
          <MainDashNav class="mx-6"/>
          <!--        <div class="ml-auto flex items-center space-x-4">-->
          <!--          <Search/>-->
          <!--          <UserNav/>-->
          <!--        </div>-->
        </div>
        <div class="flex flex-1 flex-auto justify-end h-16 items-center px-4">
          <!--          <Button variant="secondary"-->
          <!--                  @click="logoutUser"-->
          <!--                  class="flex rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">-->
          <!--            Выход-->
          <!--            {{ authenticated }}-->
          <!--          </Button>-->
        </div>

      </div>
      <div class="border-b">
      </div>
      <!--      -->
      <div style="display: flex;">
        <MainDashSidebar/>


        <div class="col-span-3 lg:col-span-4 lg:border-l" style="flex: auto; padding: 20px;">
          <slot name="Body">
            <Nuxt/>
          </slot>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import MainDashNav from "~/components/dashboard/navbar/MainDashNav.vue";
import MainDashSidebar from "~/components/dashboard/sidebar/MainDashSidebar.vue";

export default {
  name: "dashMainLt",
  data() {
    return {}
  },
  methods: {},
  async mounted() {
    //
    // await this.$store.dispatch("appScrollTo");
  },
  computed: {},
  components: {MainDashSidebar, MainDashNav}
}
</script>
<style>
@import url("~/assets/css/main.css");
</style>
<style scoped>
.AppLw {
  min-height: 100vh;
}

.AppLw .AppLwWrapper {
  padding: 1.8vh 2.4vw;
}


.AppLw .AppNavbar {
  margin-bottom: 24px;
}

.AppLw .AppNavbar .NavbarWrapper {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}

.AppLw .AppNavbar .NavbarUser {

}


/**/

.AppLw .AppNavbar .NavbarConnect {
  display: flex;
}


.AppHeaderLogo {
  cursor: pointer;
}

.AppHeaderOther {
  cursor: pointer;
}

.AppHeaderOther._Active {

}


.AppHeaderOther._Active svg > path {
  stroke: #0A84FF;
}

</style>
