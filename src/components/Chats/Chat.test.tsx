import { Chat } from './Chat';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Chat component', () => {
  it('render component', () => {
    render(<Chat />);
  });
});
