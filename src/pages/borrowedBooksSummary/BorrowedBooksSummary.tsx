import { useGetBorrowSummaryQuery } from "../../redux/api/baseApi";

const BorrowedBooksSummary = () => {
  const {
    data: borrowedSummary,
    isLoading,
    isError,
  } = useGetBorrowSummaryQuery(undefined);

  console.log(borrowedSummary, "borrowedSummary");

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto my-16 min-h-[calc(100vh-60px)] px-5">
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b-2 border-b-gray-200">
            <th className="text-left">Book Title</th>
            <th>ISBN</th>
            <th>Total Quantity</th>
          </tr>
        </thead>
        <tbody>
          {borrowedSummary?.data?.map((item, idx) => (
            <tr key={idx} className="border-b border-b-green-300 py-3">
              <td>{item?.book?.title}</td>
              <td className="text-center">{item?.book?.isbn}</td>
              <td className="text-center">{item?.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedBooksSummary;
