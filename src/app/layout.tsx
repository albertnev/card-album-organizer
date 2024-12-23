import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "500", "900"] });

export const metadata: Metadata = {
  description: "Organize your cards in your TCG album with ease!",
  title: "Card Album Organizer",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} min-h-screen w-full bg-base-200 antialiased leading-relaxed text-base-content`}
      >
        <div className="md:p-6 p-3">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
