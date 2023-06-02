import { Outlet } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home/Home";

function App() {
  return (
    <>
      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-3 bg-gray-200">
          <Home></Home>
        </div>
        <div className="md:col-span-9 bg-gray-300">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default App;
