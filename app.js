const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose
 .connect("mongodb+srv://geminicodes:q22222@library-project.t5woi.mongodb.net/library-project?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  
  useUnifiedTopology: true
 })
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log(err));

app.use("/graphql", graphqlHTTP ({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Hello World!");
});