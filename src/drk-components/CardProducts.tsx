import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Product{
    id:number,
    title:string,
    description:string,
    price:number,
    category:string,
    image:string

}



export default function CardProducts() {

    const [productsData,setProductsData] = useState<Product[]>([]);


    useEffect(
      ()=>{
    
        axios.get("https://fakestoreapi.com/products")
        .then(
          (abc)=>{
    console.log(abc);
    setProductsData(abc.data);
    //productsData= abc.data;
          }
        );
    }
    );
    





  return (
    <div>
{productsData.map(
    (i)=>(
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img height="300px" width="50px" src={i.image} 
      className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Price: Rs {i.price}/-</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  </div>


    )
)}
    </div>
  )
}
