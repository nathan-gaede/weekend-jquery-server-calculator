# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

# Weekend Challenge: Server Side Calculator

Welcome to the weekend challenge!

You are going to be building a server-side calculator. The logic for the calculator **must** be implemented on the server. 

## Required Features

### Calculator

Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation. When the submit (`=` button) is clicked, capture this input, bundle it up in an object, and send this object to the server via a POST. There should also be a 'C' button that will clear the user input fields.

- [x] Create folder structure 

├── server/
│   ├── public/
│   │   ├── scripts/
│   │   │   └── client.js
│   │   ├── vendors/
│   │   │   └── jquery.js
│   │   ├── styles/
│   │   │   └── style.css
│   │   └── index.html
│   └── server.js
├── node_modules/
│   ├── express/
│   └── ...
└── .gitignore

- [x] Create html head and body
- [x] Download jQuery and paste into jquery.js
- [x] Source scripts, vendors and styles into index.html
- [x] Console.log test client.js
- [x] Check gitignore file for completeness(does not include *.log) Moving past this and will re-visit if problematic.
- [x] Create readyNow function in client.js
- [x] Console.log to test readyNow function
- [x] Since server is needed and no json file is present use "npm init --yes"
- [x] Download express with "npm install"
- [x] In package.json, in scripts, under "test:", source, "main": "node server/server.js"
- [x] in package.json, add "start": "node server/server.js" under "scripts"
- [x] In server.js, create code to require express
- [x] In server.js, specify PORT
- [x] In server.js, create app.use 
- [x] In server.js, create app.listen

User Interface
- [x] Create input field for first number value
- [x] Create addition button
- [x] Create subtract button
- [x] Create multiply button
- [x] Create division button
- [x] Create input field for second number value
- [x] Create "equals" button
- [x] Create "clear" button
- [x] Add instruction to html page to enter both numeric values before clicking the desired operation. 
- [x] Add placeholders into the numeric input fields

Click handlers
- [x] Create click handler for `=` in readyNow function
- [x] `=` click handler sends data to function sendMathToServer

Server.js data
- [x] Create const empty array in server.js
- [x] Add object properties to empty array
- [x] Add app.use(express.urlencoded()); above any app.post code
- [x] Add app.post ('/math', (req, res) => {
    `set const as equal to req.body`;
    push new const into existing server array
    res.sendStatus(201) `send back success`
})

Post route
- [x] Create function to sendMathToServer
- [x] Use ajax to bundle data in an object
- [x] Use type: 'POST'
- [x] Use url: '/math'
- [x] Use data: {
    $('#first-input').val()
    $('#second-input').val()
    `capture math operation` Try using $(this)
    }
- [x] Add addition operation on click `+` to the bundled object
- [x] Add subtraction operation on click `-` to the bundled object
- [x] Add multiplication operation on click `*` to the bundled object
- [x] Add division operation on click `/` to the bundled object
- [] 
- [] Add <div> to html to group buttons
- [] Give the button <div> a class to reference
- [x] Test ajax POST request for button select accuracy













Build out the server-side logic to compute the numbers as appropriate. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, send back the OK. You should do a GET request after the POST to get the actual calculation.

### History

Keep a historical record of all math operations and solutions on the server. Display a list of all previous calculations on the page when it loads using a GET request. Update the list when a new calculation is made.

> NOTE: History should exist even after refreshing the page. It's expected that the history will go away after restarting the server. We'll talk about long term data storage next week.

---
![base mode interface](images/baseMode.png)
---

> Note: Do not use eval() to complete this assignment.

## Stretch Goals

- Convert the interface to look and behave like a calculator as shown below.

  *Interfaces that mirror real world objects are often more intuitive and self-explanatory for users.*

---
![calculator interface](images/stretchGoal_interface.gif)
---

- Only allow the POST call to happen if all necessary input is ready.

  *Data integrity is superfluously important! Sometimes users hit tje "go button" without fully inputting the needed fields. Show an alert if they left something empty and don't send bad or incomplete data to the server.*

- Allow a user to clear the history by clicking on a button. Technically this shouldn't be a GET or a POST. Look into making a DELETE request!

  *GETs are used to, well, get information from the server. POSTs are used to send new info to the server. DELETEs are used for, you guessed it, deleting info already on the server.*

- Allow a user to click on an entry in the History list to re-run that calculation. This should display the answer on the calculator interface like a normal calculation.

  *Anticipating a user's wants and adding the feature in the interface is often a logical progression that ends up in stretch goals for project.*



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
