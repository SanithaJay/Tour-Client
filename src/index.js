import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/fonts.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "../node_modules/react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from './context/AuthContext';




const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={ 5000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
     
      <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

