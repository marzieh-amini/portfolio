import { Tab, Tabs } from "@mui/material";
import { tabsData } from "../../constants/tabsData";
import { useContext } from "react";
import MainContext from "../../context";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const data = tabsData();
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
      textColor='secondary'
      indicatorColor="secondary"
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          {...tab}
          onClick={() => setDrawerOpen(false)}
          sx={{
            borderRadius: 2,
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 50,
              backgroundColor: "background.light",
              "&:hover": {
                backgroundColor: "secondary.dark",
                color: "textColor.dark"
              }
            },
          }}
        />
      ))}
    </Tabs>
  );
};
export default SidebarTabs;
