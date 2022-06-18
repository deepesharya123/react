console.log("App.js is running.")

const app = {
    title : "Indecision App",
    subtitle : "Put your life in the hands of a computer",
    options: ["One","Two"]
}

// this is JSX , but it would not work without Babbel, Babbel converts the new es6or es7 features to es5 
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <ol>
        <li>Item One</li>
        <li>Item Two</li>
        </ol>
        {app.options && app.options.length>0?
            <div>
                <h1>Here are your itmes</h1>
                <ol>
                <li>{app.options[0]}</li>
                <li>{app.options[1]}</li>
                </ol>
            </div>:"No Options to show"
        }
    </div>
);

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

const allTemplate = (
    <div>
        {template}
        {templateTwo}
        {templateThree}
    </div>
);
    
const appRoot = document.getElementById('app');

ReactDOM.render(allTemplate,appRoot);
