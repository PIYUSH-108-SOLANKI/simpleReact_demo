import Mood from "./Mood.jsx";
import { useEffect, useState } from "react";
import './App.css';

const jsonSongData = [
  { id: 1, title: "Happy Song", mood: "happy" },
  { id: 2, title: "Funny Song", mood: "funny" },
  { id: 3, title: "Sunshine Vibes", mood: "happy" },
  { id: 4, title: "Comedy Hour", mood: "funny" },
  { id: 5, title: "Feel Good Music", mood: "happy" },
  { id: 6, title: "Laugh Track", mood: "funny" },
  { id: 7, title: "Chill Beats", mood: "chill" },
  { id: 8, title: "Relax Time", mood: "chill" },
  { id: 9, title: "Workout Pump", mood: "energetic" },
  { id: 10, title: "High Energy", mood: "energetic" }
];

function App() {
  const isLoggedIn = true;

  const [mood, setMood] = useState("happy");
  const [songs, setSongs] = useState(jsonSongData);
  const [filteredSongs, setFilteredSongs] = useState(() =>
    jsonSongData.filter((s) => s.mood.toLowerCase() === mood.toLowerCase())
  );

  useEffect(() => {
    setFilteredSongs(
      songs.filter((song) => song.mood.toLowerCase() === mood.toLowerCase())
    );
  }, [songs, mood]);

  function handleMood(newMood) {
    setMood(newMood);
  }

  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="app">
      <h1>🎵 Playlist</h1>
      
      {isLoggedIn && <Mood mood={mood} />}
      
      <div className="mood-buttons">
        <button onClick={() => handleMood("happy")}>😊 Happy</button>
        <button onClick={() => handleMood("funny")}>😂 Funny</button>
        <button onClick={() => handleMood("chill")}>😌 Chill</button>
        <button onClick={() => handleMood("energetic")}>⚡ Energetic</button>
      </div>
      
      <div className="songs">
        <h3>Your {mood} playlist</h3>
        <ul>
          {filteredSongs.map((song) => (
            <li key={song.id}>🎵 {song.title}</li>
          ))}
        </ul>
      </div>

      <div className="counter">
        <span>Played: {count}</span>
        <button onClick={handleCount}>▶️ Play</button>
      </div>
    </div>
  );
}

export default App;
