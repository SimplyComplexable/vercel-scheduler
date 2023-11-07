"use client";
import { ModalID } from "@/context/UI/UIProvider";
import { useModal } from "@/context/UI/useModal";
import { classNames } from "@/utils/classNames";
import Link from "next/link";
import React from "react";

export interface NavProps {}

const Nav = ({}: NavProps) => {
  const { toggle, active } = useModal(ModalID.nav);
  return (
    <nav className="col-[1/1] h-full grid z-50 w-[210px]">
      <button
        className={classNames(
          "no-border fixed z-10 text-3xl",
          active && "rotate-180",
        )}
        onClick={toggle}
      >
        {">"}
      </button>
      <ul
        className={classNames(
          "shadow-gray-700 shadow-xl overflow-hidden transition-transform py-14 px-6 -z-10 bg-black",
          !active && "-translate-x-[150px]",
        )}
      >
        <li>
          <Link href="/users">Users</Link>
          <ul className="pl-3 pt-3">
            <li>
              <Link href="/users/create">Create</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
