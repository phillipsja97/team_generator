import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import './TeamElements.css';
import { TextField } from "@material-ui/core";
import { useMediaQuery } from 'react-responsive';

export default function TeamElement(props) {
  const [addition, setAddition] = React.useState("");
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  const numOfTeamsOnChange = (e) => {
    props.setNumberOfTeams(e.target.value);
  };

  const numOfPlayersOnChange = (e) => {
    props.setNumberOfPlayers(e.target.value);
  };

  return (
    isDesktopOrLaptop ?
    <React.Fragment>
    <div className="desktopElements">
      <div className="numOfPlayers">
        <Paper
          component="form"
          sx={{
              p: '2px 4px',
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
            placeholder="# Players on Each Team"
            onChange={numOfPlayersOnChange}
          />
        </Paper>
      </div>
      <div className="numOfTeams">
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            width: 300,
            backgroundColor: 'white',
            borderColor: 'rgb(82, 138, 99)',
            borderStyle: 'double',
            borderWidth: 'thick'
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="# of Teams To Create"
            onChange={numOfTeamsOnChange}
          />
        </Paper>
      </div>
    </div>
  </React.Fragment>
  :
  <React.Fragment>
  <div className="numOfPlayersMobile">
    <div className="numOfPlayers">
      <Paper
        component="form"
        sx={{
            p: '2px 4px',
            backgroundColor: 'white',
            color: 'white',
            width: '100%',
            borderColor: 'rgb(82, 138, 99)',
            borderStyle: 'double',
            borderWidth: 'thick'
          }}
        >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="# of Players in Squad"
          onChange={numOfPlayersOnChange}
        />
      </Paper>
    </div>
    <div className="numOfTeams">
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          width: '100%',
          backgroundColor: 'white',
          borderColor: 'rgb(82, 138, 99)',
          borderStyle: 'double',
          borderWidth: 'thick'
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="# of Teams"
          onChange={numOfTeamsOnChange}
        />
      </Paper>
    </div>
  </div>
</React.Fragment>
  );
}