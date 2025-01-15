import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const About = () => {
    const [nameComponent, setNameComponent] = useState('Abount')
    const initialVa = useSelector((state) => state.product.initialValue)
    return (
        <>
        <div>
        <span>Initial value: {initialVa}</span>
        <p>Component name: {nameComponent}</p>
        </div>
        <div>
        <button onClick={() => {setNameComponent('Curso de React!!!')}}>Press</button>
        </div>
            
            
        </>
    )
}

export default About
