"use client"

export default  function Greeting({name}) {

    console.log("Property : ",name);
    return (
        <div>
            <h1>Hello : {name}</h1>
        </div>
    )
}