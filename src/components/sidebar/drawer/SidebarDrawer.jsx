import { Drawer } from "@mui/material";
import { useContext } from "react";
import { SidebarContent } from "..";
import MainContext from "../../../context";
const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <Drawer
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
        },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
      open={drawerOpen}
      variant="temporary"
      onClose={() => {
        setDrawerOpen(false);
      }}
    >
      <SidebarContent />
    </Drawer>
  );
};
export default SidebarDrawer;
