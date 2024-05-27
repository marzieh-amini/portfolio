import { createTheme } from "@mui/material/styles";
const { palette } = createTheme();

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    background: {
      main: "#212121",
      light: "#424242",
    },
    primary: {
      main: "#780000",
      light: "#C1121F",
      dark: "#660708",
      contrastText: "#fff",
    },
    secondary: {
      main: "#669BBC",
      light: "#4ba3c3",
      dark: "#003049",
      contrastText: "#fff",
    },
    textColor: palette.augmentColor({
      color: {
        main: "#F5F3F4",
        light: "#FDF0D5",
        dark: "#D3D3D3",
      },
    }),
    htmlColor: {
      main: "#A33114",
    },
    cssColor: {
      main: "#1468A3",
    },
    jsColor: {
      main: "#EBD01E",
    },
    reactColor: {
      main: "#1673B6",
    },
    bootstrapColor: {
      main: "#563D7C",
    },
    gitColor: {
      main: "#C12D0B",
    },
    muiColor:{
      main : "#0265CC"
    }
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
});
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    background: {
      main: "#FFFFFF",
      light: "#a4ac96",
    },
    primary: {
      main: "#206C3C",
      light: "#00E185",
      dark: "#174F2C",
      contrastText: "#fff",
    },
    secondary: {
      main: "#387d7a",
      light: "#396E70",
      dark: "#32595D",
      contrastText: "#fff",
    },
    textColor: palette.augmentColor({
      color: { main: "#121619", light: "#222A2F", dark: "#B8C4CC" },
    }),
    htmlColor: {
      main: "#A33114",
    },
    cssColor: {
      main: "#1468A3",
    },
    jsColor: {
      main: "#EBD01E",
    },
    reactColor: {
      main: "#1673B6",
    },
    bootstrapColor: {
      main: "#563D7C",
    },
    gitColor: {
      main: "#C12D0B",
    },
    muiColor:{
      main : "#0265CC"
    }
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
});
