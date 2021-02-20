//Adding components 
import React,{useState} from "react";
import Player from './components/player';
import Song from './components/song';
//import styles 
import './styles/app.scss';
//import song data
import data from "./data";

function App() {
  //state 
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
