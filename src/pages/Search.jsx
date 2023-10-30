import React from "react";
import { Link } from "react-router-dom";

const Search = ({ item }) => {
  if (!item) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="card col-sm-12 col-md-6 col-lg-4 rounded-0 my-1">
      <div className="d-flex justify-content-between my-2">
      <div>
        <img id="coin" src={item.large} className="card-img-top my-2" alt="..." />
      <h4>{item.symbol}</h4>
      </div>
     <div className="my-2">
     <h5 className="card-title">{item.name}</h5>
        <div>
          <h6>Market rank</h6>
        <p className="card-text">{item.market_cap_rank}</p>
        </div>
     </div>
      </div>
      <Link to={`/coin/${item.id}`} className="d-flex justify-content-center text-decoration-none">
      <button type="button" className="btn btn-outline-primary my-3 rounded-0 w-50">View More</button>
      </Link>
    </div>
  );
};

export default Search;
