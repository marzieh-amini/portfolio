import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
    return (
        <Typography
            variant="body1"
            color="textColor.main"
            textAlign="left"
            sx={{ mt: 2 }}
        >
            {children}
            <KeyboardArrowLeftRounded
                sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                }}
            />
        </Typography>
    );
};

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی : مرضیه امینی</Info>
            <Info>سن : ۲۷</Info>
            <Info>شهر : مشهد</Info>
            <Info>ma.amini.it@gmail.com : آدرس ایمیل</Info>
            <Info> ۰۹*******۱۲ : شماره موبایل </Info>
        </>
    );
};

export default DevInfo;
