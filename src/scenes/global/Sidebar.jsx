import { useState,useContext } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import ViewTimelineOutlinedIcon from '@mui/icons-material/ViewTimelineOutlined';
import { NavigationContext } from "../../App";

const Item = ({ title, to, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { page,setPage } = useContext(NavigationContext);

  return (
    <MenuItem
      active={page === to}
      style={{ color: colors.grey[100],}}
      onClick={() => setPage(to)}
      icon={icon}
    >
      <Typography sx={{ fontSize: 16}} >{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        fontSize:16,
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 15px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  User Name
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>


          <Box>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              style={{ fontSize: '20px' }} 
            />
            <Item
              title="User List"
              to="userOverview"
              icon={<PeopleOutlinedIcon />}
            />
            <Item
              title="Vehicle Overview"
              to="vehicleOverview"
              icon={<LocalShippingOutlinedIcon />}
            />
            <Item
              title="Vehicle Intake"
              to="vehicleIntake"
              icon={<DepartureBoardIcon />}
            />
            <Item
              title="Incoming Vehicle"
              to="incomingVehicle"
              icon={<ViewTimelineOutlinedIcon />}
            />
            <Item
              title="Calendar"
              to="calendar"
              icon={<CalendarTodayOutlinedIcon />}
            />
            <Item
              title="Guide"
              to="faq"
              icon={<HelpOutlineOutlinedIcon />}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
