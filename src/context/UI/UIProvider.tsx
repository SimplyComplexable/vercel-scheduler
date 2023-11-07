"use client";
import React from "react";
import { OpenModal, UIContext } from "./useUI";

export interface UIProviderProps {
  children: React.ReactNode;
}

export enum ModalID {
  nav = "nav",
}

const UIProvider = ({ children }: UIProviderProps) => {
  const [openModal, setOpenModal] = React.useState<OpenModal>(null);
  const close = React.useCallback(() => setOpenModal(null), []);
  return (
    <UIContext.Provider value={{ openModal, setOpenModal, close }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
