import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Provider from './provider'
import Navbar from "./components/navbar";
import Blob from "./components/animation/Blob";

const poppins = Poppins({subsets: ["latin"], weight: [
  "100", "200", "300", "400", "500", "600", "700", "800", "900"
]});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={poppins.className} id="body">
        <Provider>
          <div className="w-full h-full pointer-events-none absolute bottom-0 right-0">
            <Blob />
          </div>
          <div className="flex flex-col w-full h-full">
            <NextTopLoader
              shadow={true}
              color="#ff0000"
            />
            <div className="flex items-center justify-center overflow-hidden" style={{width: '100%', height: '100svh'}}>
              <Navbar />
              <div className="flex items-center justify-center w-full h-full relative">
                {children}
              </div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
