import "@mui/material";
import { Container, List, Paper, Typography, Avatar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

import ProfilePic from "./images/profilepic.jpg";
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import WorkIcon from '@mui/icons-material/Work';
import SourceIcon from '@mui/icons-material/Source';
import { spacing } from "@mui/system";

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
    mode: "dark",
  },
});

function App() {
  const educationSections = [
    {
      id: 1,
      sectionTitle: "University of Illinois at Urbana-Champaign",
      subtitle: "Bachelor of Science in Computer Engineering",
      aboutText: "",
      date: "August 2017 - December 2021 ",
      imgSrc: "C:/Users/ayaan/Desktop/Website/Website/src/images/uiuc.png",
    },
    {
      id: 2,
      sectionTitle: "Cathedral and John Connan School",
      subtitle: "ICSE, ISC Science",
      aboutText: "",
      date: "May 2017",
      imgSrc: "C:/Users/ayaan/Desktop/Website/Website/src/images/cathedral.jpg",
    },
  ];
  const workSections = [
    {
      id: 1,
      sectionTitle: "Epigeneres Biotech",
      subtitle: "ML Engineer",
      aboutText: "",
      date: "October 2023 - Present",
      imgSrc: "C:/Users/ayaan/Desktop/Website/Website/src/images/cathedral.jpg",
    },
    {
      id: 2,
      sectionTitle: "Karsun Solutions LLC",
      subtitle: "Software Engineer",
      aboutText: "",
      date: "March 2021 - Present",
      imgSrc: "",
    },
    {
      id: 3,
      sectionTitle: "Network International LLC",
      subtitle: "Software Engineering Intern",
      aboutText: "",
      date: "May 2018 - July 2018",
      imgSrc: "",
    },
  ];
  const aboutSections = [
    {
      id: 1,
      sectionTitle: "Incoming student in the Master of Science in Artificial Intelligence program at Northwestern University starting Fall 2024",
      aboutText: '- Currently work on creating deep learning models to detect cancer in the early stages with Epigeneres Biotech \n - 3 years of Software Engineering Experience as a Fullstack Developer with Karsun Solutions LLC. Contracted with the Federal Aviation Administration and the General Services Administration',
      date: "",
      imgSrc: "",
    },
  ];
  const projectSections = [
    {
      id: 1,
      sectionTitle: "React Web Development",
      aboutText: "",
      date: "",
      imgSrc: "",
    },
    {
      id: 2,
      sectionTitle: "React Native App Development",
      aboutText: "",
      date: "",
      imgSrc: "",
    },
    {
      id: 3,
      sectionTitle: "Game Development",
      aboutText: "",
      date: "",
      imgSrc: "",
    },
    {
      id: 4,
      sectionTitle: "Image Classification",
      aboutText: "",
      date: "",
      imgSrc: "",
    },
    {
      id: 5,
      sectionTitle: "Android App Development",
      aboutText: "",
      date: "",
      imgSrc: "",
    },
  ];

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <Container maxWidth="100%">
        <div className="App">
          <Paper
            sx={{
              maxWidth: "100%",
              minHeight: 275,
              background: "darkgrey",
              padding: 5,
            }}
            justifyContent={"center"}
          >
            <Avatar
              alt="display"
              src={ProfilePic}
              display="flex"
              sx={{
                width: 100,
                height: 100,
                justifyContent: "center",
                margin: "auto",
              }}
            />

            <Typography variant="h2" color={"black"}>
              Ayaan Pupala
            </Typography>

            <Paper
              elevation={0}
              style={{
                maxWidth: "95%",
                maxHeight: 750,
                overflow: "auto",
                margin: "auto",
                padding: 10,
                justifyContent: "center",
                background: "darkgrey",
              }}
            >
              <List
                style={{
                  maxHeight: "80%",
                  overflow: "hidden",
                  justifyContent: "center",
                }}
              >
                <ProfileCard
                  icon={() => <PersonIcon className="Card-icon" />}
                  sectionTitle="About"
                  sections={aboutSections}
                />

                <ProfileCard
                icon={() => <AutoStoriesIcon className="Card-icon"  />}
                  sectionTitle="Education"
                  sections={educationSections}
                />

                <ProfileCard
                icon={() => <WorkIcon className="Card-icon"  />}
                  sectionTitle="Work Experience"
                  sections={workSections}
                />

                <ProfileCard
                icon={() => <SourceIcon  className="Card-icon" />}
                  sectionTitle="Projects"
                  sections={projectSections}
                />
                
              </List>
            </Paper>
          </Paper>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
