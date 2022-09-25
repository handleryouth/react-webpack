import React from "react";

export interface Inputprops {
  placeholder?: string;
}

export default function Input({ placeholder }: Inputprops) {
  return (
    <input
      className="border-2 border-gray py-2 px-2 rounded-full w-96"
      placeholder={placeholder}
    />
  );
}
