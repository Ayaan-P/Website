import logo from "./logo.svg";
import ProfileCard from "./components/ProfileCard";
import "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";
import {
  Card,
  Container,
  List,
  Paper,
  Typography,
  colors,
} from "@mui/material";
import Grid from "@mui/material/Grid";

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
      <Container maxWidth="xl">
        <div className="App">
          <Card sx={{ maxWidth: 3600, minHeight: 275, background: "darkgrey" }}>
            <Typography variant="h1" color={"black"}>
              Ayaan Pupala
            </Typography>
            <Grid>
              <ProfileCard title="About" />
       
              <ProfileCard title="Education" />
              
              <ProfileCard title="Work Experience" />
            </Grid>
          </Card>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
