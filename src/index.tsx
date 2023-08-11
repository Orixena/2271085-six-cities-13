import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import detailedOffers from './mocks/detailedOffers';
import comments from './mocks/comments';
import {ToastContainer} from 'react-toastify';
import { store } from './store';
import { fetchOffersAction,checkAuthAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction());

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        detailedOffers={detailedOffers}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>
);
