import React from "react";
import Track from '../Track/Track'
import styles from './Tracklist.module.css'

function Tracklist({array}){

    return (
            <ul className={styles.main}>
                {array.map(person => <Track id={person.id} name={person.name} artist={person.artist} album={person.album}/>)}
            </ul>
    )
}

export default Tracklist;