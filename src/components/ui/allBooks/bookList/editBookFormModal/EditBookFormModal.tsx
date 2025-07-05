import { useUpdateBookMutation } from "../../../../../redux/api/baseApi";
import toast from "react-hot-toast";
import type { IBook } from "../../../../../constants/types";

interface EditBookFormModalProps {
  book: IBook;
  setBookToEdit: React.Dispatch<React.SetStateAction<IBook | null>>;
}

const EditBookFormModal = ({ book, setBookToEdit }: EditBookFormModalProps) => {
  const [updateBook] = useUpdateBookMutation(undefined);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      const bookData = Object.fromEntries(data);

      const { data: result } = await updateBook({
        id: book._id,
        data: bookData,
      });
      if (!result?.success) {
        toast.error("Book update failed");
        return;
      }

      toast.success("Book update successfully");
      setBookToEdit(null);
      // if(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/5 flex justify-center items-center">
      <form
        onSubmit={handleSubmitForm}
        className="bg-white max-w-3xl mx-auto rounded-lg p-8 drop-shadow-lg"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={book.title}
              className="border-b border-b-black/30 outline-none px-4"
            />
          </div>
          <div>
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              id="author"
              name="author"
              defaultValue={book.author}
              className="border-b border-b-black/30 outline-none px-4"
            />
          </div>
          <div>
            <label htmlFor="genre">Genre: </label>
            <input
              type="text"
              id="genre"
              name="genre"
              defaultValue={book.genre}
              className="border-b border-b-black/30 outline-none px-4"
            />
          </div>
          <div>
            <label htmlFor="isbn">ISBN: </label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              defaultValue={book.isbn}
              className="border-b border-b-black/30 outline-none px-4"
            />
          </div>
          <div>
            <label htmlFor="copies">Copies: </label>
            <input
              type="text"
              id="copies"
              name="copies"
              defaultValue={book.copies}
              className="border-b border-b-black/30 outline-none px-4"
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <textarea
              id="description"
              name="description"
              defaultValue={book.description}
              className="border-b border-b-black/30 outline-none px-4"
            />
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <button
            type="button"
            onClick={() => setBookToEdit(null)}
            className=" bg-red-500 cursor-pointer font-medium  text-white px-5 py-1  rounded mt-4"
          >
            Cancel
          </button>
          <button
            type="submit"
            className=" bg-green-500 cursor-pointer font-medium  text-white px-5 py-1  rounded mt-4"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBookFormModal;
