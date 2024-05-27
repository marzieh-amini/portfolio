import { Typography, Box } from "@mui/material";
import avatar from "../../../assets/avatar.jpg";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../../constants/alphabetPersian";
import { useState } from "react";
import SocialLinks from "./SocialLinks";
import ThemeActionButton from "../../ThemeActionButton";
import { CustomAvatar } from "../../common";
const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <ThemeActionButton />

      <Box component="div" sx={{ my: 2 }}>
        <CustomAvatar avatar={avatar} size={200} fallback={"YG"} />
      </Box>

      <Typography variant="h6" color="textColor.main">
        <Typography variant="caption" color="primary.light">
          {" {{ "}
        </Typography>
        <RandomReveal
          isPlaying
          duration={4}
          characterSet={alphabetPersian}
          characters="مرضیه امینی"
          onComplete={() => setStart(true)}
        />

        <Typography variant="caption" color="primary.light">
          {" }} "}
        </Typography>
      </Typography>
      {start && (
        <Typography variant="caption" color="textColor.main">
          <Typography variant="caption" color="primary.dark">
            [[{" "}
          </Typography>
          <RandomReveal
            isPlaying
            duration={4}
            characterSet={alphabetPersian}
            characters="توسعه دهنده ری اکت"
          />
          <Typography variant="caption" color="primary.dark">
            {" "}
            ]]
          </Typography>
        </Typography>
      )}

      <SocialLinks />
    </>
  );
};
export default SidebarHeader;
