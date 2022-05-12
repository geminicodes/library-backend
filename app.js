const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

app.use(cors());

dotenv.config();

mongoose
 .connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  
  useUnifiedTopology: true
 })
 .then(() => console.log("MongoDB connected"))
 .catch(err => console.log(err));

app.use("/graphql", graphqlHTTP ({
    schema,
    graphiql: true
}));

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.listen(process.env.PORT, () => {
    console.log("Hello World!");
});