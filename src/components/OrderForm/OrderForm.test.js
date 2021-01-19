import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import OrderForm from './OrderForm';

describe('OrderForm', () => {
  it('should render the order form component', () => {
    render(<OrderForm />);

    expect(screen.getByTestId('form-test')).toBeInTheDocument();
  });

  it('should reflect the users typed value inside the input field', () => {
    render(<OrderForm />);

    const nameInput = screen.getByPlaceholderText('Name');
    userEvent.type(nameInput, 'Spud McButts');
    expect(nameInput).toHaveValue('Spud McButts');
  });

  it('should display ingredients available', () => {
    render(<OrderForm />);

    expect(screen.getByText('beans')).toBeInTheDocument();
    expect(screen.getByText('steak')).toBeInTheDocument();
    expect(screen.getByText('carnitas')).toBeInTheDocument();
    expect(screen.getByText('sofritas')).toBeInTheDocument();
    expect(screen.getByText('lettuce')).toBeInTheDocument();
    expect(screen.getByText('queso fresco')).toBeInTheDocument();
    expect(screen.getByText('pico de gallo')).toBeInTheDocument();
    expect(screen.getByText('hot sauce')).toBeInTheDocument();
    expect(screen.getByText('guacamole')).toBeInTheDocument();
    expect(screen.getByText('jalapenos')).toBeInTheDocument();
    expect(screen.getByText('cilantro')).toBeInTheDocument();
    expect(screen.getByText('sour cream')).toBeInTheDocument();
  });

  it('should show the currently selected ingredients', () => {
    render(<OrderForm />);
    userEvent.click(screen.getByText('beans'));
    userEvent.click(screen.getByText('lettuce'));
    expect(screen.getByText('Order: beans, lettuce')).toBeInTheDocument();
  });
});
