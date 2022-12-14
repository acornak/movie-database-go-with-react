import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/movies`)
      .then((res) => {
        setMovies(res.data.movies);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>Movies</h2>
      <div className="list-group">
        {error ? (
          <div>Oops, something went wrong...</div>
        ) : (
          movies.map((m) => (
            <Link
              to={`/movies/${m.id}`}
              className="list-group-item list-group-item-action"
              key={m.id}
            >
              {m.title}
            </Link>
          ))
        )}
      </div>
    </>
  );
}
