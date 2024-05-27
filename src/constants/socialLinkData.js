
import { GitHub, Telegram, Instagram, WhatsApp } from "@mui/icons-material";

export const socialLinkData = ()=>{
    return [
        {
            id: 1,
            label:"Github",
            href : "https://github.com/marzieh-amini",
            icon: <GitHub sx={{ color: "gray" }}  />,
        },
        {
            id: 2,
            label:"Instagram",
            href : "https://www.instagram.com/marzieh.amz",
            icon: <Instagram sx={{ color: "gray" }} />,
        },
        {
            id: 3,
            label:"Telegram",
            href : "https://t.me/mAmini1997",
            icon: <Telegram sx={{ color: "gray" }} />,
        },
        {
            id: 4,
            label:"WhatsApp",
            href : "#",
            icon: <WhatsApp sx={{ color: "gray" }} />,
        },
    ]
}