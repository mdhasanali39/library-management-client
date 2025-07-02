import { createBrowserRouter } from "react-router";
import App from "../App";
import Books from "../pages/books/Books";
import AddBook from "../pages/addBook/AddBook";
import BorrowedBooksSummary from "../pages/borrowedBooksSummary/BorrowedBooksSummary";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "books",
        Component: Books,
      },
      {
        path: "create-book",
        Component: AddBook,
      },
      {
        path: "borrow-summary",
        Component: BorrowedBooksSummary,
      },
    ],
  },
]);

export default router;