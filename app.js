const express  = require("express")
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose")

require("dotenv").config();

const app = express();


mongoose.connect(process.env.DATABASE_URL);
mongoose.connection.once('open',()=>{
    console.log("Connected to database")
})


app.use("/graphql",graphqlHTTP({
    schema ,
    graphiql: true
}));


app.listen(3000 , (req,res)=>{
    console.log("now running and listening for request on port 3000")
})