import { FaTimesCircle } from "react-icons/fa";
import { useSaveBorrowMutation } from "../../../../../redux/api/baseApi";
import toast from "react-hot-toast";

const BorrowBookFormModal = ({ book, setBookToBorrow }) => {
  const [saveBorrow, { data, isLoading, isError }] =
    useSaveBorrowMutation(undefined);

  const handleBorrowBook = async(e) => {
    e.preventDefault();

    const quantity = e.target.enterCopies.value;
    const dueDate = e.target.dueDate.value;

    if(quantity > book?.copies){
      toast.error(`Can't exceeds the available copies ${book?.copies}`);
      return
    }

    if (!quantity || quantity <= 0){
      toast.error("please enter valid quantity of copies");
      return
    }
    if (!dueDate) {
      toast.error("please select valid due date");
      return;
    }
    
   const {data: result} = await saveBorrow({ book: book?._id, quantity, dueDate });

    if (!result?.success) {
      toast.error("Book borrow failed");
      return;
    }

    toast.success("Book borrowed successfully");
    setBookToBorrow(null)
  };

  return (
    <div className="fixed inset-0 bg-black/5 flex justify-center items-center">
      <div className="relative bg-white max-w-3xl mx-auto rounded-lg p-8 drop-shadow-lg">
        <div>
          <p className="text-2xl font-bold">Overview</p>
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
        </div>

        <form onSubmit={handleBorrowBook}>
          <div className="border border-green-500 rounded p-4 mt-4">
            <label htmlFor="enterCopies">Enter number of copies:</label>
            <input
              type="number"
              max={book?.copies}
              min={1}
              id="enterCopies"
              name="enterCopies"
              className="border-b border-b-black/30 outline-none pl-3"
            />
            <br />
            <br />
            <label htmlFor="dueDate">Select dueDate:</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="border-none outline-none pl-3"
            />
          </div>

          <button
            type="submit"
            className=" bg-green-500 cursor-pointer font-medium text-white px-4 py-2  rounded mt-4"
          >
            Borrow Now
          </button>
        </form>
        {/* close button  */}
        <button
          onClick={() => setBookToBorrow(null)}
          className="absolute top-3 right-3 cursor-pointer text-red-500"
        >
          <FaTimesCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default BorrowBookFormModal;
