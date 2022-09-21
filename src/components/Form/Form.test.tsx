import { Form } from './Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  beforeEach(() => {
    render(
      <Form
        addNewMessage={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  });
  it('render button element', () => {
    expect(screen.queryAllByRole('button').length).toBe(1);
  });
  it('button visibility check', () => {
    expect(screen.getByText(/Send message/)).toBeVisible();
  });
  it('render with text button', () => {
    expect(screen.getByText(/Send message/)).toBeInTheDocument();
  });
  it('render input elements', () => {
    expect(screen.queryAllByRole('textbox').length).toBe(2);
  });
  it('render input with placeholder "Ivan"', () => {
    expect(screen.getByPlaceholderText(/Ivan/)).toBeInTheDocument();
  });
  it('render input with placeholder "Hello"', () => {
    expect(screen.getByPlaceholderText(/Hello/)).toBeInTheDocument();
  });
});
