import { Box } from "@mui/material";
import { Fragment, useRef } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useResponsive } from "../../../hooks/useResponsive";
import { FullWidthBgImage } from "./FullWidthBgImage";
import "./styles.css";

const SliderComponent = ({
  data,
  label,
  slideNum,
  mobileSlides = 1,
  tabSlides = 3,
  autoplay,
  autoplaySpeed,
  showLeftArrow = false,
  showRightArrow = false,
  borderRadius = "10px",
  height = "300px",
}) => {
  const { screenType } = useResponsive();
  const sliderRef = useRef();

  const settings = {
    arrows: false,
    dots: false,
    swipeToSlide: true,
    infinite: true,
    autoplay: autoplay,
    lazyLoad: "ondemand", // Enable lazy loading
    cssEase: "ease", // Use ease for smoother transitions
    adaptiveHeight: true, // Adjust slider height based on content
    autoplaySpeed: autoplaySpeed,
    slidesToShow:
      screenType === "MOBILE"
        ? mobileSlides
        : screenType === "TABLET"
        ? tabSlides
        : slideNum,
    slidesToScroll:
      screenType === "MOBILE"
        ? mobileSlides
        : screenType === "TABLET"
        ? tabSlides
        : slideNum,
  };

  return (
    <Fragment>
      <Box className="slide-container">
        <Box className="wrapper">
          {screenType !== "MOBILE" && showLeftArrow && (
            <Box onClick={() => sliderRef.current.slickPrev()} className="prev">
              <FiArrowLeftCircle style={{ fontSize: 24 }} />
            </Box>
          )}
          <Slider {...settings} ref={sliderRef}>
            {data?.length > 0 &&
              data?.map((item, index) => (
                <FullWidthBgImage
                  key={index}
                  image={item?.image}
                  video={item?.video}
                  text={item?.title}
                  label={label}
                  borderRadius={borderRadius}
                  height={height}
                />
              ))}
          </Slider>
          {screenType !== "MOBILE" && showRightArrow && (
            <Box onClick={() => sliderRef.current.slickNext()} className="next">
              <FiArrowRightCircle style={{ fontSize: 24 }} />
            </Box>
          )}
        </Box>
      </Box>
    </Fragment>
  );
};

export default SliderComponent;
