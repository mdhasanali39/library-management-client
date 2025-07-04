import { useSaveBookMutation } from "../../redux/api/baseApi";

const AddBook = () => {

    const [saveBook, {data, isLoading, isError}] = useSaveBookMutation(undefined)

    console.log(data, "book added");

    const handleSubmitForm = (e) =>{
        try {
            e.preventDefault();
            const data = new FormData(e.target);
            const bookData = Object.fromEntries(data);
            console.log(bookData);
            
            saveBook({...bookData, available: true});
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <div className="max-w-2xl mx-auto min-h-[calc(100vh-60px)] px-5">
        <form
          onSubmit={handleSubmitForm}
          className="bg-white border p-8 rounded-lg my-10"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                className="border-b border-b-black/30 outline-none px-4"
              />
            </div>
            <div>
              <label htmlFor="author">Author: </label>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="Author"
                className="border-b border-b-black/30 outline-none px-4"
              />
            </div>
            <div>
              <label htmlFor="genre">Genre: </label>
              <input
                type="text"
                id="genre"
                name="genre"
                placeholder="Genre"
                className="border-b border-b-black/30 outline-none px-4"
              />
            </div>
            <div>
              <label htmlFor="isbn">ISBN: </label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                placeholder="ISBN"
                className="border-b border-b-black/30 outline-none px-4"
              />
            </div>
            <div>
              <label htmlFor="copies">Copies: </label>
              <input
                type="text"
                id="copies"
                name="copies"
                placeholder="Copies"
                className="border-b border-b-black/30 outline-none px-4"
              />
            </div>
            <div>
              <label htmlFor="description">Description: </label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                className="border-b border-b-black/30 outline-none px-4"
              />
            </div>
          </div>
          <div className="flex justify-between mt-5">
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

export default AddBook;