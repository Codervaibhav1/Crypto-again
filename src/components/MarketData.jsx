import React, { useEffect } from 'react'
import Market from '../pages/Market'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../feactures/slice/cryptoSlice'
import { LinearProgress } from '@mui/material'

const MarketData = () => {
 const {coins , isLoading , isError , isSuccess} = useSelector(state => state.coins)
 const dispatch = useDispatch()
 useEffect(()=>{
   dispatch(fetchData())
 },[])
//  console.log(coins)
if(isLoading){
  return(
    <LinearProgress color='warning' className='my-5' />
  )
}
if(isError){
  return(
    <h1 className='text-danger text-center'>Something went wrong</h1>
  )
}

  return (
    <div >
       <nav className="navbar bg-dark mt-5">
  <div className="container d-flex justify-content-center">
    <span className="navbar-brand mb-0 h1 text-light">Markets</span>
  </div>
</nav>
      <table className="table">
      <thead id='table-body'>
    <tr>
      <th scope="col" className=''>Crypto Currencies</th>
      <th scope="col">Current Price</th>
      <th scope="col">24h Change</th>
      <th scope="col">High_24h</th>
      <th scope="col">Low_24h</th>
      <th scope="col">Market Cap</th>
    </tr>
  </thead>
      {
        coins.map(data => <Market key={data.id}  data={data}/>)
      }
      </table>
    </div>
  )
}

export default MarketData