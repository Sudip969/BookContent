const service = require("./userService");
const contObj = {
  //insert controller
  async insert(req, res) {
    const comeBack = await service.insert(req);
    res.send(comeBack);
  },
  //select controller
  async select(req, res) {
    const comeBack = await service.select(req);
    res.send(comeBack);
  },
  //delete controller
  async delete(req, res) {
    await service.delete(req);
    res.send("Row deleted");
  },

  //update controller
  async update(req, res) {
    await service.update(req);
    res.send("Row updated successfully");
  },
};
module.exports = contObj;
