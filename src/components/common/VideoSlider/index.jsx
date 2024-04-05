import { Box } from "@mui/material";
import { Fragment, useRef, useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useResponsive } from "../../../hooks/useResponsive";
import VideoPlayer from "../VideoPlayer";
import "./styles.css";

export const VideoSlider = ({
  data,
  slideNum,
  mobileSlides = 1,
  tabSlides = 2,
  autoplay,
  autoplaySpeed,
  showLeftArrow = false,
  showRightArrow = false,
}) => {
  const [idx, setIdx] = useState(-1);
  const { screenType } = useResponsive();
  const sliderRef = useRef();

  const settings = {
    arrows: false,
    dots: false,
    swipeToSlide: true,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    lazyLoad: "ondemand", // Enable lazy loading
    cssEase: "ease", // Use ease for smoother transitions
    adaptiveHeight: true, // Adjust slider height based on content
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
    // centerMode: true,
    // centerPadding: "25%",
  };

  const page = 1;

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
                <Box className="videoWrapper">
                  <VideoPlayer
                    key={index}
                    // thumbnail={item?.thumbnail}
                    src={item?.video}
                    reverseLayout
                    index={page * 100000}
                    currentIdx={idx}
                    setIndex={setIdx}
                    page={0}
                  />
                </Box>
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
