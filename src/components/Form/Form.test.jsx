import { Form } from './Form'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

describe('Form', () => {
    beforeEach(() => {
        render(<Form />);
    });
    it('render component', () => {});
    it('render button element', () => {
        expect(screen.queryAllByRole('button').length).toBe(1)
    })
    it('button visibility check', () => {
        expect(screen.getByText(/Send message/)).toBeVisible()
    })
    it('render with text button', () => {
        expect(screen.getByText(/Send message/)).toBeInTheDocument();
    });
    it('render input elements', () => {
        expect(screen.queryAllByRole('textbox').length).toBe(2)
    })
    it('render input with placeholder "Message"', () => {
        expect(screen.getByPlaceholderText(/Message/)).toBeInTheDocument();
    })
    it('render input with placeholder "Author"', () => {
        expect(screen.getByPlaceholderText(/Author/)).toBeInTheDocument();
    })
});

// describe('check Form with UserEvent', () => {
    // it("check changes input value", () => {
    //     render(<Form addNewMessage={addNewMessage} />);
    //     const addNewMessage = jest.fn()

    //     userEvent.type(screen.getAllByRole("textbox"), "My name is Sergey");
    //     expect(addNewMessage).toHaveBeenCalled();
    // });

    // it('button async click', async () => {
    //     const mockHandler = jest.fn();
    //     render(<Button label="test" click={() => setTimeout(mockHandler, 1500)} />);
    
    //     await userEvent.click(screen.getByText(/test/));
    
    //     await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
    //       timeout: 1600,
    //     });
// });