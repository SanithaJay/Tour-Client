import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/fonts.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import "../node_modules/react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

