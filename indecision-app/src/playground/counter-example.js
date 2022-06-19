
let count = 0;
const addOne = ()=>{
    count++;
    console.log("Add one",count);
    renderCounterApp()
}

const minusOne = ()=>{
    count--;
    console.log("Minus One",count)
    renderCounterApp()
}

const reset = ()=>{
    count=0;
    console.log("Reset button",count)
    renderCounterApp()
} 

const renderCounterApp =  ()=>{
    console.log("I am in reRender")
    
    
    const templateFour = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
    );
    const allTemplate = (
        <div>
        {templateFour}
            {template}
            {templateTwo}
            {templateThree}
        </div>
) 
    ReactDOM.render(allTemplate,appRoot);
}

renderCounterApp();