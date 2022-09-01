import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const url = "http://localhost:4000/v1/movies";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.movies);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [url]);

  return (
    <>
      <h2>Movies</h2>
      <ul>
        {error ? (
          <div>Oops, something went wrong...</div>
        ) : (
          movies.map((m) => (
            <li key={m.id}>
              <Link to={`/movies/${m.id}`}>{m.title}</Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
