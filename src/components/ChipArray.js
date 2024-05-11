import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { Card } from '@mui/material';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Github', url:"https://github.com/Ayaan-P" },
    { key: 1, label: 'LinkedIn', url:"https://www.linkedin.com/in/ayaanpupala/" },
    { key: 2, label: 'Email', url:"mailto:pupalaayaan@gmail.com" },
    { key: 3, label: 'Instagram', url:"https://www.instagram.com/ayaanpupala/" },
    { key: 4, label: 'Resume', url:"https://drive.google.com/uc?export=download&id=18iue81q-qlm_I7zk0_r4at_bIwPyZt_a" },
    // { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const handleClick = (chipToDelete) => () => {
    window.open(chipToDelete.url);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        width: "flex",
        maxWidth: "85%",
        maxHeight: 750,
        overflow: "auto",
        margin: "auto",
        padding:1,
        backgroundColor:'transparent'
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              // variant='outlined'
              // color='error'
              style={{backgroundColor:'#222222'}}
              onClick={data.label === 'React' ? undefined : handleClick(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}