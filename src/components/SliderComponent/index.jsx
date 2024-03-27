import { Box } from "@mui/material";
import { Fragment, useRef } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useResponsive } from "../../hooks/useResponsive";
import { FullWidthBgImage } from "./FullWidthBgImage";
import "./styles.css";

export const SliderComponent = ({
  data,
  label,
  slideNum,
  autoplay,
  autoplaySpeed,
}) => {
  const { screenType } = useResponsive();
  const sliderRef = useRef();

  const settings = {
    arrows: false,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    slidesToShow:
      screenType === "MOBILE" ? 2 : screenType === "TABLET" ? 3 : slideNum,
    slidesToScroll:
      screenType === "MOBILE" ? 2 : screenType === "TABLET" ? 3 : slideNum,
  };

  return (
    <Fragment>
      <Box className="slide-container">
        <Box className="wrapper">
          {screenType !== "MOBILE" && (
            <Box onClick={() => sliderRef.current.slickPrev()} className="prev">
              <FiArrowLeftCircle style={{ fontSize: 24 }} />
            </Box>
          )}
          <Slider {...settings} ref={sliderRef}>
            {data?.length > 0 &&
              data?.map((item, index) => (
                <FullWidthBgImage
                  key={index}
                  image={item.image}
                  text={item.title}
                  label={label}
                  borderRadius={"10px"}
                  height={"300px"}
                />
              ))}
          </Slider>
          {screenType !== "MOBILE" && (
            <Box onClick={() => sliderRef.current.slickNext()} className="next">
              <FiArrowRightCircle style={{ fontSize: 24 }} />
            </Box>
          )}
        </Box>
      </Box>
    </Fragment>
  );
};
