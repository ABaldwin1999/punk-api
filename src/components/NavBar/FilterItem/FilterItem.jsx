import './FilterItem.scss';

const FilterItem = ({checkInfo,checkName}) =>{

    return(<div className='checkbox'>
    <p>{checkInfo}</p>
    <input type="checkbox" id={checkName} />
    </div>)
}

export default FilterItem;