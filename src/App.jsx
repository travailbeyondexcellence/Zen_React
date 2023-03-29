import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import MessageForm from "./components/Form";
import { Route, Routes } from "react-router";
import MainPage from "./pages/Main";
import UsersPage from "./pages/Users";
import ShopsPage from "./pages/Shops";

const cardsData = [
  {
    id: 1,
    title: "First title",
    description: "First description",
  },
  {
    id: 2,
    title: "Second title",
    description: "Second description",
  },
  {
    id: 3,
    title: "Third title",
    description: "Third description",
  },
  {
    id: 4,
    title: "Fourth title",
    description: "Fourth description",
  },
];

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/shops" element={<ShopsPage />} />
    </Routes>
  );
}

export default App;
