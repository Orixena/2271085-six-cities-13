import Main from '../../pages/main/main';
import Login from '../../pages/login.tsx/login';
import FavoritePage from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page404/page404';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offers, DetailedOffers, Comments, City } from '../../types/types';
import { reducer } from '../../store/reducer';
import { changeCity, setOffers, sortedOffersCity } from '../../store/action';
import offers from '../../mocks/offers';


import { useAppDispatch } from '../../hooks';

type AppProps = {
  offersCount: number;
  //offers: Offers;
  detailedOffers: DetailedOffers;
  comments: Comments;
  city: City;
}

function App({offersCount, detailedOffers,comments, city}: AppProps): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOffers(offers));
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={ <Main offersCount={offersCount} offers={offers} city={city}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritePage favoriteOffers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<Offer detailedOffers={detailedOffers} comments={comments}/>}
          />
          <Route
            path='*'
            element={<Page404 />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
