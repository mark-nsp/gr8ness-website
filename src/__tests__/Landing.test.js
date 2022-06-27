import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Landing from '../Landing.js'

test('loads and displays content', async () => {
    const landing = jest.fn().mockImplementation(() => console.log("Form sent"))

    render(<Landing testFunc={landing}/>)

//test form has loaded
    expect(screen.getByLabelText('TestimonialsFull')).toBeInTheDocument();
    expect(screen.getByLabelText('About MeFull')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Get in touch')).toBeInTheDocument();
    expect(screen.getByLabelText('testimonialsButton')).toBeInTheDocument();
    
    //test Testimonials link 
    fireEvent.click(screen.getByLabelText('TestimonialsFull'));
    expect(landing).toHaveBeenCalled();

    //test About Me link 
    fireEvent.click(screen.getByLabelText('About MeFull'))
    expect(landing).toHaveBeenCalled();

    //test Contact link 
    fireEvent.click(screen.getByText('Contact'))
    expect(landing).toHaveBeenCalled();

    //test Get In touch button 
    fireEvent.click(screen.getByText('Get in touch'))
    expect(landing).toHaveBeenCalled();

    //test Testimonials button
    fireEvent.click(screen.getByLabelText('testimonialsButton'))
    expect(landing).toHaveBeenCalled();





})