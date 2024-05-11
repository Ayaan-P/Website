 
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
 
 
 
function SectionContent({ sectionTitle, subtitle, aboutText, date, imgSrc, about }) {
  // const imageSrc = ;
  if(!about)
  {
    return (
 
    <Stack direction= "row">
      <Stack direction="column" width={50} minWidth={50}>
      { imgSrc!=="" &&
        <img src={imgSrc} style={{ width: 50, height: 50, padding:5 }} alt={sectionTitle}/>
      }
      </Stack>
      <Stack direction="column" flex={1} minWidth={"60%"} maxWidth={"90%"}>
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
  else{
    return (
 
      <Stack direction= "row">
       
        <Stack direction="column"  flex={1} minWidth={"60%"} maxWidth={"100%"} paddingLeft={6}>
          <Typography
            fontSize={16}
            textAlign="left"
            paddingLeft={0}
          >
            {sectionTitle}
          </Typography>
          
          <pre>
          <Typography
            variant="body1"
            // justifyContent="flex-start"
            textAlign="left"
            paddingLeft={0}
          >
            {aboutText}
          </Typography></pre>
 
        </Stack>
  
        
      </Stack>
    );
  }
}
export default SectionContent;