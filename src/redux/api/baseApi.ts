import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-server-navy.vercel.app/api"
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
        query: ()=> "/books"
    }),
    getBook: builder.query({
        query: (id: string) => `/books/${id}`
    })
  })
});

export const {useGetBooksQuery, useGetBookQuery} = baseApi