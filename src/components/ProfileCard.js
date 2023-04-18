import { Container, Paper } from "@mui/material";
import Card from "@mui/material/Card";
function ProfileCard({ color, title }) {
  return (
    <Container maxWidth="xl">
      <Paper elevation={20} />
      <Card sx={{ maxWidth: 3600, minHeight: 275}}>
        <h2>{title}</h2>
      </Card>
      <Paper />
    </Container>
  );
}
export default ProfileCard;
