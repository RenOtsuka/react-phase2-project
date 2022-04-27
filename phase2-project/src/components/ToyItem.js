import React, {useState} from "react";

function ToyItem({name, image, likes}){

    const [likeCount, setLikeCount] = useState(likes);

    return(
        <>
        <div className="ToyItem">
            <img src={image} alt={name}/>
            <p>{name}</p>
            <button>likes: {likes}</button>
        </div>
        <br/>
        </>
        
    );
}

export default ToyItem;