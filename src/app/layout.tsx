import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/hooks/ClientProvider";
import { Suspense } from "react";
import Loader from "@/components/ui/Loader";
import HydrateAuth from "@/hooks/HydrateAuth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Octar Landing",
  description: "",
  icons:{
    icon:"/logo-blue.svg",
  }
};



function RootLayout({ children  }: { children: React.ReactNode }) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProvider>
          <Suspense fallback={<Loader />}>
            <HydrateAuth >
                {children}
            </HydrateAuth>
          </Suspense>
          
        </ClientProvider>        
      </body>
    </html>
  );
}


export default RootLayout;