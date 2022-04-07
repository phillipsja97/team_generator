import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    prime: {
      main: '#528A63',
      contrastText: '#fff',
    }
  },
});


export default function GenerateTeams(props) {

  return (
      props.showTeams
      ? 
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          // endIcon={<SendIcon style={{ color: 'black' }}/>}
          onClick={props.createRandomTeams}
          color="prime"
          >
            Re-generate New Random Teams
        </Button>
      </ThemeProvider>
      :
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          // endIcon={<SendIcon style={{ color: 'black' }}/>}
          onClick={props.createRandomTeams}
          color="prime"
          >
            Generate New Random Teams
        </Button>
      </ThemeProvider>
  );
}