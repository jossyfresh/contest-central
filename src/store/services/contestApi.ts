import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const contestApi = createApi({
  reducerPath: "contestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-contest-central-api.onrender.com/api/Contests/",
  }),
  endpoints: (builder: any) => ({
    //Get All contests
    getContests: builder.query({
      query: (queryString: string) => ({
        url: `GetContestsByFilter?${queryString}`,
        method: "GET",
      }),
    }),

    //Get A single contest
    getContestById: builder.query({
      query: (contestId: any) => ({
        url: `GetContestLeaderboardWithGraph/${contestId}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContestByIdQuery, useGetContestsQuery } = contestApi;
