import toast from "react-hot-toast";
import { useSaveBookMutation } from "../../redux/api/baseApi";

const AddBook = () => {

    const [saveBook] = useSaveBookMutation(undefined)


    const handleSubmitForm = async(e) =>{
        try {
            e.preventDefault();


            const data = new FormData(e.target);
            const bookData = Object.fromEntries(data);            
            const { data: result } = await saveBook({
              ...bookData,
              available: true,
            });

            if(!result?.success){
                toast.error("Duplicate ISBN");
                return
            }
            toast.success("Book added successfully");
            e.target.reset();
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
                required
                className="border-b border-b-black/30 outline-none px-4"
              />
            </div>
            <div>
              <label htmlFor="author">Author: </label>
              <input
                type="text"
                id="author"
                name="author"
                required
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
                required
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
                required
                placeholder="ISBN"
                className="border-b border-b-black/30 outline-none px-4"
              />
            </div>
            <div>
              <label htmlFor="copies">Copies: </label>
              <input
                type="number"
                id="copies"
                min={0}
                name="copies"
                required
                placeholder="Copies"
                className="border-b border-b-black/30 outline-none px-4 "
              />
            </div>
            <div>
              <label htmlFor="description">Description: </label>
              <textarea
                id="description"
                name="description"
                required
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