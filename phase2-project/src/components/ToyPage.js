import React, {useState, useEffect} from "react";
import ToyList from "./ToyList"
import Form from "./Form";

function ToyPage(){

    const [toyList, setToyList] = useState([]);

    const [toggleForm, setToggleForm] = useState(false);
    const [toyName, setToyName] = useState("");
    const [toyImg, setToyImg] = useState("");


    useEffect( () => {
        fetch(`http://localhost:3001/toys`)
        .then(r => r.json())
        .then(data => setToyList(data))
        .catch(error => alert(error));
    },[]);

    function toggle(){
        setToggleForm( (toggleForm) => !toggleForm);
    }

    function handleNewName(e){
        setToyName(e.target.value);
    }

    function handleNewImg(e){
        setToyImg(e.target.value);
    }

    function addToy(e){
        e.preventDefault();

        fetch(`http://localhost:3001/toys`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: toyName,
                image: toyImg,
                likes: 0,
            })
        })
        .then(r => r.json())
        .then(data => setToyList([...toyList, data]))
        

        setToyName("");
        setToyImg("");
    }

    return(
        <div className="ToyPage">
            <h1>Toy Page</h1>
            <button onClick={toggle}>Click Here to add a new toy</button>
            {toggleForm 
            ? <Form 
            name={toyName} 
            img={toyImg} 
            handleNewName={handleNewName} 
            handleNewImg={handleNewImg}
            addToy={addToy}
            /> : null}
            <br/>
            <ToyList list={toyList}/>
        </div>
    );
}

export default ToyPage;