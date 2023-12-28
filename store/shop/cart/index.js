// store/shop/cart/index.js

export const state = () => {
  return {
    cart: {
      show: false,
      checkout: {
        merchant: {
          current: {
            id: null,
            products: [],
            ship_address: null, // добавляем ship_address
          }
        },
        status: false,
      }
    }
  }
};

export const mutations = {
  SET_SHIP_ADDRESS(state, payload) {
    state.cart.checkout.merchant.current.ship_address = payload;
  },
  //
  SET_CURRENT_MERCH_ID(state, payload = {merch_id: null}) {
    state.cart.checkout.merchant.current.id = payload.merch_id;
  },

  SET_CART_NEW_PROD_BY_MERCH(state, payload = {productItem: null}) {
    state.cart.checkout.merchant.current.products = payload.productItem;
  },

  ADD_CART_NEW_PROD_BY_MERCH(state, payload = {productItem: null}) {
    const existingProduct = state.cart.checkout.merchant.current.products.find(
      (item) => item.id === payload.productItem.id
    );

    if (existingProduct) {
      existingProduct.qty += 1;
    } else {
      state.cart.checkout.merchant.current.products.push({
        ...payload.productItem,
        qty: 1,
      });
    }

    // Сохраняем корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  SET_CART_FROM_LOCAL_STORAGE(state, storedCart) {
    state.cart = storedCart;
  },
  CLEAR_CART(state) {
    state.cart.checkout.merchant.current.id = null;
    state.cart.checkout.merchant.current.products = [];
    state.cart.checkout.merchant.current.total = 0;
    state.cart.checkout.merchant.current.ship_address = null;
    //
    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
};

export const actions = {
  addMerchProdToCart({state, commit}, payload = {productItem: null, merch_id: null}) {
    console.log("Клик по добавлению нового товара по мерчу");

    const existingMerchId = state.cart.checkout.merchant.current.id;

    if (!existingMerchId) {
      // Если merch_id отсутствует, добавляем его и новый товар
      commit("SET_CURRENT_MERCH_ID", {merch_id: payload.merch_id});
      commit("ADD_CART_NEW_PROD_BY_MERCH", {productItem: payload.productItem});
      this.$toast.success('Товар добавлен в корзину!');
      console.debug("Новый мерчант и товар добавлены в корзину");
    } else {
      if (existingMerchId !== payload.merch_id) {
        // Если merch_id не совпадает с текущим, выводим предупреждение
        const confirmClear = window.confirm("Хотите очистить корзину и добавить товар от нового продавца?");

        if (confirmClear) {
          // Очищаем корзину и добавляем новый мерчант и товар
          commit("SET_CURRENT_MERCH_ID", {merch_id: payload.merch_id});
          // Чистим
          commit("SET_CART_NEW_PROD_BY_MERCH", {productItem: []})
          //
          commit("ADD_CART_NEW_PROD_BY_MERCH", {productItem: payload.productItem});
          this.$toast.success('Вы очистили корзину!');
          this.$toast.success('Товар добавлен в корзину!');
          console.debug("Корзина очищена, новый мерчант и товар добавлены");
        } else {
          this.$toast.warning('Отменено');
          console.debug("Отмена добавления товара от нового продавца");
        }
      } else {
        // Если merch_id совпадает, добавляем товар к текущему мерчанту
        commit("ADD_CART_NEW_PROD_BY_MERCH", {productItem: payload.productItem});
        this.$toast.success('Товар добавлен в корзину!');
        console.debug("Новый товар добавлен к текущему мерчанту");
      }
    }
  },
  // load cart local-storage
  loadCartFromLocalStorage({commit}) {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      commit('SET_CART_FROM_LOCAL_STORAGE', JSON.parse(storedCart));
    }
  },
  //
  clearCart({commit}) {
    commit('CLEAR_CART');
  },
  setShipAddress({commit}, payload) {
    commit('SET_SHIP_ADDRESS', payload);
  },
  async checkoutOrder({state, dispatch}) {
    const shippingAddress = state.cart.checkout.merchant.current.ship_address;

    if (!shippingAddress) {
      console.error('[app][cart] Shipping address is missing. Unable to checkout.');
      this.$toast.error('Адрес доставки отсутствует. Оформление заказа невозможно.');
      return;
    }

    const orderData = {
      products: state.cart.checkout.merchant.current.products.map(product => ({
        product_id: product.id,
        quantity: product.qty
      })),
      //
      total: state.cart.checkout.merchant.current.total,
      shipping_address: shippingAddress,
    };

    try {
      // Отправляем запрос на сервер для оформления заказа
      const response = await this.$axios.$post('/api/shop/checkout/', orderData);

      // Обработка успешного ответа
      this.$toast.success('Заказ успешно оформлен!');
      console.log('[app][cart] Order placed successfully:', response);

      // Дополнительные действия при успешном оформлении заказа, например, очистка корзины
      dispatch('clearCart');
    } catch (error) {
      // Обработка ошибки при оформлении заказа
      this.$toast.error('Ошибка при оформлении заказа.');
      console.error('Error placing order:', error);
    }
  },
};

export const getters = {
  getCurrentCartProducts(state) {
    return state.cart.checkout.merchant.current.products ? state.cart.checkout.merchant.current.products : [];
  },
  getCartTotalAmount(state) {
    const products = state.cart.checkout.merchant.current.products;
    const totalAmount = products.reduce((acc, product) => parseFloat(product.price.excl_tax) * product.qty, 0);
    return totalAmount ?? totalAmount;
  },
  getCartTotalProducts(state) {
    const products = state.cart.checkout.merchant.current.products;
    // const productPrice =
    const totalProducts = products ? products.reduce((acc, product) => acc + product.qty, 0) : 0;
    return totalProducts;
  },
  getProductQtyById: (state) => (productId) => {
    const product = state.cart.checkout.merchant.current.products.find(
      (item) => item.id === productId
    );
    return product ? product.qty : 0;
  },
};

// Загружаем корзину из localStorage при старте приложения
export const plugins = [
  (store) => {
    store.dispatch('loadCartFromLocalStorage');
  }
];
