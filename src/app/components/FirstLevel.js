"use client";

function SecondLevel(props){

    console.log('Second Level : ',props);
    return(<div>
        Second Level
        {props.children}
    </div>)
}

export default function FirstLevel(props){
 return (
     <div>
        First Level
         <SecondLevel {...props}/>
     </div>
 );
}