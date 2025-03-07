import { Slide, Typography } from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";

import { devEdu } from "../../../constants/details";

const DevEduTimeline = ({ loading }) => {
  return (
    <Timeline position="right" sx={{ direction: "ltr" }}>
      {devEdu.map((item, index) => (
        <Slide
          key={index}
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 3}99ms` : "0ms",
          }}
        >
          <TimelineItem
            key={index}
          >
            <TimelineSeparator>
              <TimelineDot color="info" variant="outlined">
                <SchoolRounded color="info" />
              </TimelineDot>
              {index !== 3 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="caption" color="textColor.light">
                {item.year}
              </Typography>
              <Typography variant="body1" color="textColor.main">
                {item.cert}
              </Typography>
              <Typography variant="body2" color="textColor.main">
                {item.major}
              </Typography>
              <Typography variant="body2" color="textColor.main">
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevEduTimeline;
