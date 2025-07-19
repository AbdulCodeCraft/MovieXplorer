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
  const hours = Math.floor(movie.runtime/60);
  const minutes = movie.runtime% 60;
  const runtime = `${hours}h ${minutes}mins`;





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
    <div className="bg-primary min-h-screen p-10 flex justify-center items-center">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="md:flex md:w-full md:space-x-10 object-contain space-y-3 rounded-md h-full w-70">
          <img
            className="md:w-[300px] md:h-[450px] w-40 h-60 rounded-md object-cover "
            src={image}
            alt=""
          />
          <div className="space-y-4">
            <h1 className="text-fourth text-3xl">{movie.title}</h1>
            <p className="text-white md:w-200">{movie.overview}</p>

            <div className="flex flex-wrap ">
              {movie.genres?.map((genre) => (
               
                 <span
                  className="bg-fourth mt-3 text-primary py-1 px-2 mr-4 rounded-lg"
                  key={genre.id}
                >
                  {genre.name}
                </span>
           
              ))}
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="yellow"
                className="size-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-sm text-white">
                {movie.vote_average} | {movie.vote_count} reviews
              </p>
            </div>

            <table className="table-auto border text-fourth border-white ">
              <tbody >
                <tr className="border-b border-white">
                  <td className="border border-white p-3 font-bold">Runtime</td>
                  <td className="border border-white p-3">{runtime}</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border border-white p-3 font-bold">Budget</td>
                  <td className="border border-white p-3">{movie.budget}</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border border-white p-3 font-bold">Revenue</td>
                  <td className="border border-white p-3">{movie.revenue}</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border border-white p-3 font-bold">Release Date</td>
                  <td className="border border-white p-3">{movie.release_date}</td>
                </tr>
              </tbody>
            </table>

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
