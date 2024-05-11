import { Grid, Container, Divider, Paper, Typography, Icon } from "@mui/material";
import Card from "@mui/material/Card";
import SectionContent from "./SectionContent";
import "../css/ProfileCard.css";

function ProfileCard(props) {
  const icon = props.icon;
  var sections = props.sections.map(function (section) {
    return (
      <li>
        <SectionContent
          sectionTitle={section.sectionTitle}
          subtitle={section.subtitle}
          aboutText={section.aboutText}
          date={section.date}
          imgSrc={section.imgSrc} 
          about={section.about}
        />
      </li>
    );
  });
  return (
    
      <Card sx={{marginBottom:2}} >
        <div className="ProfileCardHeader" style={{display:"flex", flexDirection:"row", flex:1, alignItems:"center", paddingLeft:2 ,textAlign:"center", paddingTop:3}}>{icon()}
        <Typography
          variant="h5"
          color="darkgrey"
          textAlign="left"  
          paddingLeft={1.5}       
        >
          {props.sectionTitle}{" "}
        </Typography></div>
        <li>{sections}</li>
      </Card>
      
   
  );
}
export default ProfileCard;
