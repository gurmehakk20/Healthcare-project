const express = require("express")
const connectDB = require('./Config/dbConnection.js')
const errorHandler = require('./Middleware/errorHandler')
// cors- cross origin resource sharing: a browser security feature that allows a web page to access resources from a different domain than the one that served the page
const cors = require('cors'); 
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

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

app.use('/api/users', require("./Routes/userRoutes.js"));
app.use('/api/doctors', require("./Routes/doctorRoutes.js"));

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
app.get("/api/users")

app.post('/profile', upload.single('avatar'), function (req, res, next) {
// req.file is the `avatar` file
// req.body will hold the text fields, if there were any
})
app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })
  
  const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  app.post('/cool-profile', cpUpload, function (req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //
    // e.g.
    //  req.files['avatar'][0] -> File
    //  req.files['gallery'] -> Array
    //
    // req.body will contain the text fields, if there were any
  })
hbs.registerPartials(path.join(__dirname, '/Views/partials'));

// APP CONFIG START
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})
