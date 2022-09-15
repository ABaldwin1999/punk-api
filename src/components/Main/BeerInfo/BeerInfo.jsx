import './BeerInfo.scss';
import { useParams } from "react-router"
const BeerInfo = (props) =>{
  const {beerId} = useParams();
  const {beerArr}=props;
  const filteredBeerArr = [...beerArr];
  const clickedBeer = filteredBeerArr.find((beer) => beer.id === parseInt(beerId));
  const {image_url,name, description,tagline,first_brewed,abv,brewers_tips,ph} = clickedBeer;

    return(
    <section className='beer-info'>
      <div className="beer-info_img">
        <img src={image_url}/>
        <p>{tagline}</p>
      </div>
      <div className="beer-info_content">
        <h2>{name}</h2>
        <p>{description}</p>
        <ul className="beer-info__facts">
          <li>First brewed : {first_brewed}</li>
          <li>Abv : {abv}</li>
          <li>Ph : {ph}</li>
        </ul>
        <p>{brewers_tips}</p>
      </div>

    </section>
    )
}

export default BeerInfo;