import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { NavigationContext } from "../App";
import PieChart from "./PieChart";

const StatBox = ({ title, subtitle, icon, progress, increase, link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { setPage } = useContext(NavigationContext);
  const setNavigation = () => {
    setPage(link);
  };

  return (
    <Box width="100%" m="0 15px"display="flex">
      <Box display="flex"  justifyContent="space-between">
        <Box>
          <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100], fontSize: "18px", whiteSpace: "nowrap" }}>
            {title}
          </Typography>
        </Box>

        {progress &&
          <Box>
            <PieChart progress={progress} />
          </Box>
        }
        {link &&
          <Box>
            <Link to={link} onClick={setNavigation}>
              <OpenInNewIcon sx={{ fontSize: 30, color: colors.primary[300] }} />
            </Link>
          </Box>
        }

      </Box>

    </Box>
  );
};

export default StatBox;
