import axios from 'axios';
import React, { useEffect, useState } from 'react'



interface Album{
    id:string,
    title:string,
    url:string
}

export default function AlbumsTable() {


    const [albumsData ,setAlbumsData] = useState<Album[]>([]);
    useEffect(
        ()=>{

            console.log("Albums got called");

            axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(
              (res)=>{
                console.log(res);
                setAlbumsData(res.data);
              }
        
        )
        }
    );






  return (
    <div>

<table className='table'>
    <thead>
    <tr>
    <td>ID</td>
    <td>Title</td>
    <td>URL</td>
</tr>

    </thead>


    <tbody>

{albumsData.map(
    (i)=>(
<tr>
    <td>{i.id}</td>
    <td>{i.title}</td>
    <td>{i.url}</td>
</tr>
    )
)}

    </tbody>

</table>



    </div>
  )
}
