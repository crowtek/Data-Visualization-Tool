import { Box, Typography, useTheme,useMediaQuery } from "@mui/material";
import { tokens } from "../../../theme";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import {useEffect,useState } from "react";
import PieChart from "../../../components/PieChart";



const StatBox = ({ title, labels,chartValues, icon, link,animationTime,subtitle,subtitleColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
      // Trigger the animation after a delay (e.g., 500ms)
      setTimeout(() => {
          setAnimate(true);
      }, animationTime ? animationTime : 500);
  }, [animationTime]);


  return (
    <Box width="100%" p={mobileScreen ? "5px": "15px"} overflow={"hidden"}>
          {/* Box Header */}
          <Typography 
            fontSize={isScreenLg ? "18px": "22px"} 
            fontWeight="bold"  
            display={mobileScreen? "none":"flex"} 
            justifyContent={"space-between"} 
            alignContent={"center"}
          >
            {title}
            {link &&
              <Link to={link}>
                <OpenInNewIcon sx={{ fontSize: 30, color: colors.primary[300] }} />
              </Link>
            }
          </Typography>

          {/* Box Body when Text*/}
          {subtitle &&
            <Typography
              className={`subtitle-animation${animate ? ' subtitle-animation-fade-in' : ''}`}
              fontSize={mobileScreen ? "15px" :isScreenLg ? "18px": "22px"} 
              fontWeight="bold" 
              color={subtitleColor}
              display={"flex"} 
              justifyContent={mobileScreen ? "center" :"flex-start"} 
              alignItems={"center"} 
              gap={mobileScreen ? 1 : 2}
              margin={mobileScreen ? "6px" :0}
            >
              {icon}
              {subtitle}
            </Typography>
          }

          {/* Box Body when Pie chart*/}
          {labels &&
            <Box>
              <PieChart 
                labels={labels} 
                chartValues={chartValues} 
                animationTime={animationTime} 
                isScreenSmall={mobileScreen}
              />
            </Box>
          }

    </Box>
  );
};

export default StatBox;
