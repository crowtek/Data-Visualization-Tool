import { useState,useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/Dashboard";
import UserOverview from "./scenes/User";
import Leitstand from "./scenes/Leitstand";
import FAQ from "./scenes/Guide";
import Calendar from "./scenes/Calendar";
import Zulauf from "./scenes/Zulauf";
import History from "./scenes/History";
import Erfassung from "./scenes/Erfassung";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar}/>
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/userOverview" element={<UserOverview />} />
                <Route path="/leitstand" element={<Leitstand />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/history" element={<History />}/>
                <Route path="/zulauf" element={<Zulauf />}/>
                <Route path="/erfassung" element={<Erfassung />}/>
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
