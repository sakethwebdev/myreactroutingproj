
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import Header from './components/Header';
import Products from './components/Products';
import Login from './components/Login'
import ProductDetail from './components/ProductDetail';
import SignUp from './components/signUp';
import Cart from './components/Cart';
import { createContext, useState } from 'react';
import UserProfile from './components/UserProfile';
import Address from './components/address';


export const BooksContext = createContext();
function App() {
  
 
  const [state, setState] = useState({
   
    cart: []
  });

  const addToCart = (product) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }]
    });
  };
  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });
    const increase = (id) => {
      setState({
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        )
      });
    };

    const decrease = (id) => {
      setState({
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
            : cartItem
        )    
      });
    }; 

    
  return (
    <>
    <BooksContext.Provider
  value={{state,addToCart, increase, decrease, removeFromCart }}
>

   <Header/>
    <Routes>
     
      <Route path="/profile" component={<UserProfile/>} />
      <Route path="/" element={<Home />} />
      
      <Route path="product" element={<Products />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp/>}/>
      <Route path="cart" element={<Cart  />}/>
      <Route path="address" element={<Address />}/>

    </Routes>
    </BooksContext.Provider>



    
   
    </>
  );
}





export default App;
