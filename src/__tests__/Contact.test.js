import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from '../Contact.js'

test('loads and displays content', async () => {
  const contact = jest.fn().mockImplementation(() => console.log("Form sent"))

  render(<Contact testFunc={contact}/>)

//test form has loaded
  expect(screen.getByRole('form')).toBeInTheDocument();
  expect(screen.getByRole('textbox', {name: 'Name'})).toBeInTheDocument();
  expect(screen.getByRole('textbox', {name: 'Email'})).toBeInTheDocument();
  expect(screen.getByRole('textbox', {name: 'Phone'})).toBeInTheDocument();
  expect(screen.getByRole('textbox', {name: 'Notes'})).toBeInTheDocument();

//test submit button works
  fireEvent.click(screen.getByRole('button', {name: 'Send'}))
  expect(contact).toHaveBeenCalled();
})
