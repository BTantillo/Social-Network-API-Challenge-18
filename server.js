const express = require('express');
const dbConnect = require('./Config/connection')
const routes = require("./controllers")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(routes);

dbConnect.once("open", () => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}!`)
    })
})