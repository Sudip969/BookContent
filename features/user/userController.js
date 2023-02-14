const service = require("./userService");
const contObj = {

  //insert controller
  async insert(req, res) {
    res.send(await service.insert(req));
  },

  //select controller
  async select(req, res) {
    res.send(await service.select(req));
  },

  //delete controller
  async delete(req, res) {
    res.send(await service.delete(req));
  },

  //update controller
  async update(req, res) {
    res.send(await service.update(req));
  },
};
module.exports = contObj;
