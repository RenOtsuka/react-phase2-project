import React, {useState} from "react";

function ToyItem({id, name, image, likes}){

    const [likeCount, setLikeCount] = useState(likes);

    function handleLike(){
        setLikeCount( (likeCount) => likeCount + 1);

        fetch(`http://localhost:3001/toys/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Accept": "applicattion/json"
            },
            body: JSON.stringify({
                likes: likes + 1
            })
        })
        .then(r => r.json())
        .catch(error => alert(error));
    }

    return(
        <>
        <div className="ToyItem">
            <img src={image} alt={name}/>
            <p>{name}</p>
            <button onClick={handleLike}>likes: {likeCount}</button>
        </div>
        <br/>
        </>
        
    );
}

export default ToyItem;