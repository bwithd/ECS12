import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";

import { Apply } from "./pages/Apply";
import { Contact } from "./pages/Contact";
import { Edi } from "./pages/Edi";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Location } from "./pages/Location";
import { Accommodation } from "./pages/Accommodation";
import { People } from "./pages/People";
import { Programme } from "./pages/Programme";
import { CourseMaterials } from "./pages/CourseMaterials";

// import "./App.css";
import "./ecs12.css";
import "material-symbols/outlined.css";

const root = document.getElementById("root")!;

createRoot(root).render(
  <HashRouter>
    <StrictMode>
      <div className="site-root">
        <Header />
        <div className="site-body">
          <main className="site-main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="apply" element={<Apply />} />
          <Route path="contact" element={<Contact />} />
          <Route path="edi" element={<Edi />} />
          <Route path="location" element={<Location />} />
          <Route path="accommodation" element={<Accommodation />} />
          <Route path="people" element={<People />} />
          <Route path="programme" element={<Programme />} />
          <Route path="materials" element={<CourseMaterials />} />
        </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </StrictMode>
  </HashRouter>,
);
