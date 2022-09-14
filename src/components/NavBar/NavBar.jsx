import './NavBar.scss';
import { useState } from "react";
import FilterList from './FiltersList/FilterList';
import SearchBox from './SearchBox/SearchBox';

const NavBar = ({applyFilters, searchBeers}) =>{
    const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const getLowerCaseSearch = event.target.value.toLowerCase();

  };

const searchedBeers = beerArr.filter((beer) => {
      const beerLowerCase = beer.name.toLowerCase();
      return beerLowerCase.includes(input);
    });

  return (
    <>
      <SearchBox
        handleInput={handleInput}/>
    <FilterList applyFilters={applyFilters}/>
    </>)
}

export default NavBar;