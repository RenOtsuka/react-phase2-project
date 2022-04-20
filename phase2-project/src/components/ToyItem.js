import React from "react";

function ToyItem({name, image, likes}){

    return(
        <>
        <div>
            <img src={image} alt={name}/>
            <p>{name}</p>
            <button>likes: {likes}</button>
        </div>
        <br/>
        </>
        
    );
}

export default ToyItem;