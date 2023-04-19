import { Grid, Container, Divider, Paper, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import SectionContent from "./SectionContent";

function ProfileCard(props) {
  var sections = props.sections.map(function (section) {
    return (
      <li>
        <SectionContent
          sectionTitle={section.sectionTitle}
          subtitle={section.subtitle}
          aboutText={section.aboutText}
          date={section.date}
          img={section.img} 
        />
      </li>
    );
  });
  return (
    <Container maxWidth="xl">
      <Paper elevation={20} />
      <Card sx={{ maxWidth: 3600, minHeight: 275, padding: 0 }}>
        <Typography
          variant="h5"
          color="darkgrey"
          textAlign="left"
          paddingLeft={2}
          paddingTop={1}
        >
          {props.sectionTitle}{" "}
        </Typography>
        <li>{sections}</li>
      </Card>
      <h2></h2>
      <Paper />
    </Container>
  );
}
export default ProfileCard;
