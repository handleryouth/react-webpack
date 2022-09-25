import React, { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-primary px-8 py-2 rounded-full text-white"
    >
      {children}
    </button>
  );
}
