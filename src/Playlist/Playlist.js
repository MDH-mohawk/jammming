import React from 'react';
import styles from './Playlist.module.css'
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props){
        
    return <div className={styles.main}>
        <input className={styles.input} type='text' placeholder='Playlist name' value={props.playListName} onChange={props.playListNameChange}/>
        <Tracklist array={props.array} buttonText="DEL" ClickAdd={props.delButton} />
    </div>

}

export default Playlist;