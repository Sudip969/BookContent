const repo = require("./userRepository");
const serObj = {
  //Service to Insert
  async insert(req) {
    return await repo.insert(req);
  },
  //Service to Select
  async select(req) {
    return await repo.select(req);
  },
  //Service to delete
  async delete(req) {
    return await repo.delete(req);
  },
  //Service to update
  async update(req) {
    return await repo.update(req);
  },
};
module.exports = serObj;
