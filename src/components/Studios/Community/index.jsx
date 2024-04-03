import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles";

const Community = () => {
  return (
    <Box className="container" component="section">
      <Box sx={styles.container}>
        <Box className="welcome" sx={styles.heading}>
          Our Community
        </Box>
        <Box sx={styles.subheading}>
          Unlock New <span className="outlineText">Opportunities</span>
        </Box>
      </Box>
      <Box sx={styles.dataContainer}>
        <Box sx={styles.imageData}>
          <Box
            sx={styles.image}
            component="img"
            src="https://s3-alpha-sig.figma.com/img/2dd1/b2bd/b414e9b2d62998bd245bb8b8ecb0cdb1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EETkvsUANywMWpfbGAan5ICbl6NOCfLlDBaz3~f9afGG9YaAUU~g26wVeJAdnmFxBYLk1PM6TLY-5nMTnfYorkj6MywqDP5gqsLkbeNxjPZCKKyS4MiUk9jx7lw0KA3xUmeGVVfybho3faktJ~ESImXxBh6JMlhf5swvh6vPpijVHT70SiAjZY0VIacccvYzsop5eGl140-MafNX-xhYYn7lA7XhYCGYjuQytbAaQ7JA97g6wCGo~ogOBYN2zk1Nm4vtyA5CjVSa4HmajqbGo9dN-u1SJF5qGgpuByRcv0fkL4SYFbmfapR21q7-nwMva~ILQVRDHd9S2vG9QU2J8Q__"
          />
          <Box sx={styles.textWrapper}>
            <Box sx={styles.texthHeading}>Ready to Grow Your Business?</Box>
            <Box sx={styles.textDescription}>
              Are you a studio owner looking to take your business to the next
              level? Join our vibrant community of studio owners at Vlippr
              Studio and discover a world of opportunities waiting for you.
            </Box>
            <Button endIcon={<ArrowOutwardIcon />} sx={styles.button}>
              Register Your Studio Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Community;
