import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { HeaderMenu } from "./components/HeaderMenu";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "500", "900"] });

export const metadata: Metadata = {
  description: "Generated by create next app",
  title: "Create Next App",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} px-8 py-4 min-h-screen w-full bg-base-200 antialiased leading-relaxed text-base-content`}
      >
        <HeaderMenu />
        <div className="lg:p-8 md:p-6 p-4">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
