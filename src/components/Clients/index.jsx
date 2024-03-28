import { Box } from "@mui/material";
import React from "react";
import { clientData, clients } from "../../constants";
import { SliderComponent } from "../SliderComponent";
import styles from "./styles";

const Clients = () => {
  return (
    <Box className="container" component="section" id="clients">
      <Box sx={styles.container}>
        <Box className="welcome" sx={styles.heading}>
          Our Popular Clients
        </Box>
        <Box sx={styles.subheading}>
          Meet Our <span className="outlineText">Esteemed Collaborators</span>
        </Box>
      </Box>
      <Box sx={styles.slideWrapper}>
        <Box>
          <SliderComponent
            autoplay
            autoplaySpeed={6000}
            slideNum={3}
            data={clientData}
          />
        </Box>
        <Box sx={styles.clientsWrapper}>
          {clients.map((url, index) => (
            <Box component="img" src={url} key={index} sx={styles.client} />
          ))}
        </Box>
      </Box>
      <Box sx={styles.imagesBoxer}>
        <Box sx={styles.leftBox}>
          <Box
            sx={styles.imageBox}
            component="img"
            src="https://s3-alpha-sig.figma.com/img/fe77/4e00/2f06456d39d79ce69e6a0047d36daeb8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1yWeb497m6ZCBEEJP4WSJxJXyMniywmKgmvVMdlBEnUcZBuvqIe0dbBwBl2XynfmigEa2Fdb~oP3m9iHjTM6OVav1Oaqnd4GOyQxGnWasS~56LPoDSiP97EkUsMjNfUsBmPalswUVBsckM8-0YneGcX4~4nt8L1fLVLo5tizo1C19AcVyw2azCmmg2GNrsgIHk4PiNZDWMOnGvk3UtMbgWvjWAOasFAmQ0za4q~y8jHJgZNtf~7-RntDsRFNrlMeCVoLI4XQC5W-Y1mqtVGg9lXUdR9iGgzmoMicKTdRY2s-1pm~~-ddiTfOtG65r7oLwpib3KsjTCWzR-bbzF7CQ__"
          />
          <Box sx={styles.textContainer}>
            <Box sx={styles.textHead}>Short Film</Box>
            <Box sx={styles.textDesc}>Notes of Creativity</Box>
          </Box>
        </Box>
        <Box sx={styles.rightBox}>
          <Box sx={styles.rightMiniBoxUpper}>
            <Box sx={styles.miniBox}>
              <Box
                sx={styles.imageBox}
                component="img"
                src="https://s3-alpha-sig.figma.com/img/7520/9569/88f91b8ab5c61b21d6d8223796fecbeb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KiV7vO5mTT~RCOpBrxKiEqEqnWPH8WtXoZ-aMFypKcXyikZzyHk4co1SgHgITZjNSbX3KRemegR98-aeatuOp4kvc6xsyW91XGeFRnt0kkFJ7QOy8WxBcYiodB8~NXnhLmIgS2sTT2R5sdEvoXCojj7ZwXDGFmZ8r8x9vKquAh8SNqVXO7VaViZf5rCuoRPJgf6eUXH8wSE-3koy8VwFFCSfwES3euYmjsi4vQJP2SZPPgiImQL4Zh605Bbhk0F-vOzAI~RpVVHov5wxwEViE1KBIJWwWE24t4y97CMoYkoVwKdPz3XQmnMP3qpvlxWqh2XtmDLR7iZaVwQUZtIzBQ__"
              />
            </Box>
            <Box sx={styles.miniBox}>
              <Box
                sx={styles.imageBox}
                component="img"
                src="https://s3-alpha-sig.figma.com/img/4772/df63/1c3302c93df4ca3eaaa18b33cf82e5db?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ntg8KydPIiY4MuCAtAUIlN8XPtmJ0tQYPS-QC7-wvbggdl2Pp0Qp8sXlu5ALiYAxmJrJyaKzjnT~YvktlWaAKZVruHZ0KSA66TMmXSpnw94cvpwY8fFB~KU5Apm-~Trht6brpN-ROpGuuzl6gZWU~ZEac-ZjINM3d~SHqUslFBKjLgHIdE2cptLF4gljNftwfUqf3sd4sKT3pDjVw7FVTNNAgZq78AYlJg5jGnN786HORmxos9wbXMwis07TYLxuJqKpLcbvWOMKoi~T5gKGMrs7zTH8UY~bCsv5ae0RBpA5nxuw4xy09m25dB4X1BRq2ceDDRsFsUWqggLooH4NJg__"
              />
            </Box>
          </Box>
          <Box sx={styles.rightMiniBoxLower}>
            <Box
              sx={{
                ...styles.imageBox,
                objectPosition: "top",
              }}
              component="img"
              src="https://s3-alpha-sig.figma.com/img/e12e/d90f/2838712c89295cad66675231f1e0bfbf?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOX04jnbbBBQVPNqqhWR0r0VdNEWEGtojBkhx8Zk44bHeTDpGrYpToRlNdg-5h42IJle4mxdq0c-lXNzy9K~ZMZomG8kd3MIBM6fRU17x6P3lww17wV3VNEPfP0TKevkazouwl7nmWgqCrqT90fcVQSJE62hSvAonNO6pGofX33MJQ2e~M89vgletWFZUJeflV5N3M9DUCQKbeFpwVxtN-~R~XCoewGCMKuu0G5d9ZBc2VNzVWXDNhYlKPKDi~OiKZSqGL9IZWEuVV-Vi5haJZniFUUhjKiBylXnvZWYIYjOJT215hRmxRnfzdR0eFu7LRMCM6o7dmOkk2jL2tYGAQ__"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Clients;
