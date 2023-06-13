
const Triangle = require('./stuff/t.js');
const Circle = require('./stuff/c.js');
const Square = require('./stuff/s.js');
const fs = require('fs');
const inquirer = require('inquirer');
var a;

let shape, shapeColor, letters, textColor;
let newLogo;

function init() {
    // user input using inquirer package
inquirer.prompt([
    {name: 'b1',
    message: "enter up to 3 characters: "
    },
    {name: 'b2',
    message: "what color should this text be?: "
    },
    {name: 'b3',
    message: "what shape would you like?\n1:Square \n2:Triangle \n3:Circle: "
    },
    {name: 'b4',
    message: "what color is the shape?: "
    }
    
    
])
.then((answer) =>{
    
    textColor = answer.b2;
    shapeColor = answer.b4;
   
    // determines which shape you want, easiest to do with numbers
    if(answer.b3 == 1)
    {
        shape = new Square(shapeColor);
    }
    if(answer.b3 == 2)
    {
        shape = new Triangle(shapeColor);
        
    }
    if(answer.b3 == 3)
    {
        shape = new Circle(shapeColor);
        console.log(shape.settings);
    }
    
    letters = answer.b1;
    if(letters !=="")
    {
        shape.addText(letters,textColor);
    }
})
.then((answer) =>{
    newLogo = shape.render();
    // the 300x200 is specified in the module 10 challenge syllabus
    const finalL = `<svg width="300" height="200">${newLogo}</svg>`;
 
    fs.writeFile('NEWLOGO.svg',finalL, err=>{
    
    })
    
        
})
}
// runs everything
init();