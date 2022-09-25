import React from "react";
import { Title, Footer } from "./components";
import illustration from "./assets/illustration-dashboard.png";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="!min-w-[320px] !max-w-none flex items-center flex-col prose">
      <img src={logo} />
      <Title />
      <img src={illustration} />
      <Footer />
    </div>
  );
}

export default App;
