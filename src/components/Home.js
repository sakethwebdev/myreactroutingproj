import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';


export default function Home() {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const maxPrice = 50;

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const limitDescription = (description, limit = 100) => {
    return description.length > limit ? `${description.substring(0, limit)}...` : description;
  };

  return (
    
    < div >
   
      <div id="demo" class="carousel slide" data-bs-ride="carousel" >
<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./images/slide1.jpeg" class="d-block w-100" height={"550px"} />
  </div>
  <div class="carousel-item ">
    <img src="./images/slide2.jpeg" class="d-block w-100" height={"550px"} />
  </div>
  <div class="carousel-item ">
    <img src="./images/slide3.jpeg" class="d-block w-100" height={"550px"} />
  </div>
  <div class="carousel-item ">
    <img src="./images/slide4.jpeg" class="d-block w-100" height={"550px"} />
  </div>
  <div class="carousel-item ">
    <img src="./images/slide5.jpeg" class="d-block w-100"  height={"550px"}/>
  </div>
  <div class="carousel-item ">
    <img src="./images/slide6.jpeg" class="d-block w-100" height={"550px"} />
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>    
      <div className="container mt-3">
        <div className="row">
        {products.map(product => (
  <div key={product.id} className="col-lg-4 col-md-6 col-sm-12" >
    <div className="card">
    <img src={product.image} width="500px" height="200px" className="card-img-top" alt={product.title} />
      <div className="card-body">   
                  <h3 className="card-title text-truncate">{product.title}</h3>
                  <p className="card-title text-truncate">ID: {product.id}</p>
                  <p className="card-title text-truncate"><strong>Price: ${product.price}</strong></p>
                 
                  <p className="card-title text-truncate">{limitDescription(product.description)}</p>
                     <Link to={`/product/${product.id}`} className="btn btn-link">Read More</Link>
                </div> 
              </div><br />
            </div>
               
          ))}
        </div>
        
      </div>
     
    </div>
  );
}
