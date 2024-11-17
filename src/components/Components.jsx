// ********************this is main copy *********************
import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
import Footer from "./Footer";
import { initialBookData } from "../data/initialBookData";
import LeftSidebar from "../sidebar/LeftSidebar";
import Header from "./Header";
import SearchModal from "../modal/SearchModal";
import RightSidebar from "../sidebar/RightSidebar";
import BookModal from "../modal/BookModal";
import LeftRightModalBtn from "../buttons/LeftRightModalBtn";


function Components({ selectedHeartItems = [] }) {
    // const [ setSortedBooks] = useState(initialBookData()); ///sortng
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [sortedBooks, setSortedBooks] = useState(initialBookData());
    const [searchResults, setSearchResults] = useState([]);
    const [selectItems, setselectItems] = useState([]);

    // for Left Side ber
    const [isLeftModalOpen, setIsLeftModalOpen] = useState(false);

    useEffect(() => {
        if (isLeftModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isLeftModalOpen]);

    // Function to toggle the modal
    const toggleLeftModal = () => {
        setIsLeftModalOpen(!isLeftModalOpen);
    };

    // this is for header
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);



    /**************  Function for Right side bar to toggle modal visibility */

    const [isRightModalOpen, setIsRightModalOpen] = useState(false);

    const toggleModal = () => {
        setIsRightModalOpen(!isRightModalOpen);
    };

    // Open book details modal
    const onOpenBookModal = (book) => {
        setSelectedBook(book);
        setIsBookModalOpen(true);
    };

    // Handle search input and open search modal if results are found
    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm) {
            const filteredBooks = initialBookData().filter((book) => book.name.toLowerCase().includes(searchTerm));
            setSearchResults(filteredBooks);
            setIsSearchModalOpen(true);
        }
    };

    //************ very impotent ******************//

    const handleHeartClick = (id) => {
        setselectItems((prevSelected) => (prevSelected.includes(id) ? prevSelected.filter((item) => item !== id) : [...prevSelected, id]));
    };

    //aa Handle by new Release coming soon and  State

    const filterByStatus = (status) => {
        const filtered = initialBookData().filter((book) => book.status === status);
        setSortedBooks(filtered);
    };

    // Handle Sorting
    const handleSortByName = () => {
        const sorted = [...sortedBooks].sort((a, b) => a.name.localeCompare(b.name));
        setSortedBooks(sorted);
    };

    const sortByPrice = () => {
        const sortedByPrice = [...sortedBooks].sort((a, b) => a.price - b.price);
        setSortedBooks(sortedByPrice);
    };

    const sortByRating = () => {
        const sortedByRating = [...sortedBooks].sort((a, b) => a.rating - b.rating);
        setSortedBooks(sortedByRating);
    };

    const sortByTrending = () => {
        const sortedByRating = [...sortedBooks].sort((a, b) => b.rating - a.rating);
        setSortedBooks(sortedByRating);
    };

    // *************** this is for  Handling Cart in the Headers modal ********************

    const handleAddToCart = (gallery) => {
        const newData = {
            id: gallery.id,
            name: gallery.name,
            author: gallery.author,
            image: gallery.image,
            price: gallery.price,
            quantity: 1,
        };

        // Check if the item already exists in the cart
        const itemExists = cartItems.find((item) => item.id === gallery.id);
        if (!itemExists) {
            // Add the new item to the cart
            setCartItems([...cartItems, newData]);
        }
    };

    const handleIncrement = (id) => {
        setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    };

    const handleDecrement = (id) => {
        setCartItems(cartItems.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)));
    };

    const handleDelete = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    //********************** this is for  Handling Cart in the Headers modal End ********************

    return (
        <>
            {/* This is for Header */}

            <Header
                openModal={openModal}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                totalItems={totalItems}
                cartItems={cartItems}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleDelete={handleDelete}
                totalPrice={totalPrice}
            />

            <div>
                <div className="h-screen flex">
                    {/* **********************left ******************* */}
                    <LeftSidebar
                        setIsSearchModalOpen={setIsSearchModalOpen}
                        sortByTrending={sortByTrending}
                        toggleLeftModal={toggleLeftModal}
                        filterByStatus={filterByStatus}
                        selectItems={selectItems}
                        setSortedBooks={setSortedBooks}
                        isLeftModalOpen={isLeftModalOpen}
                        handleSearchChange={handleSearchChange}
                    />

                    {/* ********************   Main Gallery   ******************* */}
                    <main className="flex-1 px-2 pt-8 pb-5 overflow-y-auto border relative">
                        <LeftRightModalBtn toggleLeftModal={toggleLeftModal} toggleModal={toggleModal} />

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Search Modal */}
                            <SearchModal
                                isSearchModalOpen={isSearchModalOpen}
                                setIsSearchModalOpen={setIsSearchModalOpen}
                                handleSearchChange={handleSearchChange}
                                searchResults={searchResults}
                                setSelectedBook={setSelectedBook}
                                setIsBookModalOpen={setIsBookModalOpen}
                            />

                            <BookModal 
                            isBookModalOpen={isBookModalOpen} 
                            selectedBook={selectedBook} 
                            handleAddToCart={selectItems} 
                            selectItems={selectItems} 
                            handleHeartClick={handleHeartClick} 
                            setIsBookModalOpen={setIsBookModalOpen}
                            
                             />





                            {sortedBooks.map((gallery) => (
                                <GalleryItem 
                                onOpen={() => onOpenBookModal(gallery)} 
                                onAdd={handleAddToCart} 
                                key={gallery.id} 
                                gallery={gallery} 
                                handleHeartClick={handleHeartClick} 
                                selectItems={selectItems}
                                
                                />
                            ))}
    
                        </div>
                    </main>

                    {/* RightSidebar */}
                    <RightSidebar handleSortByName={handleSortByName} sortByPrice={sortByPrice} sortByRating={sortByRating} isRightModalOpen={isRightModalOpen} toggleModal={toggleModal} />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Components;
















