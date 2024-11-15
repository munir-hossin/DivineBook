

function RightSidebar(props) {
    return (
        <div>
             <aside className="w-1/6 p-4 hidden md:block">
                        <h2 className="text-xl font-bold mb-3 mt-3">Filter On Page</h2>
                        <div className="space-y-2">
                            <div
                                className="flex cursor-pointer dark:hover:text-black dark:border-none items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                onClick={handleSortByName}
                            >
                                <div className="mr-1">
                                    <FaChevronRight className="text-xs" />
                                </div>
                                <div>
                                    <span className="text-base">By Name</span>
                                </div>
                            </div>

                            <div
                                className="flex cursor-pointer dark:hover:text-black dark:border-none items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                onClick={sortByPrice}
                            >
                                <div className="mr-1">
                                    <FaChevronRight className="text-xs" />
                                </div>
                                <div>
                                    <span className="text-base"> By Price </span>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer dark:hover:text-black dark:border-none items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                onClick={sortByRating}
                            >
                                <div className="mr-1">
                                    <FaChevronRight className="text-xs" />
                                </div>
                                <div>
                                    <span className="text-base"> By Ratings </span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Modal for smaller screens */}

                    {/* Modal for smaller screens */}
                    {isRightModalOpen && (
                        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end z-50 pointer-events-none">
                            {/* Modal content */}
                            <div className="w-2/3 rounded-l-lg rounded-br-md h-[320px] bg-white p-4 shadow-lg overflow-y-auto pointer-events-auto" role="dialog" aria-modal="true">
                                <button
                                    className="mb-4 text-black"
                                    onClick={toggleModal}
                                    autoFocus // Automatically focus the button to keep focus inside the modal
                                >
                                    Close
                                </button>
                                <h2 className="text-xl font-bold mb-3 mt-3">Filter On Page</h2>
                                <div className="space-y-2">
                                    <div
                                        className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                        onClick={() => {
                                            handleSortByName();
                                            toggleModal(); // Close modal after selection
                                        }}
                                        tabIndex={0} // Make the div focusable for keyboard users
                                    >
                                        <div className="mr-1">
                                            <FaChevronRight className="text-xs" />
                                        </div>
                                        <div>
                                            <span className="text-base">By Name</span>
                                        </div>
                                    </div>

                                    <div
                                        className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                        onClick={() => {
                                            sortByPrice();
                                            toggleModal(); // Close modal after selection
                                        }}
                                        tabIndex={0}
                                    >
                                        <div className="mr-1">
                                            <FaChevronRight className="text-xs" />
                                        </div>
                                        <div>
                                            <span className="text-base">By Price</span>
                                        </div>
                                    </div>

                                    <div
                                        className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                        onClick={() => {
                                            sortByRating();
                                            toggleModal(); // Close modal after selection
                                        }}
                                        tabIndex={0}
                                    >
                                        <div className="mr-1">
                                            <FaChevronRight className="text-xs" />
                                        </div>
                                        <div>
                                            <span className="text-base">By Ratings</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
        </div>
    );
}

export default RightSidebar;


/*
 <aside className="w-1/6 p-4 hidden md:block">
                        <h2 className="text-xl font-bold mb-3 mt-3">Filter On Page</h2>
                        <div className="space-y-2">
                            <div
                                className="flex cursor-pointer dark:hover:text-black dark:border-none items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                onClick={handleSortByName}
                            >
                                <div className="mr-1">
                                    <FaChevronRight className="text-xs" />
                                </div>
                                <div>
                                    <span className="text-base">By Name</span>
                                </div>
                            </div>

                            <div
                                className="flex cursor-pointer dark:hover:text-black dark:border-none items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                onClick={sortByPrice}
                            >
                                <div className="mr-1">
                                    <FaChevronRight className="text-xs" />
                                </div>
                                <div>
                                    <span className="text-base"> By Price </span>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer dark:hover:text-black dark:border-none items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                onClick={sortByRating}
                            >
                                <div className="mr-1">
                                    <FaChevronRight className="text-xs" />
                                </div>
                                <div>
                                    <span className="text-base"> By Ratings </span>
                                </div>
                            </div>
                        </div>
                    </aside>

                 

                  
                        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end z-50 pointer-events-none">
                  
                            <div className="w-2/3 rounded-l-lg rounded-br-md h-[320px] bg-white p-4 shadow-lg overflow-y-auto pointer-events-auto" role="dialog" aria-modal="true">
                                <button
                                    className="mb-4 text-black"
                                    onClick={toggleModal}
                                    autoFocus // Automatically focus the button to keep focus inside the modal
                                >
                                    Close
                                </button>
                                <h2 className="text-xl font-bold mb-3 mt-3">Filter On Page</h2>
                                <div className="space-y-2">
                                    <div
                                        className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                        onClick={() => {
                                            handleSortByName();
                                            toggleModal(); // Close modal after selection
                                        }}
                                        tabIndex={0} // Make the div focusable for keyboard users
                                    >
                                        <div className="mr-1">
                                            <FaChevronRight className="text-xs" />
                                        </div>
                                        <div>
                                            <span className="text-base">By Name</span>
                                        </div>
                                    </div>

                                    <div
                                        className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                        onClick={() => {
                                            sortByPrice();
                                            toggleModal(); // Close modal after selection
                                        }}
                                        tabIndex={0}
                                    >
                                        <div className="mr-1">
                                            <FaChevronRight className="text-xs" />
                                        </div>
                                        <div>
                                            <span className="text-base">By Price</span>
                                        </div>
                                    </div>

                                    <div
                                        className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                                        onClick={() => {
                                            sortByRating();
                                            toggleModal(); // Close modal after selection
                                        }}
                                        tabIndex={0}
                                    >
                                        <div className="mr-1">
                                            <FaChevronRight className="text-xs" />
                                        </div>
                                        <div>
                                            <span className="text-base">By Ratings</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
 */