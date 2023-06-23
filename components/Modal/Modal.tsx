"use client";

import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import cl from "classnames";
import styles from "./Modal.module.scss";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../../src/redux/slices/modalSlice";

console.log(open);
interface ModalProps {
  // className: string;
  // children: ReactNode;
  // onClick: () => void;
  // buttonText: string;
  //modal: any;
  //showModal: any;
}

export const Modal: React.FC<ModalProps> = (buttonText) => {
  // const [modal, showModal] = useState(false);
  const modal = useSelector((state: any) => state.modal.value);
  console.log(modal);
  console.log("modal");
  const dispatch = useDispatch();
  return (
    <>
      <Button
        buttonText="ashtsshtgsthgashtsaht"
        onClick={() => {
          console.log(open);
          dispatch(open());
          console.log(modal);
          console.log("---------");
        }}
      ></Button>

      {modal && createPortal(<Form></Form>, document.body)}
    </>
  );
};