// ********************this is main copy *********************
// import { useEffect, useState } from "react";
// import { FaChevronRight } from "react-icons/fa6";


// import {  MdDarkMode } from "react-icons/md";
// import GalleryItem from "./GalleryItem";
// import Footer from "./Footer";
// import { initialBookData } from "../data/initialBookData";
// // import { getImage } from "../utils/GetImages";
// import { GetImages } from "../utils/GetImages";
// import { GoHeart, GoHeartFill } from "react-icons/go";
// import { AiOutlineClose } from "react-icons/ai";
// import { IoSearch } from "react-icons/io5";
// import { FaBell, FaCartArrowDown } from "react-icons/fa6";
// import { IoIosSunny } from "react-icons/io";
// import { RiCloseLargeFill } from "react-icons/ri";
// import { CiMenuKebab } from "react-icons/ci";
// import LeftSidebar from "../sidebar/LeftSidebar";
// import Header from "./Header";

// // for left Side bar

// // for Right side bar

// function Components({ selectedHeartItems = [] }) {
//     const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//     const [isBookModalOpen, setIsBookModalOpen] = useState(false);
//     const [selectedBook, setSelectedBook] = useState(null);
//     const [sortedBooks, setSortedBooks] = useState(initialBookData());
//     const [searchResults, setSearchResults] = useState([]);
//     const [selectItems, setselectItems] = useState([]);

 

//     // for Left Side ber
//     const [isLeftModalOpen, setIsLeftModalOpen] = useState(false);

//     // const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

//     // Disable body scrolling when modal is open
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

//     // this is for header
//     const [cartItems, setCartItems] = useState([]);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);

//     const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//     const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//     // this is for heder End ****

//     {
//         /* // Function for Right side bar to toggle modal visibility */
//     }
//     const [isRightModalOpen, setIsRightModalOpen] = useState(false);

//     const toggleModal = () => {
//         setIsRightModalOpen(!isRightModalOpen);
//     };

//     // Open book details modal
//     const onOpenBookModal = (book) => {
//         setSelectedBook(book);
//         setIsBookModalOpen(true);
//     };

//     // Handle search input and open search modal if results are found
//     const handleSearchChange = (e) => {
//         const searchTerm = e.target.value.toLowerCase();
//         if (searchTerm) {
//             const filteredBooks = initialBookData().filter((book) => book.name.toLowerCase().includes(searchTerm));
//             setSearchResults(filteredBooks);
//             setIsSearchModalOpen(true);
//         } 
//     };

