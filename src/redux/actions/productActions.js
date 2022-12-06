import { ActionTypes } from '../constants/action-types';

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (products) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: products,
});

export const removeSelectedProduct = () => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCT,
});
