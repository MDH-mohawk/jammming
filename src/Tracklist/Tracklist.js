import React from "react";
import Track from '../Track/Track'
import styles from './Tracklist.module.css'

function Tracklist(props){
    
    return (
            <ul className={styles.main}>
                {props.array.map(person => <Track id={person.key} name={person.name} artist={person.artist} album={person.album} ClickAdd={props.ClickAdd} innerButton={props.buttonText}/>)}
            </ul>
    )
}

export default Tracklist;