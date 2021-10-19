import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './state'

test('renders the app page', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const amountElement = screen.getByTestId('balance-amount')
    expect(amountElement.innerHTML).toBe('0')
})
