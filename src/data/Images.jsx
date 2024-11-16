
import image1 from "../assets/book_images/1.jpg"
import image2 from "../assets/book_images/2.jpg"
import image3 from "../assets/book_images/3.jpg"
import image4 from "../assets/book_images/4.jpg"
import image5 from "../assets/book_images/5.jpg"
import image6 from "../assets/book_images/6.jpg"
import image7 from "../assets/book_images/7.jpg"
import image8 from "../assets/book_images/8.jpg"
import image9 from "../assets/book_images/9.jpg"
import image10 from "../assets/book_images/10.jpg"
import image11 from "../assets/book_images/11.jpg"
import image12 from "../assets/book_images/12.jpg"






function Images() {
    return (
        <div>

            {sortedBooks.map((gallery) => (
                <GalleryItem onOpen={() => onOpenBookModal(gallery)} onAdd={handleAddToCart} key={gallery.id} gallery={gallery} handleHeartClick={handleHeartClick} selectItems={selectItems} sortedBooks={sortedBooks} />
            ))}


        </div>
    );
}

export default Images;