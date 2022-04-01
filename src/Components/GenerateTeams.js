import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function GenerateTeams(props) {

  
  return (
      props.showTeams
      ? 
        <Button variant="contained"
          endIcon={<SendIcon />}
          onClick={props.createRandomTeams}
          >
            Re-generate New Random Teams
        </Button>
      :
        <Button variant="contained"
          endIcon={<SendIcon />}
          onClick={props.createRandomTeams}
          >
            Generate Random Teams
        </Button>
  );
}