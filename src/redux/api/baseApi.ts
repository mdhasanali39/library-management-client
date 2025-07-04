import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-server-navy.vercel.app/api",
  }),
  tagTypes: ["books", "Put"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getBook: builder.query({
      query: (id: string) => `/books/${id}`,
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Put"],
    }),
    saveBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      })
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      })
    }),
    saveBorrow: builder.mutation({
      query: (data) => ({
        url: "/borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {useGetBooksQuery, useGetBookQuery, useUpdateBookMutation, useSaveBookMutation, useDeleteBookMutation, useSaveBorrowMutation} = baseApi