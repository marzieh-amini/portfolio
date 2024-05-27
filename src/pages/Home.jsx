import { Box, Typography } from "@mui/material";import { useTheme } from "@mui/material/styles";
import dark from "../assets/bg-dark.jpg";
import light from "../assets/bg-light.jpg";
import { useEffect, useRef, useCallback, useState } from "react";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "../constants/particles";
import TextTransition, { presets } from "react-text-transition";
const Home = ({helmet}) => {
  const theme = useTheme();
  
  const nameEl = useRef(null);

//strings and index for text transition
  const strings = [
    " فارغ تحصیل رشته فناوری اطلاعات هستم ",
    "  توسعه دهنده فرانت هستم ",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    //animation for typed text
    const typedName = new Typed(nameEl.current, {
      strings: ["  مرضیه امینی  "],  // array of strings
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });
    const stringsTransition = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    //clean at unmounting
    return () => {
      typedName.destroy();
      clearTimeout(stringsTransition);
    };
  }, []);
//props for particles component
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  //set particles color of theme
  const options = links(theme.palette.primary.main)


  return (
    <>
    {helmet}
    <Box
      sx={{
        backgroundImage: `url(${theme.palette.mode === "dark" ? dark : light})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />

      <Box component="div" sx={{ display: "flex" }}>
        <Typography  variant="h3" color="primary.main">{" {{ "}</Typography>
        <Typography ref={nameEl} variant="h3" color="textColor.light"></Typography>
        <Typography variant="h3" color="primary.main">{" }} "}</Typography>
      </Box>
      <Box component="div" sx={{ display: "flex",padding:"20px" ,textAlign:"left"}} >
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            variant="h4"
            color="textColor.dark"
            sx={{
              mt: 4,
              textDecoration: "underline",
              textDecorationColor: `${theme.palette.primary.dark}`,
            }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography
          variant="h4"
          color="textColor.dark"
          sx={{
            mt: 4,
            mr: 1,
          }}
        >
          من
        </Typography>
      </Box>
    </Box>
    </>

  );
};

export default Home;
