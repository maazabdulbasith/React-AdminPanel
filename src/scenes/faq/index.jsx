import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
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
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are the technologies used in this Dashboard Project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This Dashboard Application was built by React.js
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What libraries did you use along with it?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Used Material UI for the advanced and simple yet attractive UI, Datagrid for Tables,
            Normik and Yup for Forms, FullCalendar for the Calendar and Events and Nivo for the
            Charts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What was the most enjoyable part of this project and what was the most boring part?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The most enjoyable part was working with all the new libraries with react.js,
            while the most boring part was reading their documentations which was time consuming.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Whats your github repository?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It's https://github.com/maazabdulbasith
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Do you have other Projects?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, i have:
            1.Flight Ticketing Website using Java, MySql, HTML,CSS, Javascript and JDBC 
            2.ChatterBox : Instant Chat Application build by MERN Stack and Devops technologies.
            3.Bidsecure : Secure Bidding Application using Ethereum Blockchain.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;