import './NavBar.scss';
import { useState } from "react";
import FilterList from './FiltersList/FilterList';
import SearchBox from './SearchBox/SearchBox';

const NavBar = ({applyFilters, searchBeers}) =>{
    const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    const getLowerCaseSearch = event.target.value.toLowerCase();
    setSearchTerm(getLowerCaseSearch);
    searchBeers(searchTerm);
  };

  return (
    <>
      <SearchBox
        handleInput={handleInput}/>
    <FilterList applyFilters={applyFilters}/>
    </>)
}

export default NavBar;