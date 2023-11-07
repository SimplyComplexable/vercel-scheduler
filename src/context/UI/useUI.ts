"use client";
import { ModalID } from "@/context/UI/UIProvider";
import { StateSetterFunction } from "@/types/helpers";
import { noop } from "@/utils/funcs";
import React from "react";

export type OpenModal = null | ModalID;
export interface UI {
  openModal: OpenModal;
  setOpenModal: StateSetterFunction<OpenModal>;
  close: () => void;
}
export const UIContext = React.createContext<UI>({
  openModal: null,
  setOpenModal: noop,
  close: noop,
});
export const useUI = () => React.useContext(UIContext);
