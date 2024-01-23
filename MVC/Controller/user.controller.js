const { userModel } = require("../Model/user.model");

module.exports = {
  get: async (req, res) => {
    try {
      res.status(200).send("get the data");
    } catch (err) {
      console.log("err: ", err);
    }
  },
  post: async (req, res) => {
    const { firstName } = req.body;
    console.log('name: ', name);
      const user = new userModel({
        name: firstName
      });
      await user.save();
    res.send("Hello form user");
  }
};
