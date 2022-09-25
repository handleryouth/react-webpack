import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import RoundedIcon from "./RoundedIcon";

export default function Footer() {
  return (
    <div>
      <RoundedIcon icon={<FaFacebookF />} />
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />

      <p>© 2021 Loopstudios. All rights reserved.</p>
    </div>
  );
}
