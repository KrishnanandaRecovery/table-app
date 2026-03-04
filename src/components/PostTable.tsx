import { memo } from "react";
import type { PostProps } from "../store/services/types";
import { truncateString } from "../utils/helper";
import { useLazyGetPostByIdQuery } from "../store/services/post";

function PostTable(props: { posts: PostProps[] | undefined }) {
  const { posts } = props;
  const [trigger, { isLoading, error, data }] = useLazyGetPostByIdQuery();

  const handleRowClick = (id: number) => trigger(id);

  console.log("fetching post", isLoading, error, data);

  return (
    <table className="w-full text-left border-3 border-gray-300">
      <thead className="border-3 border-gray-300">
        <tr>
          <th className="p-4">ID</th>
          <th className="p-4">Title</th>
          <th className="p-4">Body</th>
        </tr>
      </thead>
      <tbody className="border-3 border-gray-300">
        {posts?.map((post: PostProps) => (
          <tr
            key={post.id}
            onClick={() => handleRowClick(post.id)}
            className="border-3 border-gray-300 cursor-pointer hover:bg-gray-100"
          >
            <td className="p-4">{post.id}</td>
            <td className="p-4">{truncateString(post.title, 50)}</td>
            <td className="p-4">{truncateString(post.body, 50)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default memo(PostTable);
