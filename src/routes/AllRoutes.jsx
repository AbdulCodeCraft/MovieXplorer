import { Routes,Route } from "react-router-dom"
import {MovieList} from '../pages/MovieList.jsx'

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<MovieList/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes
