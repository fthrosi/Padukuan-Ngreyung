import { Inter } from "next/font/google";
import "@/utils/globals.css";
import Providers from"@/components/home/provider"
import Navbar from '../../components/home/topNavbar';
import Footer from '@/components/home/footer';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={`${inter.className}`}>
        <Navbar />
          <Providers>
          {children}
          </Providers>
        <Footer />
      </body>
    </html>
  );
}
