import React from "react";
import styles from "./Track.module.css"

function Track(props){

    return (< div className={styles.main}>
    <li id={props.id} key={props.id}>
    {props.name} - {props.artist} - {props.album}
    </li>
    <button onClick={props.ClickAdd}>{props.innerButton}</button>
    </div>
    )
}

export default Track;