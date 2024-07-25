import { Inter } from "next/font/google";
import "@/utils/globals.css";
import Providers from"@/components/home/provider"
import Navbar from '../../components/home/topNavbar';
import Footer from '@/components/home/footer';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo2.png" />
        <title>Padukuhan Ngreyung</title>
      </head>
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
