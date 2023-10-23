import { useState,useEffect,createContext,useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/Dashboard";
import UserOverview from "./scenes/UserOverview";
import VehicleOverview from "./scenes/VehicleOverview";
import FAQ from "./scenes/Guide";
import Calendar from "./scenes/Calendar";
import IncomingVehicle from "./scenes/IncomingVehicle";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

export const NavigationContext = createContext();

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  // Unnötiger Seiteneffekt. Wrappe das setPage in einen Wrapper, wo du auch den LocalStorage setzt.
  const lastSelectedPage = localStorage.getItem('lastSelectedPage');
  const [page, setPage] = useState(useMemo(()=>{return lastSelectedPage ? JSON.parse(lastSelectedPage) : ""},[lastSelectedPage]));
  
  useEffect(()=> {
    localStorage.clear();
    localStorage.setItem("lastSelectedPage", JSON.stringify(page) )
  },[page])


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <NavigationContext.Provider value={{ page, setPage }}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} page={page} setPage={setPage}/>
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/userOverview" element={<UserOverview />} />
                <Route path="/vehicleOverview" element={<VehicleOverview />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/incomingVehicle" element={<IncomingVehicle />}/>
              </Routes>
            </main>
          </div>
        </NavigationContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
