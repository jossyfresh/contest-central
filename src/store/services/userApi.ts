import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const UsersApi = createApi({
  reducerPath: "UsersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-contest-central-api.onrender.com/api/Users/",
  }),
  endpoints: (builder: any) => ({
    //Get All contests
    getUsers: builder.query({
      query: () => ({
        url: "all",
        method: "GET",
      }),
    }),
    //Get A single contest
    getUserById: builder.query({
      query: (UserId: any) => ({
        url: `${UserId}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetUserByIdQuery } = UsersApi;
