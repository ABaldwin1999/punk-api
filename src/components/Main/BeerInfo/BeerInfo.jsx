import './BeerInfo.scss';
import { useParams } from "react-router"
const BeerInfo = (props) =>{
  const {beerId} = useParams();
  const {beerArr}=props;
  const filteredBeerArr = [...beerArr];
  const clickedBeer = filteredBeerArr.find((beer) => beer.id === parseInt(beerId));
  const {image_url,name, description} = clickedBeer;

    return(
    <section className='beer-info'>
      <div className="album-info_img">
        <img src={image_url}/>
        <p>Tag</p>
      </div>
      <div className="beer-info_content">
        <h2>{name}</h2>
        <p>{description}</p>
        <h2 >Beer Facts</h2>
        <ul className="album-info__facts">
          <li>Mood :  </li>
          <li>Released : </li>
          <li>Genre : </li>
          <li>Score :</li>
        </ul>
      </div>

    </section>
    )
}

export default BeerInfo;