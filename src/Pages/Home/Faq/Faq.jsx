import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { Fade } from "react-reveal";

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="faq">
      <Box sx={{ margin: "3rem", marginTop: "7rem" }}>
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
              disableGutters
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<AddIcon />}
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
              disableGutters
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{ width: "100%", flexShrink: 0, fontWeight: 900 }}
                >
                  Are The Prebuilt Websites Fully Customizable?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, each prebuilt website is 100% customizable. All prebuilt
                  websites are professionally designed by our in-house design
                  team, created to showcase Avada’s capabilities and save you
                  time. Once you import a prebuilt website, you can entirely
                  customize the content and layouts to your liking. You can add
                  your own imagery, change text, change colors or completely
                  change any of the layouts using the Avada Website Builder.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{ width: "100%", flexShrink: 0, fontWeight: 900 }}
                >
                  Why Should I Trust{" "}
                  <Typography
                    variant="h6"
                    component="span"
                    color="primary"
                    sx={{ fontWeight: 900 }}
                  >
                    Mehraf All IT ?
                  </Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Trust is a quality that we take great care to foster and
                  maintain by building long-term professional relationships that
                  our customers can rely on. Here are some important qualifiers:
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{ width: "100%", flexShrink: 0, fontWeight: 900 }}
                >
                  What Is Included With My Purchase Of Mehraf?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  necessitatibus adipisci voluptatum iusto, placeat inventore
                  consectetur natus saepe similique corrupti quos ipsam
                  reprehenderit a, molestias optio, facilis mollitia cumque
                  aliquam.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Fade>
      </Box>
    </div>
  );
}
