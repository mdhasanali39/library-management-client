import { createBrowserRouter } from "react-router";
import App from "../App";
import Books from "../pages/books/Books";
import AddBook from "../pages/addBook/AddBook";
import BorrowedBooksSummary from "../pages/borrowedBooksSummary/BorrowedBooksSummary";
import Home from "../pages/home/Home";
import SingleBookDetails from "../pages/singleBookDetails/SingleBookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "books",
        Component: Books,
      },
      {
        path: "create-book",
        Component: AddBook,
      },
      {
        path: "/books/:id",
        Component: SingleBookDetails,
      },
      {
        path: "borrow-summary",
        Component: BorrowedBooksSummary,
      },
    ],
  },
]);

export default router;