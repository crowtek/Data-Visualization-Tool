import { Box, Typography,useMediaQuery,useTheme } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import {useEffect,useState } from "react";
import PieChart from "./PieChart";



const StatBox = ({ title, subtitle, values, icon, link,animationTime, boxClass}) => {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
      // Trigger the animation after a delay (e.g., 500ms)
      setTimeout(() => {
          setAnimate(true);
      }, animationTime ? animationTime : 500);
  }, [animationTime]);


  return (
    <Box className="statBox">
          <Typography className="statBox-title">
            {title} {link && <Link to={link}><OpenInNewIcon /></Link>}
          </Typography>

          {subtitle &&
            <Typography
              className={`statBox-subtitle hide ${animate ? ' fade-in ' : ''}` + boxClass }
              color={subtitle.color}
            >
              {icon}
              {subtitle.count +" "+ (mobileScreen ? "" : subtitle.name)}
            </Typography>
          }

          {values &&
            <PieChart values={values} animationTime={animationTime} />
          } 

    </Box>
  );
};

export default StatBox;
