import { useParams } from "react-router";
import { useGetBookQuery } from "../../redux/api/baseApi";
import BorrowBookFormModal from "../../components/ui/allBooks/bookList/borrowBookFormModal/BorrowBookFormModal";
import { useState } from "react";

const SingleBookDetails = () => {
  const { id } = useParams();
  const [bookToBorrow, setBookToBorrow] = useState(null);
  const { data: book, isLoading, isError } = useGetBookQuery(id as string);


  return (
    <div className="min-h-[calc(100vh-60px)] max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-5 mt-10">
        <div className="relative bg-green-100 self-center p-4 h-[350px] rounded-lg shadow cursor-pointer">
          <div className="relative top-1/2 -translate-y-1/2">
            <p className="font-bold mask-radial-from-neutral-700 text-4xl text-center">
              {book?.data?.title}
            </p>
            <p className="font-medium text-center mt-4">
              by {book?.data?.author}
            </p>
          </div>
        </div>
        {/* details with actions  */}
        <div className="!self-top">
          <p className="font-bold  text-left text-xl">{book?.data?.title}</p>
          <p className="font-medium text-left mt-3 italic ml-4 text-sm">
            - by {book?.data?.author}
          </p>
          <p className="font-medium mt-4 ">
            Availability:{" "}
            {book?.data?.available ? (
              <span className="text-green-500">Available</span>
            ) : (
              "Not Available"
            )}
          </p>
          <p className="font-medium mt-4 ">
            Available Copies: {book?.data?.copies}
          </p>

          <div>
            <p className="font-medium mt-4 ">Select Copies</p>
            <input
              type="number"
              max={book?.data?.copies}
              min={1}
              defaultValue={1}
              className="border border-green-500 rounded text-center"
            />
          </div>
          {/* genre and isbn  */}
          <div className="flex items-center gap-4">
            <div>
              <p className="font-medium mt-4 ">Genre</p>
              <p className="text-sm">{book?.data?.genre}</p>
            </div>
            <div>
              <p className="font-medium mt-4 ">ISBN</p>
              <p className="text-sm">{book?.data?.isbn}</p>
            </div>
          </div>
          {/* borrow book button  */}
          <div className="mt-10">
            <button
              disabled={!book?.data?.available}
              onClick={() => setBookToBorrow(book?.data)}
              className="bg-green-500 cursor-pointer font-medium text-lg disabled:cursor-not-allowed text-white px-4 py-2  rounded"
            >
              <span>Borrow Book</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex max-w-2xl mx-auto mt-14 px-5 pb-10">
        <div className="">
          <p className="font-medium mt-4 ">Description</p>
          <p>{book?.data?.description}</p>
        </div>
      </div>
      {bookToBorrow && (
        <BorrowBookFormModal
          book={bookToBorrow}
          setBookToBorrow={setBookToBorrow}
        />
      )}
    </div>
  );
};

export default SingleBookDetails;
