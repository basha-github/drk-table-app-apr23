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



export default function Products() {

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

<table className='table'>


<thead>
    <tr>
        <td>ID</td>
        <td>Title</td>
        <td>Price</td>
        <td>Description</td>
        <td>Category</td>
        <td>Image</td>
    </tr>
</thead>
<tbody>

{productsData.map(
    (i)=>(
        <tr>
            <td>{i.id}</td>
            <td>{i.title}</td>
            <td>{i.price}</td>
            <td>{i.description}</td>
            <td>{i.category}</td>
            <td><img height="200px" width="200px" src={i.image} />
                </td>
            
        </tr>
    )
)}


</tbody>

</table>




    </div>
  )
}
