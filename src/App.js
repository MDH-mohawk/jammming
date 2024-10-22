import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Playlist from './Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Tracklist from './Tracklist/Tracklist';
import Track from './Track/Track';

const songs = [
  {
          "key": 1,
          "name": "Wal-Dryl",
          "artist": "Tamera",
          "album": "Diphenhydramine HCl"
        }, {
          "key": 2,
          "name": "Pyrantel Pamoate",
          "artist": "Jackquelin",
          "album": "PinwormTreatment"
        }, {
          "key": 3, 
          "name": "Chap-et",
          "artist": "Molli",
          "album": "White Petrolatum"
        }, {
          "key": 4,
          "name": "childrens pain and fever",
          "artist": "Benjamen",
          "album": "Acetaminophen"
        }
  ]

function App() {

  //belown function search through a specific array and puts this in a list in the results area//
  const[search,setSearch] = useState([]);

    function handleSearch(e){
        e.preventDefault();
        if(e.target[0].value ==""){
          setSearch([])
        }
        else{
        setSearch(songs.filter((song) => 
          song.name.toLowerCase().includes(e.target[0].value.toLowerCase())));    
        console.log(search);
        }       
    }

//based on user choice adds items to the playlist array though an "ADD" button//
const[playlist,setPlaylist] = useState([]);

    function handlePlaylist(e){
      const kip = e.target.parentNode.children[0].id

      if(!playlist.includes(songs[kip-1])){
        setPlaylist((prev) => [...prev,songs[kip-1]])
      }
      else{
        console.log(playlist)
      }
    }

//Below code gives the user the choice to remove a track from their custom playlist with the "DEL" button//
    function handleDelete(e){
      const id= e.target.parentNode.children[0].id;
      setPlaylist(playlist.filter((item) =>item.key != id))
    }

//Managing the naming of the playlist//
const[playListName,setPLayListName] = useState("")

function handlePlayListName(e){
  setPLayListName(e.target.value);
  console.log(playListName);
}
  return (
    <div className="App">
      <div className='search_area'>
      <h1 className='title'>Jammming</h1>
      <SearchBar submit={handleSearch}/>
      </div>
      <div className='main'>
      <SearchResults array={search} Click={handlePlaylist}/>
      <Playlist array={playlist} delButton={handleDelete} playListName={playListName} playListNameChange={handlePlayListName}/>
      </div>
    </div>
  );
}

export default App;
