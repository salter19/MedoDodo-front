import TasksGetter from "./TasksGetter";
const validCatTitles = async () => {
  const catObj = await TasksGetter.everyCat();
  const titlesArr = catObj.map((obj) => obj.title);
  return titlesArr;
};

const taskTitlesByCat = async (cat) => {
  const taskObj = await TasksGetter.byCategoryTitle(cat);
  return taskObj;
};

const obj = { validCatTitles, taskTitlesByCat };

export default obj;
