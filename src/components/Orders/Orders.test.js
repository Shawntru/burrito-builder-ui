import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Orders from './Orders';

const testOrders = [
  {
    id: 1,
    ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno'],
    0: 'beans',
    1: 'lettuce',
    2: 'carnitas',
    3: 'queso fresco',
    4: 'jalapeno',
    name: 'Pat',
  },
];

describe('Orders', () => {
  it('should render the orders component', () => {
    render(<Orders orders={testOrders} />);
    expect(screen.getByTestId('orders-test')).toBeInTheDocument();
  });

  it('should display the name on the order', () => {
    render(<Orders orders={testOrders} />);
    expect(screen.getByText('Pat')).toBeInTheDocument();
  });

  it('should display the ingredients in the order', () => {
    render(<Orders orders={testOrders} />);
    expect(screen.getByText('beans')).toBeInTheDocument();
    expect(screen.getByText('lettuce')).toBeInTheDocument();
    expect(screen.getByText('carnitas')).toBeInTheDocument();
    expect(screen.getByText('queso fresco')).toBeInTheDocument();
    expect(screen.getByText('jalapeno')).toBeInTheDocument();
  });
});
