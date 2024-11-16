import { GoHeart, GoHeartFill } from "react-icons/go";



function BookModal({ isBookModalOpen, selectedBook, handleAddToCart, selectItems, GetImages, setIsBookModalOpen, handleHeartClick }) {
    return (
        <>
            {isBookModalOpen && selectedBook && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-25 flex items-center justify-center z-50">
                    <dialog onClick={(e) => e.stopPropagation()} id="my_modal_4" className="modal " open>
                        <div className=" w-8/12 max-w-5xl ">

                            <div className="flex text-gray-300 bg-[#1e293b] rounded-2xl items-center">
                                <div className="w-[90%] px-3 space-y-7 ">
                                    {/* Book Details */}
                                    <h2 className="text-3xl mb-2 font-bold">{selectedBook.name}</h2>
                                    <span>{selectedBook.genre}</span>
                                    <p>{selectedBook.description}</p>

                                    <div className="flex mt-2">
                                        {/* Add to Cart Button */}
                                        <button
                                            onClick={() => handleAddToCart(selectedBook)} // Pass the selected book to the function
                                            className="px-7 py-2 outline-none border-none bg-green-400 hover:bg-green-500 text-black rounded font-medium"
                                        >
                                            ${selectedBook.price} | Add to cart
                                        </button>

                                        {/* Heart Button */}
                                        <div
                                            className={`border ml-7 ${selectItems.includes(selectedBook.id) ? "text-green-400" : "text-green"
                                                } hover:bg-green-400 hover:bg-opacity-25 border-green-400 font-medium px-3 flex items-center justify-center rounded-md cursor-pointer`}
                                            onClick={() => handleHeartClick(selectedBook.id)}
                                        >
                                            {selectItems.includes(selectedBook.id) ? <GoHeartFill className="text-2xl " /> : <GoHeart className="text-2xl text-green-400" />}
                                        </div>

                                        {/* Close Button */}
                                        <button className="ml-7 bg-white text-black px-4 rounded" onClick={() => setIsBookModalOpen(false)}>
                                            Close
                                        </button>
                                    </div>
                                </div>

                                {/* Book Image */}
                                <div >
                                    <img
                                        src={selectedBook.image}
                                        alt={selectedBook.name}
                                        className="rounded-r-xl"
                                    />

                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
            )}
        </>
    );
}

export default BookModal;