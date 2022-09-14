import './SearchBox.scss';

const SearchBox = ({handleInput}) =>{
  
    return(<>
    <p>Search Beers</p>
    <input type="input" id="searchBox" onInput={handleInput} />
    </>)
}

export default SearchBox;