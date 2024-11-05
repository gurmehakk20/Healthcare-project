const express = require("express")
const connectDB = require('./Config/dbConnection.js')
const errorHandler = require('./Middleware/errorHandler')
// cors- cross origin resource sharing: a browser security feature that allows a web page to access resources from a different domain than the one that served the page
const cors = require('cors'); 

// env file config
const dotenv = require('dotenv')
dotenv.config();

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
// error handling middleware
app.use(errorHandler);

app.set('view engine', 'hbs');

// routes
app.get('/', (req, res) => {
    res.send("working");
});
app.get("/home", (req, res) => {
    // let user = User.findOne({id:})
    res.render("Home", {
        "username":"Gurmehak",
    })
})
app.get("/users", (req, res) => {
    res.render("Users", {
        users:[
            {id: 1, username:"Gurmehak", age: 20}, 
            {id: 2, username: "xyz", age: 21}
        ]

    })
})

// APP CONFIG START
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})
