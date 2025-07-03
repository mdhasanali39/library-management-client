import { useParams } from "react-router";

const SingleBookDetails = () => {

    const params = useParams();

    console.log(params, "params")

    return (
        <div>
            SingleBookDetails Page
        </div>
    );
};

export default SingleBookDetails;