import { Box, Typography, useTheme } from "@mui/material";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { tokens } from "../../../theme";
import { useState, useCallback } from "react";
import HandleAccessChange from "../utils/HandleAccessChange";

const buttonStyle = {
  width: "100%",
  p: "5px",
  display: "flex",
  justifyContent: "center",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.4s ease-in-out",
  "&:hover": {
    backgroundColor: "#2a2d64",
  },
}

const AccessLevelButton = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [access, setAccess] = useState(props.access);

  const changeAccessLevel = useCallback(() => {
    let newAccess;
    if (access === "admin") {
      newAccess = "user";
    } else if (access === "user") {
      newAccess = "manager";
    } else {
      newAccess = "admin";
    }
    setAccess(newAccess);

    HandleAccessChange(newAccess, props.id)
  }, [access, props.id]);

  return (
    <Box id={props.id} onClick={changeAccessLevel} sx={buttonStyle}
      backgroundColor={
        access === "admin"
          ? colors.blueAccent[600]
          : access === "manager"
            ? colors.blueAccent[700]
            : colors.blueAccent[800]
      }
      role="button"
      aria-pressed={access}
    >
      {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
      {access === "manager" && <SecurityOutlinedIcon />}
      {access === "user" && <LockOpenOutlinedIcon />}
      <Typography color={colors.grey[100]} ml={"5px"}>
        {access}
      </Typography>
    </Box>
  );
};

export default AccessLevelButton;
