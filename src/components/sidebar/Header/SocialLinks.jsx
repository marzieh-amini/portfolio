import { socialLinkData } from "../../../constants/socialLinkData";
import { IconButton, Box, Link } from "@mui/material";
const SocialLinks = () => {
  const data = socialLinkData();
  return (
    <Box component="div" sx={{ m: "20px auto", textAlign: "center" }}>
      {data.map((socila) => (
        <IconButton
          key={socila.id}
          aria-label={socila.label}
          sx={{ "&:hover": { backgroundColor: "secondary.main" },
        "&:hover .muirtl-4doi19-MuiSvgIcon-root":{color:"secondary.contrastText"} }}
        >
          <Link
            href={socila.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="body2"
            sx={{ display: "flex" }}
          >
            {socila.icon}
          </Link>
        </IconButton>
      ))}
    </Box>
  );
};
export default SocialLinks;
