import React from 'react';
import './App.scss';

import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';



import { useState } from "react";

function App() {
  const [beerArr,setBeerArr] = useState([]);
 
  const getBeers = async (selectedBeers) => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    setBeerArr(data);
    console.log(data);
  };

  const applyFilters = ()=>{
    const highAlcoholContent = document.querySelector('#highAlcoholContent');
    const classicRange = document.querySelector('#classicRange');
    const highPH = document.querySelector('#highPH');
    
    switch (true) {
      case highAlcoholContent.checked:
        getBeers(filterBeerByHighAlcoholContent());
        break;
      case classicRange.checked:
        getBeers(filterBeerByClassicRange());
        break;
      case highPH.checked:
        setBeerArr(filterBeerByHighAcidity());
        break;
      default:
        getBeers("https://api.punkapi.com/v2/beers")
        break;
    }
  }

const searchBeers = (input)=>{
  const searchedBeers = beerArr.filter((beer) => {
    const beerLowerCase = beer.name.toLowerCase();

    return beerLowerCase.includes(input);
  });
  setBeerArr(searchedBeers);
}

const filterBeerByHighAlcoholContent = ()=>{
 return "https://api.punkapi.com/v2/beers?abv_gt=6";
}

const filterBeerByClassicRange = ()=>{
  return "https://api.punkapi.com/v2/beers?brewed_before=01-2010";
  }

const filterBeerByHighAcidity = ()=>{
  return beerArr.filter((beer)=> beer.ph<4);
}

const populateBeerArr =(outOfBeer)=>{
  if(beerArr.length===0){
    getBeers("https://api.punkapi.com/v2/beers");
  }
  else if(outOfBeer){
    //message saying no beer of this filter type kept
  }
}

populateBeerArr(false);    
  return (
    <div className="App">
      <NavBar searchBeers={searchBeers} applyFilters ={applyFilters}/>
     <Main beerArr={beerArr}/>
    </div>
  );
}

export default App;
