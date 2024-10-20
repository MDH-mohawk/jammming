import React from "react";
import styles from './searchResults.module.css';
import Tracklist from '../Tracklist/Tracklist'


const songs = [
{
        "id": 1,
        "name": "Wal-Dryl",
        "artist": "Tamera",
        "album": "Diphenhydramine HCl"
      }, {
        "id": 2,
        "name": "Pyrantel Pamoate",
        "artist": "Jackquelin",
        "album": "PinwormTreatment"
      }, {
        "id": 3,
        "name": "Chap-et",
        "artist": "Molli",
        "album": "White Petrolatum"
      }, {
        "id": 4,
        "name": "childrens pain and fever",
        "artist": "Benjamen",
        "album": "Acetaminophen"
      }
]

function SearchResults(){

    const names = songs.map(person =><li key={person.id}>{person.name} - {person.artist}</li>)
    return (
        <div className={styles.main}>
            <h1>Results</h1>
            <Tracklist array={songs}/>
        </div>
    )

}

export default SearchResults;