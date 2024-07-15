const express = require("express");
const app = express();
const port = 3000;
const jokes = require("./jokesData");


// Jokes Data 
const programmingJokes = require("./programmingJokes");
const scienceJokes = require("./scienceJokes");
const sportsJokes = require("./sportsJokes");
const medicalJokes = require("./medicalJokes");
const generalJokes = require("./generalJokes");
const animalJokes = require("./animalJokes");


// callbacks 
function callbackFn1(req,res){
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({joke:randomJoke});  
}


function getRandomJoke(category) {
    switch (category) {
        case 'general':
            return generalJokes[Math.floor(Math.random() * generalJokes.length)];
        case 'medical':
            return medicalJokes[Math.floor(Math.random() * medicalJokes.length)];
        case 'sports':
            return sportsJokes[Math.floor(Math.random() * sportsJokes.length)];
        case 'science':
            return scienceJokes[Math.floor(Math.random() * scienceJokes.length)];
        case 'programming':
            return programmingJokes[Math.floor(Math.random() * programmingJokes.length)];
        case 'animal':
            return animalJokes[Math.floor(Math.random() * animalJokes.length)];

        default:
        
            return -1;
    }
}

function callbackFn2(req,res){
    const category = req.params.category;
    const joke = getRandomJoke(category);
    if(joke === -1){
        res.json({error: "Invalid Category"});
    }else{
        res.json(joke);
    }
   
}

// Request Handlers

app.get("/" , (req , res)=>{
    res.send("Hello World");
});
app.get("/api/joke/random",callbackFn1);

app.get("/api/joke/random/:category", callbackFn2);



app.listen(port,()=>{
    console.log("Server is running on port "+port);
});