import FavoriteCard from '../../components/favorites-card/favorites-card';
import { Offers } from '../../types';

type FavoriteOffersProps = {
  favoriteOffers: Offers;
}

function FavoriteList({favoriteOffers}: FavoriteOffersProps): JSX.Element {
  const cities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  return (
    <ul className="favorites__list">
      {Array.from(cities).map((cityName) => (
        <li className="favorites__locations-items" key={cityName}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOffers.filter((favoriteOffer) => favoriteOffer.city.name === cityName)
              .map((elem) => <FavoriteCard key={elem.id} offer={elem} />)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoriteList;