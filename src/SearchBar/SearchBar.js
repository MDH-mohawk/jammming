import React,{useState} from "react";
import styles from './SearchBar.css';


function SearchBar(props){


    return (
            <form onSubmit={props.submit}>
                <input className='input' type="text"></input>
                <button className='button' type="submit">search</button>
            </form>
    )
}


export default SearchBar;