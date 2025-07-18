  import { Link, useNavigate } from "react-router-dom";
  import backup from '../assets/backup.svg'

  export const Card = (props) => {
      const image = props.image ? `https://image.tmdb.org/t/p/w500/${props.image}` : backup;
      const navigator = useNavigate();
    return (
      <div onClick={()=>navigator(`/movie/${props.id}`)} className="shadow-2xl w-70 h-110 rounded-md bg-third overflow-hidden space-y-2 ">
        <img
          className="h-70 w-screen object-top object-cover"
          src={image}
          alt=""
        />
        <div className="px-2 space-y-3 ">
          <h1 className="text-white truncate text-2xl">{props.title}</h1>
          <p className="text-white h-10 truncate">
            {props.overview}
          </p>
          <div className="flex items-center justify-between">
            <Link
              to={`/movie/${props.id}`} 
              className="px-3 outline text-white hover:text-black transition outline-fourth py-1 hover:bg-fourth rounded-md"
            >
              Read more
            </Link>
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

              <p className="text-sm text-white">{props.voteAverage} | {props.voteCount} reviews</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
