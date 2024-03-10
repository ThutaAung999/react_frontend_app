
"use  client"
import React from 'react';
import './HelloWorld.css';

export function Another(){
    return (<div>Another</div>);
}

export default function HelloWorld(){

    let virtualDom= React.createElement("div",null,
        React.createElement("h3",null,"Content By  Virtual DOM"));

        console.log("Virtual DOM : ",virtualDom)

    return <div>
        <h1>HelloWorld Component</h1>
        {virtualDom}
        {'hello'.toUpperCase()}
        <Another/>
        <img       className={"profile"}
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
    </div>
}