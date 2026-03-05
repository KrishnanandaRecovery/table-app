import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { FaWindowClose } from "react-icons/fa";
import { closeModal } from "../store/features/modalSlice";
import { useGetPostByIdQuery } from "../store/services/post";
import Loader from "./Loader";

function Modal() {
  const modalData = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const {
    data: post,
    isLoading,
    isError,
    refetch,
  } = useGetPostByIdQuery(modalData.id!, {
    skip: !modalData.isOpen || modalData.id === null,
  });

  const handleClose = useCallback(() => dispatch(closeModal()), [dispatch]);

  return (
    <div className="w-screen h-screen fixed t-0 l-0 bg-gray-900 opacity-90 flex justify-center items-center overflow-hidden">
      <div className="p-4 w-150 bg-white rounded-md relative">
        <FaWindowClose
          className="text-red-800 text-4xl ml-auto cursor-pointer"
          onClick={handleClose}
        />
        {modalData.id != null && (
          <span className="inline-block text-3xl bg-cyan-600 text-white rounded absolute top-2 px-2 mb-3">
            {modalData.id}
          </span>
        )}

        {isLoading && <Loader />}
        {isError && (
          <div className="p-4 text-center">
            <p className="text-red-600 mb-2">Failed to load post.</p>
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded"
              onClick={refetch}
            >
              Try again
            </button>
          </div>
        )}

        {!isLoading && !isError && post && (
          <>
            <span className="block text-sm text-gray-500 mt-4">Title</span>
            <h2 className="text-2xl mb-4">{post.title}</h2>
            <span className="text-sm text-gray-500">Content</span>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default memo(Modal);
