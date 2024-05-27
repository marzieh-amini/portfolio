import { useState, useEffect } from "react";

import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";

import { CustomDivider } from "../components/common";
import { DevEduTimeline, DevExpTimeline } from "../components/pages";

const Resume = ({ helmet }) => {
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
        }}
      >
        <CardContent>
          <CustomDivider
            bColor="primary.main"
            cColor="primary"
            icon={<SettingsEthernetRounded />}
            align="center"
            text="رزومه من"
          />
          <Grid container sx={{ mt: 4 }}>
            <Grid xs={6}>
              <CustomDivider
                bColor="warning.main"
                cColor="warning"
                icon={<HomeRepairServiceRounded />}
                align="center"
                text="تجربیات"
              />
              <DevExpTimeline loading={loading} />
            </Grid>

            <Grid xs={6}>
              <CustomDivider
                bColor="info.main"
                cColor="info"
                icon={<SchoolRounded />}
                align="center"
                text=" تحصیلات"
              />
              <DevEduTimeline loading={loading}  />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Resume;
