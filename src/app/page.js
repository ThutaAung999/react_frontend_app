import Image from "next/image";
import HelloWorld , {Another} from "./components/HelloWorld";
import JsxDemo from "./components/JsxDemo";
import Greeting from "./components/Greeting";

export default function Home() {

    console.log("This is text before JSX ...")

    /*const name = 'Gregorio Y. Zara';*/

    const today = new Date();

    function formatDate(date) {
        return new Intl.DateTimeFormat(
            'en-US',
            { weekday: 'long' }
        ).format(date);
    }

    let person={
        name:'HL'
    }

    return (
        <main>
            <div>
             {/*   <HelloWorld/>
                <Another/>
                <HelloWorld/>*/}

                {/*<JsxDemo/>
                { new Date().toString()}*/}


                {/*<h1>{name}'s To Do List</h1>*/}

                {/*<h1>To Do List for {formatDate(today)}</h1>
                    <h1>{person.name}</h1>*/}

                <Greeting name={"Aung La"}/>
                <Greeting name={"Aung Nan Daw"}/>
                <Greeting name={"Aung Zabu"}/>
            </div>
        </main>
    );
}
