import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pageData } from "../feactures/slice/cryptoSlice";

const CoinPage = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const { pagecoins } = useSelector((state) => state.coins);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [currencyhigh, setCurrencyhigh] = useState("usd");
  const [currencyLow, setCurrencyLow] = useState("usd");
  const [currencyChange, setcurrencyChange] = useState("usd");
  const priceCurrency =
    selectedCurrency === "usd"
      ? pagecoins.market_data?.current_price?.usd
      : pagecoins.market_data?.current_price?.inr;

      const highData = 
      currencyhigh === 'usd'
      ? pagecoins.market_data?.high_24h?.usd
      : pagecoins.market_data?.high_24h?.inr

      const lowData = 
      currencyLow === 'usd'
      ? pagecoins.market_data?.low_24h?.usd
      : pagecoins.market_data?.low_24h?.inr

      const changeData = 
      currencyChange === 'usd'
      ? pagecoins.market_data?.price_change_24h_in_currency?.usd
      : pagecoins.market_data?.price_change_24h_in_currency?.inr
      
      
  useEffect(() => {
    dispatch(pageData(coinId));
  }, [dispatch, coinId]);

  if (!pagecoins) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-black shadow bg-light">
      <div id="pages" className="d-flex justify-content-evenly py-3 row">
        <div className="col-sm-12 col-lg-6 p-5">
          <h1>{pagecoins.name}</h1>
          <h4 className="mt-5">Current Price</h4>
          <span className="d-flex my-2">
            <div className="border border-2 px-3 w-50">{priceCurrency}</div>
              <select
                className="form-select form-select-sm rounded-0 w-25"
                aria-label="Small select example"
                onChange={(e) => setSelectedCurrency(e.target.value)}
                value={selectedCurrency}
              >
                <option value="usd">$</option>
                <option value="inr">₹</option>
              </select>
          </span>
          <div>
            <h4 className="mt-3">High_24h</h4>
            <span className="d-flex my-2">
            <div className="border border-2 px-3 w-50 text-success">+{highData}</div>
              <select
                className="form-select form-select-sm rounded-0 w-25"
                aria-label="Small select example"
                onChange={(e) => setCurrencyhigh(e.target.value)}
                value={currencyhigh}
              >
                <option value="usd">$</option>
                <option value="inr">₹</option>
              </select>
          </span>
        </div>
        <div>
            <h4 className="mt-3">Low_24h</h4>
            <span className="d-flex my-2">
            <div className="border border-2 px-3 w-50 text-danger">-{lowData}</div>
              <select
                className="form-select form-select-sm rounded-0 w-25"
                aria-label="Small select example"
                onChange={(e) => setCurrencyLow(e.target.value)}
                value={currencyLow}
              >
                <option value="usd">$</option>
                <option value="inr">₹</option>
              </select>
          </span>
        </div>
        <div>
            <h4 className="mt-3">Price_Change_24h</h4>
            <span className="d-flex my-2">
            <div className={changeData > 0?"border border-2 px-3 text-success":"border border-2 px-3 text-danger"}>{changeData}</div>
              <select
                className="form-select form-select-sm rounded-0 w-25"
                aria-label="Small select example"
                onChange={(e) => setcurrencyChange(e.target.value)}
                value={currencyChange}
              >
                <option value="usd">$</option>
                <option value="inr">₹</option>
              </select>
          </span>
        </div>
        </div>
        <div className="col-sm-12 col-lg-6 p-5">
          <img id="coinimg" src={pagecoins.image?.large} alt="" />
          <h5 className=" my-2">{pagecoins.symbol}</h5>
          <h4 className="my-3">Description</h4>
          <p className="w-100">
           {pagecoins.description?.en}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
