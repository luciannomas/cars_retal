
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <NextTopLoader />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
