import pageNotFoundImage from "../assets/pageNotFoundImage.jpg"
import {Link} from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div className="flex   justify-center items-center">
     <img className="h-screen" src={pageNotFoundImage} alt="" />
     
    </div>
  )
}


