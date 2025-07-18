import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import backup from "../assets/backup.svg";

export const MovieDetails = (props) => {
  const { id } = useParams();
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState("");
  const imdb = `https://www.imdb.com/title/${movie.imdb_id}`;
  const key = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/${props.apiPath}/${id}?api_key=${key}`;
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : backup;

  console.log(url);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`The Error Status ${response.status}`);
        }
        setLoading(true);
        const json = await response.json();
        setMovie(json);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [url]);

  useEffect(() => {
    document.title = `${movie.title}`;
  });
  return (
    <div className="bg-primary h-screen p-4">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="md:flex md:w-full md:space-x-10 object-contain space-y-3 rounded-md h-full w-70">
          <img
            className="md:w-100 md:h-130 w-40 rounded-md "
            src={image}
            alt=""
          />
          <div className="space-y-4">
            <h1 className="text-fourth text-3xl">{movie.title}</h1>
            <p className="text-white md:w-200">{movie.overview}</p>
            <button
              className="px-10 py-3 bg-fourth text-primary rounded-md "
              onClick={() => window.open(imdb)}
            >
              Watch on IMDB
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
