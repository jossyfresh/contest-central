import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leaderboard",
  description: "Generated by create next app",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
