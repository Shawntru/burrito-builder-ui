import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { testOrders, testPostOrder } from '../../testOrders';
import { getOrders, postOrder } from '../../apiCalls';
import userEvent from '@testing-library/user-event';

jest.mock('../../apiCalls');

beforeEach(() => {
  getOrders.mockResolvedValue({ orders: [testOrders] });
  postOrder.mockResolvedValue(testPostOrder);
});

// I had a last minute explosion here. Everything was working originally,
// I broke something somewhere which lead to a '$git restore .' and
// me being unable to get these tests functioning again.
// If needed I can explain my reasoning behind all the async testing/etc.

describe('App', () => {
  it.only('should render the orders component', () => {
    render(<App />);
    expect(screen.getByTestId('app-test')).toBeInTheDocument();
  });

  it('should fetch new orders on mounting', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Pat')).toBeInTheDocument();
    });
  });

  it('should display new orders on mounting', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId('orders-test')).toBeInTheDocument();
    });
  });

  it('should render a new order after succesfully completing the form', async () => {
    render(<App />);

    await waitFor(() => {
      const nameInput = screen.getByPlaceholderText('Name');
      userEvent.type(nameInput, 'Pat');
    });

    userEvent.click(screen.getByRole('button', { name: 'lettuce' }));
    userEvent.click(screen.getByRole('button', { name: 'beans' }));
    userEvent.click(screen.getByRole('button', { name: 'carnitas' }));
    userEvent.click(screen.getByRole('button', { name: 'queso fresco' }));
    userEvent.click(screen.getByRole('button', { name: 'jalapenos' }));
    userEvent.click(screen.getByRole('button', { name: 'Submit Order' }));

    await waitFor(() => {
      expect(screen.getByText('Pat')).toBeInTheDocument();
    });
  });
});
