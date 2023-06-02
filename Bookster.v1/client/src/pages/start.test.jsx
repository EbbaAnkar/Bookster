import { expect, it } from "vitest"
import App from "../App";
import { fireEvent, render, screen } from '@testing-library/react'

it('button clicked', () => {
    render(<App/>)
    
    const button = screen.getByTestId('login')
  
    fireEvent.click(button)

    expect(screen.getByTestId('login-form')).toBeDefined()
})
