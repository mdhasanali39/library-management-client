import { GiNextButton } from "react-icons/gi";
import { useUpdateBookMutation } from "../../../../../redux/api/baseApi";

const EditBookFormModal = ({ book, setBookToEdit }) => {
  
    const [updateBook, {data, isLoading, isError}] = useUpdateBookMutation(undefined)

    console.log(data,"book updated")
    const handleSubmitForm = async(e) =>{
        try {
            e.preventDefault();

            const data = new FormData(e.target);
            const bookData = Object.fromEntries(data);
            console.log(bookData);

            updateBook({ id: book._id, data: bookData });
            setBookToEdit(null);
        } catch (error) {
            console.log(error);
        }

    }
  
  
    return (
    <div className="fixed inset-0 bg-black/5 flex justify-center items-center">
      <form onSubmit={handleSubmitForm} className="bg-white max-w-3xl mx-auto rounded-lg p-8 drop-shadow-lg">
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
