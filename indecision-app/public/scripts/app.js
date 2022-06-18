"use strict";

console.log("App.js is running.");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["One", "Two"]

    // this is JSX , but it would not work without Babbel, Babbel converts the new es6or es7 features to es5 
};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        )
    ),
    app.options && app.options.length > 0 ? React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Here are your itmes"
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                app.options[0]
            ),
            React.createElement(
                "li",
                null,
                app.options[1]
            )
        )
    ) : "No Options to show"
);

var userName = "Money Gupta";
var userAge = 22;
var userLocation = "Uttar Pradesh";
var newUser = {
    name: "Mohan",
    age: 20,
    location: "Mathura"
};

function getLocation(location) {
    if (location) {
        return location;
    } else return 'Unkown';
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        userName + "'s Details"
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        userAge
    ),
    React.createElement(
        "p",
        null,
        "Location : ",
        userLocation
    ),
    React.createElement(
        "h1",
        null,
        newUser.name ? newUser.name : "Anonymous",
        "'s Details"
    ),
    newUser.age && React.createElement(
        "p",
        null,
        "Age: ",
        newUser.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        getLocation(newUser.location)
    )
);

var templateThree = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "John's Details"
    ),
    React.createElement(
        "p",
        null,
        "Age : 33"
    ),
    React.createElement(
        "p",
        null,
        "Location : Jammu Kashmir"
    )
);

var allTemplate = React.createElement(
    "div",
    null,
    template,
    templateTwo,
    templateThree
);

var appRoot = document.getElementById('app');

ReactDOM.render(allTemplate, appRoot);
