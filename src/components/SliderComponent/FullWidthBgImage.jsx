import { Box } from "@mui/material";
import "./styles.css";

export const FullWidthBgImage = ({
  image,
  label,
  text,
  height,
  borderRadius,
}) => {
  return (
    <Box
      className="bg-image-container"
      style={{ backgroundImage: `url(${image})`, borderRadius, height }}
    >
      <Box className="gradient">
        <Box className="text-container">
          <Box className="label">{label}</Box>
          <Box className="body">{text}</Box>
        </Box>
      </Box>
    </Box>
  );
};
