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

## useEffect とは
React が DOM を更新した後で追加のコードを実行したい場合に `useEffect` を使用する。
```js
useEffect(() => {
    console.log('I run after render');
});
```
`useEffect` の第一引数はレンダリング後に実行したい関数、第二引数は未指定か空配列か配列のいずれかであり、この値によって実行タイミングが決められる。

### useEffect 実行タイミング
１. 第二引数が空配列の時、初回レンダリング後に1度だけ実行
```js
useEffect(() => {
    console.log('I run at initial render');
}, []);
```

２. 第二引数が未指定の時、レンダリング後に毎回実行される
```js
useEffect(() => {
    console.log('I run at initial render and run after every rerender');
});
```
レンダリング後に毎回実行されるという意味では、Reactのクラスコンポーネントの `componentDidMount` と `componentDidUpdate` に同じ処理を指定しているのと同じ状態。
```js
componentDidMount() {
    console.log('I run at initial render and run after every rerender');
}
componentDidUpdate() {
    console.log('I run at initial render and run after every rerender');
}
```

３. コンポーネントの初回レンダリング時と、再レンダリング間で特定の値が更新された場合
```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes or initial rendering
```
>  もし count が 5 で、次回のコンポーネントのレンダー時にも count がまだ 5 であった場合、React は前回のレンダー時に覚えておいた [5] と今回のレンダーの [5] とを比較します。配列内のすべての要素が同一 (5 === 5) ですので、React は副作用をスキップします。これが最適化です。

### Cleanup Function
`useEffect` の第一引数に指定した関数は、関数を返すことができる。
この返却値となる関数はクリーンアップと呼ばれ、Reactはコンポーネントがアンマウントされるときにそれを実行する。
ライフサイクルメソッドの `componentWillUnmount` と同じようなもの。
```js
useEffect(() => {
  console.log('execute after render');
  return () => console.log('execute before unmount');
});
```


### Async code in useEffect
`useEffect` に渡す関数に直接asyncキーワードを指定できない。
```js
// 実行できないコード
useEffect(async () => {
    await Wikipedia.get(`/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`);
}, [term]);
```

この解決策は3つある。

１. 関数を定義しその中でasyncキーワードを指定する 
```js
useEffect(() => {
    const search = async () => {
        await Wikipedia.get(`/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`);
    }
    search();
}, [term]);
```

２. 即時関数を使う
```js
useEffect(() => {
    (async () => {
        const response = await Wikipedia.get(`/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`);
    })();
}, [term]);
```

３. プロミスを使用する 
```js
useEffect(() => {
    Wikipedia.get(`/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`)
        .then(response => console.log(response.data));
}, [term]);
```

## useRef
https://www.udemy.com/course/react-redux/learn/lecture/20787850#notes