import React from 'react';
import './App.scss';

import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import BeerInfo from './components/Main/BeerInfo/BeerInfo';
import Button from './components/NavBar/Button/Button';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

function App() {
  const [beerArr,setBeerArr] = useState([]);
  const [filteredBeerArr,setFilteredBeerArr] = useState([]);
 
  const getBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    setBeerArr(data);
    setFilteredBeerArr(data);
  };

  const applyFilters = ()=>{
    const highAlcoholContent = document.querySelector('#highAlcoholContent');
    const classicRange = document.querySelector('#classicRange');
    const highPH = document.querySelector('#highPH');
    setFilteredBeerArr([...beerArr]);
     if(highAlcoholContent.checked){
        setFilteredBeerArr(filterBeerByHighAlcoholContent());
      }
      if(classicRange.checked){
        setFilteredBeerArr(filterBeerByClassicRange());
      }
      if(highPH.checked){
        setFilteredBeerArr(filterBeerByHighAcidity());
      }
      else{
        setFilteredBeerArr([...beerArr]);
      }
  }

const searchBeers = (input)=>{
  const searchedBeers = beerArr.filter((beer) => {
    const beerLowerCase = beer.name.toLowerCase();
    return beerLowerCase.includes(input);
  });
  setFilteredBeerArr(searchedBeers);
  
}

const filterBeerByHighAlcoholContent = ()=>{
  return beerArr.filter((beer)=> beer.abv>6);
}

const filterBeerByClassicRange = ()=>{
  return filteredBeerArr.filter((beer)=>parseInt(beer.first_brewed.split('/')[1])<2010);
  }

const filterBeerByHighAcidity = ()=>{
  return filteredBeerArr.filter((beer)=> beer.ph<4);
}



useEffect(()=>{
  getBeers();

},[])

   
  return (
     <Router>
      <div className="app">
        <header className='title'>
         <Link to={'/'} style={{ textDecoration: 'none' }}><Button className={"home"} buttonText="Home"/></Link>
          <h1>Beers</h1>
          </header>
      <div className='mainPage'>
      <NavBar searchBeers={searchBeers} applyFilters ={applyFilters}/>
  
        <Routes>
        <Route
  path="/:beerId"
  element={<BeerInfo beerArr={filteredBeerArr}/>}
/>

  <Route
    path="/"
    element={
    <Main beerArr={filteredBeerArr}/>
    }
  />
        </Routes>
        </div>
      </div>
    </Router>
   
  );
}

export default App;
