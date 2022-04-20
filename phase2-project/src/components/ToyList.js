import React from "react";
import ToyItem from "./ToyItem";

function ToyList({list}){
    const toyList = list.map(item => (
        <ToyItem 
        key={item.id}
        name={item.name}
        image={item.image}
        likes={item.likes}/>
    ));

    return(
        <ul>
            {toyList}
        </ul>
    );
}

export default ToyList;