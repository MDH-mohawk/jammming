import React,{useState} from "react";


function SearchBar(props){


    return (
            <form onSubmit={props.submit}>
                <input type="text"></input>
                <button type="submit">search</button>
            </form>
    )
}


export default SearchBar;