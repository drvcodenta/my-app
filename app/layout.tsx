
import type { Metadata } from "next";
import "./globals.css";
import UserForm from "@/components/shared/userform";
import MarketStories from "@/components/shared/market";

export const metadata: Metadata = {
  title: "assignment",
  description: "Generated goIndiaStocks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between w-full">
          <UserForm />
          <div className="flex-1">
          {children}
          </div>  
          <div className="flex-1">
          <MarketStories />
          </div>
        </div>
      </body>
    </html>
  );
}
