import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/custom.min.css";
import "./assets/css/index.css";
import "./assets/css/scrollbar.css";

import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner.jsx";
import Overview from "./pages/OverviewPage.js";
import Banking from "./pages/BankingPage.js";
import Receipts from "./pages/ReceiptsPage.js";
import Properties from "./pages/PropertiesPage.js";
import Maintenance from "./pages/MaintPage.js";

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Banner />
        {/* Page Content */}
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/receipts" element={<Receipts />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
