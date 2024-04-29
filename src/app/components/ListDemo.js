"use client";

function List({item}) {
    return <li key={item.id}>
        {item.title}
    </li>;
}

export default function ListDemo() {
    let todos = [
        {
            id: 1,
            title: 'one'
        },
        {
            id: 2,
            title: 'two'
        },
        {
            id: 3,
            title: 'three'
        }

    ];

    return (
        <div>
            <ol>
                {
                    todos.map((item, index) => <List  key={item.id} item={item}/>)
                }
            </ol>
        </div>
    )
}