import React from 'react'
import { useState } from 'react';
import './style.css'

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            quote:"The only way to do great work is to love what you do.",
            name: "Steve Jobs"
        },
        {
            quote:"In three words I can sum up everything I've learned about life: it goes on.",
            name: "Robert Frost"
        },
        {
            quote:"It is never too late to be what you might have been.",
            name: "George Eliot"
        },
        {
            quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
            name: "Winston Churchill"
        },
        {
            quote:"The best way to predict the future is to create it.",
            name: "Peter Drucker"
        }
    ]

    const handlePREV = ()=>{
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
    }
    const handleNEXT =()=>{
        setCurrentIndex((currentIndex + testimonials.length + 1) % testimonials.length);
    }

  return (
    <div className='card'>
        <p className='quote'>{testimonials[currentIndex].quote}</p>
        <p className='name'>-{testimonials[currentIndex].name}</p>
        <div className="buttons">
            <button onClick={handlePREV}>PREV</button>
            <button onClick={handleNEXT}>NEXT</button>
        </div>
    </div>
  )
}

export default Testimonial
