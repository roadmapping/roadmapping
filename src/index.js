import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Goals from "./routes/goals";
import AppDragDropDemo from "./routes/appdragdropdemo";

var mountNode = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="goals" element={<Goals />} />
      <Route path="appdragdropdemo" element={<AppDragDropDemo />} />
    </Routes>
  </BrowserRouter>,
  mountNode
);
