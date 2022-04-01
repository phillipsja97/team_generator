import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import './TeamElements.css';
import { TextField } from "@material-ui/core";

export default function TeamElement(props) {
  const [addition, setAddition] = React.useState("");

  const numOfTeamsOnChange = (e) => {
    props.setNumberOfTeams(e.target.value);
  };

  const numOfPlayersOnChange = (e) => {
    props.setNumberOfPlayers(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="numOfPlayers">
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
            placeholder="Amount of Players on Each Team"
            onChange={numOfPlayersOnChange}
          />
            {/* <TextField
              label="Number Of Players"
              id="outlined"
              defaultValue="Small"
              // variant="filled"
              // size="small"
              inputProps={{
                style: { color: 'white' }
              }}
            /> */}
        </Paper>
      </div>
      <div className="numOfTeams">
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 300,
            backgroundColor: 'white',
            borderColor: 'rgb(82, 138, 99)',
            borderStyle: 'double',
            borderWidth: 'thick'
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Number of Teams To Create"
            onChange={numOfTeamsOnChange}
          />
        </Paper>
    </div>
  </React.Fragment>
  );
}