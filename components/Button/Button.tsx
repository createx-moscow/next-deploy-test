"use client";

import { ReactNode } from "react";
import cl from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  // className: string;
  // children: ReactNode;
  // onClick: () => void;
  buttonText: string;
}

export const Button: React.FC<ButtonProps> = ({
  // className,
  // children,
  // onClick,
  buttonText,
}) => {
  return (
    <button className={cl(styles.button, styles.button_submit)}>
      {buttonText}
    </button>
  );
};
