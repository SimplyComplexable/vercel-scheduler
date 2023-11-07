"use client";
import Nav from "@/app/(layout)/nav";
import { ModalID } from "@/context/UI/UIProvider";
import { useModal } from "@/context/UI/useModal";
import { classNames } from "@/utils/classNames";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { active } = useModal(ModalID.nav);
  return (
    <body
      className={classNames(
        inter.className,
        "grid grid-cols-[210px_1fr] w-[calc(100%+160px)] before:content-['_'] before:block",
      )}
    >
      <Nav />
      <div
        className={classNames(
          "transition-transform",
          !active && "-translate-x-[150px]",
        )}
      >
        {children}
      </div>
    </body>
  );
};

export default Layout;
