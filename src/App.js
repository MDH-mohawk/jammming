import logo from './logo.svg';
import './App.css';
import Playlist from './Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Tracklist from './Tracklist/Tracklist';
import Track from './Track/Track';

function App() {
  return (
    <div className="App">
      <div className='search_area'>
      <h1 className='title'>Jammming</h1>
      <SearchBar/>
      </div>
      <div className='main'>
      <SearchResults/>
      <Playlist/>
      </div>
    </div>
  );
}

export default App;
