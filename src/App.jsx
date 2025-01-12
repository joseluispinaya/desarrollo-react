import './App.css'
import Home from './screens/Home.jsx'
import Counter from "./Components/Counter/Counter.jsx";
import Product from './screens/Product.jsx'

function App() {


  return (
    <>
      <div className="left-section">
        <Home />
        <Counter />
      </div>
      <div className="right-section">
        <Product />
      </div>
    </>
  )
}

export default App
