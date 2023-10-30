import React from 'react'

const Market = ({data}) => {
  // console.log(data)
  if(!data){
    return(
      <h1>something went wrong</h1>
    )
  }
  return (
  <tbody id='table-data'>
    <tr>
      <th scope="row" className='d-flex align-item-center justify-content-start'>
      <img id='coin' src={data.image.large} alt="" />
        <div className='mx-4 d-flex align-item-center justify-content-center flex-column'>
          <h6>{data.name}</h6>
          <p>{data.id}</p>
        </div>
      </th>
      <td id='table-data'>₹ {data.market_data.current_price.inr}</td>
      <td id='table-data1' className={data.market_data.price_change_24h <0?'text-danger':''}>{data.market_data.price_change_24h}</td>
      <td id='table-data2' className='text-success' >+{data.market_data.high_24h.usd}</td>
      <td id='table-data3' className='text-danger'>-{data.market_data.low_24h.usd}</td>
      <td id='table-data4' className={data.market_data.market_cap_change_24h<0?'text-danger':''}>{data.market_data.market_cap_change_24h}</td>
    </tr>
  </tbody>
  )
}

export default Market