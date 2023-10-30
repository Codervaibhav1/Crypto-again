import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Bg from '../assets/Screenshot 2023-10-18 115331.png'
const Home = () => {
  return (
    <div className='container d-flex justify-content-center align-item-center mt-1'>
        <div id='home-one' className='bg-black w-100 p-5 d-flex justify-content-center align-item-center flex-column'>
            <h1 className='text-light'>Start Tranding Crypto <br/> Currency Easily</h1>
            <p className='text-light my-3'>Join the world of Crypto</p>
            <Link to={'/market'}>
            <Button variant='contained' color='warning' className='p-2 w-50 my-3'>Get Start</Button>
            </Link>
        </div>
    <img id='home-img' src={Bg} alt="" />
    </div>
  )
}

export default Home