import { Link } from "react-router";

const BookList = ({ books }) => {
  return (
    <div className="overflow-x-auto max-w-7xl mx-auto my-16 min-h-[calc(100vh-60px)]">
      <table className="table w-full">
        <thead>
          <tr className="border">
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
            <tr key={book._id} className="border">
              <td>{book.title}</td>
              <td className="text-center">{book.author}</td>
              <td className="text-center">{book.genre}</td>
              <td className="text-center">{book.isbn}</td>
              <td className="text-center">{book.copies}</td>
              <td className="text-center">
                {book.available ? "Available" : "Not Available"}
              </td>
              <td className="text-center">
                <div>
                  <Link
                    to={`/books/${book?._id}`}
                    className="bg-green-500 cursor-pointer font-medium text-lg text-white px-4 py-2  rounded mt-4"
                  >
                    See Details
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
