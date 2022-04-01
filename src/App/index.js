import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import PlayerInput from '../Components/PlayerInput';
import ListOfPlayers from '../Components/ListOfPlayers/ListOfPlayers';
import GenerateTeamsButton from '../Components/GenerateTeams';
import Teams from '../Components/Teams/Teams';
import TeamElements from '../Components/TeamElements/TeamElements';
import Alert from '../Components/Alert'

export default function App() {
  const [playerData, setPlayerData] = React.useState([
    { index: 0, label: 'Jamie'},
    { index: 1, label: 'Danny'},
    { index: 2, label: 'Jamey'},
    { index: 3, label: 'Aaron'},
    { index: 4, label: 'Sam'},
    { index: 5, label: 'AJ'},
    { index: 6, label: 'Jourdan'}
  ]);
  const [sortedPlayerData, setSortedPlayerData] = React.useState([]);
  const [allTeams, setAllTeams] = React.useState([]);
  const [showTeams, setShowTeams] = React.useState(false);
  const [numberOfTeams, setNumberOfTeams] = React.useState(0);
  const [numberOfPlayers, setNumberOfPlayers] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const createRandomTeams = () => {
    setAllTeams([]);
    if (
      numberOfTeams === 0
      || numberOfPlayers === 0
      || isNaN(numberOfTeams) === true
      || isNaN(numberOfPlayers) === true
    ) {
      setOpen(true);
      return;
    }
    const sorted = [...playerData];
    let currentIndex = sorted.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [sorted[currentIndex], sorted[randomIndex]] = [
      sorted[randomIndex], sorted[currentIndex]];
    }
    setSortedPlayerData(sorted);

    for (let i = 0; i < numberOfTeams; i++) {
      const team = sorted.splice(0, numberOfPlayers);
      console.log(team, 'team');
      setAllTeams(allTeams => [...allTeams, team]);
    }
    console.log(allTeams, 'allTeams');
    setShowTeams(true);
    setOpen(false);
  }

  const handleDelete = (playerToDelete) => () => {
    setPlayerData((players) => players.filter((player) => player.index !== playerToDelete));
  };

  const backToList = () => {
    setShowTeams(false);
    setNumberOfPlayers("");
    setNumberOfTeams("");
  };

  console.log(playerData);

  return (
    <div className="App">
      {
        showTeams ?
        <React.Fragment>
          <div className="playerList">
            {allTeams.map((teams) => {
              return (<Teams
                        teams={teams}
                      />)
            })}
          </div>
        </React.Fragment>
        :
        <React.Fragment>
          <div className="input">
          <PlayerInput
            playerData={playerData}
            setPlayerData={setPlayerData}
          />
          </div>
          <Alert 
            open={open}
            setOpen={setOpen}
          />
          <div className="teamElements">
            <TeamElements
              numberOfTeams={numberOfTeams}
              numberOfPlayers={numberOfPlayers}
              setNumberOfTeams={setNumberOfTeams}
              setNumberOfPlayers={setNumberOfPlayers}
            />
          </div>
          <div className="playerList">
          <ListOfPlayers
            playerData={playerData}
            handleDelete={handleDelete}
            />
          </div>
        </React.Fragment>
      }
      <div className="generateButton">
        <GenerateTeamsButton
          createRandomTeams={createRandomTeams}
          showTeams={showTeams}
        />
      </div>
      <div className="backToListButton">
        {
        showTeams ? 
        <Button variant="contained" onClick={backToList}>
          Back To List
        </Button> : null
        }
      </div>
    </div>
  );
}
