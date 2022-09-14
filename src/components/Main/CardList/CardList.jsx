import './CardList.scss';
import Card from '../Card/Card';
const CardList = ({beerArr}) =>{
    return(
    <section className='cardList'>
        <Card beerArr ={beerArr}/>
    </section>
    )
}

export default CardList;