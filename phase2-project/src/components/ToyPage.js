import React, {useState, useEffect} from "react";
import ToyList from "./ToyList"

function ToyPage(){

    const [toyList, setToyList] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:3001/toys`)
        .then(r => r.json())
        .then(data => setToyList(data))
        .catch(error => alert(error));
    },[]);

    return(
        <div>
            <h1>Toy Page</h1>
            <ToyList list={toyList}/>
        </div>
    );
}

export default ToyPage;