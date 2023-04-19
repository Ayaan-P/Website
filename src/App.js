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


  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <Container maxWidth="100%">
        <div className="App">
          <Paper
            sx={{ maxWidth: "100%", minHeight: 275, background: "darkgrey" }}
            justifyContent={"center"}
          >
            <Avatar alt="display" src={ProfilePic} display ="flex" 
            sx={{ width: 100, height: 100, justifyContent: "center", margin:"auto"}} />
            <Typography variant="h2" color={"black"}>
              Ayaan Pupala
            </Typography>

            <List
              style={{
                maxHeight: "100%",
                overflow: "auto",
                justifyContent: "center",
              }}
            >
              <ProfileCard title="About" aboutText="Fullstack Software Engineer" />

              <ProfileCard title="Education" aboutText="University of Illinois: Bachelor of Science in Computer Engineering" />

              <ProfileCard title="Work Experience" aboutText="Karsun Solution LLC" />

            </List>
          </Paper>
        </div>
    

      </Container>
    </ThemeProvider>
  );
}

export default App;



