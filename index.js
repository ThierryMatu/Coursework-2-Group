var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send("Testing ExpressJS")
})

// Endpoint for lessons
app.get('/lessons', function(req, res){
    let lessons = [
        {
            "id": 0,
            "topic": "Soccer",
            "location": "South London",
            "price": 50
        },
        {
            "id": 1,
            "topic": "Music",
            "location": "Paris",
            "price": 40
        },
        {
            "id": 2,
            "topic": "Swimming",
            "location": "Norway",
            "price": 30
        },
        {
            "id": 3,
            "topic": "Mathematics",
            "location": "Nigeria",
            "price": 85
        }
    ]
    res.header("Access-Control-Allow-Origin", "*")
    res.send(lessons)
})

//Endpoint for user's details
app.get('/user', function(req, res){
    let users = {
        "email": "newuser@emailserver.com",
        "password": "selenium"
    }
    res.send(users)
})
app.listen(3000)