// setup server
const express = require('express');
const app     = express();
module.exports = app;
const low     = require('lowdb');
const fs      = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db      = low(adapter);
const cors = require('cors');

// setup directory used to serve static files
app.use(express.static('public'));
app.use(cors());

db.defaults(
{
    accounts: [
        {
            name: '', 
            email: '',
            password: '',
            data: {
                entries: [
                    {
                    timestamp: '',
                    answer: {
                        answer1: '',
                        answer2: '',
                        answer3: ''
                    }, 
                    emojis: '',
                }
                ]
            }

        }
    ]    
}
).write();

app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    // Create account route
    // return success or failure string
    var msg ='';
            
    var account = db.get ('accounts')
     .find ({email: req.params.email})
     .value();
       
    if (account){
        msg ='Account Already Exists!';
        res.send(null);
    }
    else{
        db.get ('accounts')
         .push(
            {    name    : req.params.name,
                 email    : req.params.email,
                 password : req.params.password,
                 data: {
                    entries: [
                        {
                        timestamp: '',
                        answer: {
                            answer1: '',
                            answer2: '',
                            answer3: ''
                        }, 
                        emojis: '',
                    }
                    ]
                }
            })
         .write ();
         msg ='Account Created!';
         res.send(msg);    
    }
        console.log (msg); 
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
    var account = db.get ('accounts')
    .find ({email:req.params.email})
    .value();
 
 if (account){
        if (account.password==req.params.password){
            res.send(account);
            console.log(account);
        }
        else{
        res.send(null);
        console.log('Incorrect Password!');
        }
    }

 else {
    res.send(null);
    console.log('Account not Found!');
   }

});

app.get('account/journal/:email/:a1', function(req,res){
    var a1 = req.params.a1;
    console.log(a1);
    res.send(null);

    var account = db.get ('accounts')
        .find ({email: req.params.email})
        .value();
    
    if (account) {
        console.log(a1);
        res.send(account);
    }

    else {
        console.log('Account Not Found!');
        res.send(null);
    }

})





app.listen(3000, function(){
    console.log('Emojo running on port 3000!')
 })