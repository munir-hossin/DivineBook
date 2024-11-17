import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { MdOutlineCreateNewFolder, MdOutlineUpcoming } from "react-icons/md";

function LeftSidebar({ 
    setIsSearchModalOpen, 
    handleSearchChange, 
    sortByTrending, 
    filterByStatus, 
    selectItems, 
    setFavoriteBooks, 
    initialBookData, 
    isLeftModalOpen, 
    setIsLeftModalOpen 
}) {

    useEffect(() => {
        if (isLeftModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isLeftModalOpen]);

    const toggleLeftModal = () => {
        setIsLeftModalOpen(!isLeftModalOpen);
    };

    const handleFavoritesClick = () => {
        if (selectItems.length === 0) {
            alert("You did not select any favorite item");
        } else {
            const favoriteBooks = initialBookData().filter((book) => selectItems.includes(book.id));
            setFavoriteBooks(favoriteBooks); // Directly set filtered favorite books
        }
        toggleLeftModal();
    };

    return (
        <>
            <aside className="w-1/6 p-4 hidden lg:block">
                {/* Search Bar */}
                <div onClick={() => setIsSearchModalOpen(true)} className="cursor-pointer border overflow-hidden border-gray-300 hover:border-red-300 dark:border-green-400 rounded-md flex dark:bg-gray-800 p-2 items-center mb-6 mt-4">
                    <div>
                        <CiSearch className="text-xl dark:text-white ml-[10px]" />
                    </div>
                    <div>
                        <input onClick={() => setIsSearchModalOpen(true)} onChange={handleSearchChange} className="cursor-pointer border-none dark:bg-gray-800 w-full lg:w-52 outline-none ml-2" type="text" placeholder="Quick search..." />
                    </div>
                </div>

                {/* Sidebar Buttons */}
                <div>
                    <div
                        onClick={() => {
                            sortByTrending();
                            toggleLeftModal();
                        }}
                        className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                    >
                        <FaFire className="mr-3" />
                        <span>Trending</span>
                    </div>

                    <div
                        onClick={() => {
                            filterByStatus("new_releases");
                            toggleLeftModal();
                        }}
                        className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                    >
                        <MdOutlineCreateNewFolder className="mr-3" />
                        <span>New Releases</span>
                    </div>

                    <div
                        onClick={() => {
                            filterByStatus("coming_soon");
                            toggleLeftModal();
                        }}
                        className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                    >
                        <MdOutlineUpcoming className="mr-3" />
                        <span>Coming Soon</span>
                    </div>

                    <div
                        onClick={handleFavoritesClick}
                        className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                    >
                        {selectItems.length ? <GoHeartFill className="mr-3 text-red-400 dark:text-green-400" /> : <GoHeart className="mr-3" />}
                        <span>Favorites</span>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default LeftSidebar;

























// import { useEffect } from "react";
// import { CiSearch } from "react-icons/ci";
// import { FaFire } from "react-icons/fa";
// import { GoHeart, GoHeartFill } from "react-icons/go";
// import { MdOutlineCreateNewFolder, MdOutlineUpcoming } from "react-icons/md";

// function LeftSidebar({ 
//     setIsSearchModalOpen, 
//     handleSearchChange, 
//     sortByTrending, 
//     filterByStatus, 
//     selectItems, 
//     dispatch, 
//     initialBookData, 
//     isLeftModalOpen, 
//     setIsLeftModalOpen 
// }) {

//     useEffect(() => {
//         if (isLeftModalOpen) {
//             document.body.classList.add("overflow-hidden");
//         } else {
//             document.body.classList.remove("overflow-hidden");
//         }
//     }, [isLeftModalOpen]);

//     const toggleLeftModal = () => {
//         setIsLeftModalOpen(!isLeftModalOpen);
//     };

//     const handleFavoritesClick = () => {
//         if (selectItems.length === 0) {
//             alert("You did not select any favorite item");
//         } else {
//             dispatch({ type: "filterFavorites", selectedItems: selectItems });
//         }
//         toggleLeftModal();
//     };

//     return (
//         <>
//             <aside className="w-1/6 p-4 hidden lg:block">
//                 {/* Search Bar */}
//                 <div onClick={() => setIsSearchModalOpen(true)} className="cursor-pointer border overflow-hidden border-gray-300 hover:border-red-300 dark:border-green-400 rounded-md flex dark:bg-gray-800 p-2 items-center mb-6 mt-4">
//                     <div>
//                         <CiSearch className="text-xl dark:text-white ml-[10px]" />
//                     </div>
//                     <div>
//                         <input onClick={() => setIsSearchModalOpen(true)} onChange={handleSearchChange} className="cursor-pointer border-none dark:bg-gray-800 w-full lg:w-52 outline-none ml-2" type="text" placeholder="Quick search..." />
//                     </div>
//                 </div>

//                 {/* Sidebar Buttons */}
//                 <div>
//                     <div
//                         onClick={() => {
//                             sortByTrending();
//                             toggleLeftModal();
//                         }}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         <FaFire className="mr-3" />
//                         <span>Trending</span>
//                     </div>

//                     <div
//                         onClick={() => {
//                             filterByStatus("new_releases");
//                             toggleLeftModal();
//                         }}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         <MdOutlineCreateNewFolder className="mr-3" />
//                         <span>New Releases</span>
//                     </div>

//                     <div
//                         onClick={() => {
//                             filterByStatus("coming_soon");
//                             toggleLeftModal();
//                         }}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         <MdOutlineUpcoming className="mr-3" />
//                         <span>Coming Soon</span>
//                     </div>

//                     <div
//                         onClick={handleFavoritesClick}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         {selectItems.length ? <GoHeartFill className="mr-3 text-red-400 dark:text-green-400" /> : <GoHeart className="mr-3" />}
//                         <span>Favorites</span>
//                     </div>
//                 </div>
//             </aside>
//         </>
//     );
// }

// export default LeftSidebar;




























// import { useEffect } from "react";
// import { CiSearch } from "react-icons/ci";
// import { FaFire } from "react-icons/fa";
// import { GoHeart, GoHeartFill } from "react-icons/go";
// import { MdOutlineCreateNewFolder, MdOutlineUpcoming } from "react-icons/md";

// function LeftSidebar({ 
//     setIsSearchModalOpen, 
//     handleSearchChange, 
//     sortByTrending, 
//     filterByStatus, 
//     selectItems, 
//     setSortedBooks, 
//     initialBookData, 
//     isLeftModalOpen, 
//     setIsLeftModalOpen 
// }) {

//     useEffect(() => {
//         if (isLeftModalOpen) {
//             document.body.classList.add("overflow-hidden");
//         } else {
//             document.body.classList.remove("overflow-hidden");
//         }
//     }, [isLeftModalOpen]);

//     // Function to toggle the modal
//     const toggleLeftModal = () => {
//         setIsLeftModalOpen(!isLeftModalOpen);
//     };

//     // Function to filter selected favorites
//     const handleFavoritesClick = () => {
//         if (selectItems.length === 0) {
//             alert("You did not select any favorite item");
//         } else {
//             // Filter the initial data to include only items with IDs in selectItems
//             const favoriteBooks = initialBookData().filter((book) => selectItems.includes(book.id));
//             setSortedBooks(favoriteBooks);
//         }
//         toggleLeftModal();
//     };

//     return (
//         <>
//             <aside className="w-1/6 p-4 hidden lg:block">
//                 {/* Search Bar */}
//                 <div onClick={() => setIsSearchModalOpen(true)} className="cursor-pointer border overflow-hidden border-gray-300 hover:border-red-300 dark:border-green-400 rounded-md flex dark:bg-gray-800 p-2 items-center mb-6 mt-4">
//                     <div>
//                         <CiSearch className="text-xl dark:text-white ml-[10px]" />
//                     </div>
//                     <div>
//                         <input onClick={() => setIsSearchModalOpen(true)} onChange={handleSearchChange} className="cursor-pointer border-none dark:bg-gray-800 w-full lg:w-52 outline-none ml-2" type="text" placeholder="Quick search..." />
//                     </div>
//                 </div>

//                 {/* Sidebar Buttons */}
//                 <div>
//                     <div
//                         onClick={() => {
//                             sortByTrending();
//                             toggleLeftModal();
//                         }}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         <FaFire className="mr-3" />
//                         <span>Trending</span>
//                     </div>

//                     <div
//                         onClick={() => {
//                             filterByStatus("new_releases");
//                             toggleLeftModal();
//                         }}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         <MdOutlineCreateNewFolder className="mr-3" />
//                         <span>New Releases</span>
//                     </div>

//                     <div
//                         onClick={() => {
//                             filterByStatus("coming_soon");
//                             toggleLeftModal();
//                         }}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         <MdOutlineUpcoming className="mr-3" />
//                         <span>Coming Soon</span>
//                     </div>

//                     <div
//                     // this is favorite button
//                         onClick={handleFavoritesClick}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         {selectItems.length ? <GoHeartFill className="mr-3 text-red-400 dark:text-green-400" /> : <GoHeart className="mr-3" />}
//                         <span>Favorites</span>
//                     </div>
//                 </div>
//             </aside>
//         </>
//     );
// }

// export default LeftSidebar;




























// import { useEffect } from "react";
// import { CiSearch } from "react-icons/ci";
// import { FaFire } from "react-icons/fa";
// import { GoHeart, GoHeartFill } from "react-icons/go";
// import { MdOutlineCreateNewFolder, MdOutlineUpcoming } from "react-icons/md";


// function LeftSidebar({ setIsSearchModalOpen, handleSearchChange, sortByTrending, filterByStatus, selectItems, setSortedBooks, initialBookData, isLeftModalOpen, setIsLeftModalOpen }) {

//     useEffect(() => {
//         if (isLeftModalOpen) {
//             document.body.classList.add("overflow-hidden");
//         } else {
//             document.body.classList.remove("overflow-hidden");
//         }
//     }, [isLeftModalOpen]);

//     // Function to toggle the modal
//     const toggleLeftModal = () => {
//         setIsLeftModalOpen(!isLeftModalOpen);
//     };


//     return (
//         <>
//             <aside className="w-1/6 p-4 hidden lg:block">
//                 {/* Search Bar */}
//                 <div onClick={() => setIsSearchModalOpen(true)} className="cursor-pointer border overflow-hidden  border-gray-300 hover:border-red-300 dark:border-green-400 rounded-md flex dark:bg-gray-800 p-2 items-center mb-6 mt-4">
//                     <div>
//                         <CiSearch className="text-xl dark:text-white ml-[10px] " />
//                     </div>

//                     <div>
//                         <input onClick={() => setIsSearchModalOpen(true)} onChange={handleSearchChange} className="cursor-pointer border-none dark:bg-gray-800 w-full lg:w-52 outline-none ml-2" type="text" placeholder="Quick search..." />
//                     </div>
//                 </div>

//                 {/* Sidebar Buttons */}
//                 <div>
//                     <div
//                         onClick={() => {
//                             sortByTrending();
//                             toggleLeftModal();
//                         }}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         <FaFire className="mr-3" />
//                         <span>Trending</span>
//                     </div>

//                     <div
//                         onClick={() => {
//                             filterByStatus("new_releases");
//                             toggleLeftModal();
//                         }}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         <MdOutlineCreateNewFolder className="mr-3" />
//                         <span>New Releases</span>
//                     </div>

//                     <div
//                         onClick={() => {
//                             filterByStatus("coming_soon");
//                             toggleLeftModal();
//                         }}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         <MdOutlineUpcoming className="mr-3" />
//                         <span>Coming Soon</span>
//                     </div>

//                     <div 
//                     // this is favorite  button  
//                         onClick={() => {
//                             if (selectItems.length === 0) {
//                                 alert("You did not select any favorite item");
//                             } else {
//                                 setSortedBooks(initialBookData().filter((book) => selectItems.includes(book.id)));
//                             }
//                             toggleLeftModal(); 
//                         }}
//                         className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                     >
//                         {selectItems.length ? <GoHeartFill className="mr-3 text-red-400 dark:text-green-400" /> : <GoHeart className="mr-3" />}
//                         <span>Favorites</span>
//                     </div>
//                 </div>
//             </aside>


//         </>
//     );
// }

// export default LeftSidebar;