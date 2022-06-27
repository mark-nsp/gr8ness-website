import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Testimonials from '../Testimonials.js'

test('loads and displays content', async () => {

    render(<Testimonials />)
    const setOpen = jest.fn();
    const handleClick = jest.spyOn(React, 'useState')
    handleClick.mockImplementation(open => [open,setOpen])
    fireEvent.click(screen.getByLabelText('Bernie Sander'))
//test content has loaded
    expect(setOpen).toBeCalled();
})