import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/atoms/button/button';

describe('Button Component', () => {
  test('renders the button with correct text', () => {
    render(
      <Button type="button" onClick={() => {}}>Click Me</Button>
    );

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when button is clicked', () => {
    const handleClick = jest.fn();

    render(
      <Button type="button" onClick={handleClick}>Click Me</Button>
    );

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
