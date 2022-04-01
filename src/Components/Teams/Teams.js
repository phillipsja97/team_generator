import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import './Teams.css';

export default function Teams(props) {

  return (
      <List dense sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'gray',
        // padding: '1em',
        margin: '1em',
        paddingBottom: '0em'
        }}>
            {props.teams.map((player) => {
                        return (
                          <React.Fragment>
                          <ListItem
                          key={player.index}
                        >
                          <ListItemButton>
                             {/* <ListItemAvatar>
                              <Avatar
                                alt={`Avatar n°${value + 1}`}
                                src={`/static/images/avatar/${value + 1}.jpg`}
                              />
                            </ListItemAvatar> */}
                            <ListItemText primary={player.label} sx={{ justifyContent: 'center' }}/>
                          </ListItemButton>
                        </ListItem>
                        <Divider />
                        </React.Fragment>
                        )
            })}
      </List>
  );
}