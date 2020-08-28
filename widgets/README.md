# Understanding Hooks in React 

## Hooks System
Hooks are a way to write reusable code, instead of more classic techiniques like Inheritance.

- useState  
Function that lets you use state in a functional component.
- useEffect  
Function that lets you use something like lifecycle methods in a functional component.
- useRef  
Function that lets you use create a 'ref' in a functional component.

## use state
the goal of useState is specifically to give us access to the state system inside of a functional component.

```js
// use state in a Class based Component
import React from "react";

class Accordion extends React.Component {
    state = {activeIndex: null};  // initialize value of state

    onTitleClick(index) {
        this.setState({activeIndex: index});  // value only changed through 'setState' function
    }

    render() {
        const renderedItems = this.props.items.map((item, index) => {
            return (
                <React.Fragment key={item.title}>
                    <div
                        className="title active"
                        onClick={() => this.onTitleClick(index)}
                    >
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className="content active">
                        <p>{item.content}</p>
                    </div>
                </React.Fragment>
            );
        });

        return (
            <div className="ui styled accordion">
                {renderedItems}
                <h1>{this.state.activeIndex}</h1>  // reference value through 'this.state'
            </div>
        );
    }
}

export default Accordion;
```

```js
// use state in a functional Component
import React, {useState} from "react";

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);  // initialize value of state

    const onTitleClick = index => {
        setActiveIndex(index);  // value only changed through the setter function and provide new value
    }

    const renderedItems = items.map((item, index) => {
        return (
            <React.Fragment key={item.title}>
                <div
                    className="title active"
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>  // reference value through the first argument of useState function
        </div>
    );
}

export default Accordion;
```

### const [activeIndex, setActiveIndex] = useState(null);
This first argument(activeIndex) coming back from calling useState is the piece of state that we are trying to keep track of.  
The second argument(setActiveIndex) inside the array is a function that we call to update our piece of state.  
Whenever we call useState, it takes in one argument and that is going to be the default value for our piece of state. 