//     // ############## very impotent  ######################

//     const handleHeartClick = (id) => {
//         setselectItems((prevSelected) => (prevSelected.includes(id) ? prevSelected.filter((item) => item !== id) : [...prevSelected, id]));
//     };

//     //aa Handle by new Release coming soon and  State

//     const filterByStatus = (status) => {
//         const filtered = initialBookData().filter((book) => book.status === status);
//         setSortedBooks(filtered);
//     };

//     // Handle Sorting
//     const handleSortByName = () => {
//         const sorted = [...sortedBooks].sort((a, b) => a.name.localeCompare(b.name));
//         setSortedBooks(sorted);
//     };

//     const sortByPrice = () => {
//         const sortedByPrice = [...sortedBooks].sort((a, b) => a.price - b.price);
//         setSortedBooks(sortedByPrice);
//     };

//     const sortByRating = () => {
//         const sortedByRating = [...sortedBooks].sort((a, b) => a.rating - b.rating);
//         setSortedBooks(sortedByRating);
//     };

//     const sortByTrending = () => {
//         const sortedByRating = [...sortedBooks].sort((a, b) => b.rating - a.rating);
//         setSortedBooks(sortedByRating);
//     };

//     //////// // this is for  Handling Cart in the Headers modal ********************

//     const handleAddToCart = (gallery) => {
//         const newData = {
//             id: gallery.id,
//             name: gallery.name,
//             author: gallery.author,
//             image: gallery.image,
//             price: gallery.price,
//             quantity: 1,
//         };

//         // Check if the item already exists in the cart
//         const itemExists = cartItems.find((item) => item.id === gallery.id);
//         if (!itemExists) {
//             // Add the new item to the cart
//             setCartItems([...cartItems, newData]);
//         }
//     };

//     const handleIncrement = (id) => {
//         setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
//     };

//     const handleDecrement = (id) => {
//         setCartItems(cartItems.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)));
//     };

//     const handleDelete = (id) => {
//         setCartItems(cartItems.filter((item) => item.id !== id));
//     };

//     //////// // this is for  Handling Cart in the Headers modal End ********************

//     return (
//         <>
//             {/* This is for Header */}

//                 <Header 
//                 openModal={openModal} 
//                 isModalOpen={isModalOpen}
//                 closeModal={closeModal}
//                 totalItems={totalItems}
//                 cartItems={cartItems}
//                 handleDecrement={handleDecrement}
//                 handleIncrement={handleIncrement}
//                 handleDelete={handleDelete}
//                 totalPrice={totalPrice} />

//             <div>
//                 {/* this is for header */}

//                 <div className="h-screen flex">
//                     {/* Button to Toggle Modal */}

//                   {/* **********************left ******************* */}
//                   <LeftSidebar setIsSearchModalOpen={setIsSearchModalOpen}
//                    sortByTrending={sortByTrending} 
//                    toggleLeftModal={toggleLeftModal} 
//                    filterByStatus={filterByStatus} 
//                    selectItems={selectItems} 
//                    setSortedBooks={setSortedBooks} 
//                    isLeftModalOpen={isLeftModalOpen} 
//                    handleSearchChange={handleSearchChange} />

//                     {/* left sidebar with responsive end here */}




//                     {/* ********************   Main Gallery   ******************* */}
//                     <main className="flex-1 px-2 pt-8 pb-5 overflow-y-auto border relative">
//                         {/* Left side bar icon 3 rack */}

//                         <button className="block lg:hidden text-2xl absolute top-1 left-[10px]" onClick={toggleLeftModal}>
//                             ☰ {/* Replace with your icon if needed */}
//                         </button>

//                         {/* Right side bar icon 3 dod */}
//                         <div className="lg:hidden p-4 ">
//                             <CiMenuKebab className="text-2xl cursor-pointer absolute top-3 right-[3px]" onClick={toggleModal} />
//                         </div>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {/* Modal for smaller screens */}

