import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
    const initialVa = useSelector((state) => state.product.initialValue)
    return (
        <>
            <p>Component About</p>
            <span>Initial value: {initialVa}</span>
        </>
    )
}

export default About
