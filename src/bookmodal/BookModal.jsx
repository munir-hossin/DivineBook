import { GoHeart, GoHeartFill } from "react-icons/go";

function BookModal({ isBookModalOpen, selectedBook, handleAddToCart, selectItems, GetImages, setIsBookModalOpen, handleHeartClick }) {
    return (
        <>
            {isBookModalOpen && selectedBook && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-25 flex items-center justify-center z-50">
                    <dialog onClick={(e) => e.stopPropagation()} id="my_modal_4" className="modal " open>
                        <div className=" w-8/12 max-w-5xl ">
                        {/* <div className=" w-8/12 max-w-5xl "> */}
                            <div className="flex flex-col md:flex-row text-gray-300 bg-[#1e293b] rounded-2xl items-center">
                                {/* Book Image */}
                                <div className="order-1 lg:order-12 pt-5 md:p-0">
                                    <img src={selectedBook.image} alt={selectedBook.name} className="rounded-r-xl h-72 md:h-full w-full mx-auto" />
                                </div>

                                <div className="w-full lg:w-[90%] px-3 py-6 md:space-y-7 order-2 lg:order-1 text-center md:text-start">
                                    {/* Book Details */}
                                    <h2 className="lg:text-3xl lg:mb-2 font-bold">{selectedBook.name}</h2>
                                    <span>{selectedBook.genre}</span>
                                    <p>{selectedBook.description}</p>

                                    {/* Button Area */}
                                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start mt-2 space-y-2 sm:space-y-0 sm:space-x-2">
                                        <button onClick={() => handleAddToCart(selectedBook)} className="lg:px-7 px-3 sm:m-0 md:px-4 py-2 outline-none border-none bg-green-400 hover:bg-green-500 text-black rounded font-medium">
                                            ${selectedBook.price} | Add to cart
                                        </button>

                                        {/* Heart Button */}
                                        <div
                                            className={`border py-1 ${
                                                selectItems.includes(selectedBook.id) ? "text-green-400" : "text-green"
                                            } hover:bg-green-400 hover:bg-opacity-25 border-green-400 font-medium px-3 flex items-center justify-center rounded-md cursor-pointer`}
                                            onClick={() => handleHeartClick(selectedBook.id)}
                                        >
                                            {selectItems.includes(selectedBook.id) ? <GoHeartFill className="text-2xl" /> : <GoHeart className="text-2xl text-green-400" />}
                                        </div>

                                        {/* Close Button */}
                                        <button className="bg-white py-2 text-black px-4 md:px-2 rounded" onClick={() => setIsBookModalOpen(false)}>
                                            Close
                                        </button>
                                    </div>
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
