import React, { ReactNode } from "react";

interface RoundedIconProps {
  icon: ReactNode;
}

export default function RoundedIcon({ icon }: RoundedIconProps) {
  return <div className="rounded-full p-4">{icon}</div>;
}
