import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-contest-central-api.onrender.com/api/Auth/",
  }),
  endpoints: (builder: any) => ({
    // Sign in to the contest central web page
    signIn: builder.mutation({
      query: (data: any) => ({
        url: `login`,
        method: "POST",
        body: data, // Pass the data object directly
        headers: {
          "content-type": "application/json",
        },
      }),
    }),
    // Forgot password
    forgotPassword: builder.mutation({
      query: (data: any) => ({
        url: `forgot_password`,
        method: "POST",
        body: data,
      }),
    }),
    // Reset password
    resetPassword: builder.mutation({
      query: (data: any) => ({
        url: `reset_password`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useSignInMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
