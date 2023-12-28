<template>
  <DashMainLt>
    <template #Body>
      <PageHeaderTitle titlePage="Заказы"/>

      <VueGoodTable
        @on-row-click="onRowClick"
        :columns="tableHeaders"
        :rows="tableData">
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'date_placed'">
            <span>{{ props.row.date_placed !== null ? new Date(props.row.date_placed).toLocaleString() : null }}</span>
          </span>

          <span v-if="props.column.field == 'open'">
            <button @click="showOrder(props.row)" style="padding: 4px 8px;">Открыть</button>
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
import {VueGoodTable} from "vue-good-table";
import DashMainLt from "~/layout/dashMainLt.vue";
import PageHeaderTitle from "~/components/dashboard/ui/header/pageHeaderTitle.vue";

export default {
  data() {
    return {
      tableHeaders: [
        {field: "number", label: "№ Заказа"},
        {
          field: "date_placed", label: "Дата заказа", filterOptions: {
            customFilter: true,
            slotFilterField: 'name.id',
            formatValue: function (value) {
              if (value === null || value === undefined) {
                return;
              }
              let date = new Date(value);
              return value.toLocaleString()
            }
          }
        },
        // {field: "photo", label: "Описание"},
        {field: "seller.name", label: "Продавец"},
        {field: "status", label: "Статус"},
        {field: "total_excl_tax", label: "Цена"},
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
        params: {
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
