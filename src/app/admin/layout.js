import { Inter } from "next/font/google";
import "@/utils/globals.css";
import Sidebar from "@/components/sidebar";
import authCheck from "@/components/auth/authcheck";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Sidebar />
        <div className="ml-64">
          {children}
        </div>
      </body>
    </html>
  );
}
