
import { initialBookData } from "../data/initialBookData";


const sortedBooksReducer = (state, action) => {
    switch (action.type) {
      case 'filterByStatus': {
        const filtered = initialBookData().filter((book) => book.status === action.status);
        return filtered;
      }
  
      case 'handleSortByName': {
        return [...state].sort((a, b) => a.name.localeCompare(b.name));
      }
  
      case 'sortByPrice': {
        return [...state].sort((a, b) => a.price - b.price);
      }
  
      case 'sortByRating': {
        return [...state].sort((a, b) => a.rating - b.rating);
      }
  
      case 'sortByTrending': {
        return [...state].sort((a, b) => b.rating - a.rating);

      }
  
      default:
        return state;
    }
  };
  
  export default sortedBooksReducer;
  


















  
// import { initialBookData } from "../data/initialBookData";


// const sortedBooksReducer = (state, action) => {
//     switch (action.type) {
//       case 'filterByStatus': {
//         const filtered = initialBookData().filter((book) => book.status === action.status);
//         return filtered;
//       }
  
//       case 'handleSortByName': {
//         return [...state].sort((a, b) => a.name.localeCompare(b.name));
//       }
  
//       case 'sortByPrice': {
//         return [...state].sort((a, b) => a.price - b.price);
//       }
  
//       case 'sortByRating': {
//         return [...state].sort((a, b) => a.rating - b.rating);
//       }
  
//       case 'sortByTrending': {
//         return [...state].sort((a, b) => b.rating - a.rating);

//       }
  
//       default:
//         return state;
//     }
//   };
  
//   export default sortedBooksReducer;
  




  




// from components page
   // const [sortedBooks, dispatch] = useReducer(sortedBooksReducer, initialBookData());

    // const filterByStatus = (status) => {
    //     dispatch({ type: "filterByStatus", status });
    // };

    // const handleSortByName = () => {
    //     dispatch({ type: "handleSortByName" });
    // };

    // const sortByPrice = () => {
    //     dispatch({ type: "sortByPrice" });
    // };

    // const sortByRating = () => {
    //     dispatch({ type: "sortByRating" });
    // };

    // const sortByTrending = () => {
    //     dispatch({ type: "sortByTrending" });
    // };



















// export default function sortedBooksreducer(sortedBooks, action) {

//     switch (action.type) {
//         case 'filterByStatus': {
//             return [...sortedBooks].sort((a, b) => a.name.localeCompare(b.name));
//         action.setSortedBooks(sorted);
//         }
            
            
    
//         default:
//             break;
//     }
// }