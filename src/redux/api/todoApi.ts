import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => {
        return {
          url: '/tasks',
          method: 'GET',
        };
      },
    }),
    addTodo: builder.mutation({
      query: (todo) => {
        return {
          url: '/tasks',
          method: 'POST',
          body: { todo },
        };
      },
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = todoApi;
