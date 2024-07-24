import { Inter } from "next/font/google";
import "@/utils/globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Toaster/>
        {children}
      </body>
    </html>
  );
}