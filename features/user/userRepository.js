const User = require("./userModel.js");
const repObj = {
  //repo for insert
  async postApiCollect(req) {
    const data = User.build({ name: req.body.name });
    await data.save(); //Or can use create instead using build and save
    return data;
  },
  //repo for select
  async selectApiCollect(req) {
    //repo for select without id
    if (!req.params.id) {
      const data = await User.findAll();
      return data;
    }
    //repo for select by id
    const data = await User.findOne({ where: { id: req.params.id } });
    if (data) {
      return data;
    }
    return "No such Id present";
  },
  //repo for delete
  async deleteApiCollect(req) {
    const data = await User.findOne({ where: { id: req.params.id } });
    await data.destroy();
    return "Row deleted successfully";
  },
  //repo for update
  async updateApiCollect(req) {
    const data = await User.findOne({ where: { id: req.params.id } });
    data.name = req.body.name;
    data.save();
    return "Row updated successfully";
  },
};

module.exports = repObj;
