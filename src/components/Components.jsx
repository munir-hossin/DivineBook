
import { useReducer, useState } from "react";
import GalleryItem from "./GalleryItem"
import Footer from "./Footer";
import { initialBookData } from "../data/initialBookData";
import { GetImages } from "../utils/GetImages";
import RightSidebar from "../sidebar/RightSidebar";
import LeftSidebar from "../sidebar/LeftSidebar";
import LeftSideModal from "../sidebar/LeftSideModal";
import Header from "./Header";
import SearchModal from "../serchmodal/SearchModal";
import BookModal from "../bookmodal/BookModal";
import LeftRightModalsBtn from "../sidebar/LeftRightModalsBtn";
import sortedBooksReducer from "../reducer/sortedBooksreducer";

console.log(initialBookData().image);




function Components() {

    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [selectItems, setselectItems] = useState([]);
    const [isLeftModalOpen, setIsLeftModalOpen] = useState(false);
    // this is for header
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRightModalOpen, setIsRightModalOpen] = useState(false);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const toggleModal = () => {
        setIsRightModalOpen(!isRightModalOpen);
    };

    const toggleLeftModal = () => {
        setIsLeftModalOpen(!isLeftModalOpen);
    };

    // Open book details modal
    const onOpenBookModal = (book) => {
        setSelectedBook(book);
        setIsBookModalOpen(true);
    };

    ////  Handle search input and open search modal if results are found     
    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm) {
            const filteredBooks = initialBookData().filter((book) => book.name.toLowerCase().includes(searchTerm));
            setSearchResults(filteredBooks);
            setIsSearchModalOpen(true);
        }
    };

//    This is for favorite items ****
    const handleHeartClick = (id) => {
        setselectItems((prevSelected) => (prevSelected.includes(id) ? prevSelected.filter((item) => item !== id) : [...prevSelected, id]));
    };



   
