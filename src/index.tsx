import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './styles/global.scss';
import Layout from './components/Layout';
import {store} from './redux/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
      <App />
      </Layout>
    </Provider>
  </BrowserRouter>
);
