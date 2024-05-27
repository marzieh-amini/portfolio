import { useState, useEffect } from "react";

import { Typography, Card, CardContent, Slide, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountCircle } from "@mui/icons-material";

import { CustomDivider } from "../components/common";
import worldMap from "../assets/map.svg";
import { ContactForm } from "../components/pages";

const Contact = ({ helmet }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return (
       <>
       
       {helmet}
        <Card
            sx={{
                height: "100vh",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardContent>
                <CustomDivider
                    bColor="secondary.main"
                    cColor="secondary"
                    icon={<AccountCircle />}
                    align="center"
                    text="ارتباط با من"
                />
                <Grid container sx={{ mt: 5 }}>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid xs={12} 
                            sm={12} md={9}>
                            <Card
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    border: "1px solid",
                                    borderColor: "secondary.main"
                                }}
                            >
                                <ContactForm />
                            </Card>
                        </Grid>
                    </Slide>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid
                            xs={0}
                            sm={0}
                            md={3}
                            sx={{
                                textAlign: "center",
                                backgroundImage: `url(${worldMap})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            <Typography
                                variant="h6"
                                color="textColor.main"
                                sx={{
                                    fontFamily: "vazir",
                                    mt: 4,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                بیا در مورد همه چیز باهم صحبت کنیم
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textColor.main"
                                sx={{
                                    mt: 2,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                👋{" "}
                                <Link
                                    href="mailto:ma.amini.it@gmail.com"
                                    alt="email"
                                    color="secondary.main"
                                >
                                    ایمیل
                                </Link>{" "}
                                بزن به من
                            </Typography>
                        </Grid>
                    </Slide>
                </Grid>
            </CardContent>
        </Card>
       </>
    );
};

export default Contact;
