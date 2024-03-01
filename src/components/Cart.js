
import React, { useContext } from "react";

import { BooksContext } from "../App";
import { Link } from "react-router-dom";


const Cart = () => {
  const context = useContext(BooksContext);

  const totalCartAmount = context.state.cart
    .reduce((total, book) => (total = total + book.price * book.count), 0)
    .toFixed(2);
  return (
    
  <>

      <h3>Total Cart Amount: &#8378;{totalCartAmount}</h3>
<div>
      {context.state.cart.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name}   height={200} width={200}/> 
          &nbsp;&nbsp;<div className="price">
          <h3>{book.title}</h3> &nbsp;
           <h4>
            <p className="product-price">Price: &#8378;{book.price}</p>
            <p>Total: &#8378;{(book.price * book.count).toFixed(2)}</p>
            <p> Quantity: {book.count}</p>&nbsp;&nbsp; </h4>  
            <button className="editt"  onClick={() => context.decrease(book.id)}>-</button> &nbsp;&nbsp;
            <button className="editt" onClick={() => context.removeFromCart(book.id)}>
              Remove
            </button> &nbsp;&nbsp;
            <button className="editt" onClick={() => context.increase(book.id)}>+</button>
            </div>
            
        </div>
        
  
      ))}
   </div> 
   {context.state.cart.some((book) => book.count > 0) && (
     <Link to="/address">
        <button className="button2">Proceed To Order</button>
      </Link>
   )}
      
      
      </>
  );
};

export default Cart;  