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

function SectionContent({ sectionTitle,  aboutText}) {
  // const imageSrc = ;
  return (
    

    <Stack direction= "row">
      
      <Stack direction="column" sx={{flex:0.70}}>
        <Typography
          fontSize={16}
          textAlign="left"
          paddingLeft={2}
          // justifyContent="flex-start"
        >
          {sectionTitle}
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


    </Stack>
  );
}
export default SectionContent;
