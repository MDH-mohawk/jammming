import React from "react";
import Track from '../Track/Track'
import styles from './Tracklist.module.css'

function Tracklist(props){
    
    return (
            <div className={styles.main}>
                {props.songs.map(person => {
                    return (<Track id={person.id} name={person.name} artist={person.artist} album={person.album} ClickAdd={props.ClickAdd} innerButton={props.buttonText}/>)
                })
                }
                
            </div >
    )
}

export default Tracklist;