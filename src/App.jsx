import { useState } from "react";

import PickColor from "./components/PickColor";

function App() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-900 ">
      <PickColor />
    </main>
  );
}

export default App;
