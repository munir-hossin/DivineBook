import { useEffect, useState } from "react";
import { FaBell, FaCartArrowDown } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";


function Header({ openModal, isModalOpen, cartItems, GetImages, closeModal, handleDecrement, handleIncrement, handleDelete, totalItems, totalPrice, }) {

   
  
    

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

                        {isModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
                                <dialog className="modal" open>
                                    <div className="w-8/12 ">
                                        {/* <div className=" w-8/12 "> */}
                                        <div className="bg-gray-900 text-white r pb-3 pt-1 px-4 rounded-[10px]  h-[440px]">
                                            <div className="modal-action">
                                                <RiCloseLargeFill className="text-white text-2xl cursor-pointer" onClick={closeModal} />
                                            </div>
                                            <h2 className="text-xl font-bold text-center mb-4">Your Carts</h2>

                                            {/* <!-- Table Section --> */}
                                            <div className="grid grid-cols-3 gap-4">
                                                {/* <!-- Left Table Section --> */}
                                                <div className="col-span-2  h-[350px] overflow-y-scroll no-scrollbar">
                                                    <table className="w-full text-left">
                                                        <thead>
                                                            <tr className="text-gray-400 uppercase text-sm">
                                                                <th className="py-2">Product</th>
                                                                <th className="py-2">Price</th>
                                                                <th className="py-2 ml-12 block">Quantity</th>
                                                                <th className="py-2">Total</th>
                                                                <th className="py-2"></th>
                                                            </tr>
                                                        </thead>
                                                        {/* <!-- Row 1 --> */}
                                                        <tbody>
    {cartItems.map((item) => (
        <tr key={item.id} className="border-t border-gray-600">
            <td className="flex items-center py-4">
                {/* Set up the image dynamically */}
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
                <div className="flex items-center bg-gray-700 mx-7 px-auto rounded-3xl">
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
                                                    <div className="bg-[#8C8C8C4D] w-[200px] mx-7 text-center rounded-sm mt-11 ">
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
                                                        <div className="flex justify-between font-bold py-1 text-white bg-[#8C8C8C42] mb-3 px-6">
                                                            <span>Total</span>
                                                            <span>${totalPrice}</span>
                                                        </div>
                                                    </div>
                                                    <button className="mx-7 w-[200px] py-2 px-[70px] bg-[#009A67] text-white rounded-sm">Checkout</button>
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






