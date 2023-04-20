import React from "react";

function Events(){
    function showAlert(){
        alert("Hello Guys......");
    }

    function showChange(e){
        console.log(e.target.value);
    }

    return (
        <div>
            <button onClick={showAlert}>Show Alert</button>
            <input onChange={showChange} placeholder="Anything"></input>
        </div>

    )
}

export default Events;