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
    res.send(await service.delete(req));
  },

  //update controller
  async update(req, res) {
    res.send(await service.update(req));
  },
};
module.exports = contObj;
