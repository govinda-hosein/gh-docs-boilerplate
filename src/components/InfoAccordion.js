import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const InfoAccordion = ({ title, children }) => {
  return (
    <Accordion sx={{ marginBottom: "0.5em", borderRadius: "10px" }}>
      <AccordionSummary
        sx={{
          backgroundColor: "#EEF9FD",
          borderRadius: "10px",
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <span class="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
          <svg viewBox="0 0 14 16">
            <path
              fill-rule="evenodd"
              d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
            ></path>
          </svg>
        </span>{" "}
        <strong>{title}</strong>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#EEF9FD",
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default InfoAccordion;
