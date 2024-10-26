import './App.css';
import React,{useState} from 'react';
import Playlist from './Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Spotify  from './Spotify.module';

const songs = [
  {
          "key": 1,
          "name": "Wal-Dryl",
          "artist": "Tamera",
          "album": "Diphenhydramine HCl",
          "uri": "spotify:track:5DQIZ8XC0EP7cfRFrtzY5h"
        }, {
          "key": 2,
          "name": "Pyrantel Pamoate",
          "artist": "Jackquelin",
          "album": "PinwormTreatment",
          "uri": "spotify:track:2plbrEY59IikOBgBGLjaoe"
        }, {
          "key": 3, 
          "name": "Chap-et",
          "artist": "Molli",
          "album": "White Petrolatum",
          "uri":"spotify:track:7j31rVgGX9Q2blT92VBEA0"
        }, {
          "key": 4,
          "name": "childrens pain and fever",
          "artist": "Benjamen",
          "album": "Acetaminophen",
          "uri":"spotify:track:3Z6ReZyj8uKeiGUYf0JElU"
        }
  ]

function App() {

  //belown function search through a specific array and puts this in a list in the results area//
  const[search,setSearch] = useState([]);

    function handleSearch(e){
        e.preventDefault();
        if(e.target[0].value === ""){
          setSearch([])
        }
        else{
        Spotify.search(e.target[0].value).then(setSearch);
        console.log(search)
        }       
    }

//based on user choice adds items to the playlist array though an "ADD" button//
const[playlist,setPlaylist] = useState([]);

    function handlePlaylist(e){
      let adSong = search.filter((person) => person.id == e.target.parentNode.id)
      if(!playlist.filter(person => person.id == adSong[0].id)){
        setPlaylist((prev) => [...prev,adSong[0]])
      }
        console.log(playlist.filter(person => person.id == e.target.parentNode.id))
        console.log(playlist)
    }

//Below code gives the user the choice to remove a track from their custom playlist with the "DEL" button//
    function handleDelete(e){
      const id= e.target.parentNode.children[0].id;
      setPlaylist(playlist.filter((item) =>item.key !== id))
    }

//Managing the naming of the playlist//
const[playListName,setPLayListName] = useState("")

function handlePlayListName(e){
  setPLayListName(e.target.value);
}

//handler to save array in the from of a customplaylist to spotify//

const [spotplaylist,setSpotplaylist] = useState([]);

function handleSaveToSpotify(e){
    setSpotplaylist((playlist.map((item)=>item.uri)));
    setPlaylist([]);
    console.log(spotplaylist);
}
  return (
    <div className="App">
      <div className='search_area'>
      <h1 className='title'>Jammming</h1>
      <SearchBar submit={handleSearch}/>
      </div>
      <div className='main'>
      <SearchResults array={search} Click={handlePlaylist}/>
      <Playlist array={playlist} delButton={handleDelete} playListName={playListName} playListNameChange={handlePlayListName} SaveSpotify={handleSaveToSpotify}/>

      </div>
    </div>
  );
}

export default App;
