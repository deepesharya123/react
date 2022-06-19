console.log("App.js is running.")

const app = {
    title : "Indecision App",
    subtitle : "Put your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e)=>{
    e.preventDefault();
    // console.log("Form submitted",e.target.option.value)
    // console.log("Form submitted",e.target.elements.option.value)    // this is preferred
    const option =  e.target.elements.option.value;
    if(!option) alert("Please enter something")
    else {
        app.options.push(option);
        renderApp()
        console.log("Options Array is ",app.options)
        e.target.elements.option.value = ""
    }

}

const userName = "Money Gupta";
const userAge = 22;
const userLocation = "Uttar Pradesh"
const newUser = {
    name :"Mohan",
    age: 20,
    location: "Mathura"
}

function getLocation(location){
    if(location){
        return location;
    }
    else return 'Unkown'
}

const templateTwo = (
    <div>
        <h1>{userName+"'s Details"}</h1>
        <p>Age: {userAge}</p>
        <p>Location : {userLocation}</p>

        <h1>{newUser.name?newUser.name:"Anonymous"}'s Details</h1>
        {newUser.age && <p>Age: {newUser.age}</p>}
        <p>Location: {getLocation(newUser.location)}</p>
        </div>
)

const templateThree = (
    <div>
        <h1>John's Details</h1>
        <p>Age : 33</p>
        <p>Location : Jammu Kashmir</p>
    </div>
);

const onRemoveAll = ()=>{
    console.log("Before deleting the options array",app.options);
    app.options = [];
    console.log("After deleting the options array",app.options)
    renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = ()=>{
    // this is JSX , but it would not work without Babbel, Babbel converts the new es6or es7 features to es5 
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length >0  ?"Here are your options":" No Options"}
      
        <ol>
        <li>Item One</li>
        <li>Item Two</li>
        </ol>
        
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        </form>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
        {
            app.options.map((element)=> <li key={element+Math.random()}>{element}</li>    )
        }
        </ol>
    </div>
);
    const allTemplate = (
        <div>
            {template}
            {templateTwo}
            {templateThree}
        </div>
    );
        
    ReactDOM.render(allTemplate,appRoot)
}

renderApp()