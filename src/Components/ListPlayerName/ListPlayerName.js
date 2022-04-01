// import * as React from 'react';
// import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import AccountCircle from '@mui/icons-material/AccountCircle'
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import './ListPlayerName.css';

const Demo = styled('div')(() => ({
  backgroundColor: 'white',
  borderTop: 0,
  borderBottom: 'medium dotted rgb(194, 207, 161)',
  borderLeft: 0,
  borderRight: 0,
  padding: 0,
  paddingRight: 10,
  margin: 0
}));

export default function ListPlayerName(props) {

  return (
    <Demo>
    <ListItem
      key={props.data.index}
      disableGutters={true}
      // sx={{
      // borderColor: 'green',
      // borderStyle: 'solid',
      // padding: 0,
      // margin: 0
      // }}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={props.handleDelete(props.data.index)}
          >
            <DeleteIcon />
          </IconButton>
        }
    >
      <ListItemAvatar>
        <Avatar>
          <AccountCircle />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.data.label}
        secondary={false}
      />
    </ListItem>
    </Demo>
  );
}