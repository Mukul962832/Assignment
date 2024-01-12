import React, { useEffect, useState } from "react";
import "./App.css";
// import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
// import PhoneCollectModal from "./components/PhoneCollectModal";

function App() {

  return (
    <div className="bg-gray-0">
      <Routes>
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </div>
  );
}

export default App;
