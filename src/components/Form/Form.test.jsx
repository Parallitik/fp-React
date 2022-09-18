import { Form } from './Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  beforeEach(() => {
    render(<Form />);
  });
  it('render component', () => {});
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
  it('render input with placeholder "Message"', () => {
    expect(screen.getByPlaceholderText(/Message/)).toBeInTheDocument();
  });
  it('render input with placeholder "Author"', () => {
    expect(screen.getByPlaceholderText(/Author/)).toBeInTheDocument();
  });
});
