import { Container, Paper, Typography } from "@mui/material";
import Card from "@mui/material/Card";
function ProfileCard({ aboutText, title }) {
  return (
    <Container maxWidth="xl">
      <Paper elevation={20} />
      <Card sx={{ maxWidth: 3600, minHeight: 275}}>
        <h2>{title}</h2>
        <Typography>{aboutText}</Typography>
      </Card>
      <h2></h2>
      <Paper />
    </Container>
  );
}
export default ProfileCard;