//                             {/* Search Modal */}
//                             {isSearchModalOpen && (
//                                 <div
//                                     className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
//                                     onClick={() => setIsSearchModalOpen(false)} // Close modal when clicking outside
//                                 >
//                                     {/* Modal itself */}
//                                     <dialog
//                                         className="modal relative bg-gray-900 text-white max-w-2xl h-[67%] w-full overflow-y-scroll rounded-lg"
//                                         open
//                                         onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
//                                     >
//                                         {/* Close Button */}
//                                         <button onClick={() => setIsSearchModalOpen(false)} className="absolute top-5 right-5 text-white text-2xl z-50">
//                                             <AiOutlineClose />
//                                         </button>

//                                         {/* Search Input */}
//                                         <div className="flex items-center w-full mb-2 bg-gray-900 rounded py-2 pl-7 absolute top-0 left-0">
//                                             <IoSearch className="text-gray-500 mr-2" />
//                                             <input
//                                                 type="text"
//                                                 className="w-full p-4 bg-gray-900 outline-none text-white"
//                                                 placeholder="Type your favorite book name here ..."
//                                                 onChange={handleSearchChange}
//                                                 autoFocus // Automatically focus when modal opens
//                                             />
//                                         </div>

//                                         {/* Search Results */}

//                                         {/* Add margin-top to push results below the input  constmazitioin */}
//                                         {searchResults.length > 0 ? (
//                                             searchResults.map((book) => (
//                                                 <div
//                                                     key={book.id}
//                                                     className="flex items-center w-full py-2 pl-7 hover:bg-[#00d991] cursor-pointer "
//                                                     onClick={() => {
//                                                         setSelectedBook(book);
//                                                         setIsSearchModalOpen(false);
//                                                         setIsBookModalOpen(true);
//                                                     }}
//                                                 > 
//                                                   <img className="w-12 h-16 mr-3" src={book.image} alt={book.name} />
//                                                     {/* <img className="w-12 h-16 mr-3" src={book.image} /> */}
//                                                     {/* <img className="w-12 h-16 mr-3" src={getImage(`../assets/book_images/${book.image}`)} alt={book.name} /> */}
//                                                     <div className="flex-grow">
//                                                         <p>{book.name}</p>
//                                                         <p className="text-sm text-gray-400">Price: {book.price} TK</p>
//                                                     </div>
//                                                 </div>
//                                             ))
//                                         ) : (
//                                             <p className="text-center text-gray-400">No item found</p>
//                                         )}
//                                     </dialog>
//                                 </div>
//                             )}

//                             {isBookModalOpen && selectedBook && (
//                                 <div className="fixed inset-0 bg-gray-100 bg-opacity-75 flex items-center justify-center z-50">
//                                     <dialog onClick={(e) => e.stopPropagation()} id="my_modal_4" className="modal" open>
//                                         <div className="w-8/12 max-w-5xl">
                                           
//                                             <div className="flex text-gray-300 bg-[#1e293b] rounded-2xl items-center">
//                                                 <div className="w-[90%] px-3 space-y-7">
//                                                     {/* Book Details */}
//                                                     <h2 className="text-3xl mb-2 font-bold">{selectedBook.name}</h2>
//                                                     <span>{selectedBook.genre}</span>
//                                                     <p>{selectedBook.description}</p>

//                                                     <div className="flex mt-2">
//                                                         {/* Add to Cart Button */}
//                                                         <button
//                                                             onClick={() => handleAddToCart(selectedBook)} // Pass the selected book to the function
//                                                             className="px-7 py-2 outline-none border-none bg-green-400 hover:bg-green-500 text-black rounded font-medium"
//                                                         >
//                                                             ${selectedBook.price} | Add to cart
//                                                         </button>

//                                                         {/* Heart Button */}
//                                                         <div
//                                                             className={`border ml-7 ${
//                                                                 selectItems.includes(selectedBook.id) ? "text-green-400" : "text-green"
//                                                             } hover:bg-green-400 hover:bg-opacity-25 border-green-400 font-medium px-3 flex items-center justify-center rounded-md`}
//                                                             onClick={() => handleHeartClick(selectedBook.id)}
//                                                         >
//                                                             {selectItems.includes(selectedBook.id) ? <GoHeartFill className="text-2xl " /> : <GoHeart className="text-2xl text-green-400" />}
//                                                         </div>

