import pagetypes from "./pagetypes";

const obj = {
  categories: pagetypes.categories,
  weekly: pagetypes.weekly,
  addTask: pagetypes.addTask,
  save: ["SAVE", <br />, "THIS TASK"],
  return: ["GO", <br />, "BACK"],
  modify: pagetypes.modifyTask,
  delete: ["DELETE", <br />, "THIS TASK"],
  deleteC: ["DELETE", <br />, "THIS CATEGORY"],
  category: pagetypes.category,
};

export default obj;
