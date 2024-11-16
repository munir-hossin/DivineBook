import { useEffect, useState } from "react";
import { FaBell, FaCartArrowDown } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";


function Header({ openModal, isModalOpen, cartItems, closeModal, handleDecrement, handleIncrement, handleDelete, totalItems, totalPrice, }) {





    // Check local storage and set the theme on initial load
    const [theme, setTheme] = useState(localStorage.getItem("themeMode") || "light");

    // Update the document class and localStorage whenever theme changes
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("themeMode", theme);
    }, [theme]);

    // Handle the theme toggle
    const themeHandler = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };



    return (
        <>
            <div className="flex px-4 h-20 items-center border-b">
                <div className="text-xl text-red-400 dark:text-green-400">
                    <p className="font-bold">DivineBook</p>
                </div>

                <div className="flex ml-auto">
                    <div className="ml-4 border border-red-400 hover:bg-red-400 hover:bg-opacity-25 rounded dark:border-green-400 dark:hover:bg-green-400 dark:hover:bg-opacity-25 p-3 cursor-pointer">
                        <FaBell className="text-red-400 dark:text-green-400 mx-auto text-base" />
                    </div>
                    <div className="ml-4 border border-red-400 hover:bg-red-400 hover:bg-opacity-25 rounded dark:border-green-400 dark:hover:bg-green-400 dark:hover:bg-opacity-25 p-3 cursor-pointer">


                        {theme === "dark" ? <MdDarkMode onClick={themeHandler} className="text-xl text-green-400 cursor-pointer" /> : <IoIosSunny onClick={themeHandler} className="text-xl text-red-400 cursor-pointer" />}
                    </div>

                    <div>
                        <div onClick={openModal} className="cursor-pointer ml-4 border border-red-400 hover:bg-red-400 hover:bg-opacity-25 rounded dark:border-green-400 dark:hover:bg-green-400 dark:hover:bg-opacity-25 p-3 relative">
                            <FaCartArrowDown className=" text-red-400 dark:text-green-400 mx-auto text-base" />


                            <span className="absolute top-1 right-1 bg-red-400 dark:bg-green-400 text-white rounded-full text-xs px-1">{totalItems}</span>
                            {/* Modal */}
                        </div>

                       {/* search modal here */}

                       {isModalOpen && (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-25 flex items-center justify-center z-50">
        <dialog className="modal w-full max-w-3xl mx-4 sm:mx-8 md:mx-auto" open>
            <div className="w-full">
                <div className="bg-gray-900 text-white rounded-[10px] pb-3 pt-1 px-4 h-[440px] md:h-auto">
                    <div className="modal-action">
                        <RiCloseLargeFill className="text-white text-2xl cursor-pointer" onClick={closeModal} />
                    </div>
                    <h2 className="text-xl font-bold text-center mb-4">Your Carts</h2>

                    {/* <!-- Table Section --> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mr-7">
                        {/* <!-- Left Table Section --> */}
                        <div className="md:col-span-2 h-[250px] md:h-[350px] overflow-y-scroll no-scrollbar ">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-gray-400 uppercase text-sm">
                                        <th className="py-2">Product</th>
                                        <th className="py-2">Price</th>
                                        <th className="py-2 block">Quantity</th>
                                        <th className="py-2">Total</th>
                                        <th className="py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id} className="border-t border-gray-600">
                                            <td className="flex items-center py-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-14 mr-2"
                                                />
                                                <div>
                                                    <p className="font-medium">{item.name}</p>
                                                    <p className="text-gray-400 text-sm">{item.author}</p>
                                                </div>
                                            </td>
                                            <td className="py-4">${item.price}</td>
                                            <td className="py-4">
                                                <div className="flex items-center bg-gray-700 mx-3 md:mx-7 px-auto rounded-3xl">
                                                    <button onClick={() => handleDecrement(item.id)} className="px-2 rounded">
                                                        -
                                                    </button>
                                                    <span className="px-4">{item.quantity}</span>
                                                    <button onClick={() => handleIncrement(item.id)} className="px-2 rounded">
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-4">${item.price * item.quantity}</td>
                                            <td className="py-4">
                                                <button onClick={() => handleDelete(item.id)} className="text-red-500">
                                                    🗑️
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* <!-- Right Order Summary Section --> */}
                        <div>
                            <div className="sm:bg-[#8C8C8C4D] w-full md:w-[200px] mx-auto md:mx-7 text-center rounded-sm mt-4 md:mt-11">
                                <h3 className="font-bold text-lg mb-4 text-gray-300 pt-3 border-b pb-5">Order Summary</h3>
                                <div className="text-gray-300 mb-2 mx-6">
                                    <p className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>${totalPrice}</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Shipping</span>
                                        <span className="text-green-500">Free</span>
                                    </p>
                                </div>
                                <div className="flex justify-between font-bold py-1 text-white bg-[#8C8C8C42] mb-1 px-6">
                                    <span>Total</span>
                                    <span>${totalPrice}</span>
                                </div>
                            </div>
                            <button className="w-full md:w-[200px] py-2 px-6 md:px-[70px] bg-[#009A67] text-white rounded-sm mt-2 md:mx-7">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    </div>
)}







                    </div>

                </div>
            </div>
        </>
    );
}

