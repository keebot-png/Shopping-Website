export const fetchProducts = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch('https://fakestoreapi.com/products', requestOptions);
  const data = await response.json();
  return data;
};

export const fetchProductDetails = async (productId) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`, requestOptions);
  const data = await response.json();
  return data;
};
