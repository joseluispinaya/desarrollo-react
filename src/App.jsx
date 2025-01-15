import './App.css'
import Home from './screens/Home.jsx'
import Counter from "./Components/Counter/Counter.jsx";
import Product from './screens/Product.jsx'

import Navigator from './Components/Navigation/Navigator.jsx'
import Router from './Components/Navigation/Router.jsx'


function App() {


  return (
    <>
    <Navigator />
    <Router />
      {/* <div className="left-section">
        <Home />
        <Counter />
      </div>
      <div className="right-section">
        <Product />
      </div> */}
    </>
  )
}

export default App
