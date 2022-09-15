import './Card.scss';
import { Link } from "react-router-dom";
const Card = ({beerArr}) =>{
    const appendDescription =(beerDescription)=>{
        let description = ""
        if(beerDescription.length >100){
            description = beerDescription.slice(0,100) +"...";
        }
        else{
            description = beerDescription;
        }
        return description; 
    }

    const cardListJSX = beerArr.map((beer, index) => ( 
        <Link className='allLinks' to ={`/${beer.id}`}  key={index}><div className="card_content">
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{appendDescription(beer.description)}</p>
        </div> </Link>
      ));
    return(<>{cardListJSX}</>)
}

export default Card;