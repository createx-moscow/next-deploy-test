"use client";
import { store } from "../redux/store";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import cl from "classnames";
import { Oswald, Lora } from "next/font/google";
import "../../styles/globals.scss";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Providers } from "@/redux/provider";

export const oswald = Oswald({
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-oswald",
});
export const lora = Lora({
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-lora",
});

console.log(lora);

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
//   robots: "noindex, nofollow",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={cl(lora.variable, oswald.variable)}>
      <Providers>
        <body>
          <main>
            <Header></Header>
            {children}
            <Footer></Footer>
          </main>
        </body>
      </Providers>
    </html>
  );
}
