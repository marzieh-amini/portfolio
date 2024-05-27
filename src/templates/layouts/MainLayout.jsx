import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import { cacheRtl } from "../theme/cacheRtl";
import { darkTheme, lightTheme } from "../theme/theme";
import Grid from "@mui/material/Unstable_Grid2";

const MainLayout = ({ children, mode }) => {
  //set theme by props mode
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MainLayout;
