import pagetypes from "./pagetypes";

const obj = {
  categories: pagetypes.categories,
  weekly: pagetypes.weekly,
  addTask: pagetypes.addTask,
  save: ["SAVE", <br />, "THIS TASK"],
  modify: pagetypes.modifyTask,
  delete: ["DELETE", <br />, "THIS TASK"],
  deleteC: "DELETE THIS CATEGORY",
  category: pagetypes.category,
};

export default obj;
