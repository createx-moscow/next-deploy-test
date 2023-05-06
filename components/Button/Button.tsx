"use client";

import { ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  className: string;
  children: ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
