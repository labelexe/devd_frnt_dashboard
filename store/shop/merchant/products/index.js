// /api/shop/products/


export const state = () => {
  //TgWebState
  return {
    products: {
      catalog: {
        data: []
      },
      merchant: {
        catalog: {
          data: []
        }
      }
    },
  }

}

export const mutations = {
  SET_CATALOG_PRODUCTS_BY_MERCHANT_ID(state, payload = {productsByMerchant: {data: null}}) {
    state.products.merchant.catalog.data = payload.productsByMerchant.data
  }
}

export const actions = {
  async fetchMerchantProductsById({commit}, payload = {merchant_id: null}) {
    try {
      const data = await this.$axios.$get(`/api/shop/seller/${payload.merchant_id}/products`, {});
      commit("SET_CATALOG_PRODUCTS_BY_MERCHANT_ID", {
        productsByMerchant: {
          data: data
        }
      })
      return data
    } catch (e) {
      console.error("[app][products][by_cat][fetch] not fetch data.")
    }
  },
}

export const getters = {
  /**
   * Получить товары продавца
   */
  getMerchantCatalogProducts(state) {
    const products_data = state.products.merchant.catalog.data;
    return products_data ?? [];
  },
}
