import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Goals from "./routes/goals";

var mountNode = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="goals" element={<Goals />} />
    </Routes>
  </BrowserRouter>,
  mountNode
);
