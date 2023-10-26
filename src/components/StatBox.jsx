import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { NavigationContext } from "../App";
import PieChart from "./PieChart";



const StatBox = ({ title, labels,chartValues, icon, progress, increase, link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { setPage } = useContext(NavigationContext);
  const setNavigation = () => {
    setPage(link);
  };

  return (
    <Box width="100%" p="15px">
      <Box>
        <Typography variant="h3" fontWeight="bold">
          {title}
        </Typography>

        {progress &&
          <Box>
            <PieChart labels={labels} chartValues={chartValues}/>
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
