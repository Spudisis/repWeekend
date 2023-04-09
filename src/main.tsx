import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
      />
    </BrowserRouter>
  </React.StrictMode>,
);
