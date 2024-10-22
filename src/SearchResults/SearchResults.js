import React from "react";
import styles from './searchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';


function SearchResults(props){

    return (
        <div className={styles.main}>
            <h1>Results</h1>
            <Tracklist array={props.array} ClickAdd={props.Click} buttonText="ADD"/>
        </div>
    )

}

export default SearchResults;