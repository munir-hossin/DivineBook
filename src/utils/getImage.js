

function getImage(name) {
    return new URL(name, import.meta.url).href;
 
 }
 
 
 export {getImage} 
 
 //  getImage();

// import img from "../assets/book_images/1.jpg"
// import { initialBookData } from "./data/initialBookData";
// import { getImage } from "../utils/getImage";
    {/* <div className="w-3/12">
        <img src={getImage('.../assets/book_images/1.jpg')} alt="" />
    </div> */}

    {/* {initialBookData} */}


