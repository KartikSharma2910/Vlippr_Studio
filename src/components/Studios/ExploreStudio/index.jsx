import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { cards } from "../../../constants";
import styles from "./styles";

const ExploreStudio = () => {
  const [studio, setStudio] = useState(
    "photography" || "podcast" || "makeup" || "cooking"
  );

  const filteredCards = cards.filter((card) => card.cardType === studio);

  const studioImages = [
    {
      studioType: "photography",
      imageUrl: "/photography.jpeg",
      text: "Photography Studio",
    },
    {
      studioType: "podcast",
      imageUrl: "/podcast.jpeg",
      text: "Podcast Studio",
    },
    {
      studioType: "makeup",
      imageUrl: "/makeup.jpeg",
      text: "Makeup Studio",
    },
    {
      studioType: "cooking",
      imageUrl: "/cooking.jpeg",
      text: "Cooking Studio",
    },
  ];

  return (
    <Box className="container" component="section" id="studio">
      <Box sx={styles.container}>
        <Box className="welcome" sx={styles.heading}>
          Studios that Inspire
        </Box>
        <Box sx={styles.subheading}>
          Unleash Your <span className="outlineText">Creativity</span>
        </Box>
      </Box>
      <Box sx={styles.imageWrapper}>
        {studioImages.map(({ studioType, imageUrl, text }, index) => {
          return (
            <Box
              sx={styles.imageContainer}
              onClick={() => setStudio(studioType)}
            >
              <Box
                sx={{
                  ...styles.image,
                  filter:
                    studioType === studio ? "grayscale(0%)" : "grayscale(100%)",
                }}
                component="img"
                src={imageUrl}
              />
              <Box sx={styles.imageText}>{text}</Box>
            </Box>
          );
        })}
      </Box>
      <Box sx={styles.cardContainer}>
        {filteredCards.length > 0 ? (
          filteredCards.map(
            (
              { imageUrl, heading, place, distance, features, connectivity },
              index
            ) => {
              return (
                <Box key={index} sx={styles.card}>
                  <Box sx={styles.cardInsideContainer}>
                    <Box component="img" src={imageUrl} sx={styles.cardImage} />
                    <Box sx={styles.cardHeading}>{heading}</Box>
                    <Box sx={styles.cardPlace}>{place}</Box>
                    <Box>{distance}km</Box>
                  </Box>
                  <Box sx={styles.divider} />
                  <Box>
                    {features.map(({ data, buttonLabel }, idx) => {
                      return (
                        <Box key={idx}>
                          <Box sx={styles.cardInsideContainer}>
                            {data.map((list) => (
                              <Box component="ul" sx={styles.cardList}>
                                ◦ {list}
                              </Box>
                            ))}
                          </Box>
                          <Button sx={styles.cardButton}>{buttonLabel}</Button>
                        </Box>
                      );
                    })}
                  </Box>
                  <Box sx={styles.divider} />
                  <Box>
                    {connectivity.map(
                      ({ price, facebook, instagram, whatsapp }) => {
                        return (
                          <Box sx={styles.cardFooter}>
                            <Box>
                              <Box sx={styles.cardPrice}>from</Box>
                              <Box>$ {price}</Box>
                            </Box>
                            <Box sx={styles.cardIcons}>
                              <FacebookOutlinedIcon sx={styles.cardIcon} />
                              <InstagramIcon sx={styles.cardIcon} />
                              <WhatsAppIcon sx={styles.cardIcon} />
                            </Box>
                          </Box>
                        );
                      }
                    )}
                  </Box>
                </Box>
              );
            }
          )
        ) : (
          <Box>No Studio Available for Now...</Box>
        )}
      </Box>
      <Box sx={styles.footerButtonWrap}>
        <Button sx={styles.footerButton}>Show More</Button>
      </Box>
    </Box>
  );
};

export default ExploreStudio;
