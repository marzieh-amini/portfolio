import { Slide, Typography } from "@mui/material";

import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector,
} from "@mui/lab";
import { HomeRepairServiceRounded } from "@mui/icons-material";

import { devExp } from "../../../constants/details";

const DevExpTimeline = ({ loading }) => {
    return (
        <Timeline position="right" sx={{ direction: "ltr" }}>
            {devExp.map((item, index) => (
                <Slide
                key={index}
                    direction="up"
                    in={loading}
                    style={{
                        transitionDelay: loading ? `${index + 3}99ms` : "0ms",
                    }}
                >
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color="warning" variant="outlined">
                                <HomeRepairServiceRounded color="warning" />
                            </TimelineDot>
                            {index !== 3 ? <TimelineConnector /> : null}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="caption" color="textColor.light">
                                {item.date}
                            </Typography>
                            <Typography variant="body1" color="textColor.main">
                                {item.side}
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

export default DevExpTimeline;
