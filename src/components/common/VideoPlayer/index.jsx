import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles";

const VideoPlayer = ({
  name,
  src,
  thumbnail,
  customStyles,
  reverseLayout = false,
  currentIdx,
  index,
  setIndex,
  page,
}) => {
  const ref = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState({ minu: 0, sec: 0 });

  const handleViewChange = useCallback(
    (entries) => {
      if (!ref.current) return;
      for (const entry of entries) {
        if (entry.intersectionRatio > 0.5 && !isPaused) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
      }
    },
    [isPaused]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleViewChange, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [handleViewChange, ref]);

  useEffect(() => {
    if (currentIdx === index) {
      setIsPaused(false);
      ref?.current && ref?.current.play();
    } else {
      setIsPaused(true);
      ref?.current && ref?.current.pause();
    }
  }, [currentIdx, index, ref]);

  useEffect(() => {
    setIsPaused(true);
    ref?.current && ref?.current.pause();
  }, [page, ref]);

  useEffect(() => {
    setTimeout(() => {
      if (ref?.current?.duration) {
        const minu = parseInt(ref?.current.duration / 60 + "", 10);
        const sec = parseInt((ref?.current.duration % 60) + "", 10);
        setTime({ minu, sec });
      }
    }, 500);
  }, [ref]);

  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      {src && (
        <Box
          sx={styles.videoWrapper}
          component="video"
          ref={ref}
          controls
          onClick={() => {
            setIndex === "function" && setIndex(index);
            setIsPaused(true);
          }}
          className={`video-${index}`}
        >
          <source src={src} type="video/mp4" />
        </Box>
      )}

      {src && isPaused && (
        <Box>
          <Fade
            in={isPaused}
            style={{ transitionDelay: isPaused ? "80ms" : "0ms" }}
          >
            <Box
              sx={{
                ...styles.overlayWrapper,
                flexDirection: reverseLayout ? "column-reverse" : "column",
              }}
              onClick={() => {
                setIndex === "function" && setIndex(index);
                setIsPaused(false);
              }}
            >
              <Box className="play-icon" sx={styles.playIcon}>
                <Box component="img" src="/playIcon.png" alt="play-icon" />
              </Box>
              <Box
                sx={{
                  ...styles.overlay,
                  transform: reverseLayout ? "rotate(180deg)" : "rotate(0deg)",
                }}
              ></Box>
              {time.sec !== 0 && (
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box className="title" sx={styles.title}>
                    {name}
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box sx={styles.clockIcon}>
                      <AccessTimeIcon sx={styles.accessIcon} />
                    </Box>

                    <Box className="title" sx={styles.title}>
                      {time.minu + ":" + time.sec}
                      &nbsp;Mins
                    </Box>
                  </Box>
                </Box>
              )}

              <Box sx={styles.thumbnail}>
                <Box
                  component="img"
                  src={thumbnail || "/successStoriesMain.png"}
                  alt="thumbnail"
                />
              </Box>
            </Box>
          </Fade>
        </Box>
      )}
    </Box>
  );
};

export default VideoPlayer;
