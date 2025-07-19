import { Routes, Route, useParams } from "react-router-dom";
import { MovieList } from "../pages/MovieList.jsx";
import { MovieDetails } from "../pages/MovieDetails.jsx";
import {Search} from "../pages/Search.jsx"
import {PageNotFound} from "../pages/PageNotFound.jsx"
import ScrollToTop from "../ScrollToTop.jsx";
const AllRoutes = () => {
  const { id } = useParams();
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              apiPath="movie/now_playing"
              title={"Your Guide to greate movies"}
            />
          }
        />
        <Route
          path="/movies/popular"
          element={
            <MovieList apiPath="movie/popular" title={"Popular movies"} />
          }
        />
        <Route
          path="/movies/top"
          element={
            <MovieList apiPath="movie/top_rated" title={"top-rated movies"} />
          }
        />
        <Route
          path="/movies/upcoming"
          element={
            <MovieList apiPath="movie/upcoming" title={"Upcoming movies"} />
          }
        />
        <Route path="/movie/:id" element={<MovieDetails apiPath="movie" />} />
        <Route path="/search" element={<Search apiPath="search/movie" />}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
