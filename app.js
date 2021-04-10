const inquirer = require('inquirer')
const figlet = require('figlet');

figlet('Welcome Here', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    display()
});

function display(){
    inquirer
    .prompt([
        {
            type:'list',
            name:'c1',
            choices: ["About",'projects', 'Skills']
        }
    ])
    .then(answers => {
        if(answers.c1 == 'About'){
            console.log("My name is mustufa khan, i work as a MERN Stack Web Developer using MongoDB, Express, React, Node.js (MERN) with an emphasis on Frontend web development and mobile using React & React Native. Experienced in building CRUD applications, RESTful APIs using Node.js and express. Common libraries of use: Axios, Redux, Mongoose, Lodash, Express, body-parser, multer, react-router, redux- thunk. Common use of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS, Material-UI, react-mdl, Elemental-UI and react-native-paper for React Native.")
            next()
        }else if(answers.c1 == 'projects'){
            console.log("checkout my github: https://github.com/mustufakhan")
            next()
        }else if(answers.c1 == 'Skills'){
            console.log('js, reactjs , mern, react native, ruby on rails')
            next()
        }else{
            console.log("tata")
        }
    })
    .catch(error => {
        if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
    });
}

function next(){
    inquirer
    .prompt([
        {
            type:'list',
            name:'c2',
            choices: ['back']
        }
    ]).then(ans=>{
        if(ans.c2=="back"){
            display()
        }
    })
}