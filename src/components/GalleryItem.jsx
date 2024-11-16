import { TiStar } from "react-icons/ti";
import { GoHeart, GoHeartFill } from "react-icons/go";

function GalleryItem({ onOpen, gallery, onAdd, handleHeartClick, selectItems, cartItems }) {
    // Check if the item is already in the cart
    const isAlreadyAdded = cartItems.some((item) => item.id === gallery.id);

    // Debugging logs to check cartItems and gallery.id


    return (
        <div className="w-[300px] cursor-pointer mx-auto sm:w-full border hover:shadow-2xl p-3 rounded flex flex-col justify-between">
            <div onClick={() => onOpen(true)}>
                <div className="relative group">
                    <img src={gallery.image} alt="Book Cover" className="w-full object-cover rounded" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded"></div>
                </div>
                <div>
                    <p className="leading-7 mt-3">{gallery.name}</p>
                    <p className="text-xs leading-7 text-gray-500">{gallery.author}</p>
                    <div className="leading-7 text-2xl text-red-400 dark:text-green-400 flex">
                        {[...Array(gallery.rating)].map((_, index) => (
                            <TiStar key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex mt-2">
                {/* Add to Cart button */}
                <div className="w-full text-center mr-2 py-2 dark:border-none dark:text-black dark:bg-green-400 border rounded hover:shadow-xl text-red-400 font-medium">
                    <button onClick={() => onAdd(gallery)} disabled={isAlreadyAdded}>
                        {isAlreadyAdded ? "Already Added" : `$${gallery.price} | Add to cart`}
                    </button>
                </div>

                {/* Heart icon for favorites */}
                <div
                    className={`border dark:hover:bg-green-400 dark:hover:bg-opacity-25 ml-auto dark:text-green-500 hover:shadow-xl dark:border-green-400 text-red-400 font-medium px-3 flex items-center justify-center rounded-md cursor-pointer ${
                        selectItems.includes(gallery.id) ? "text-green-400" : "text-gray-500"
                    }`}
                    onClick={() => handleHeartClick(gallery.id)}
                >
                    {selectItems.includes(gallery.id) ? <GoHeartFill /> : <GoHeart />}
                </div>
            </div>
        </div>
    );
}

export default GalleryItem;









// import { TiStar } from "react-icons/ti";

// // import { GetImages } from "../utils/GetImages";
// import { GoHeart, GoHeartFill } from "react-icons/go";

// function GalleryItem({ onOpen, gallery, onAdd, handleHeartClick, selectItems }) {
//     return (
//         <div className="w-[300px] cursor-pointer mx-auto sm:w-full border hover:shadow-2xl p-3 rounded flex flex-col justify-between">
//             <div onClick={() => onOpen(true)}>
//                 <div className="relative group">
//                     <img src={gallery.image} alt="Book Cover" className="w-full object-cover rounded" />

//                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded"></div>
//                 </div>
//                 <div>
//                     <p className="leading-7 mt-3">{gallery.name}</p>
//                     <p className="text-xs leading-7 text-gray-500">{gallery.author}</p>
//                     <div className="leading-7 text-2xl text-red-400 dark:text-green-400 flex">
//                         {[...Array(gallery.rating)].map((_, index) => (
//                             <TiStar key={index} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="flex mt-2">
//                 {/* this is add to cart button  */}
//                 <div className="w-full text-center  mr-2   py-2 dark:border-none dark:text-black dark:bg-green-400 border rounded hover:shadow-xl text-red-400 font-medium">
//                     <button onClick={() => onAdd(gallery)}>${gallery.price} | Add to cart</button>
//                 </div>

//                 <div
//                     className={`border dark:hover:bg-green-400 dark:hover:bg-opacity-25 ml-auto dark:text-green-500 hover:shadow-xl dark:border-green-400 text-red-400 font-medium px-3 flex items-center justify-center rounded-md cursor-pointer ${
//                         selectItems.includes(gallery.id) ? "text-green-400" : "text-gray-500"
//                     }`}
//                     onClick={() => handleHeartClick(gallery.id)}
//                 >
//                     {selectItems.includes(gallery.id) ? <GoHeartFill /> : <GoHeart />}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default GalleryItem;




