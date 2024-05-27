import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import PagesContainer from "./PagesContainer";
import MainLayout from "../templates/layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import Page from "../components/pages/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/sidebar/drawer";
import { About, Contact, Home, Resume } from "../pages";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  //value to tabs
  const [pageNumber, setPageNumber] = useState(0);
  //state for active sidebar in mobile screen
  const [drawerOpen, setDrawerOpen] = useState(false);

  //to selected mode
  const [mode, setMode] = useState();
  const theme = useTheme();
//get the user browser and system theme
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  //if user's screen larger then md ==> true
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    //set default theme 
    setMode(prefersDarkMode ? "dark" : "light");
  },[]);
  useEffect(() => {
    //user's screen larger md ==> dont show drawer
    if (isMdUp) setDrawerOpen(false);
  }, [isMdUp]);

  //handle for set active tabs
  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  //change theme with button
  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen,
        handleThemeChange,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        {/* button component for open sidebar in md screen */}
        <DrawerActionButton />

        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
            <Page value={pageNumber} index={0}>
              <Home
                helmet={
                  <Helmet>
                    <title>وب سایت شخصی | صفحه اصلی</title>
                  </Helmet>
                }
              />
            </Page>
            <Page value={pageNumber} index={1}>
              <About
                helmet={
                  <Helmet>
                    <title>وب سایت شخصی | درباره من </title>
                  </Helmet>
                }
              />
            </Page>
            <Page value={pageNumber} index={2}>
              <Resume
                helmet={
                  <Helmet>
                    <title>وب سایت شخصی | رزومه من </title>
                  </Helmet>
                }
              />
            </Page>
            <Page value={pageNumber} index={3}>
              <Contact
                helmet={
                  <Helmet>
                    <title>وب سایت شخصی | ارتباط با من </title>
                  </Helmet>
                }
              />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