export default Header;


















































// import { GoHeart, GoHeartFill } from "react-icons/go";

// function BookModal({ isBookModalOpen, selectedBook, handleAddToCart, selectItems, GetImages, setIsBookModalOpen, handleHeartClick }) {
//     return (
//         <>
//             {isBookModalOpen && selectedBook && (
//                 <div className="fixed inset-0 bg-gray-700 bg-opacity-25 flex items-center justify-center z-50">
//                     <dialog onClick={(e) => e.stopPropagation()} id="my_modal_4" className="modal " open>
//                         <div className=" w-8/12 max-w-5xl ">
//                             <div className="flex flex-col md:flex-row text-gray-300 bg-[#1e293b] rounded-2xl items-center">
//                                 {/* Book Image */}
//                                 <div className="order-1 lg:order-12 pt-5 md:p-0">
//                                     <img src={selectedBook.image} alt={selectedBook.name} className="rounded-r-xl h-72 md:h-full w-full mx-auto" />
//                                 </div>

//                                 <div className="w-full lg:w-[90%] px-3 py-6 md:space-y-7 order-2 lg:order-1 text-center md:text-start">
//                                     {/* Book Details */}
//                                     <h2 className="lg:text-3xl lg:mb-2 font-bold">{selectedBook.name}</h2>
//                                     <span>{selectedBook.genre}</span>
//                                     <p>{selectedBook.description}</p>

//                                     {/* Button Area */}
//                                     <div className="flex flex-col sm:flex-row justify-center sm:justify-start mt-2 space-y-2 sm:space-y-0 sm:space-x-2">
//                                         <button onClick={() => handleAddToCart(selectedBook)} className="lg:px-7 px-3 sm:m-0 md:px-4 py-2 outline-none border-none bg-green-400 hover:bg-green-500 text-black rounded font-medium">
//                                             ${selectedBook.price} | Add to cart
//                                         </button>

//                                         {/* Heart Button */}
//                                         <div
//                                             className={`border py-1 ${
//                                                 selectItems.includes(selectedBook.id) ? "text-green-400" : "text-green"
//                                             } hover:bg-green-400 hover:bg-opacity-25 border-green-400 font-medium px-3 flex items-center justify-center rounded-md cursor-pointer`}
//                                             onClick={() => handleHeartClick(selectedBook.id)}
//                                         >
//                                             {selectItems.includes(selectedBook.id) ? <GoHeartFill className="text-2xl" /> : <GoHeart className="text-2xl text-green-400" />}
//                                         </div>

//                                         {/* Close Button */}
//                                         <button className="bg-white py-2 text-black px-4 md:px-2 rounded" onClick={() => setIsBookModalOpen(false)}>
//                                             Close
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </dialog>
//                 </div>
//             )}
//         </>
//     );
// }

// export default BookModal;
