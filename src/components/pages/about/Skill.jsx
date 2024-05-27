import {
  Divider,
  Chip,
  Box,
  Typography,
  Badge,
  CircularProgress,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
        <Divider
          variant="middle"
          textAlign="right"
          sx={{
            "&::before, &::after": {
              borderColor: `${color}.main`,
            },
            mt: 4,
          }}
        >
          <Chip
            icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
            sx={{ backgroundColor: `${color}.main`, color: "#fff", p: 3 }}
            label={name}
          />
        </Divider>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            position: "relative",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Box sx={{ position: "absolute", top: "40%" }}>
            <Typography
              variant="body2"
            >
              <Badge
                variant="standard"
                color="primary"
                badgeContent={`${Math.round(value)}%`}
                sx={{"& .MuiBadge-badge":{backgroundColor:`${color}.main`}}}
              />
            </Typography>
          </Box>
          <Box>
            <CircularProgress
              variant="determinate"
              color={color}
              thickness={3.6}
              value={value}
              size={130}
            />
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Skill;
