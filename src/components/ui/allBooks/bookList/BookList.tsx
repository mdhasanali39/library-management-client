import { useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import EditBookFormModal from "./editBookFormModal/EditBookFormModal";
import BorrowBookFormModal from "./borrowBookFormModal/BorrowBookFormModal";

const BookList = ({ books }) => {

  const [bookToEdit, setBookToEdit] = useState(null);
  const [bookToBorrow, setBookToBorrow] = useState(null);



  const handleEditBook = (book) => {
    setBookToEdit(book);
  };

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
                {book.available ? "Available" : "Not Available"}
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
                  <Link
                    to={`/books/${book?._id}`}
                    className=" cursor-pointer font-medium text-lg text-red-500  rounded mt-4"
                  >
                    <span>
                      <FaTrashAlt />
                    </span>
                  </Link>
                  <button
                    onClick={() => setBookToBorrow(book)}
                    className=" cursor-pointer font-medium text-lg text-green-500  rounded mt-4"
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
      {bookToBorrow && <BorrowBookFormModal book={bookToBorrow} setBookToBorrow={setBookToBorrow} />}
    </div>
  );
};

export default BookList;
