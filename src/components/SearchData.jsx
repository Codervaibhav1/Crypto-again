import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Search from '../pages/Search'
import { searchCoin } from '../feactures/slice/cryptoSlice'
import { Grid, LinearProgress } from '@mui/material'

const SearchData = () => {
    const {searchcoins} = useSelector((state)=>state.coins)
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(searchCoin())
    },[])
    
    if(!searchcoins){
      return(
        <LinearProgress color='warning' className='my-5' />
      )
    }
    // console.log(searchcoins)
  return (
    <div className=' my-3'>
      <span className="row">
    {
        searchcoins.map(item => <Search key={item.id} item={item}/>)
    }
    </span>
    </div>
  )
}

export default SearchData