import { Inter } from "next/font/google";
import "@/styles/reset.css";
import "@/styles/globals.css";
import { Header } from "@/components/header/index";
import { Footer } from "@/components/footer/index";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
};
