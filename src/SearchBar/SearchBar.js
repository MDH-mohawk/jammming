import React,{useState,useCallback} from "react";
import styles from './SearchBar.css';


function SearchBar(props){
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        event.preventDefault();
      setTerm(event.target.value);
    }, []);
  
    const search = useCallback(() => {
      props.onSearch(term);
    }, [props.onSearch, term]);
    return (
            <div>
                <input className='input' type="text" onChange={handleTermChange}></input>
                <button className='button' onClick={search}>search</button>
            </div>
    )
}


export default SearchBar;