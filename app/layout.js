import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { VideoProvider } from "@/context/VideoContext";
import Credit from "@/components/Credit";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube Video Downloader",
  description: " Download Youtube video easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VideoProvider>
          <Navbar />
          {children}
          <Credit/>
        </VideoProvider>
      </body>
    </html>
  );
}
