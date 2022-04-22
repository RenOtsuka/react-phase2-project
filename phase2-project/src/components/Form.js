import React from "react";

function Form({name, img, handleNewName, handleNewImg}){
    return(
        <div>
            <form>
                <h4>Enter Toy here</h4>
                <input type="text" name="name" placeholder="Enter name here..." value={name} onChange={handleNewName}/>
                <br/>
                <input type="text" name="image" placeholder="Enter image URL here..." value={img} onChange={handleNewImg}/>
                <br/>
                <input type="submit" name="submit"/>
            </form>
        </div>
    );
}

export default Form;