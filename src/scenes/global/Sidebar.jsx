import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";

import { Box, IconButton, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ViewTimelineOutlinedIcon from '@mui/icons-material/ViewTimelineOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import HistoryIcon from '@mui/icons-material/History';

import { sidebarSx } from "../../styles/SidebarStyle";
import Item from "./SidebarMenuItem";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box sx={sidebarSx(colors)}>
      <ProSidebar collapsed={isCollapsed} >
        <Menu >
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}>
              {!isCollapsed && (
                <Box display="flex" justifyContent="flex-end" alignItems="center" ml="15px">
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
          </MenuItem>

          <Box>
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon/>}/>
            <Item title="Leitstand" to="leitstand" icon={<ViewTimelineOutlinedIcon />}/>
            <Item title="History" to="history" icon={<HistoryIcon />} />
            <Item title="Zulauf" to="zulauf" icon={<PlaylistAddOutlinedIcon />}/>
            <Item title="Calendar" to="calendar"icon={<CalendarTodayOutlinedIcon />}/>
            <Item title="User List" to="userOverview"icon={<PeopleOutlinedIcon />}/>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