// These are handled by Reducer ******

 const [sortedBooks, dispatch] = useReducer(sortedBooksReducer, initialBookData());

  const filterByStatus = (status) => {
    dispatch({ type: 'filterByStatus', status });
  };

  const handleSortByName = () => {
    dispatch({ type: 'handleSortByName' });
  };

  const sortByPrice = () => {
    dispatch({ type: 'sortByPrice' });
  };

  const sortByRating = () => {
    dispatch({ type: 'sortByRating' });
  };

  const sortByTrending = () => {
    dispatch({ type: 'sortByTrending' });
  };






    //************ */ this is for  Handling Cart in the Headers modal ********************

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



    const bookData = initialBookData();
    const images = bookData.map((book) => book.image);
    
    
    return (
  
        <>

         <div>
            <Header
                openModal={openModal}
                isModalOpen={isModalOpen}
                cartItems={cartItems}
                GetImages={images}
                // images={images}
                closeModal={closeModal}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleDelete={handleDelete}
                totalPrice={totalPrice}
                totalItems={totalItems}
            />
                <div className=" h-screen flex ">
                    <LeftSidebar
                        setIsSearchModalOpen={setIsSearchModalOpen}
                        handleSearchChange={handleSearchChange}
                        sortByTrending={sortByTrending}
                        toggleLeftModal={toggleLeftModal}
                        filterByStatus={filterByStatus}
                        selectItems={selectItems}
                        setSortedBooks={sortedBooksReducer}
                        initialBookData={initialBookData}
                        isLeftModalOpen={isLeftModalOpen}
                        setIsLeftModalOpen={setIsLeftModalOpen}
                    />
                    
                    <LeftSideModal
                        setIsSearchModalOpen={setIsSearchModalOpen}
                        handleSearchChange={handleSearchChange}
                        sortByTrending={sortByTrending}
                        toggleLeftModal={toggleLeftModal}
                        filterByStatus={filterByStatus}
                        selectItems={selectItems}
                        setSortedBooks={sortedBooksReducer}
                        initialBookData={initialBookData}
                        isLeftModalOpen={isLeftModalOpen}
                        totalItems={totalItems}
                    />

                    {/* ********************   Main Gallery   ******************* */}
                    <main className="flex-1 px-2 pt-8  pb-5 overflow-y-auto border relative">
                      
                      <LeftRightModalsBtn toggleModal={toggleModal} toggleLeftModal={toggleLeftModal} />

                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
               
                            <SearchModal
                                isSearchModalOpen={isSearchModalOpen}
                                setIsSearchModalOpen={setIsSearchModalOpen}
                                handleSearchChange={handleSearchChange}
                                searchResults={searchResults}
                                setSelectedBook={setSelectedBook}
                                setIsBookModalOpen={setIsBookModalOpen}
                                GetImages={GetImages}
                            />

                          
                            <BookModal
                                isBookModalOpen={isBookModalOpen}
                                selectedBook={selectedBook}                             
                                handleAddToCart={handleAddToCart}
                                selectItems={selectItems}
                                GetImages={GetImages}
            
                                setIsBookModalOpen={setIsBookModalOpen}
                                handleHeartClick={handleHeartClick}
                            />

                            {sortedBooks.map((gallery) => (
                                <GalleryItem onOpen={() => onOpenBookModal(gallery)} onAdd={handleAddToCart} key={gallery.id} gallery={gallery} handleHeartClick={handleHeartClick} selectItems={selectItems} sortedBooks={sortedBooks} />
                            ))}


                        </div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Search Modal */}
    <SearchModal
        isSearchModalOpen={isSearchModalOpen}
        setIsSearchModalOpen={setIsSearchModalOpen}
        handleSearchChange={handleSearchChange}
        searchResults={searchResults}
        setSelectedBook={setSelectedBook}
        setIsBookModalOpen={setIsBookModalOpen}
        GetImages={selectedBook?.image} // Pass selectedBook image to SearchModal
    />

    {/* Book Modal */}
    <BookModal
        isBookModalOpen={isBookModalOpen}
        selectedBook={selectedBook}
        handleAddToCart={handleAddToCart}
        selectItems={selectItems}
        GetImages={selectedBook?.image} // Pass selectedBook image to BookModal
        setIsBookModalOpen={setIsBookModalOpen}
        handleHeartClick={handleHeartClick}
    />

    {sortedBooks.map((gallery) => (
        <GalleryItem
            key={gallery.id}
            gallery={gallery}
            onOpen={() => onOpenBookModal(gallery)}
            onAdd={handleAddToCart}
            handleHeartClick={handleHeartClick}
            imageLink={gallery.image} // Send image link to GalleryItem
            selectItems={selectItems}
            sortedBooks={sortedBooks}
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


















































// import { useState } from "react";
// import GalleryItem from "./GalleryItem"
// import Footer from "./Footer";
// import { initialBookData } from "../data/initialBookData";
// import { GetImages } from "../utils/GetImages";
// // import { CiMenuKebab } from "react-icons/ci";
// import RightSidebar from "../sidebar/RightSidebar";
// import LeftSidebar from "../sidebar/LeftSidebar";
// import LeftSideModal from "../sidebar/LeftSideModal";
// // import RightSideModal from "../sidebar/RightSideModal";
// import Header from "./Header";
// import SearchModal from "../serchmodal/SearchModal";
// import BookModal from "../bookmodal/BookModal";
// import LeftRightModalsBtn from "../sidebar/LeftRightModalsBtn";

// function Components() {
//     const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//     const [isBookModalOpen, setIsBookModalOpen] = useState(false);
//     const [selectedBook, setSelectedBook] = useState(null);
//     const [sortedBooks, setSortedBooks] = useState(initialBookData());
//     const [searchResults, setSearchResults] = useState([]);
//     const [selectItems, setselectItems] = useState([]);
//     const [isLeftModalOpen, setIsLeftModalOpen] = useState(false);
//     // this is for header
//     const [cartItems, setCartItems] = useState([]);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isRightModalOpen, setIsRightModalOpen] = useState(false);
//     const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//     const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);

//     const toggleModal = () => {
//         setIsRightModalOpen(!isRightModalOpen);
//     };

//     const toggleLeftModal = () => {
//         setIsLeftModalOpen(!isLeftModalOpen);
//     };

//     // Open book details modal
//     const onOpenBookModal = (book) => {
//         setSelectedBook(book);
//         setIsBookModalOpen(true);
//     };

//     ////  Handle search input and open search modal if results are found     
//     const handleSearchChange = (e) => {
//         const searchTerm = e.target.value.toLowerCase();
//         if (searchTerm) {
//             const filteredBooks = initialBookData().filter((book) => book.name.toLowerCase().includes(searchTerm));
//             setSearchResults(filteredBooks);
//             setIsSearchModalOpen(true);
//         }
//     };

//     // ******************* very impotent ******************
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

//     //************ */ this is for  Handling Cart in the Headers modal ********************

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

//     return (
//         <>

//          <div>
//             <Header
//                 openModal={openModal}
//                 isModalOpen={isModalOpen}
//                 cartItems={cartItems}
//                 GetImages={GetImages}
//                 closeModal={closeModal}
//                 handleDecrement={handleDecrement}
//                 handleIncrement={handleIncrement}
//                 handleDelete={handleDelete}
//                 totalPrice={totalPrice}
//                 totalItems={totalItems}
//             />
//                 <div className=" h-screen flex ">
//                     <LeftSidebar
//                         setIsSearchModalOpen={setIsSearchModalOpen}
//                         handleSearchChange={handleSearchChange}
//                         sortByTrending={sortByTrending}
//                         toggleLeftModal={toggleLeftModal}
//                         filterByStatus={filterByStatus}
//                         selectItems={selectItems}
//                         setSortedBooks={setSortedBooks}
//                         initialBookData={initialBookData}
//                         isLeftModalOpen={isLeftModalOpen}
//                         setIsLeftModalOpen={setIsLeftModalOpen}
//                     />
                    
//                     <LeftSideModal
//                         setIsSearchModalOpen={setIsSearchModalOpen}
//                         handleSearchChange={handleSearchChange}
//                         sortByTrending={sortByTrending}
//                         toggleLeftModal={toggleLeftModal}
//                         filterByStatus={filterByStatus}
//                         selectItems={selectItems}
//                         setSortedBooks={setSortedBooks}
//                         initialBookData={initialBookData}
//                         isLeftModalOpen={isLeftModalOpen}
//                         totalItems={totalItems}
//                     />

//                     {/* ********************   Main Gallery   ******************* */}
//                     <main className="flex-1 px-2 pt-8  pb-5 overflow-y-auto border relative">
                      
//                       <LeftRightModalsBtn toggleModal={toggleModal} toggleLeftModal={toggleLeftModal} />

//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {/* Search Modal ******/}
//                             <SearchModal
//                                 isSearchModalOpen={isSearchModalOpen}
//                                 setIsSearchModalOpen={setIsSearchModalOpen}
//                                 handleSearchChange={handleSearchChange}
//                                 searchResults={searchResults}
//                                 setSelectedBook={setSelectedBook}
//                                 setIsBookModalOpen={setIsBookModalOpen}
//                                 GetImages={GetImages}
//                             />

//                             {/* Book modal */}
//                             <BookModal
//                                 isBookModalOpen={isBookModalOpen}
//                                 selectedBook={selectedBook}                             
//                                 handleAddToCart={handleAddToCart}
//                                 selectItems={selectItems}
//                                 GetImages={GetImages}
//                                 setIsBookModalOpen={setIsBookModalOpen}
//                                 handleHeartClick={handleHeartClick}
//                             />

//                             {sortedBooks.map((gallery) => (
//                                 <GalleryItem onOpen={() => onOpenBookModal(gallery)} onAdd={handleAddToCart} key={gallery.id} gallery={gallery} handleHeartClick={handleHeartClick} selectItems={selectItems} sortedBooks={sortedBooks} />
//                             ))}
//                         </div>
//                     </main>

//                     {/* RightSidebar */}
//                     <RightSidebar handleSortByName={handleSortByName} sortByPrice={sortByPrice} sortByRating={sortByRating} isRightModalOpen={isRightModalOpen} toggleModal={toggleModal} />
                  

                  
                    
//                 </div>
//                 <Footer />
//             </div>
//         </>
//     );
// }

// export default Components;





