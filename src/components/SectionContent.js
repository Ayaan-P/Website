import { Grid, Container, Divider, Paper, Typography, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import ProfilePic from "C:/Users/AyaanPupala/Desktop/site/Website/src/images/uiuc.png"

function SectionContent({ sectionTitle,subtitle, aboutText, date, img }) {
  // const imageSrc = ;
  return (
    <Container maxWidth="xl" >
      <Grid
        container
        direction="columun"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={10} direction="row">
          <img src={ProfilePic} alt="example"></img>
          <Typography
            variant="h6"
            textAlign="left"
            paddingLeft={2}
            minWidth="75%"
            justifyContent="flex-start"
          >
            {sectionTitle}
          </Typography>
        </Grid>
        <Grid item xs={2} direction="column" alignItems="flex=end">
          <Typography
            variant="subtitle2"
            textAlign="right"
            paddingRight={2}
            justifyContent="flex-end"
          >
            {date}
          </Typography>
        </Grid>
        <Grid item xs="auto" direction="row">
          <Stack
            spacing = {0}
          >
         
            <Typography variant="caption" textAlign="left" paddingLeft={2} >
              {subtitle}
            </Typography>
          
            <Typography variant="body1" textAlign="left" paddingLeft={2}>
              {aboutText}
            </Typography>
        
            </Stack>
          </Grid>
        </Grid>
      
    </Container>
  );
}
export default SectionContent;
