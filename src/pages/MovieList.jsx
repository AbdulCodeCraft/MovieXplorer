import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch.jsx";

export const MovieList = (props) => {
  const navigator = useNavigate();

  const { data: movies ,loading} = useFetch({ apiPath: props.apiPath });
    
  useEffect(() => {
    document.title = props.title;
  });

  return (
    <>{loading ? (
      <div className="flex justify-center items-center h-40">
  <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
</div>
    ):(
      <div className="mt-20">
        {props.title == "Your Guide to greate movies" ? (
        <div className="h-100 space-y-3 bg-primary flex justify-center items-center text-white flex-col ">
          <h1 className="md:text-6xl text-2xl ">Welcome to MovieXplorer</h1>
          <p className="md:w-200 text-sm text-center">
            Dive into the ultimate cinematic adventure! Discover, explore, and
            connect with a vast universe of films. From timeless classics to the
            latest blockbusters, MovieXplorer is your personal guide to
            trailers, reviews, cast details, and hidden gems. Start your journey
            and find your next favorite movie today.
          </p>
          <button
            onClick={() => navigator("/movies/upcoming")}
            className="hover:bg-fourth px-15 py-3 font-bold rounded-md bg-fourth/90 text-primary"
          >
            Explore Now
          </button>
        </div>
      ) : (
        <div></div>
      )}

        <div className="flex justify-center bg-primary pb-10 ">
        <div className="grid justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-9">
          {movies.map((movie) => (
            <div key={movie.id}>
              <Card
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                voteAverage={movie.vote_average}
                voteCount={movie.vote_count}
                image={movie.poster_path}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
      

      )}
    </>
  );
};
