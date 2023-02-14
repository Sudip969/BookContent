const repo = require("./userRepository");
const serObj = {
  //Service to Insert
  async post(req) {
    return await repo.post(req);
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
