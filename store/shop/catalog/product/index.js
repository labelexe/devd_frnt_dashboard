// /api/shop/products/


export const state = () => {
  //TgWebState
  return {
    current: {
      product: {
        data: []
      }
    }
  }

}

export const mutations = {
  SET_CATALOG_PRODUCT_BY_ID(state, payload = {productById: {data: null}}) {
    state.current.product.data = payload.productById.data
  }
}

export const actions = {
  async fetchCurrentProductById({commit}, payload = {product_id: null}) {
    try {
      const data = await this.$axios.$get(`/api/shop/product/${payload.product_id}/`, {});
      commit("SET_CATALOG_PRODUCT_BY_ID", {
        productById: {
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
  getCurrentProduct(state) {
    const product_data = state.current.product.data;
    return product_data ?? [];
  },
}
