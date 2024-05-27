import { SidebarContent } from "./";
import { SidebarDrawer } from "./drawer";
const Sidebar = () => {
  return (
    <>
      <SidebarContent />
      {/* sidebar for md screen */}
      <SidebarDrawer />
    </>
  );
};
export default Sidebar;
