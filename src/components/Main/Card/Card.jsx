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
        <div className="card_content">
           <Link className='allLinks' to ={`/${beer.id}`}  key={index}><img src={beer.image_url} alt={beer.name} /></Link>
            <h2>{beer.name}</h2>
            <p>{appendDescription(beer.description)}</p>
        </div> 
      ));
    return(<>{cardListJSX}</>)
}

export default Card;