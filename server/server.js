const express = require("express");
const uniqid = require('uniqid'); 
const path=require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const utils=require('../utils/utils');
const fs = require("fs");

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(cors());
server.use(express.json());
server.use((req, res, next) => {
    const { method, url } = req;
    console.log(`got req to utl: ${url} method: ${method}`);
    next();
});


const myPath=path.join(__dirname,'../client/dist');
console.log(myPath);


server.use(express.static(myPath));


server.get("/login", (req, res) => {
  const data = utils.loadFile();
  res.send(data);
  saveUsers(data);
});

server.post('',(req, res)=>{
    const data = req.body;
    console.log('dataaaa', data);
    const newUser=utils.createUser(data);
    console.log('newUser',newUser);
    // const userName=req.body.userName;
    // console.log(userName);
    // const password=req.body.password;
    // const users=loadFile();
    // console.log('users',users);
    // const user={
    //     // id: uniqid(),
    //     username: userName,
    //     pass:password
    // }
    // users.push(user);
    // console.log(users);
    // saveUsers(users);
    // res.send(user);

})

// const port = process.env.PORT || 3000;
server.listen(4005, () => {
  console.log(`listening on `,4005);
});