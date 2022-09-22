import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import {RiCloseLine} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';


const Search = () => {
  // This ref will be connected to the overlay div
  const overlayRef = useRef();

  // This function is called when the "Start Searching" button gets clicked
  const openSearch = () => {
    overlayRef.current.style.width = '100%';
  };

  // This function is called when the "Close" button is clicked
  const closeSearch = () => {
    overlayRef.current.style.width = '0%';
  };
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    // console.log("hey");
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <>
    <button onClick={openSearch} className='open-button'>
    <BsSearch />
        </button>
    <div ref={overlayRef} className='overlay'>
        <button className='close-button' onClick={closeSearch}>
       {/* < RiCloseLine /> */}
       Close
        </button>
        <div className='overlay-content'>
          <form onSubmit={submitHandler}>
            <input
            onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder="Search recipes"
              className='search-input'
              value={input}
            />
            
            <button
              className='search-button'
              onClick={() => {
                // console.log('Hi there');
                /* Your search logic here */
              }}
            >
             {/* <BsSearch />  */}
             Search
            </button>
            <p className='search-text'>
              Enter your keyword into the search box
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
