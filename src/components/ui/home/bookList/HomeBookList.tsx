import { Link } from "react-router";
import { useGetBooksQuery } from "../../../../redux/api/baseApi";

interface Book {
  title: string;
  author: string;
}

// const books: Book[] = [
//   { title: "Book 1", author: "Author 1" },
//   { title: "Book 2", author: "Author 2" },
//   { title: "Book 3", author: "Author 3" },
//   { title: "Book 4", author: "Author 4" },
// ];

const HomeBookList = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery(undefined);

  console.log(books, "books");

  /* 
  
  author
: 
"Alice Walker"
available
: 
true
copies
: 
4
createdAt
: 
"2025-06-21T01:29:22.501Z"
description
: 
"A gripping tale of mystery and betrayal set in a small town."
genre
: 
['FICTION']
isbn
: 
"978-1-23456-789-0"
title
: 
"The Hidden Truth"
updatedAt
: 
"2025-06-21T05:40:57.720Z"
_id
: 
"68560af2e9e545119b095107"
  */
 

  return (
    <div className="max-w-7xl mx-auto my-20 px-5">
      <h2 className="text-3xl font-bold mb-4">Discover Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books?.data &&
          books?.data?.slice(0, 8).map((book, index) => (
            <div
              key={index}
              className="relative bg-green-100 p-4 min-h-[350px] rounded shadow cursor-pointer "
            >
              <p className="font-bold mask-radial-from-neutral-700 text-4xl text-center mt-8">{book.title}</p> 
              <p className="font-medium text-center mt-4">by {book.author}</p>
              <Link
                to={`/books/${book?._id}`}
                className="absolute bottom-8 md:bottom-3 left-1/2 -translate-x-1/2 bg-green-500 cursor-pointer font-medium text-lg text-white px-4 py-2  rounded "
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