//                                                         {/* Close Button */}
//                                                         <button className="ml-7 bg-white text-black px-4 rounded" onClick={() => setIsBookModalOpen(false)}>
//                                                             Close
//                                                         </button>
//                                                     </div>
//                                                 </div>

//                                                 {/* Book Image */}
//                                                 <div>
//                                                     <img className="rounded-r-xl" src={GetImages(`../assets/book_images/${selectedBook.image}`)} alt="Book Image" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </dialog>
//                                 </div>
//                             )}

//                             {sortedBooks.map((gallery) => (
//                                 <GalleryItem onOpen={() => onOpenBookModal(gallery)} onAdd={handleAddToCart} key={gallery.id} gallery={gallery} handleHeartClick={handleHeartClick} selectItems={selectItems} />
//                             ))}
//                         </div>
//                     </main>

//                     {/* RightSidebar */}
//                     <aside className="w-1/6 p-4 hidden lg:block">
//                         <h2 className="text-xl font-bold mb-3 mt-3">Filter On Page</h2>
//                         <div className="space-y-2">
//                             <div
//                                 className="flex cursor-pointer dark:hover:text-black dark:border-none items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                                 onClick={handleSortByName}
//                             >
//                                 <div className="mr-1">
//                                     <FaChevronRight className="text-xs" />
//                                 </div>
//                                 <div>
//                                     <span className="text-base">By Name</span>
//                                 </div>
//                             </div>

//                             <div
//                                 className="flex cursor-pointer dark:hover:text-black dark:border-none items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                                 onClick={sortByPrice}
//                             >
//                                 <div className="mr-1">
//                                     <FaChevronRight className="text-xs" />
//                                 </div>
//                                 <div>
//                                     <span className="text-base"> By Price </span>
//                                 </div>
//                             </div>
//                             <div
//                                 className="flex cursor-pointer dark:hover:text-black dark:border-none items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                                 onClick={sortByRating}
//                             >
//                                 <div className="mr-1">
//                                     <FaChevronRight className="text-xs" />
//                                 </div>
//                                 <div>
//                                     <span className="text-base"> By Ratings </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </aside>

                  

//                     {/* Modal for smaller screens */}
//                     {isRightModalOpen && (
//                         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end z-50 pointer-events-none">
//                             {/* Modal content */}
//                             <div className="w-2/3 rounded-l-lg rounded-br-md h-[320px] bg-gray-300 dark:bg-gray-900 dark:border-none p-4 shadow-lg overflow-y-auto pointer-events-auto relative" role="dialog" aria-modal="true">
//                                 <button
//                                     className="mb-4 absolute top-8 bg-gray-400 rounded-2xl px-2 py-1 text-xs right-4"
//                                     onClick={toggleModal}
//                                     autoFocus 
//                                 >
//                                     Close
//                                 </button>
//                                 <h2 className="text-xl font-bold mb-3 mt-3">Filter On Page</h2>
//                                 <div className="space-y-2">
//                                     <div
//                                         className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                                         onClick={() => {
//                                             handleSortByName();
//                                             toggleModal(); 
//                                         }}
//                                         tabIndex={0} 
//                                     >
//                                         <div className="mr-1">
//                                             <FaChevronRight className="text-xs" />
//                                         </div>
//                                         <div>
//                                             <span className="text-base">By Name</span>
//                                         </div>
//                                     </div>

//                                     <div
//                                         className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                                         onClick={() => {
//                                             sortByPrice();
//                                             toggleModal();
//                                         }}
//                                         tabIndex={0}
//                                     >
//                                         <div className="mr-1">
//                                             <FaChevronRight className="text-xs" />
//                                         </div>
//                                         <div>
//                                             <span className="text-base">By Price</span>
//                                         </div>
//                                     </div>

//                                     <div
//                                         className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
//                                         onClick={() => {
//                                             sortByRating();
//                                             toggleModal();
//                                         }}
//                                         tabIndex={0}
//                                     >
//                                         <div className="mr-1">
//                                             <FaChevronRight className="text-xs" />
//                                         </div>
//                                         <div>
//                                             <span className="text-base">By Ratings</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                 </div>
//                 <Footer />
//             </div>
//         </>
//     );
// }

// export default Components;

