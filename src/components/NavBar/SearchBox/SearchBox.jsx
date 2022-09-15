import './SearchBox.scss';

const SearchBox = ({handleInput,searchTerm}) =>{
  
    return(<div className='searchBox'>
    <label htmlFor="searchBox">Search beers: </label>
    <input type="input" 
    id="searchBox" 
    value={searchTerm} 
    className='searchBox_input' 
    onInput={handleInput} 
    placeholder="Search beers..."/>
    </div>)
} 

export default SearchBox;