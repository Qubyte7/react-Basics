import {BrowserRouter, Routes,Route } from 'react-router-dom';
import {Home} from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Error } from './pages/Error';
import { NavBAR } from './pages/Link';
import { Product } from './pages/Product';
import { Price } from './pages/Price';
import { ProductAvl } from './pages/ProductsAvl';
import { Profile } from './pages/Profile';
import { useState, createContext } from 'react';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { Form } from './pages/Form';

export const AppContext = createContext();


function Routing() {
const [username, setUsername] = useState("IINNNOCENT");
const client = new QueryClient({defaultOptions:{
  queries:{
    refetchOnWindowFocus:true,
  }
}})
   return (  
<div>
  <QueryClientProvider client={client}>
<AppContext.Provider value={{username, setUsername}}>
  <BrowserRouter>
      <NavBAR />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/menu/:food" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<Error />} />
        <Route path='/product' element={<Product />}>
             <Route path='price' element={<Price />} />
             <Route path='available' element={<ProductAvl />} />
        </Route>
        <Route path="/profile" element={<Profile/>} />
        <Route  path='/form' element={<Form />}/>
      </Routes> 
    </BrowserRouter>
    </AppContext.Provider>
    </QueryClientProvider>
    {/* this */}
</div>
   );
}
export default Routing;




