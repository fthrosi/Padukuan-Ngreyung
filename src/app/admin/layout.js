import { Inter } from "next/font/google";
import "@/utils/globals.css";
import Sidebar from "@/components/sidebar";
import authCheck from "@/components/auth/authcheck";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo2.png" />
        <title>Padukuhan Ngreyung</title>
      </head>
      <body className={`${inter.className}`}>
        <Toaster/>
        <Sidebar />
        <div className="ml-64">
          {children}
        </div>
      </body>
    </html>
  );
}
