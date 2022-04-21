import React from "react";

function Form(){
    return(
        <div>
            <form>
                <h4>Enter Toy here</h4>
                <input type="text" name="name" placeholder="Enter name here..."/>
                <br/>
                <input type="text" name="image" placeholder="Enter image URL here..."/>
                <br/>
                <input type="submit" name="submit"/>
            </form>
        </div>
    );
}

export default Form;