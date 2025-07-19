import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const navigator = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    setMenuOpen(false);
    e.target.reset();
    return navigator(`/search?q=${queryTerm}`);
  };
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <div className="bg-white/10 backdrop-blur-lg fixed h-16 top-0 left-0 w-full z-50 flex justify-between items-center p-6 text-fourth">
        <h1 className="text-2xl ">MovieXplorer</h1>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
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
            <button className="px-7 bg-primary hover:bg-primary/50 pointer cursor-pointer py-2 rounded-md">
              Search
            </button>
          </form>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-16  left-0 w-full h-90 bg-secondary/90 z-40 backdrop-blur-md  rounded-md p-4 m-1 space-y-4">
          <ul className="flex flex-col gap-4">
            <NavLink to="/" onClick={toggleMenu}>
              <li className="hover:bg-fourth py-2 px-1 rounded-md hover:text-primary">
                Home
              </li>
            </NavLink>
            <NavLink to="/movies/popular" onClick={toggleMenu}>
              <li className="hover:bg-fourth py-2 px-1 rounded-md hover:text-primary">
                Popular
              </li>
            </NavLink>
            <NavLink to="/movies/top" onClick={toggleMenu}>
              <li className="hover:bg-fourth py-2 px-1 rounded-md hover:text-primary">
                Top Rated
              </li>
            </NavLink>
            <NavLink to="/movies/upcoming" onClick={toggleMenu}>
              <li className="hover:bg-fourth py-2 px-1 rounded-md hover:text-primary">
                Upcoming
              </li>
            </NavLink>
          </ul>
          <form className="space-y-2" onSubmit={handleSearch}>
            <input
              className="w-full outline-none px-4 py-2 rounded-md text-primary bg-gray-300"
              type="text"
              name="search"
              placeholder="Search Movie"
            />
            <button className="w-full px-4 text-fourth bg-primary hover:bg-primary/50 py-2 rounded-md">
              Search
            </button>
          </form>
        </div>
      )}
    </>
  );
};
