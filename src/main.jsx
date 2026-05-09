import React from "react";
import { createRoot } from "react-dom/client";
import { ListingsPage, PropertyDetailPage, YairoHero } from "./YairoHero.jsx";
import "./styles.css";

const Page = window.location.pathname.startsWith("/property/")
  ? PropertyDetailPage
  : window.location.pathname === "/listings"
    ? ListingsPage
    : YairoHero;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
