import { MessageList } from './MessageList'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe("Messages list component", () => {
    it("render component without data", () => {
        render(<MessageList messageList={[]}/>)
    });
    it("render component with data", () => {
        const messageObj = {
            title: 'Your answer',
            text: `Hello Bot`,
            author: 'User',
        }
        render(<MessageList messageList={[messageObj]}/>)
        expect(screen.queryAllByRole('messageText').length).toBe(3);
    })
});