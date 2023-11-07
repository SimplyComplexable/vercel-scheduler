"use client";
import { ModalID } from "@/context/UI/UIProvider";
import { useUI } from "@/context/UI/useUI";
import React from "react";

export const useModal = (id: ModalID) => {
  const { openModal, setOpenModal, close } = useUI();
  const open = React.useCallback(() => setOpenModal(id), [id]);
  const toggle = React.useCallback(
    () => setOpenModal((curr) => (curr === id ? null : id)),
    [id],
  );
  return {
    active: openModal === id,
    toggle,
    open,
    close,
  };
};
