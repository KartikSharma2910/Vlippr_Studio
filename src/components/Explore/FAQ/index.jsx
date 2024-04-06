import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React, { useState } from "react";
import styles from "./styles";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faq = [
    {
      heading:
        "What types of content creators is NovaLens Studios suitable for?",
      description:
        "NovaLens Studios caters to a wide range of content creators, including photographers, videographers, filmmakers, bloggers, influencers, and more. Our versatile studio space and comprehensive services are designed to meet the needs of creatives from various industries and backgrounds.",
    },
    {
      heading: "Can I bring my own equipment to the studio?",
      description:
        "NovaLens Studios caters to a wide range of content creators, including photographers, videographers, filmmakers, bloggers, influencers, and more. Our versatile studio space and comprehensive services are designed to meet the needs of creatives from various industries and backgrounds.",
    },
    {
      heading:
        "Are there any additional services available at NovaLens Studios?",
      description:
        "NovaLens Studios caters to a wide range of content creators, including photographers, videographers, filmmakers, bloggers, influencers, and more. Our versatile studio space and comprehensive services are designed to meet the needs of creatives from various industries and backgrounds.",
    },
    {
      heading: "How do I book a studio session at NovaLens Studios?",
      description:
        "NovaLens Studios caters to a wide range of content creators, including photographers, videographers, filmmakers, bloggers, influencers, and more. Our versatile studio space and comprehensive services are designed to meet the needs of creatives from various industries and backgrounds.",
    },
    {
      heading: "Can I tour the studio before booking?",
      description:
        "NovaLens Studios caters to a wide range of content creators, including photographers, videographers, filmmakers, bloggers, influencers, and more. Our versatile studio space and comprehensive services are designed to meet the needs of creatives from various industries and backgrounds.",
    },
  ];

  const reviewData = [
    {
      imageUrl: "",
      rating: "4.5",
      name: "Sarah M.",
      review:
        "NovaLens Studios is a dream come true for photographers! The space is stunning, and the equipment is top-notch. The staff is super helpful and friendly. Highly recommend!",
    },
    {
      imageUrl: "",
      rating: "4.9",
      name: "John D.",
      review:
        "NovaLens Studios exceeded my expectations! The VR viewing room is incredible, and the team is so professional. Can't wait to shoot here again!",
    },
    {
      imageUrl: "",
      rating: "5",
      name: "Emily T.",
      review:
        "NovaLens Studios is my favorite place to shoot! The sets are customizable, and the staff is amazing. Love the industrial-chic vibe!",
    },
    {
      imageUrl: "",
      rating: "4.5",
      name: "Michael H.",
      review:
        "NovaLens Studios is my go-to for content creation. The sets are customizable, and the vibe is perfect for creative work.",
    },
  ];

  return (
    <Box className="container" component="section" sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>FAQ (Frequently Asked Questions)</Box>
        <Box sx={styles.accordianContainer}>
          {faq.map(({ heading, description }, index) => {
            return (
              <Accordion
                square
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={
                    <Box
                      sx={{
                        ...styles.accordianIcon,
                        background:
                          expanded === `panel${index}`
                            ? "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)"
                            : "#626262",
                      }}
                    >
                      {expanded === `panel${index}` ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )}
                    </Box>
                  }
                >
                  <Box sx={styles.accordianSummaryWrapper}>
                    <Box sx={styles.accordianText}>0{index + 1}</Box>
                    <Box sx={styles.accordianText}>{heading}</Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={styles.accordianDescription}>{description}</Box>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          ...styles.container,
          width: {
            xs: "100%",
            md: "38%",
          },
        }}
      >
        <Box sx={styles.heading}>User Reviews</Box>
        {/* <Box
          sx={{
            display: "flex",
            // flexDirection: "column",
            // flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: "30%",
            }}
          >
            {reviewData.map(({ imageUrl, rating, name, review }, index) => {
              return (
                <Box key={index}>
                  <Box component="img" src={imageUrl} />
                  <Box>
                    <StarIcon />
                    {rating}
                  </Box>
                  <Box>{name}</Box>
                  <Box>{review}</Box>
                </Box>
              );
            })}
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default FAQ;
