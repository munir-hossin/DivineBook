import { FaChevronRight } from "react-icons/fa6";
import RightSideModal from "./RightSideModal";

function RightSidebar({ handleSortByName, sortByPrice, sortByRating, isRightModalOpen, toggleModal }) {
    return (
        <>
            <aside className="w-1/6 p-4 hidden lg:block">
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

            {isRightModalOpen && <RightSideModal handleSortByName={handleSortByName} sortByPrice={sortByPrice} sortByRating={sortByRating} toggleModal={toggleModal} />}
        </>
    );
}

export default RightSidebar;
