export default class Details {
  static fetchProductDetail() {
    const response = {
      data:
        {
          id: 1,
          title: 'Men Black Shirt',
          price: 60,
          description: 'Nice black shirt',
          category: 'Men',
          rating: {
            rate: 5.0,
            count: 35,
          },
        },
    };
    return response.data;
  }
}
