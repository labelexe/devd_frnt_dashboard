// store/shop/catalog/best/index.js

export const state = () => {
  //TgWebState
  return {
    catalog: {
      best: {
        max_slice_count: 6,
        data: []
      }
    },
    merchant: {
      catalog: {
        best: {
          max_slice_count: 4,
          data: []
        }
      }
    }
  }

}

export const mutations = {
  SET_CATALOG_GLB_BEST_PRODUCTS(state, payload = {products: {data: null}}) {
    state.catalog.best.data = payload.products.data
  },
  SET_CATALOG_BEST_PRODUCTS_BY_MERCH(state, payload = {productsMerch: {data: null}}) {
    state.merchant.catalog.best.data = payload.productsMerch.data
  }
}

export const actions = {
  async fetchCatLgBestProdByGlobal({commit}) {
    try {
      const {best_products} = await this.$axios.$get("./products.json", {});
      commit("SET_CATALOG_GLB_BEST_PRODUCTS", {
        products: {
          data: best_products
        }
      })
      return best_products
    } catch (e) {
      console.error("[app][products][fetch] not fetch data.")
    }
  },
  async fetchCatLgBestProdByMerchant({commit}, payload = {slug: null}) {
    try {
      const {best_products} = await this.$axios.$get("./products.json", {});
      commit("SET_CATALOG_BEST_PRODUCTS_BY_MERCH", {
        productsMerch: {
          data: best_products
        }
      })
      return best_products
    } catch (e) {
      console.error("[app][products][fetch] not fetch data.")
    }
  }
}

export const getters = {
  /**
   * Получить лучшие товары глобально
   */
  getGlobalBestProducts(state) {
    const products_data = state.catalog.best.data;
    return products_data ?? [];
  },

  /**
   * Получение слайса - лучших товаров - глобал
   * @param state
   * @param getters
   * @returns {number}
   */
  getGlBestProdSliceLastFour(state, getters) {
    const products_data = getters.getGlobalBestProducts;
    const len = products_data.length;
    const max_slice_count = state.catalog.best.max_slice_count;
    if (len > max_slice_count) {
      return products_data.slice(0, max_slice_count) ?? []
    } else {
      return products_data ?? [];
    }
  },

  /**
   * Количество лучших товаров в каталоге
   * @param state
   * @param getters
   * @returns {number}
   */
  getCntGlBestProdSliceLastFour(state, getters) {
    const product_data = getters.getGlBestProdSliceLastFour;
    return product_data.length ?? 0
  },

  /**
   * Получить лучшие товары по продавцу
   */
  getBestProductsByMerchant(state) {
    const products_data = state.merchant.catalog.best.data;
    return products_data ?? [];
  },

  /**
   * Получить слайс - лучшие товары - по провацу
   * @param state
   * @param getters
   * @returns {*|*[]}
   */
  getBestProductsByMerchantLastFour(state, getters) {
    const products_data = getters.getBestProductsByMerchant;
    const len = products_data.length;
    const max_slice_count = state.merchant.catalog.best.max_slice_count;
    //если больше слайсим
    if (len > max_slice_count) {
      return products_data.slice(0, max_slice_count) ?? []
    } else {
      return products_data ?? [];
    }
  },

  /**
   * Количество - лучших товаров - в каталоге по продавцу
   * @param state
   * @param getters
   * @returns {number}
   */
  getCntBestProdByMerchLastFour(state, getters) {
    const product_data = getters.getBestProductsByMerchantLastFour;
    return product_data.length ?? 0
  }

}
