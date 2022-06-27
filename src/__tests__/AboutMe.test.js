import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import AboutMe from '../AboutMe.js'

test('loads and displays content', async () => {

    render(<AboutMe />)

//test content has loaded
    expect(screen.getByRole('heading', {name: 'Mark Medhurst'})).toBeInTheDocument();
    expect(screen.getByLabelText('description')).toBeInTheDocument();
    expect(screen.getByLabelText('content')).toBeInTheDocument();
    expect(screen.getByLabelText('Body')).toBeInTheDocument();
    expect(screen.getByLabelText('Mind')).toBeInTheDocument();
    expect(screen.getByLabelText('Heart')).toBeInTheDocument();
    expect(screen.getByLabelText('Craft')).toBeInTheDocument();

})