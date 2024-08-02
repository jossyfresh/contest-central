// write rtk query for questionApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-contest-central-api.onrender.com/api/Question/",
  }),
  endpoints: (builder: any) => ({
    //Get All contests
    CheckDuplicate: builder.query({
      query: (url: string) => ({
        url: `CheckDuplicate?questionUrl=${url}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCheckDuplicateQuery } = questionApi;
