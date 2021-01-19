import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { testOrders } from '../../testOrders';

import Orders from './Orders';

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
