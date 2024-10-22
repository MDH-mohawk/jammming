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

  const[search,setSearch] = useState([]);
  const[playlist,setPlaylist] = useState([]);

  //belown function search through a specific array and puts this in a list in the results area//

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
    function handlePlaylist(e){
      const kip = e.target.parentNode.children[0].id

      if(!playlist.includes(songs[kip-1])){
        setPlaylist((prev) => [...prev,songs[kip-1]])
      }
      else{
        console.log(playlist)
      }
    }

    function handleDelete(e){
      const id= e.target.parentNode.children[0].id;
      setPlaylist(playlist.filter((item) =>item.key != id))
    }
  return (
    <div className="App">
      <div className='search_area'>
      <h1 className='title'>Jammming</h1>
      <SearchBar submit={handleSearch}/>
      </div>
      <div className='main'>
      <SearchResults array={search} Click={handlePlaylist}/>
      <Playlist array={playlist} delButton={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
