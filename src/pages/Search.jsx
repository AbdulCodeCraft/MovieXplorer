import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export const Search = (props) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch({ apiPath: props.apiPath, queryTerm });

  useEffect(() => {
    document.title = `Search Result for ${queryTerm}`;
  }, [queryTerm]);
  return (
    <div className="bg-primary min-h-screen">
      <div className="flex flex-col space-y-6 justify-center bg-primary p-10 px-10">
        <div className="text-fourth text-lg">
          {movies.length == 0 ? (
          <div className="flex justify-center items-center text-4xl"> 
            <h1>{`No Result Found for : ${queryTerm}`}</h1>
          </div>
        ) : (
          <div>
            <h1>{`The Search Result for : ${queryTerm}`}</h1>
          </div>
        )}
        </div>

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
  );
};
