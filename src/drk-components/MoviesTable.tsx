import React from "react";

export default function MoviesTable() {
  const moviesData = [
    {
      Title: "The Lion King",
      Year: "2019",
      Runtime: "118 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
    },
    {
      Title: "Mowgli: Legend of the Jungle",
      Year: "2018",
      Runtime: "104 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
    },
    {
      Title: "Doctor Strange",
      Year: "2016",
      Runtime: "115 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
    },
    {
      Title: "John Wick",
      Year: "2014",
      Runtime: "101 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    },
    {
      Title: "The Notebook",
      Year: "2004",
      Runtime: "123 min",
    },
  ];

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
