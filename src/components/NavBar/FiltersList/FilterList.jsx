import './FilterList.scss';
import FilterItem from '../FilterItem/FilterItem';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const FilterList = ({applyFilters}) =>{
    const [showFilters, setShowFilters] = useState(false);
    const toggleFilters=()=>{
        setShowFilters(!showFilters);
    }

    return(
    <div className='filterBox'>
        {showFilters &&<p className='hideFilters' onClick={toggleFilters}>X</p>}
         {showFilters && (
         <div className='filterList'>
           <div className='filterList_filters'>
            <FilterItem checkName ={"highAlcoholContent"} checkInfo ={"High alcohol content"}/>
            <FilterItem checkName ={"classicRange"} checkInfo ={"Classic range"}/>
            <FilterItem checkName ={"highPH"} checkInfo ={"High Ph"}/>
        </div>
           <Link to={'/'} style={{ textDecoration: 'none' }}> <Button buttonAction={applyFilters} buttonText="Apply filters"/></Link>
    </div>)}
    {!showFilters &&<Button buttonAction={toggleFilters} buttonText="Filters"/>}
    </div>)
}

export default FilterList;