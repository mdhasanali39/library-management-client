import { useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import EditBookFormModal from "./editBookFormModal/EditBookFormModal";
import BorrowBookFormModal from "./borrowBookFormModal/BorrowBookFormModal";
import { useDeleteBookMutation } from "../../../../redux/api/baseApi";
import toast from "react-hot-toast";

const BookList = ({ books }) => {
  const [bookToEdit, setBookToEdit] = useState(null);
  const [bookToBorrow, setBookToBorrow] = useState(null);


  const [deleteBook, {data, isLoading, error}] = useDeleteBookMutation(undefined);

  console.log(data, "book deleted");

  const handleEditBook = (book) => {
    setBookToEdit(book);
  };

  const hanldeDeleteBook = (id) =>{

    toast(
      (t) => (
        <div className="p-2">
          <p className="text-sm mb-2">Are you sure you want to delete?</p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => {
                toast.dismiss(t.id); // close toast
                // here is the delete call
                deleteBook(id);
                toast.success("Deleted successfully");
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: 15000, // auto-close if not interacted
      }
    );    
  }

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto my-16 min-h-[calc(100vh-60px)]">
      <table className="table w-full">
        <thead>
          <tr className="border-b-2 border-b-gray-200">
            <th className="text-left">Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>ISBN</th>
            <th>Copies</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book._id} className="border-b border-b-green-300">
              <td>{book.title}</td>
              <td className="text-center">{book.author}</td>
              <td className="text-center">{book.genre}</td>
              <td className="text-center">{book.isbn}</td>
              <td className="text-center">{book.copies}</td>
              <td className="text-center">
                {book.available ? "Available" : "Unavailable"}
              </td>
              <td className="text-center">
                <div className="flex justify-center items-center gap-6">
                  <button
                    onClick={() => handleEditBook(book)}
                    className=" cursor-pointer font-medium text-lg text-green-600  rounded mt-4"
                  >
                    <span>
                      <FaPencilAlt />
                    </span>
                  </button>
                  <button
                  onClick={()=>hanldeDeleteBook(book?._id)}
                    className=" cursor-pointer font-medium text-lg text-red-500  rounded mt-4"
                  >
                    <span>
                      <FaTrashAlt />
                    </span>
                  </button>
                  <button
                    disabled={!book.available}
                    onClick={() => setBookToBorrow(book)}
                    className=" cursor-pointer font-medium text-lg text-green-500 disabled:cursor-not-allowed rounded mt-4"
                  >
                    <span>Borrow</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {bookToEdit && (
        <EditBookFormModal book={bookToEdit} setBookToEdit={setBookToEdit} />
      )}
      {bookToBorrow && (
        <BorrowBookFormModal
          book={bookToBorrow}
          setBookToBorrow={setBookToBorrow}
        />
      )}
    </div>
  );
};

export default BookList;
