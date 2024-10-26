import './App.css';
import React,{useState} from 'react';
import Playlist from './Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Spotify  from './Spotify.module';

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
      if(!playlist.some((person) => person.id === e.target.parentNode.id)){
        setPlaylist((prev) => [...prev,adSong[0]])
      }
        console.log(`Playlist:${playlist.map((person) => person.name)}`); 
    }

//Below code gives the user the choice to remove a track from their custom playlist with the "DEL" button//
    function handleDelete(e){
      const id= e.target.parentNode.id;
      setPlaylist(playlist.filter((item) => item.id !== id))
    }

//Managing the naming of the playlist//
const[playListName,setPLayListName] = useState("")

function handlePlayListName(e){
  setPLayListName(e.target.value);
}

//handler to save array in the from of a customplaylist to spotify//

const [spotplaylist,setSpotplaylist] = useState([]);

//function handleSaveToSpotify(){
    //setSpotplaylist((playlist.map((item)=>item.uri)));
    //setPlaylist([]);
    //console.log(spotplaylist);
//}

function handleSaveSpotify(){
    const uris = playlist.map((item)=>item.uri)
    Spotify.savePlaylist(playListName,uris).then(() => {
      setPLayListName("");
      setPlaylist([])
    });
}
  return (
    <div className="App">
      <div className='search_area'>
      <h1 className='title'>Jammming</h1>
      <SearchBar submit={handleSearch}/>
      </div>
      <div className='main'>
      <SearchResults array={search} Click={handlePlaylist}/>
      <Playlist array={playlist} delButton={handleDelete} playListName={playListName} playListNameChange={handlePlayListName} SaveSpotify={handleSaveSpotify}/>

      </div>
    </div>
  );
}

export default App;
