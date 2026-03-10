import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useGetPostsQuery } from "../store/services/post";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
import Modal from "../utils/Modal";
import PostTable from "./PostTable";
import Dropdown from "../utils/Dropdown";

const initialRowsPerPage = 20;
const errorMessage = "Something went wrong while fetching posts!";

function Posts() {
  const { isLoading, data = [], error, refetch } = useGetPostsQuery();
  const modalData = useSelector((state: RootState) => state.modal);
  const [rowsPerPage, setRowsPerPage] = useState<number>(initialRowsPerPage);

  const rowsPerPageOptions = useMemo(() => {
    if (!data.length) return [];
    const options: number[] = [];
    for (let i = initialRowsPerPage; i < data.length; i += initialRowsPerPage) {
      options.push(i);
    }
    options.push(data.length);
    return options;
  }, [data]);

  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={errorMessage} refetch={refetch} />;

  return (
    <>
      {modalData.isOpen && <Modal />}
      <div className="p-9">
        <h2 className="text-3xl font-medium mb-5">Posts Table</h2>

        <PostTable posts={data?.slice(0, rowsPerPage)} />

        <div className="my-2">
          <Dropdown
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            rowsPerPageOptions={rowsPerPageOptions}
          />
        </div>
      </div>
    </>
  );
}

export default Posts;
