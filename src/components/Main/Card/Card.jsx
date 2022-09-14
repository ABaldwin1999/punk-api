import './Card.scss';

const Card = ({beerArr}) =>{
    const cardListJSX = beerArr.map((beer, index) => (
        <div key={index} className="card_content">
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
        </div>
      ));
    return(<>{cardListJSX}</>)
}

export default Card;