import "@mui/material";
import {
  Container,
  List,
  Paper, Typography, Avatar
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ProfilePic from "./images/profilepic.jpg"
import { spacing } from '@mui/system';

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

  const educationSections =[
    {id :1, sectionTitle: "University of Illinois at Urbana-Champaign",subtitle:"Bachelor of Science in Computer Engineering", aboutText: "", date: "August 2017 - December 2021 ", img: "./images/uiuc.png"},
    {id :2 ,sectionTitle: "Cathedral and John Connan School", subtitle: "ICSE, ISC Science",aboutText:"", date: "May 2017", img: "./images/cathedral.jpg"}
  ]
  const workSections =[
    {id :1, sectionTitle: "Karsun Solutions LLC", subtitle: "Software Engineer", aboutText:"", date: "March 2021 - Present", img: "./images/cathedral.jpg"},
    {id :2 ,sectionTitle: "Network International LLC", subtitle: "Software Engineering Intern", aboutText:"", date: "May 2018 - July 2018", img: "./images/cathedral.jpg"}
  ]
  const aboutSections =[
    {id :1, sectionTitle: "Fullstack Engineer", aboutText: "", date: "", img: "./images/cathedral.jpg"},  
  ]
  const projectSections =[
    {id :1, sectionTitle: "React Web Development", aboutText: "", date: "", img: "./images/cathedral.jpg"}, 
    {id :2, sectionTitle: "React Native App Development", aboutText: "", date: "", img: "./images/cathedral.jpg"},  
    {id :3, sectionTitle: "Game Development", aboutText: "", date: "", img: "./images/cathedral.jpg"}, 
    {id :4, sectionTitle: "Image Classification", aboutText: "", date: "", img: "./images/cathedral.jpg"}, 
    {id :5, sectionTitle: "Android App Development", aboutText: "", date: "", img: "./images/cathedral.jpg"}
    

  ]

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <Container maxWidth="100%">
        <div className="App">
          <Paper
            sx={{ maxWidth: "100%", minHeight: 275, background: "darkgrey",padding: 5 }}
            justifyContent={"center"}
          >
            <Avatar alt="display" src={ProfilePic} display ="flex" 
            sx={{ width: 100, height: 100, justifyContent: "center", margin:"auto"}} />

            <Typography variant="h2" color={"black"}>
              Ayaan Pupala
            </Typography>

            <Paper
            elevation={0} 
            style={{
                
                maxWidth: "95%",
                maxHeight: 750,
                overflow: "auto",
                margin:"auto",
                padding: 10,
                justifyContent: "center",
                background: "darkgrey"
              }}>
            <List
              style={{
                maxHeight: "80%",
                overflow: "hidden",
                justifyContent: "center",
              }}
            >
              <ProfileCard sectionTitle="About" sections={aboutSections}/>

              <ProfileCard sectionTitle="Education" sections={educationSections} />

              <ProfileCard sectionTitle="Work Experience"sections={workSections}/>

              <ProfileCard sectionTitle="Projects"  sections={projectSections}/>
            </List>
            </Paper>
          </Paper>
        </div>
    

      </Container>
    </ThemeProvider>
  );
}

export default App;



