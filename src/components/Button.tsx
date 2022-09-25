import React, { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  customClassName?: string;
}

export default function Button({
  onClick,
  children,
  customClassName,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary  py-2 rounded-full text-white  ${customClassName}`}
    >
      {children}
    </button>
  );
}
