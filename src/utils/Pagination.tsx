import type { SetStateAction } from "react";
import type React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationProps {
  page: number;
  totalPages: number;
  handlePagination: React.Dispatch<SetStateAction<number>>;
}

function Pagination(props: PaginationProps) {
  const { page, totalPages, handlePagination } = props;

  const handlePrev = () => handlePagination(page - 1);
  const handleNext = () => handlePagination(page + 1);

  return (
    <div className="flex justify-center items-center">
      <button
        disabled={page === 0}
        onClick={handlePrev}
        className="p-2 rounded border-2 border-gray-300 hover:bg-gray-100 cursor-pointer disabled:cursor-not-allowed"
      >
        <FaAngleLeft />
      </button>

      <div className="mx-2 p-2 rounded border-2 border-gray-300">
        {page + 1} / {totalPages}
      </div>

      <button
        disabled={page === totalPages - 1}
        onClick={handleNext}
        className="p-2 rounded border-2 border-gray-300 hover:bg-gray-100 cursor-pointer disabled:cursor-not-allowed"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}

export default Pagination;
