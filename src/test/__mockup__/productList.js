export default class List {
  static fetchProducts() {
    const response = {
      data: [
        {
          id: 1,
          title: 'Men Black Shirt',
          price: 60,
          description: 'Nice black shirt',
        },
        {
          id: 2,
          title: 'Lady Black Dress',
          price: 100,
          description: 'Nice black dress',
        },
        {
          id: 3,
          title: 'Men Khaki Shorts',
          price: 75,
          description: 'Nice khaki shorts',
        },
        {
          id: 4,
          title: 'Lady Pink Shoes',
          price: 200,
          description: 'Nice pink shoes',
        },
      ],
    };
    return response.data;
  }
}
