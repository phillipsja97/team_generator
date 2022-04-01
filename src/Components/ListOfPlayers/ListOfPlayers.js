import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import List from '@mui/material/List';
import ListPlayerName from '../ListPlayerName/ListPlayerName';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import './ListOfPlayers.css';

const Demo = styled('div')(() => ({
  backgroundColor: 'white',
  borderColor: 'rgb(82, 138, 99)',
  borderStyle: 'solid',
  width: '100%',
  height: '90%',
  padding: 0,
  margin: 0
}));

export default function PlayerList(props) {
  return (
    <div className="theList">
      <Box sx={{ flexGrow: 1, maxWidth: 500 }}>
        <FormGroup row>
        </FormGroup>
            <Typography variant="h6" component="div" color={'white'}>
              Players
            </Typography>
            <Demo>
              <List dense={true} disablePadding>
                {props.playerData.map((data, number) => {
                  return (
                    <React.Fragment>
                      <ListPlayerName 
                        data={data}
                        handleDelete={props.handleDelete}
                      />
                    </React.Fragment>
                    );
                  })
                },
              </List>
            </Demo>
      </Box>
    </div>
  );
}
