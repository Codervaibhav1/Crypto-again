import axios from "axios";

export const fetchCoins = async()=>{
    const response = await axios.get('/api/v3/coins/')
    // console.log(response.data)
    return response.data
}

export const searchItem = async(text)=>{
    const response = await axios.get(`/api/v3/search?query=${text}`)
    return response.data.coins
}
export const pageCoins = async(coinId)=>{
    const response = await axios.get(`/api/v3/coins/${coinId}`)
    // console.log(response.data)
    return response.data
}
export const chartCoins = async(coinId) =>{
    const response = await axios.get(`/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=24h`)
    // console.log(response.data.prices)
    return response.data.prices
}