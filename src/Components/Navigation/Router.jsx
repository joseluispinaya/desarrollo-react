import Home from '../../screens/Home.jsx'
import Product from '../../screens/Product.jsx'

import About from '../../screens/About.jsx'
import Think from '../../screens/Think.jsx'

import { Routes, Route, Navigate } from 'react-router'

const Router = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path='products' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='think' element={<Think />} />
        {/* <Route path='/*' element={<Navigate to="/home" />} /> */}
    </Routes>
  )
}

export default Router
