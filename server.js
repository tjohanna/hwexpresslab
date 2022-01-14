const express = require('express');
const app = express();
const port = 3000;

// Didn't work =/
// app.get('/greeting/:name', (req, res) => {
//     if (req.params.name){
//       res.send("What's up, " + req.params.name);
//     } else {
//       res.send("Hello, stranger");
//     }
//   });


// Greetings 
app.get('/greeting/', (req, res) => {
      res.send("Hello, stranger");
  });

app.get('/greeting/:name', (req, res) => {
      res.send("What's up, " + req.params.name);
  });



// Tip
app.get('/tip/:total/:tipPercentage', (req, res) => { 
  res.send(req.params.tipPercentage);
});

// Magic 8 Ball
// I couldn't get the encoding for the query to work. 
let responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req, res) => {
  const ques = req.params.question
  const encodedUrl = encodeURIComponent(ques);
  // console.log(encodedUrl);
  var response = responses[Math.floor(Math.random()*responses.length)];

  res.send(encodedUrl + `<br>`+ response)

});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
  });

  //