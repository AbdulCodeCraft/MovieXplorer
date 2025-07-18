import { NavLink, useNavigate } from "react-router-dom";
import {Menu,X} from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const navigator = useNavigate();
  const [menuOpen,setMenuOpen] = useState(false)
  const handleSearch = (e) =>{
    e.preventDefault();
    const queryTerm = e.target.search.value;
    setMenuOpen(false);
    e.target.reset();
    return navigator(`/search?q=${queryTerm}`);
  }
  return (
    <>
    <div className="bg-secondary h-15  flex justify-between items-center p-6 text-fourth">
      <h1 className="text-2xl ">MovieXplorer</h1>

    <button className="md:hidden" onClick={()=>(setMenuOpen(!menuOpen))}>
      {menuOpen? <X size={28}/> : <Menu size={28}/>}
    </button>

      <div className="hidden md:flex gap-6">
        <ul className="flex gap-15 items-center">
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/movies/top">Top Rated</NavLink>
          </li>
          <li>
            <NavLink to="/movies/upcoming">Upcoming</NavLink>
          </li>
        </ul>

        <form className="space-x-4" onSubmit={handleSearch}>
        
          <input
            className="outline-none px-7 py-2 rounded-md text-primary bg-gray-300"
            type="text"
            name="search"
            placeholder="Search Movie"
          />
          <button className="px-7 bg-primary hover:bg-primary/50 pointer cursor-pointer py-2 rounded-md">Search</button>
      </form>
      </div>
    </div>
    </>
  );
};
