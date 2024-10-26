import React from "react";
import styles from "./Track.module.css"

function Track(props){

    return (
    < div className={styles.main} id={props.id}>
        <div>
            <h3> {props.name}</h3>
            <h4>{props.artist}</h4>
        </div>
        <button className={styles.button} onClick={props.ClickAdd}>{props.innerButton}</button>
    </div>
    )
}

export default Track;