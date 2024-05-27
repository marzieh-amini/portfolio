
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";

const SidebarContainer = ({ children }) => {
    const theme = useTheme();
    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
            sx={{ backgroundColor: theme.palette.background.default ,
                height: "100vh",
                borderRight : theme.palette.mode === "light" ? "1px solid #E5EAF2" : "unset",
                overflowY: "auto",
                overflowX: "hidden"}}
        >
            {children}
        </Grid>
    );
};

export default SidebarContainer;
