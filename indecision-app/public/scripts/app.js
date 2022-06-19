"use strict";

console.log("App.js is running.");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    // console.log("Form submitted",e.target.option.value)
    // console.log("Form submitted",e.target.elements.option.value)    // this is preferred
    var option = e.target.elements.option.value;
    if (!option) alert("Please enter something");else {
        app.options.push(option);
        renderApp();
        console.log("Options Array is ", app.options);
        e.target.elements.option.value = "";
    }
};

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

var onRemoveAll = function onRemoveAll() {
    console.log("Before deleting the options array", app.options);
    app.options = [];
    console.log("After deleting the options array", app.options);
    renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    // this is JSX , but it would not work without Babbel, Babbel converts the new es6or es7 features to es5 
    var template = React.createElement(
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
        app.options.length > 0 ? "Here are your options" : " No Options",
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
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (element) {
                return React.createElement(
                    "li",
                    { key: element + Math.random() },
                    element
                );
            })
        )
    );
    var allTemplate = React.createElement(
        "div",
        null,
        template,
        templateTwo,
        templateThree
    );

    ReactDOM.render(allTemplate, appRoot);
};

renderApp();
