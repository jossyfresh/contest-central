import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

interface Props{
    Chipdata : string[],
    handeDelete : (text:string) => void,
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({Chipdata,handeDelete}:Props) {
  const [chipData, setChipData] = React.useState<string[]>(Chipdata);
  console.log(Chipdata);

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        listStyle: 'none',
        boxShadow:"none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {Chipdata.map((data,index) => {
        console.log(data)
        let icon;
        return (
          <ListItem key={index}>
            <Chip
            sx={{
              bgcolor:"white"
            }}
              icon={icon}
              label={data}
              onDelete={() => handeDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}