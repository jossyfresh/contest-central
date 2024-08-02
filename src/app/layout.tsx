"use client";
import * as React from "react";

import { RootMainLayout } from "@/components/RootMainLayout";
import { RootState, store } from "../store/index";
import { Provider, useSelector } from "react-redux";

import { Poppins } from "next/font/google";
import { redirect } from "next/navigation";
import AuthProvider from "@/components/AuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider store={store}>
          <AuthProvider>
            <RootMainLayout>{children}</RootMainLayout>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
