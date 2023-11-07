import Layout from "@/app/(layout)";
import Nav from "@/app/(layout)/nav";
import UIProvider from "@/context/UI/UIProvider";
import { classNames } from "@/utils/classNames";
import type { Metadata } from "next";
import "./styles/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UIProvider>
        <Layout>{children}</Layout>
      </UIProvider>
    </html>
  );
}
