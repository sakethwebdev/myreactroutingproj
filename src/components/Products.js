
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function Products() {


  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setloading(false);
        console.log(filter)
        return () => {
          componentMounted = false;

        }
      }
    }
    getProducts();

  }, []);

  const Loading = () => {
    return (
      <>
        <div className="waviy">
          <span style={{ letterSpacing: '1px' }}>L</span>
          <span style={{ letterSpacing: '2px' }}>O</span>
          <span style={{ letterSpacing: '3px' }}>A</span>
          <span style={{ letterSpacing: '4px' }}>D</span>
          <span style={{ letterSpacing: '5px' }}>I</span>
          <span style={{ letterSpacing: '6px' }}>N</span>
          <span style={{ letterSpacing: '7px' }}>G</span>
          <span style={{ letterSpacing: '8px' }}>.</span>
          <span style={{ letterSpacing: '9px' }}>.</span>
          <span style={{ letterSpacing: '10px' }}>.</span>
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);

  }
  const ShowProducts = () => {
    return (
      <>
        <div className='buttons d-flex justify-content-center mb5 pb-5'>
          <button className='btn btn-outline-dark me-2 ' onClick={() => setFilter(data)}>ALL</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}> Jewelery</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")} >Electronic</button>

        </div>
        {filter.map((product) => {
          return (
            <>
              <div className='col-md-3 mb-4'>
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} class="card-img-top" alt={product.title} height={"250px"} />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0, 12)}</h5>
                    <p class='card-text lead fw-bold'>
                      ${product.price}
                    </p>
                    <NavLink to={`/product/${product.id}`} class='btn btn-primary'>
                      Buy Now
                    </NavLink>
                  </div>

                </div>
              </div>

            </>
          )

        }


        )}
      </>
    );


  };


  return (
    <>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-12 mb-5'>


          </div>
        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>





    </>

  )
}
