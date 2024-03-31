import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles";

const Features = () => {
  const cardsData = [
    {
      heading: "Ready-Made Convenience",
      description:
        "Say goodbye to the hassle of setting up and dismantling elaborate sets. With our ready-made studios, you can focus on creating content without worrying about the logistics.",
      buttonLabel: "Read More",
    },
    {
      heading: "Tailored for Content Creators",
      description:
        "Our studios are specifically designed to meet the unique needs of content creators, providing everything you need to produce high-quality videos and engage your audience.",
      buttonLabel: "Read More",
    },
    {
      heading: "Exceptional Quality",
      description:
        "We pride ourselves on offering top-notch studio spaces equipped with the latest technology and amenities, ensuring that your content stands out from the crowd.",
      buttonLabel: "Read More",
    },
  ];

  return (
    <Box className="container" component="section" id="features">
      <Box sx={styles.container}>
        <Box className="welcome" sx={styles.heading}>
          Features
        </Box>
        <Box sx={styles.subheading}>
          What Sets <span className="outlineText">Us Apart</span>
        </Box>
      </Box>
      <Box>
        <Box sx={styles.imageWrapper}>
          <Box
            sx={styles.image}
            component="img"
            src="https://s3-alpha-sig.figma.com/img/4666/87ef/98b4b161d2750ae0bb29ee1c5d9f5cb7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jePLquruEFnGYbw2v1F9wA~BQxq38fZr1OSjpzg51sKn2p3y1P3N4V2OuZX5AJ9WjKgkFHhtFrNkMG5FDmhZrPYhRisyMRsj-oLnMxv8ygVsY2~lA6zO~AeG24R0H-jKS1pHBge9prMPUXajSDBg7WiqH0i0W-M~LMKK34r75s3l1gcOF6uGq2iWSliuZ-NbhtWA~YFq~vDGSg2WlI8zB3y2Dk5gbSfstQM-1NSPlmOaXud4wNUyk9gsIlNRKyibAQ7ghELxfpeeR74YEmYREp4pUj1mBhbjNr7ju8NaNdTVFJbnM5Dqvy44DxvpumPNH~CizR79ARpb~cziSbsuOg__"
          />

          <Box
            sx={styles.image}
            component="img"
            src="https://s3-alpha-sig.figma.com/img/6e06/fe39/5c6a298ba1aafd2b440bef712e088c0e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5mhDmEDOp0TNuX4u521EU4-XTozGoSCYPOLFHl3oOvjH1VFm-SV~h4U4Fqu2S2BMTl2HTM3-PD83ffSYMFdkiqDiOLkw5pcVYc~gHyvr2bx75pzJPDpTDEnimtdiGZBrTq2BkQ8aTx1fvd29hjcHgMENgR83y72ApTGU7bG4Q2N8Iphd~8pfLJiL8v9ngHz-wptiyd8AJI0uoT3zJSydUq7eh3Sl94HGTl9t3RyrDV7a~JcJkPy2P7RFhBNfRfrWzfXJ5bU1~aKLYoHwNggypliEEoj3BJkOeaairxp0IrXwtUe2wTbsbpYI2JtNXKrSX-7yjP6fYE6mhOGbziXug__"
          />

          <Box
            sx={styles.image}
            component="img"
            src="https://s3-alpha-sig.figma.com/img/b239/90de/738ee66e1e0ce1815d5c137a1a015ffd?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z6K0X0j6qDhXV6AJ0IUZ2hh77zRwr79sUI6FSTmreHKuLS5Z5dO4q328YJoZO3K2n9SXf8Bib-rhOBbkDol-n3D62RFgOgisz9lbOgX6VukOa9jnUma9XrLyY-Ej~E0KkEw23mNNrpTHmD8xP9kM8jbsh24Zr2dvoBo~qjBpkBJ7vLKzRonzRUxGpjQFkuTfsogWzMPg-5LEn91wyCjNTgq-rjmfYrbktRga4uqbucuLs8Azz13wOyCvBs0ldNrBIwbmJ5MHJcwppL9GaFO1Zpkj4XqmicDFkVr2EZVX7bs-toqarYkUv8DAZ9VDjyhJYv~KfMBBcjO5FXSp6c99sg__"
          />
        </Box>
        <Box sx={styles.cardWrapper}>
          {cardsData.map(({ heading, description, buttonLabel }, index) => {
            return (
              <Box key={index} sx={styles.card}>
                <Box sx={styles.cardNumber}>0{index + 1}</Box>
                <Box sx={styles.cardHeading}>{heading}</Box>
                <Box sx={styles.description}>{description}</Box>
                <Button
                  endIcon={<ArrowForwardIosIcon />}
                  className="welcome"
                  sx={styles.buttonLabel}
                >
                  {buttonLabel}
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
