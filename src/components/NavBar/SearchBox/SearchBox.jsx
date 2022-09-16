import './SearchBox.scss';

const SearchBox = ({handleInput,searchTerm}) =>{
  
    return(<div className='searchBox'>
    <input type="input" 
    id="searchBox" 
    className='searchBox_input' 
    onInput={handleInput} 
    placeholder="Search beers..."/>
    </div>)
} 

export default SearchBox;