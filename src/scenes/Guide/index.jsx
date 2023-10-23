import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Typography variant="h2" p={2} fontWeight={"bold"}>Page Guide</Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blueAccent[400]} variant="h4">
            User List
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A user list is like a digital address book. 
            It shows you a list of all the users, with their basic info. 
            You can search for a specific user, sort them, and even do things 
            like changing their roles or deactivating accounts if you have the right 
            permissions. It's a handy tool for managing and keeping track of users within the application.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blueAccent[400]} variant="h4">
            Vehicle Overview
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A vehicle overview is like a digital dashboard for all vehicles. 
            It provides a snapshot of essential information about your vehicles, such as their intake Date, 
            ID, current status, and important stats. 
            This overview helps you quickly check the health and performance of your vehicles at a glance, 
            making it easier to manage and maintain your vehicles efficiently. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blueAccent[400]} variant="h4">
            Vehicale Intake
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A vehicle intake is like a digital dashboard for all vehicles intaken and a input for incoming vehicles. 
            It provides a process of bringing a new vehicle into your service,  
            ensuring it's well-documented, inspected, and integrated into your operations, 
            much like welcoming and onboarding a new employee into your organization.
            You may establish maintenance schedules and service plans to keep the vehicle in 
            optimal condition, similar to setting goals and expectations for a new team member.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
};

export default FAQ;
