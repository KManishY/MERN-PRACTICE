const express = require("express");
const { userRoute } = require("./Route/user.route");
const { connection } = require("./db.config");
const app = express();
const PORT = 3002;


app.use("/user", userRoute);

app.use("/register", userRoute);


app.listen(PORT, async () => {
    try {
      await connection;
      console.log(`listening on ${PORT}`);
    } catch (error) {
      console.log("error: ", error);
    }
  });