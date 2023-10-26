import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { NavigationContext } from "../App";
import { PieChart } from '@mui/x-charts/PieChart';



const StatBox = ({ title, subtitle, icon, progress, increase, link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { setPage } = useContext(NavigationContext);
  const setNavigation = () => {
    setPage(link);
  };

  return (
    <Box width="100%" m="0 15px">
      <Box>
        <Box p={2}>
          <Typography variant="h3" fontWeight="bold">
            {title}
          </Typography>
        </Box>

        {progress &&
          <Box>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0,color: colors.blueAccent[400], value: 10, label: 'series A' },
                    { id: 1,color: colors.greenAccent[500], value: 15, label: 'series B' },
                    { id: 2,color: colors.redAccent[400], value: 20, label: 'series C' },
                  ],
                  innerRadius: 30,
                  outerRadius: 80,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 220,
                  cx: 150,
                  cy: 90,
                },
              ]}
              width={400}
              height={200}
            />
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
