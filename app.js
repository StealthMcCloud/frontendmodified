const express = require("express");
const path = require("path");

const app = express();
const publicFolderPath = path.join(__dirname, "public");

const port = 3000;

app.use(express.json());
app.use(express.static(publicFolderPath));

const users = [];

    app.post("/api/user", (req, res) => {
        console.log(req.body)   
        if(users.find(newUser => newUser.userName === req.body.userName)) {
            res.status(409).send({error: "User name has been taken"})
        } else {
            req.body.userIdNumber = Math.floor(Math.random() * 333666999)
            users.push(req.body)
            res.status(201).send(req.body)
        }
        });
console.log(users)
app.listen(port, () => console.log("Server " + port + " is running and listening"));