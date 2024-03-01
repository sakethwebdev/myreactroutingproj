
import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router'


import { Link } from 'react-router-dom'
import { BooksContext } from '../App'
export default function Product() {
  const context =useContext(BooksContext)
   const {id} =useParams()
   const [product,setProduct] =useState([])
   useEffect(()=>{
    const getProducts= async ()=>{
      
            const response= await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
          
    }
    getProducts()
    },[])

   

        return(
            <>
            <div className='container'><br/><br/>
              <div className='row'> 
            <div className='col-md-6' key={product.id}> 
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </div>
                <div className='col-md-6'>
                     <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                     <h1 className='display-5'>{product.title}</h1>
                     <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate}
                     <i className='fa fa-star'></i>
                     </p>
                     <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                     <p className='lead'>{product.description}</p>
        <button className='btn btn-outline-dark' onClick={()=>context.addToCart(product)}>     
                 Add to cart</button>
                
                 <Link to='/cart' > <button  className='button2' >Go to cart</button></Link> 
                 </div>   
              </div>
              <div>
              <div>
              </div>
    </div>
              </div>
          
                </>
        );
    };

    


