const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const bookRouter = require("./routes/bookRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/book", bookRouter);

app.get('/', (req, res) => {
  res.send("hello, this is homepage.");
})
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

const url = 'mongodb://0.0.0.0:27017/user-and-book';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.Promise = global.Promise;
mongoose.connect(url, options)
  .then(() => { console.log("Connected to MongoDB") })
  .catch((err) => console.log(err));


module.exports = app;
