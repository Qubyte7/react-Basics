import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UseEffectHook from './UseEffect'
import Routing from './Routing';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* //<App />
    // <UseEffectHook /> */}
   
     <Routing />

  </React.StrictMode>
);

