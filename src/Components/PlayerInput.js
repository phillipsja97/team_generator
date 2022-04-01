import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PlayerInput(props) {
  const [addition, setAddition] = React.useState("");

  const addPlayerOnChange = (e) => {
    setAddition(e.target.value);
  };

  const addPlayer = () => {
    console.log(addition, 'Adding Player');
    const playerProp = {
      index: props.playerData.length,
      label: addition
    };
    props.setPlayerData([...props.playerData, playerProp]);
    setAddition('');
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      addPlayer();
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'white',
        width: 300,
        borderColor: 'rgb(82, 138, 99)',
        borderStyle: 'double',
        borderWidth: 'thick'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add Player.."
        onChange={addPlayerOnChange}
        onKeyPress={handleKeyPress}
        value={addition}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton 
        color="primary"
        sx={{ p: '10px' }}
        aria-label="directions"
        onClick={addPlayer}
        >
        <ArrowForwardIcon />
      </IconButton>
    </Paper>
  );
}