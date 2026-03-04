import { useGetPostsQuery } from "../store/services/post";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
import PostTable from "./PostTable";

const errorMessage = "Something went wrong while fetching posts!";

function Posts() {
  const { isLoading, data, error, refetch } = useGetPostsQuery();

  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={errorMessage} refetch={refetch} />;

  console.log(data);

  return (
    <div className="p-9">
      <h2 className="text-3xl font-medium mb-5">Posts Table</h2>
      <PostTable />
    </div>
  );
}

export default Posts;
