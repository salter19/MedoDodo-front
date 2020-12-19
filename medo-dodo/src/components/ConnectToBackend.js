import axios from "axios";
import Servers from "./Servers";

const address = Servers.local;
const options = ["week/", "category/", "categorytitles/", "id/", 'categories/'];

const byWeek = async (week, year) => {
  const result = await axios.get(`${address}${options[0]}${week}/${year}`);
  return result.data;
};

const byCategoryTitle = async (value) => {
  const result = await axios.get(`${address}${options[1]}${value}`);
  return result.data;
};

const everyCatTitle = async () => {
  const result = await axios.get(`${address}${options[2]}`);
  return result.data;
};

const byCategoryId = async (value) => {
  const result = await axios.get(`${address}${options[1]}${options[3]}${value}`);
  return result.data;
} 

const everyCategory = async () => {
  const result = await axios.get(`${address}${options[4]}`);
  return result.data;
}

const byId = async (taskID) => {
  const result = await axios.get(`${address}${taskID}`)
  return result.data;
}

const everyTask = async() => {
  const result = await axios.get(`${address}`);
  return result.data;
}

const saveTask = async({title, due_date, description, priority, category_id}) => {
  // (title, due_date, description, priority, category_id) 
  const result = await axios.post(address, {
    title: title, 
    due_date: due_date,
    description: description,
    priority: priority,
    category_id: category_id
  });
  return result.data;
}
const saveCategory = async(title)  => {
  try {
    const result = await axios.post(`${address}${options[1]}${title}`);
    return result.data;
  } catch (error) {
    alert(`Something went sour while saving new category. ${error}`)
  }
}
const obj = { byWeek, byCategoryTitle, everyCatTitle, byId, everyTask, byCategoryId, everyCategory, saveTask, saveCategory };

export default obj;
