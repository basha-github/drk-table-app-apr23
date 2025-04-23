import axios from "axios";
import React, { useEffect, useState } from "react";

export default function APITableData() {
  const [moviesData,setMoviesData] = useState([]);
    useEffect(
        ()=>{

    axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
    .then((res)=>{
        console.log("res-->"+res.data);
        setMoviesData(res.data);
    })
    }

)

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">RunTime</th>
            <th scope="col">Poster</th>
          </tr>
        </thead>
        <tbody>

{moviesData.map(
    (i)=>(
        <tr>
        <th scope="row">{i.Title}</th>
        <td>{i.Year}</td>
        <td>{i.Runtime}</td>
        <td> <img  width= "200px" height="200px" src={i.Poster} /></td>
      </tr>

    )
)}

         
        </tbody>
      </table>
    </div>
  );
}

