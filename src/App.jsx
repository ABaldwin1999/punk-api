import React from 'react';
import './App.scss';

import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';



import { useState,useEffect } from "react";


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
    
     if(highAlcoholContent.checked){
        setFilteredBeerArr(filterBeerByHighAlcoholContent());
      }
      else if(classicRange.checked){
        setFilteredBeerArr(filterBeerByClassicRange());
      }
      else if(highPH.checked){
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
  return beerArr.filter((beer)=>parseInt(beer.first_brewed.split('/')[1])<2010);
  }

const filterBeerByHighAcidity = ()=>{
  return beerArr.filter((beer)=> beer.ph<4);
}



useEffect(()=>{
  getBeers();

},[])

   
  return (
    <div className="App">
      <NavBar searchBeers={searchBeers} applyFilters ={applyFilters}/>
     <Main beerArr={filteredBeerArr}/>
    </div>
  );
}

export default App;
