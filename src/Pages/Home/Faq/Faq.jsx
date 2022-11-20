import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Fade } from "react-reveal";
import { ExpandMore } from "@mui/icons-material";

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="faq" className="my-28">
      <Box className="lg:ml-28  lg:mr-28 ml-6 mr-6">
        <Fade left>
          <Typography
            variant="h4"
            component="div"
            sx={{
              textAlign: "center",
              marginBottom: "3rem",
              fontWeight: 900,
              color: "#0071e8",
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Fade>
        <Fade right>
          <Box>
            {" "}
            <Accordion
              sx={{ padding: "1.5rem" }}
              disableGutters
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{ width: "100%", flexShrink: 0, fontWeight: 900 }}
                >
                  Where Can I Get Support?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Hands-on support with our professional team of support experts
                  is accessible 24/7, and that includes an extensive library of
                  detailed documentation and video tutorials. To access support
                  you will need to register a support account by following these
                  steps. Once your support account is set up, you can submit
                  support tickets here. Learn how to navigate your support
                  account Dashboard here. Check to see if you are eligible for
                  Grandfathered support. For a detailed overview of our support
                  policy please go here.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ padding: "1.5rem" }}
              disableGutters
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{ width: "100%", flexShrink: 0, fontWeight: 900 }}
                >
                  What Advantages Customer Can Get Working With{" "}
                  <Typography
                    variant="h6"
                    component="span"
                    color="primary"
                    sx={{ fontWeight: 900 }}
                  >
                    MEHRAF?
                  </Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our ethics are pretty basic. "Customer first in whatever we
                  do" is the motto. When you choose us, you are not merely
                  selecting a medium to obtain a remedy. Actually, you're
                  getting a partner who cares as much about your success as we
                  do.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ padding: "1.5rem" }}
              disableGutters
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{ width: "100%", flexShrink: 0, fontWeight: 900 }}
                >
                  Where Can I See Your Work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You may easily access our Services pages to learn more about
                  our products (you'll find this option in our menu).
                  Additionally, you are free to contact us via email at
                  mehraf.ais@gmail.com. For a demo or any questions, you can
                  also phone us at +88 017 73 12 05 28.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ padding: "1.5rem" }}
              disableGutters
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{ width: "100%", flexShrink: 0, fontWeight: 900 }}
                >
                  Why Choose{" "}
                  <Typography
                    variant="h6"
                    component="span"
                    color="primary"
                    sx={{ fontWeight: 900 }}
                  >
                    MEHRAF
                  </Typography>{" "}
                  Over The Garments IT Company?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Every customer is treated as a business partner, and we work
                  with them to articulate their needs while fully comprehending
                  them, face their obstacles, and offer them precise solutions
                  while executing features on schedule. You'll have the
                  impression that you are our only customer, that no problem is
                  too large or too minor, that we are always available to you
                  whenever you need us, and that your needs are our top concern.
                  Yes, also! Your budget is important to us.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Fade>
      </Box>
    </div>
    // <div>
    //   <Accordion
    //     expanded={expanded === "panel1"}
    //     onChange={handleChange("panel1")}
    //   >
    //     <AccordionSummary
    //       expandIcon={<ExpandMore />}
    //       aria-controls="panel1bh-content"
    //       id="panel1bh-header"
    //     >
    //       <Typography sx={{ width: "100%", flexShrink: 0 }}>
    //         General settings
    //       </Typography>
    //       <Typography sx={{ color: "text.secondary" }}>
    //         I am an accordion
    //       </Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
    //         Aliquam eget maximus est, id dignissim quam.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion
    //     expanded={expanded === "panel2"}
    //     onChange={handleChange("panel2")}
    //   >
    //     <AccordionSummary
    //       expandIcon={<ExpandMore />}
    //       aria-controls="panel2bh-content"
    //       id="panel2bh-header"
    //     >
    //       <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
    //       <Typography sx={{ color: "text.secondary" }}>
    //         You are currently not an owner
    //       </Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Donec placerat, lectus sed mattis semper, neque lectus feugiat
    //         lectus, varius pulvinar diam eros in elit. Pellentesque convallis
    //         laoreet laoreet.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion
    //     expanded={expanded === "panel3"}
    //     onChange={handleChange("panel3")}
    //   >
    //     <AccordionSummary
    //       expandIcon={<ExpandMore />}
    //       aria-controls="panel3bh-content"
    //       id="panel3bh-header"
    //     >
    //       <Typography sx={{ width: "33%", flexShrink: 0 }}>
    //         Advanced settings
    //       </Typography>
    //       <Typography sx={{ color: "text.secondary" }}>
    //         Filtering has been entirely disabled for whole web server
    //       </Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
    //         sit amet egestas eros, vitae egestas augue. Duis vel est augue.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion
    //     expanded={expanded === "panel4"}
    //     onChange={handleChange("panel4")}
    //   >
    //     <AccordionSummary
    //       expandIcon={<ExpandMore />}
    //       aria-controls="panel4bh-content"
    //       id="panel4bh-header"
    //     >
    //       <Typography sx={{ width: "33%", flexShrink: 0 }}>
    //         Personal data
    //       </Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
    //         sit amet egestas eros, vitae egestas augue. Duis vel est augue.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    // </div>
  );
}
