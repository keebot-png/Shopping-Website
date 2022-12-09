import React from 'react';
import { render, fireEvent, screen } from '../utils/test-utils';
import App from '../App';

describe('App', () => {
  it('renders page correctly', () => {
    render(<App />);
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });

  it('it loads "PRoducts" on first render', async () => {
    render(<App />);
    expect(await screen.findByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBeInTheDocument();
  });

  it('navigates to Details and displays product details', async () => {
    render(<App />);
    expect(await screen.findByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'));
    expect(await screen.findByText('Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday')).toBeInTheDocument();
  });
});
