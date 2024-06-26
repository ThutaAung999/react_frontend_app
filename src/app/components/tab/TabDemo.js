"use client";
import './Tab.css'
import {useState} from 'react';


function TabHeader({onClick, item}) {
    return <div
        onClick={onClick}
        className={"tab-header"}>
        {item}
    </div>;
}

function TabBody({currentTab}) {
    return <div className={"tab-body"}>
        {currentTab}
    </div>;
}

export default function TableDemo({headers, children}) {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabBarClick = (index) => {
        setActiveTab(index);
    }

    return (<div>
        {
            headers.map((item, index) => <TabHeader
                key={index}
                onClick={() => {
                    handleTabBarClick(index)
                }
                } item={item}/>)
        }

        <TabBody currentTab={children[activeTab]} />

    </div>)

}


/*
"use client";
import {useState} from "react";
import './Tab.css';

function TabHeader({onClick,item}) {
    return <div
        onClick={onClick}
        className={"tab-header"}>
        {item}
    </div>;
}

function TabBody({currentTab}) {
    return <div className={"tab-body"}>
        {currentTab}
    </div>;
}

export default function TabDemo({headers,children})
{
    const [activeTab,setActiveTab] = useState(0);

    const handleTabHearClick = (index)=>{
        setActiveTab(index);
    };
    return(<div>
        {
            headers.map((item, index) => <TabHeader
                key={index}
                onClick={() => handleTabHearClick(index)}
                item={item}/>
            )
        }
        <TabBody currentTab={children[activeTab]}
                 />
    </div>);
}*/
