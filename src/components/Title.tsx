import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function Title() {
  return (
    <div className="text-center">
      <h1>We are launching soon</h1>
      <h3>Subscribe and get notified</h3>

      <div className="flex items-center gap-x-3">
        <Input placeholder="Your Email Address..." />
        <Button onClick={() => null}>Notify me</Button>
      </div>
    </div>
  );
}
