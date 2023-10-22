const connectToMongo = require("./db");
const express = require('express')

connectToMongo();

const app = express()
const port = 5000;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;
console.log("jwt secret : "+jwtSecret);
// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('Hare Krishna')
// })

app.use(express.json());
//Available routes.
app.use('/api/auth',require('./routes/auth.js'));
app.use('/api/notes',require('./routes/notes.js'));


app.listen(port,()=>{
    console.log(`App is listening to http://localhost:${port}`);
})