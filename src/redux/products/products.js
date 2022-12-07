import * as api from './FakeProductAPI';

const SET_PRODUCTS = 'products/SET_PRODUCTS';
const SET_SELECTED_PRODUCT = 'products/SET_SELECTED_PRODUCT';

const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload,
});

const setSelectedProduct = (payload) => ({
  type: SET_SELECTED_PRODUCT,
  payload,
});

export const getProducts = () => async (dispatch) => {
  const products = await api.fetchProducts();
  if (products) {
    dispatch(setProducts(products));
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  const product = await api.fetchProductDetails(id);
  if (product) {
    dispatch(setSelectedProduct(product));
  }
};

const initialState = {
  products: [],
  selectedProduct: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};

export default reducer;