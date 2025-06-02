import "@/app/globals.css";
import type React from "react";
import ThemeWrapper from "./Theme-wrapper";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bita Hedayat | Front-End Developer",
  description:
    "Enthusiastic Frontend Developer with 6 years of experience in React.js, Next.js, and React Native",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="no-scrollbar">
      <body className="font-sans" suppressHydrationWarning>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
