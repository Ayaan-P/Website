import { Height } from "@mui/icons-material";
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

function SectionContent({ sectionTitle, subtitle, aboutText, date, imgSrc, about=false }) {
  // const imageSrc = ;
  return (
    

    <Stack direction= "row">
      <Stack direction="column" width={50} minWidth={50}>
      <img src={require("C:/Users/ayaan/Desktop/Website/Website/src/images/cathedral.jpg" )} style={{ width: 50, height: 50, padding:5 }}/>
      </Stack>
      <Stack direction="column"  width = {"75%"} minWidth={"60%"}>
        <Typography
          fontSize={16}
          textAlign="left"
          paddingLeft={0}
        >
          {sectionTitle}
        </Typography>

        <Typography
          variant="caption"
          // justifyContent="flex-start"
          textAlign="left"
          paddingLeft={0}
        >
          {subtitle}
        </Typography>

        <Typography
          variant="body1"
          // justifyContent="flex-start"
          textAlign="left"
          paddingLeft={0}
        >
          {aboutText}
        </Typography>
      </Stack>

      <Stack direction="column" alignItems={"flex-end"} minWidth={"15%"}  >
        <Typography
          variant="subtitle2"
          textAlign="end"
          paddingRight={2}
          // justifyContent="flex-end"
        >
          {date}
        </Typography>
      </Stack>
      
    </Stack>
  );
}
export default SectionContent;
