import { createBrowserRouter } from "react-router";
import App from "../App";
import Books from "../pages/books/Books";
import AddBook from "../pages/addBook/AddBook";

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
        path: "books/:id",
        Component: Books,
      },
    ],
  },
]);

export default router;