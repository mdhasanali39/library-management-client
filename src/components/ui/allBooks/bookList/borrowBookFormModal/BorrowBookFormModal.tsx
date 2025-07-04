import { FaTimesCircle } from "react-icons/fa";
import { useSaveBorrowMutation } from "../../../../../redux/api/baseApi";

const BorrowBookFormModal = ({ book, setBookToBorrow }) => {
  const [saveBorrow, { data, isLoading, isError }] =
    useSaveBorrowMutation(undefined);

  const handleBorrowBook = (e) => {
    e.preventDefault();

    const quantity = e.target.enterCopies.value;

    if(quantity > book?.copies){
      return alert("Can't exceeds the available copies")
    }

    if (!quantity || quantity <= 0){
      return alert("please enter valid quantity of copies")
    }
    
      
      const date = Date.now();
    // console.log(date)

    saveBorrow({ book: book?._id, quantity, dueDate: date });
    setBookToBorrow(null)
  };

  console.log(data, "book borrowed");

  return (
    <div className="fixed inset-0 bg-black/5 flex justify-center items-center">
      <div className="relative bg-white max-w-3xl mx-auto rounded-lg p-8 drop-shadow-lg">
        Name: {book?.title}
        <br />
        Author: {book?.author}
        <br />
        Genre: {book?.genre}
        <br />
        ISBN: {book?.isbn}
        <br />
        Copies: {book?.copies}
        <br />
        Available: {book?.available}
        <br />
        Description: {book?.description}
        <br />
        <form onSubmit={handleBorrowBook}>
          <div>
            <label htmlFor="enterCopies">Enter number of copies:</label>
            <input type="number" id="enterCopies" name="enterCopies" className="border-b border-b-black/30 outline-none" />
          </div>

          <button
            type="submit"
            onClick={() => setBookToBorrow(null)}
            className=" bg-green-500 cursor-pointer font-medium text-white px-4 py-2  rounded mt-4"
          >
            Borrow Now
          </button>
        </form>
        {/* close button  */}
        <button onClick={() => setBookToBorrow(null)} className="absolute top-3 right-3 cursor-pointer text-red-500">
          <FaTimesCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default BorrowBookFormModal;
