import { MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const SidebarMenuItem = ({ title, to, icon }) => {
    const location = useLocation();
  
    const isActive = to === "/"
      ? location.pathname === to
      : location.pathname.startsWith(`/${to}`);
  
    return (
      <MenuItem active={isActive} icon={icon}>
        <Typography >{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
};

export default SidebarMenuItem;