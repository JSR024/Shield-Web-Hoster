import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "SHIELD",
  description: "Web Hosting by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-[#F6F6F6]`}>
        <main className=" max-w-container m-auto px-3 xl:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
