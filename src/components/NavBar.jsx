import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchCoin } from "../feactures/slice/cryptoSlice";
const NavBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCoin(text))
    setText('')
    navigate('/search')
  };

  return (
    <nav className="navbar navbar-expand-lg bg-black shadow-lg">
      <div className="container">
        <img id="logo" src={Logo} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light rounded-1"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-item-center justify-content-center">
            <li className="nav-item">
              <Link
                to={"/"}
                className="nav-link active text-light mx-3"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/market"}
                className="nav-link active text-light mx-3"
                aria-current="page"
                href="#"
              >
                Market
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
              <button type="submit" className="btn btn-outline-success">
                Search
              </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
