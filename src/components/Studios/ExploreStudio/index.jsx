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
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/33b2/fefc/243798e3759719c0ad85461d40d2c244?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bobOTnSWa4C8s6OHtKx4bCH8WLgCJGrd1mMZ-5nA7PMkU3xWCWTf6N83Ugf7xB9IViRYgtZWEjlXsCgQBH0Gq7M8YLaRgbe7y5PIfx5oKZrbR50vg24jzkn35oH~SWpnpkXvc5InIDrRzJgR2k4JSkTADPk5zzqQ19EkRzFZdJMLs1I~LhJvf4-ejxXtPlRDJ~VCQjSaIMiXb3RAjoxvUptbvpywzYKimQkhZy~C6bDm29skH2mnxTXaM3hdA1F1jH7zbvEbG2KZlBsbVkKueWgGpBM7xjaTL5Cv8t4YasBDn0UmK14eq-rpQK4EPJkbwJGP8aKkFG~YGC4Spo4yCw__",
      text: "Photography Studio",
    },
    {
      studioType: "podcast",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/3442/1bd6/b1535edfe0a3b775704159d8d3825ba6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ft4LZ6PrERBfskZwnRNtwl2xa8I9ubeK55MgS7n02Cxb2EYJHOu3QJT2LIggBZLmNQfs385wKfamRKkFfVy88jv8xo~bQ-etFMvzrlSGuivpxso6rcpd-GaKzdiL~rjv~MsGZcNgZ8J7rDkReUKa8Toksp29MdzF7xxtwwEL8zFE8B6FvZ5HZjb7qT4ghKA0EyXoExByQiktQjYncue4ax5E9b8Tn7Z2sFp~c5PCWzm438nmXmlXNVzcZPogLqMo-bYg73w5dr-rvEa5RcWMp238o00t6Ib8weNLgS5a-FyvhgPI9svbNsH~lmFeUOk2VZR5D-r52o-dIpi0rM2T2Q__",
      text: "Podcast Studio",
    },
    {
      studioType: "makeup",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/88ba/a6c7/b4065a25271152977871c634778156cd?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NjW6JgZ8tz8G5N1cFjMyBbx2uOKO0Y3fvxOIYzuUcfbA8gazRFW2ptF1P9-UU6lP9IrKJQDqX0P56tNI01zzwy6qiDjiFWF0uj1kl9gA6k0R2XfFLAwcqjfD3UKhGO8mpVMb5S74SbWV~g5FXS1Y5UzPYSQBNxnRSaJiWqGQlzy~zxBsGT~rkAFuQhpoghZv5xEMkHJgKg7TmOfr0Xb1DaTfRCl1oybsdGKXQuNMevDy2Ly0wIr5404G3isILDNBbARApWbWFAG1po7mme85jiYjoe4jg6uIttmJYEB9GBEiBnniO7oPnVDFetQ3p9TUjbv8r-5m5MgkRK5npK1k3w__",
      text: "Makeup Studio",
    },
    {
      studioType: "cooking",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/7b6e/86ae/db7c7fb5a4a05a929bddc3ccbf4c69fe?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UDDIeTza9ybJxEXeuvjQzCQS2pDfqnA341N0H4EO2L6YG-55XFEISeIKDhVS0voDWJ35GppYKlUNW20AieUeMkUOShPMj43-jTtNYyyGWubjGe5ZVC6GPMX3ymCDdiQ8WwM68cjALPCf2uK-8g1miCWtWzfcVPSdJusc7rt~WFhtzMTW5Ue1PjrMCnrC7sFiT4ysABVVQjx18XhuCzp0OpN1Umq--vwbu5F7WkeXngt6oXaVFhSCMFyOlnncRi9P4~UsgNsbC5X5oykUVt7j3AY8aac1JjB6rK2lsAIyYFYno86eopvpVf-T~dYctRFcyFKcChBAm16cc72VavOFwQ__",
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
