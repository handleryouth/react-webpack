import React from "react";
import { Title, Footer } from "./components";
import illustration from "./assets/illustration-dashboard.png";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="!min-w-[320px] !max-w-none flex items-center flex-col prose my-8 px-8 md:px-0">
      <img src={logo} />
      <Title />
      <img src={illustration} className="w-full max-w-[600px]" />
      <Footer />
    </div>
  );
}

export default App;
