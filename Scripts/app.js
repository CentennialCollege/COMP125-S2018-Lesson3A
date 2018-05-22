/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app = (function () {
    "use strict"

    // About Button Click event handler

    function AboutButtonClick() {
        console.log("About Button Clicked!");
    }


    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";

        // About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    function ReturnPI() {
        return Math.PI;
    }

    function AboutContent() {
        let myNumber = ReturnPI();
        console.log("My Funky Number: " + myNumber);

        let paragraph = document.getElementById("paragraph");

        let mySentence = "";

        paragraph.textContent = mySentence;

        let myArray = [
            {name: "Tom", age: 25},
            {name: "Bob", age: 35},
            {name: "Mike", age: 45},
            {name: "Juan", age: 55},
            {name: "Smyth", age: 65}
        ];

        myArray.push( {name: "Carol", age: 15});
        myArray.unshift( {name: "Peter", age: 25});
        myArray.push( {name: "Carol", age: 15});

        let content = document.getElementsByClassName("content");
        console.log(myArray);
        console.log("myArray length: " + myArray.length);
    }

    function Start() {
        // local variable
        let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);

        switch (title) {
            case "COMP125 - Home":
                HomeContent();
                break;

            case "COMP125 - About":
                AboutContent();
                break;

            default:
                break;
        }
    }


    //window.onload = Start;

    window.addEventListener("load", Start);

    
    return {
        title: document.title

    };
    
})();