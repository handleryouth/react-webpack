import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import RoundedIcon from "./RoundedIcon";

export default function Footer() {
  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <RoundedIcon icon={<FaFacebookF />} />
        <RoundedIcon icon={<FaTwitter />} />
        <RoundedIcon icon={<FaInstagram />} />
      </div>

      <p className="text-center">© 2021 Loopstudios. All rights reserved.</p>
    </div>
  );
}
