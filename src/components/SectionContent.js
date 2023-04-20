import {
  Grid,
  Container,
  Divider,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
// import ProfilePic from "..images/uiuc.png"

function SectionContent({ sectionTitle, subtitle, aboutText, date, img }) {
  // const imageSrc = ;
  return (
    <Stack direction= "row">
      <Stack direction="column" sx={{flex:0.8}}>
        <Typography
          fontSize={16}
          textAlign="left"
          paddingLeft={2}
          // justifyContent="flex-start"
        >
          {sectionTitle}
        </Typography>

        <Typography
          variant="caption"
          // justifyContent="flex-start"
          textAlign="left"
          paddingLeft={2}
        >
          {subtitle}
        </Typography>

        <Typography
          variant="body1"
          // justifyContent="flex-start"
          textAlign="left"
          paddingLeft={2}
        >
          {aboutText}
        </Typography>
      </Stack>

      <Stack direction="columun"  sx={{flex:0.2, textAlign:"end", justifyContent:"flex-end"}}>
        <Typography
          variant="subtitle2"
          textAlign="right"
          paddingRight={2}
          justifyContent="flex-end"
        >
          {date}
        </Typography>
      </Stack>
    </Stack>
  );
}
export default SectionContent;
