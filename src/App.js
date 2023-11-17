import React from "react";
import Header from "./components/Header";
import MainApp from "./pages/layout";

const App = () => {
  return (
    <div className="w-screen">
      <Header />
      <MainApp />
    </div>
  );
};

export default App;
