import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box paddingY={2}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
