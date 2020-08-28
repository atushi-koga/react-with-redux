import React from "react";
import Search from "./components/Search";

// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a front end Javascript framework'
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is a favorite JS library among engineer'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     },
// ];

export default () => {
    return (
        <div>
            {/*<Accordion items={items}/>*/}
            <Search/>
        </div>
    )
}