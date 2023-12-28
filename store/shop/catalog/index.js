// /api/shop/products/


export const state = () => {
  //TgWebState
  return {
    products: {
      catalog: {
        data: []
      },
      catalog_category: {
        data: []
      }
    },
  }

}

export const mutations = {
  SET_CATALOG_PRODUCTS(state, payload = {products: {data: null}}) {
    state.products.catalog.data = payload.products.data
  },
  SET_CATALOG_PRODUCTS_BY_CAT(state, payload = {productsByCat: {data: null}}) {
    state.products.catalog_category.data = payload.productsByCat.data
  }
}

export const actions = {
  async fetchAllProducts({commit}) {
    try {
      const products = await this.$axios.$get("/api/shop/products", {});
      commit("SET_CATALOG_PRODUCTS", {
        products: {
          data: products
        }
      })
      return best_products
    } catch (e) {
      console.error("[app][products][fetch] not fetch data.")
    }
  },
  async fetchProductsByCat({commit}, payload = {cat_id: null}) {
    try {
      const {best_products} = await this.$axios.$get(`https://davdam.ecorp.fun/api/shop/products/?category_id=${payload.cat_id}`, {});
      commit("SET_CATALOG_PRODUCTS_BY_CAT", {
        productsMerch: {
          data: best_products
        }
      })
      return best_products
    } catch (e) {
      console.error("[app][products][by_cat][fetch] not fetch data.")
    }
  }
}

export const getters = {
  /**
   * Получить лучшие товары глобально
   */
  getCatalogProducts(state) {
    const products_data = state.products.catalog.data;
    return products_data ?? [];
  },
}
