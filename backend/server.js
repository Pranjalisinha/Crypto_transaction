require('dotenv').config();
const express= require('express')
const app =express()
const routes = require('./routes')
const Web3 = require('web3');
const mongoose = require('mongoose')
const contract = require('truffle-contract');
const artifacts = require('./build/Inbox.json');
app.use(express.json())
if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider)
  } else {
    var web3 = new Web3(new Web3.providers.HttpProvider('https://localhost:8545'))
}
const LMS = contract(artifacts)
LMS.setProvider(web3.currentProvider)

const url = "mongodb+srv://test1:test12@test1.bewchyb.mongodb.net/crypto?retryWrites=true&w=majority"
mongoose.connect(url, (data) => {
  console.log("Successfully connected to db");
}, (err) => {
  console.log(err)
});
app.listen(process.env.PORT || 8082, () => {
    console.log('listening on port 8082');
 })
