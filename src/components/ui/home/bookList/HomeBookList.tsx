import { Link } from "react-router";
import { useGetBooksQuery } from "../../../../redux/api/baseApi";
import type { IBook } from "../../../../constants/types";


const HomeBookList = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery(undefined);
 

  return (
    <div className="max-w-7xl mx-auto my-20 px-5">
      <h2 className="text-3xl font-bold mb-4">Discover Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books?.data &&
          books?.data?.slice(0, 8).map((book: IBook, index: number) => (
            <div
              key={index}
              className="relative bg-green-100 p-4 min-h-[350px] rounded shadow cursor-pointer "
            >
              <p className="font-bold mask-radial-from-neutral-700 text-4xl text-center mt-8">
                {book.title}
              </p>
              <p className="font-medium text-center mt-4">by {book.author}</p>
              <Link
                to={`/books/${book?._id}`}
                className="absolute bottom-8 md:bottom-3 left-1/2 -translate-x-1/2 bg-green-500 cursor-pointer font-medium md:text-lg text-white px-4 py-2  rounded "
              >
                See Details
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeBookList;
