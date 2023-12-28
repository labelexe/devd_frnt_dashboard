// // store/shop/cart/index22.js
//
// export const state = () => {
//   return {
//     cart: {
//       show: false, checkout: {
//         merchant: {
//           current: {
//             id: null, products: []
//           }
//         }, status: false,
//       }
//
//     }
//   }
// }
//
// export const mutations = {
//   SET_CURRENT_MERCH_ID(state, payload = {merch_id: null}) {
//     state.cart.checkout.merchant.current.id = payload.merch_id;
//   },
//   ADD_CART_NEW_PROD_BY_MERCH(state, payload = {productItem: null}) {
//     state.cart.checkout.merchant.current.products.push(payload.productItem)
//   }
// }
//
// export const actions = {
//   addNewProduct({state, dispatch, commit}, payload = {productItem: null, add_qty: false}) {
//     if (payload.productItem == null) {
//       this.$toast({
//         position: 'bottom-right',
//         title: "Что-то пошло не по плану!",
//         description: "",
//         status: "warning",
//         duration: 2000,
//       })
//     }
//     if (payload.add_qty) {
//       const exist_product = dispatch("checkExistProduct", {item: payload.productItem});
//       //
//       if (exist_product !== null) {
//         commit("ADD_CART_NEW_PROD_BY_MERCH", {
//           productItem: {
//             qty: exist_product.qty ? exist_product.qty : 1,
//             ...exist_product
//           }
//         });
//       } else {
//         //Если нет такой позиции создаем
//         commit("ADD_CART_NEW_PROD_BY_MERCH", {
//           productItem: {
//             qty: 1,
//             ...payload.productItem
//           }
//         });
//       }
//
//     } else {
//       commit("ADD_CART_NEW_PROD_BY_MERCH", {
//         productItem: {
//           qty: 1,
//           ...payload.productItem
//         }
//       });
//     }
//
//   },
//   checkExistProduct({state}, payload = {item: null}) {
//     return state.cart.checkout.merchant.current.products.find(productItem =>
//       productItem.id === payload.item.id
//     );
//   },
//   checkMerchantIsNull({state}) {
//     return state.cart.checkout.merchant.current.id !== null
//   },
//   checkCurrentMerch({state}, payload = {check_merch_id: null}) {
//     return state.cart.checkout.merchant.current.id === payload.check_merch_id;
//   },
//   async setCurrentMerchant({commit}, payload = {merch_id: null}) {
//     await commit("SET_CURRENT_MERCH_ID", {
//       // merch_id: payload.productItem.
//       merch_id: payload.merch_id
//     });
//   },
//
//   async addMerchProdToCart({state, dispatch, commit}, payload = {productItem: null, merch_id: null}) {
//     console.log("click add new product by merch");
//     console.log(await dispatch("checkMerchantIsNull"));
//     console.log(await dispatch("checkCurrentMerch", {check_merch_id: payload.productItem.seller.id}));
//
//
//     // Проверяем текущего продавца
//     if (await dispatch("checkCurrentMerch", {check_merch_id: payload.productItem.seller.id})) {
//       // Проверяем наличие товаров
//       if (await dispatch("checkMerchantIsNull") || state.cart.checkout.merchant.current.products.length > 0) {
//         // Если товары уже есть в корзине
//         const существующийТовар = await dispatch("checkExistProduct", {item: payload.productItem});
//
//         if (существующийТовар !== null) {
//           // Если товар уже есть в корзине, увеличиваем количество
//           commit("SET_CURRENT_MERCH_ID", {merch_id: payload.productItem.seller.id}); // Устанавливаем текущего продавца
//           commit("ADD_CART_NEW_PROD_BY_MERCH", {
//             productItem: {
//               ...существующийТовар,
//               qty: существующийТовар.qty + 1
//             }
//           });
//           console.log("Количество увеличено для существующего товара");
//         } else {
//           // Если товара с таким id продавца нет в корзине, добавляем новый товар
//           await dispatch("addNewProduct", {productItem: payload.productItem});
//           console.log("Новый товар добавлен в корзину");
//         }
//       } else {
//         // Если корзина пуста, добавляем новый товар
//         await dispatch("addNewProduct", {productItem: payload.productItem});
//         await dispatch("setCurrentMerchant", {merch_id: payload.productItem.seller.id});
//         console.log("Новый товар добавлен в корзину");
//       }
//     }
//   },
//
// }
//
// export const getters = {
//   getCurrentCartProducts(state) {
//     return state.cart.checkout.merchant.current.products ? state.cart.checkout.merchant.current.products : []
//   },
//   getCartTotalAmount(state) {
//     const products = state.cart.checkout.merchant.current.products;
//     const totalQuantity = products.reduce((acc, product) => (parseFloat(product.price.excl_tax)) * product.qty, 0);
//     return totalQuantity;
//   },
//   getCartTotalProducts(state) {
//     const products = state.cart.checkout.merchant.current.products;
//     return products ? products.length : 0;
//   }
// }
