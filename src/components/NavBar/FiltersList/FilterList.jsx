import './FilterList.scss';
import FilterItem from '../FilterItem/FilterItem';

const FilterList = ({applyFilters}) =>{
    return(<>
    <FilterItem checkName ={"highAlcoholContent"} checkInfo ={"High alcohol content"}/>
    <FilterItem checkName ={"classicRange"} checkInfo ={"Classic range"}/>
    <FilterItem checkName ={"highPH"} checkInfo ={"High Ph"}/>
    <button onClick={applyFilters}>Apply Filters</button>
    </>)
}

export default FilterList;