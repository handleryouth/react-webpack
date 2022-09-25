import React, { ReactNode } from "react";

interface RoundedIconProps {
  icon: ReactNode;
}

export default function RoundedIcon({ icon }: RoundedIconProps) {
  return (
    <div className="rounded-full p-2 md:p-4 text-primary hover:bg-primary hover:text-white cursor-pointer border-2">
      {icon}
    </div>
  );
}
