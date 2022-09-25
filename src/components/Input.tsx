import React from "react";

export interface Inputprops {
  placeholder?: string;
  customClassName?: string;
}

export default function Input({ placeholder, customClassName }: Inputprops) {
  return (
    <input
      className={`border-2 border-gray py-2 px-2 rounded-full  ${customClassName}`}
      placeholder={placeholder}
    />
  );
}
