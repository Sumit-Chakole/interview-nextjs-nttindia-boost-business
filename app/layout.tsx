import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTT Data",
  description: "NTT Data is a leading IT consulting firm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
