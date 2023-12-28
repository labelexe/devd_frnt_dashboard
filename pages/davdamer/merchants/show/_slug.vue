<template>
  <DashMainLt>
    <template #Body>
      <PageHeaderTitle titlePage="Управление продавцом"/>

      <!--      -->
      {{$route.params}}
    </template>
  </DashMainLt>
</template>

<script>
import DashMainLt from "~/layout/dashMainLt.vue";
import PageHeaderTitle from "~/components/dashboard/ui/header/pageHeaderTitle.vue";

export default {
  data() {
    return {}
  },
  async asyncData(context) {
    let response = await context.app.$axios.$get(`/api/davdamer/orders/`)

    console.log(response);

    // let orders = response.forEach((order) => {
    //   return {
    //     id: order.id,
    //     address: order.shipping_address.line1
    //   }
    // })

    return {tableData: response}
  },
  methods: {
    onRowClick(row) {
    },
    showOrder(row) {
      this.$router.push({
        name: 'davdamer-orders-show-slug',
        param: {
          slug: row.id
        }
      })
    }
  },
  computed: {},
  components: {PageHeaderTitle, DashMainLt},
}
</script>

<style scoped>
</style>
