import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useGetPostsQuery } from "../store/services/post";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
import Modal from "../utils/Modal";
import PostTable from "./PostTable";
import Dropdown from "../utils/Dropdown";
import Pagination from "../utils/Pagination";

const initialRowsPerPage = 20;
const errorMessage = "Something went wrong while fetching posts!";

function Posts() {
  const { isLoading, data = [], error, refetch } = useGetPostsQuery();
  const modalData = useSelector((state: RootState) => state.modal);
  const [rowsPerPage, setRowsPerPage] = useState<number>(initialRowsPerPage);
  const [page, setPage] = useState(0);

  const updatedPosts = useMemo(() => {
    const start = page * rowsPerPage;
    return data.slice(start, start + rowsPerPage);
  }, [data, page, rowsPerPage]);
  const handleRowsPerPage = (rows: number) => {
    setPage(0);
    setRowsPerPage(rows);
  };
  const rowsPerPageOptions = useMemo(() => {
    if (!data.length) return [];
    const options: number[] = [];
    for (let i = initialRowsPerPage; i < data.length; i += initialRowsPerPage) {
      options.push(i);
    }
    options.push(data.length);
    return options;
  }, [data]);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={errorMessage} refetch={refetch} />;

  return (
    <>
      {modalData.isOpen && <Modal />}
      <div className="p-9">
        <h2 className="text-3xl font-medium mb-5">Posts Table</h2>

        <PostTable posts={updatedPosts} />

        <div className="flex justify-between my-2">
          <Dropdown
            dropDownValue={rowsPerPage}
            dropDownOnClick={handleRowsPerPage}
            dropDownOptions={rowsPerPageOptions}
          />

          <Pagination
            page={page}
            totalPages={totalPages}
            handlePagination={setPage}
          />
        </div>
      </div>
    </>
  );
}

export default Posts;
