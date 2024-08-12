import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputField from '../components/atoms/input/input';

describe('InputField Component', () => {
  const mockOnChange = jest.fn();

  test('renders the input field with label', () => {
    render(
      <InputField
        label="Username"
        type="text"
        name="username"
        value=""
        onChange={mockOnChange}
        required={true}
      />
    );

    expect(screen.getByText('Username')).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', 'username');
    expect(input).toHaveAttribute('required');
  });

  test('calls onChange handler when input value changes', () => {
    render(
      <InputField
        label="Username"
        type="text"
        name="username"
        value=""
        onChange={mockOnChange}
        required={true}
      />
    );
 
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'testuser' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({ value: 'testuser' }),
    }));
  });
});
