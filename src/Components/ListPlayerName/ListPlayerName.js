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
  borderBottom: 'medium double rgb(82, 138, 99)',
  borderTop: 'medium double rgb(82, 138, 99)',
  borderLeft: 'medium double rgb(82, 138, 99)',
  borderRight: 'medium double rgb(82, 138, 99)',
  backgroundColor: '#525856',
  padding: 0,
  paddingRight: 10,
  margin: 0,
  display: 'flex',
  justifyContent: 'center'
}));

export default function ListPlayerName(props) {

  return (
    <Demo>
    <ListItem
      key={props.data.index}
      disableGutters={true}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={props.handleDelete(props.data.index)}
            style={{ color: 'white' }}
          >
            <DeleteIcon 
            />
          </IconButton>
        }
    >
      <ListItemAvatar
        style={{ color: 'black', boxShadow: 'none' }}
      >
        <Avatar style={{ backgroundColor: 'transparent', padding: 1, margin: 1 }}>
          <AccountCircle 
            style={{ color: 'white', padding: 5 }}
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.data.label}
        secondary={false}
        style={{ color: 'white '}}
      />
    </ListItem>
    </Demo>
  );
}