<template>
  <DashMainLt>
    <template #Body>
      <PageHeaderTitle titlePage="Продавцы"/>

      <VueGoodTable
        :columns="tableHeaders"
        :rows="tableData">
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'open'">
            <button @click="showMerchant(props.row)" style="padding: 4px 8px;">Открыть</button>
          </span>
          <span v-else>
                  {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
      </VueGoodTable>
    </template>
  </DashMainLt>
</template>

<script>
import DashMainLt from "~/layout/dashMainLt.vue";
import PageHeaderTitle from "~/components/dashboard/ui/header/pageHeaderTitle.vue";
import {VueGoodTable} from "vue-good-table";

export default {
  data() {
    return {
      tableHeaders: [
        {field: "name", label: "Полное имя"},
        {field: "address", label: "Адрес"},
        {field: "description", label: "Описание"},
        {field: "products_amount", label: "Количество товаров"},
        {field: "rating", label: "Рейтинг"},
        {field: "open", label: ""},
      ],
      tableData: [
        {
          id: 1,
          fullName: "John Doe",
          address: "123 Main St, City",
          description: "Lorem ipsum dolor sit amet",
          productCount: 10,
          rating: 4.5,
        },
      ],
    }
  },
  async asyncData({params, $axios}) {
    let response = await $axios.$get(`/api/davdamer/sellers/`)

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
    showMerchant(row) {
      this.$router.push({
        name: 'davdamer-merchants-show-slug',
        param: {
          slug: row.id
        }
      })
    }
  },
  computed: {},
  components: {VueGoodTable, PageHeaderTitle, DashMainLt},
}
</script>

<style scoped>

</style>
