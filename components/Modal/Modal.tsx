"use client";

import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import cl from "classnames";
import styles from "./Modal.module.scss";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";

interface ModalProps {
  // className: string;
  // children: ReactNode;
  // onClick: () => void;
  // buttonText: string;
  modal: any;
  showModal: any;
}

export const Modal: React.FC<ModalProps> = () =>
  //{
  //  modal,
  //  showModal,
  // className,
  // children,
  // onClick,
  // buttonText,}
  {
    const [modal, showModal] = useState(false);
    return (
      <>
        <Button
          buttonText="ashtasht"
          onClick={() => {
            showModal(true);
          }}
        ></Button>

        {modal && createPortal(<Form></Form>, document.body)}
      </>
    );
  };
