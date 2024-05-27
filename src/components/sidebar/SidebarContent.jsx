import { Box, Divider } from "@mui/material";
import { SidebarHeader, SidebarFooter, SidebarTabs } from "../sidebar";

const SidebarContent = () => {
  return (
    <Box justifyContent="center" sx={{ textAlign: "center" }}>
      <SidebarHeader />
      <Divider variant="middle" />

      <SidebarTabs />

      <Divider variant="middle" />
      <SidebarFooter />
    </Box>
  );
};
export default SidebarContent;
