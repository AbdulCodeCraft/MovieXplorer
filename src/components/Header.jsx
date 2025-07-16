import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-secondary h-15 flex justify-between items-center p-6 text-fourth">
      <h1 className="text-2xl ">MovieXplorer</h1>
      <div className="flex gap-6">
        <ul className="flex gap-15 items-center">
          <li>
            <Link to=""> Home</Link>
          </li>
          <li>
            <Link to="">Popular</Link>
          </li>
          <li>
            <Link to="">Top Rated</Link>
          </li>
          <li>
            <Link to="">Upcoming</Link>
          </li>
        </ul>
        <div className="space-x-4">
          <input
            className="outline-none px-7 py-2 rounded-md text-primary bg-gray-300"
            type="text"
            placeholder="Search Movie"
          />
          <button className="px-7 bg-primary hover:bg-primary/50 pointer cursor-pointer py-2 rounded-md">Search</button>
        </div>
      </div>
    </div>
  );
};
