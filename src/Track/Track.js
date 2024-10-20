import React from "react";
import styles from "./Track.module.css"

function Track(props){

    return (
    <li key={props.id} className={styles.main}>
    {props.name} - {props.artist} - {props.album}
    </li>
    )
}

export default Track;