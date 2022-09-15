import './FilterList.scss';
import FilterItem from '../FilterItem/FilterItem';
import { Link } from 'react-router-dom';

const FilterList = ({applyFilters}) =>{
    return(<div className='filterList'>
        <div className='filterList_filters'>
            <FilterItem checkName ={"highAlcoholContent"} checkInfo ={"High alcohol content"}/>
            <FilterItem checkName ={"classicRange"} checkInfo ={"Classic range"}/>
            <FilterItem checkName ={"highPH"} checkInfo ={"High Ph"}/>
        </div>
        <div className='filterList_button'>
           <Link to={'/'}> <button onClick={applyFilters}>Apply Filters</button></Link>
        </div>
    <button onclick={toggleFilters}>GetButtonText</button>
    </div>)
}

export default FilterList;