import React from 'react';
import styles from './Playlist.module.css'

function Playlist(props){
        
    return <div className={styles.main}>
        <input type='text' placeholder='Playlist name' />
        <ul>
            <li>This is amazing</li>
        </ul>


    </div>

}

export default Playlist;