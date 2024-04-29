"use client"

export default  function Greeting({name="Unknown",person}) {

    console.log("Property : ",name , ' , Person :',person);
    return (
        <div>
            <h1>Hello : {name}</h1>
        </div>
    )
}