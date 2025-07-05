import BookList from "../../components/ui/allBooks/bookList/BookList";
import { useGetBooksQuery } from "../../redux/api/baseApi";

const Books = () => {
    
    const {data: books, } = useGetBooksQuery(undefined);

    return (
        <div>
            <BookList books={books?.data} />
        </div>
    );
};

export default Books;