import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function Title() {
  return (
    <div className="text-center">
      <h1>We are launching soon</h1>
      <h3>Subscribe and get notified</h3>

      <div className="flex items-center gap-3 flex-col md:flex-row">
        <Input
          placeholder="Your Email Address..."
          customClassName="w-full md:w-96"
        />
        <Button onClick={() => null} customClassName="w-full md:max-w-[150px]">
          Notify me
        </Button>
      </div>
    </div>
  );
}
