    "use client"

    import React,{useState} from 'react';

    export default function Counter() {

        const [count,setCount]= useState(0);//initialize the count
        const [date, setDate]= useState(new Date());

        console.log("Re render");
        const incHandler = () => {

            setCount(count+1);
            console.log('count :',count)
            setDate(new Date());

        }

        const timeChangeHandler = ()=>{
            setDate(new Date());
        }

        return (
            <div>
                Counter : {count}
                <br/>
                Date  : {date.toLocaleString()}

                <button type={"button"}
                        onClick={incHandler}>+
                </button>

                <button type={"button"}
                        onClick={timeChangeHandler}>Change Date
                </button>

            </div>
        );
    }


