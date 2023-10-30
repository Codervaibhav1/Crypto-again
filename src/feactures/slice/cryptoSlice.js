import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { chartCoins, fetchCoins, pageCoins, searchItem } from "./cryptoServer";

const cryptoSlice = createSlice({
  name: "coins",
  initialState:{
    coins: [
        // {
        //   image:
        //     "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        //   id: "btc",
        //   name: "bitcoin",
        //   high_24h:344567,
        //   low_24h:-3567,
        //   current_price: 12345,
        //   price_change_24h: 1234,
        //   market_cap_change_24h: 6773270211,
        // },
      ],
      searchcoins: [],
      pagecoins:[],
      chart:[],
      isLoading:false,
      isError:false,
      isSuccess:false

  },
  
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
    .addCase(fetchData.pending , state =>{
       state.isLoading = true
    })
    .addCase(fetchData.fulfilled , (state , action)=>{
        state.isLoading = false
        state.coins = action.payload
        state.isSuccess = true
    })
    .addCase(fetchData.rejected , state =>{
        state.isSuccess = false
        state.isError = true
    })
    .addCase(searchCoin.pending , state =>{
        state.isLoading = true
     })
     .addCase(searchCoin.fulfilled , (state , action)=>{
         state.isLoading = false
         state.searchcoins = action.payload
         state.isSuccess = true
     })
     .addCase(searchCoin.rejected , state =>{
         state.isSuccess = false
         state.isError = true
     })
     .addCase(pageData.pending , state =>{
        state.isLoading = true
     })
     .addCase(pageData.fulfilled , (state , action)=>{
         state.isLoading = false
         state.pagecoins = action.payload
         state.isSuccess = true
     })
     .addCase(pageData.rejected , state =>{
         state.isSuccess = false
         state.isError = true
     }).addCase(chartData.pending , state =>{
        state.isLoading = true
     })
     .addCase(chartData.fulfilled , (state , action)=>{
         state.isLoading = false
         state.chart = action.payload
         state.isSuccess = true
     })
     .addCase(chartData.rejected , state =>{
         state.isSuccess = false
         state.isError = true
     })
  }

});
export default cryptoSlice.reducer

export const fetchData = createAsyncThunk('coins', async () => {
    try {
      const response = await fetchCoins();
      return response;
    } catch (error) {
      console.log(error)
    }
  });
  
  export const searchCoin = createAsyncThunk('search', async (text) => {
    try {
      const response = await searchItem(text);
      return response;
    } catch (error) {
        console.log(error)
    }
  });
  
  export const pageData = createAsyncThunk('pages', async (coinId) => {
    try {
      const response = await pageCoins(coinId);
      return response;
    } catch (error) {
        console.log(error)
    }
  });
  
  export const chartData = createAsyncThunk('chart', async (coinId) => {
    try {
      const response = await chartCoins(coinId);
      return response;
    } catch (error) {
        console.log(error)
    }
  });
  