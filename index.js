const express  =  require('express');
const app= express();


const cors = require('cors') ;
const bodyParser = require('body-parser') 

const dotenv = require('dotenv'); 



dotenv.config();
app.use(express.json());
app.use(cors());





 app.use(bodyParser.json());
 app.use("/about", (req, res) => {
     res.send("Hello, Welcome to my about page. I am a web developer with about 100 years of experience in  Javascript")
 })
 app.use("/home", (req, res) => {
    res.send("Hello, Welcome to my Home  page. here you would see all that i build and write")
})

 app.listen(process.env.PORT  || 5000, ()=> {
    console.log("tobi is king");
})
