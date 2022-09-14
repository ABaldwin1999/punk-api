import './FilterItem.scss';

const FilterItem = ({checkInfo,checkName}) =>{

    return(<>
    <p>{checkInfo}</p>
    <input type="checkbox" id={checkName} />
    </>)
}

export default FilterItem;