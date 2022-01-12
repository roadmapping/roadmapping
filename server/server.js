const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const goalRoutes = require("./Routes/goalRoutes");
const userRoutes = require("./Routes/userRoutes");
const cookieParser = require("cookie-parser");

const PORT = 3000;

//middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cookieParser());

//connecting the database
const mongoose = require("mongoose");
// const {URI} = require('./Models');
mongoose.connect(process.env.MONGO_URI);
const database = mongoose.connection;
database.on("error", (error) => console.error(error));
database.once("open", () => console.log("database connected"));

//routes
app.use("/goals", goalRoutes);
app.use("/auth", userRoutes);

// app.get("/Dashboard", (req, re) => {
//   res.sendFile(path.resolve(__dirname, "../client/components/Dashboard.jsx"));
// });

/* Global Error Handling */
// app.use((err, req, res) => {
//   console.error(err.message);
//   const clientError = Object.assign({
//     status: 500,
//     message: { error: 'Unknown server error. Check logs.' }
//   }, err);
//   res.status(clientError.status).json(clientError.message);
// });

//starting the server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;
