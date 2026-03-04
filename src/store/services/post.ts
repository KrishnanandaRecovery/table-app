import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PostProps } from "./types";

export const postApi = createApi({
 reducerPath: 'postApi',
 baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
 endpoints: (builder) => ({
    getPosts: builder.query<PostProps[], void>({
        query: () => '/posts',
    }),
 }),
});

export const { useGetPostsQuery } = postApi;