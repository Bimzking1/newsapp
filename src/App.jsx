// import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recent from "./pages/Recent";
import Layout from "./layout/Layout";
import './index.css'

function App() {
  return (
    <div className='w-full'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recent" element={<Recent />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
