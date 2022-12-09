import { getProductDetails, getProducts } from '../products';

const payload = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  }];

describe('products', () => {
  it('should dispatch getProducts', async () => {
    const dispatch = jest.fn();
    await getProducts()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'products/SET_PRODUCTS',
      payload,
    });
  });
  it('should dispatch getProductDetails', async () => {
    const dispatch = jest.fn();
    await getProductDetails(1)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'products/SET_SELECTED_PRODUCT',
      payload: payload[0],

    });
  });
});
