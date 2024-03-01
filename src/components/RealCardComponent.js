import axios from "axios";
import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function RealCardComponent() {
  
    const[data,setData]=useState([])
    useEffect(()=>{        
            axios.get("https://fakestoreapi.com/products")
                .then(res=>setData(res.data))
               .catch(err=>err)
    },[])   
  
  return (
    <>
   
 <div className='container my-5 py-5'>
    <div className='row'>
       <div className='col-12 mb-5'>
        <h1 className="display-6  fw-bolder text-center">Latest Products</h1>
        <hr/> 
   <Link to="/products">
<div className="row justify-content-center">
    { 
        data.map(product=> (
                      <div className="col-md-3   mb-4">
                      <div className="card h-100 text-center p-4" key={product.id}>
    <img className="card-img-top" src={product.image} alt={product.title} height='250px'/>
    <div className="card-body">
      <h5 className="card-title mb-0">{product.description.substring(0,12)}</h5>
      <p className="card-text">{product.price}</p>
      <Link to={`/products/${product.id}`}className="btn btn-outline-dark">BuyNow</Link>
</div>
</div>
</div>
        ))
    }
    
    </div>
    </Link>
    </div>
</div>
</div>

    </>
  )}