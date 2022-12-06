import List from "./__mockup__/productList";

describe('Product list should pass the test', () => {
    test('Fetch Product should return data', () => {
        expect(List.fetchProducts()).toBeDefined();
    });
    test('Fetch Product should return object length', () => {
        expect(List.fetchProducts()).toHaveLength(4);
    });
    test('Fetch Product should return description', () => {
        expect(List.fetchProducts()[0].description).toBe('Nice black shirt');
    });
})