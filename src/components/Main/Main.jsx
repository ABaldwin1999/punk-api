import './Main.scss';
import CardList from './CardList/CardList';

const Main = ({beerArr}) =>{

    return(
    <>
        <CardList beerArr ={beerArr}/>
    </>
    )
}

export default Main;