const User = require("./userModel.js");
const repObj = {
  //repo for insert
  async insert(req) {
    if (req.body.length > 1) {
      return await User.bulkCreate(req.body);
    }
    return await User.create(req.body);
  },
  //repo for select
  async select(req) {
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
  async delete(req) {
    await User.destroy({ where: { id: req.params.id } });
    return "Row deleted successfully";
  },
  //repo for update
  async update(req) {
    const data = await User.findOne({ where: { id: req.params.id } });

    console.log(data);
    if (data) {
      console.log("If k andar");
      await User.update(req.body, { where: { id: req.params.id } });
      return "Row updated successfully";
    }
    return "No such Id present";
  },
};

module.exports = repObj;
