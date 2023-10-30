import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import MarketData from './components/MarketData'
import SearchData from './components/SearchData'
import CoinPage from './pages/coinPage'
import ChartPage from './components/ChartPage'


const App = () => {
  return (
    <Router>
      <NavBar/>
      <div className='container'>
        <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/market' element={<MarketData/>} />
     <Route path='/search' element={<SearchData/>}/>
     <Route path='/coin/:coinId/*' element={<>
  <ChartPage />
  <CoinPage />
     </>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App