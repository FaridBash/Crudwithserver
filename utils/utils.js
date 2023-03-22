const fs = require("fs");
const uniqid = require('uniqid'); 
// const bcrypt = require("bcrypt");

function createUser(data) {
    const file = loadFile();
    if(checkDup(file,data)){
        data.id=uniqid();
        file.push(data);
        saveUsers(file);
    }else{
        return false;
    }
    return true;
}

function checkDup(file, data){
    const dup=file.filter((u)=>{return u.userName===data.userName? true:false});
    const numOfDuplicates=dup.length;
    if(numOfDuplicates===0) return true;
    return false;
}
function loadFile() {
  try {
    const dataBuffer = fs.readFileSync("usersUtils.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}


const saveUsers = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("usersUtils.json", dataJSON);
  };



  module.exports={createUser}