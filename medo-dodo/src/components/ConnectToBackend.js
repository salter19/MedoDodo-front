import axios from "axios";
import Servers from "./Servers";

const address = Servers.local;
const o = { 
  week: 'week/',
  category: 'category/',
  categorytitles: 'categorytitles/',
  id: 'id/',
  categories: 'categories/',
  modify: 'modify' 
}

const byWeek = async (week, year) => {
  const result = await axios.get(`${address}${o.week}${week}/${year}`);
  return result.data;
};

const byCategoryTitle = async (value) => {
  const result = await axios.get(`${address}${o.category}${value}`);
  return result.data;
};

const everyCatTitle = async () => {
  const result = await axios.get(`${address}${o.categorytitles}`);
  return result.data;
};

const byCategoryId = async (value) => {
  const result = await axios.get(`${address}${o.category}${o.id}${value}`);
  return result.data;
} 

const everyCategory = async () => {
  const result = await axios.get(`${address}${o.categories}`);
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

const saveTask = async({title, due_date, description, priority, category_id, category_title, is_done}) => {
  // (title, due_date, description, priority, category_id, is_done) 
 
  let isD = false;
  if (is_done) {
    isD = true;
  }
  
  const result = await axios.post(address, {
    title: title, 
    due_date: due_date,
    description: description,
    priority: priority,
    category_id: category_id,
    is_done: isD
  });
  
  return result.data;
}

const updateTask = async({id}) => {

}

const saveCategory = async(_title)  => {
  try {
    const result = await axios.post(`${address}${o.category}`, {title: _title});
    return result.data;
  } catch (error) {
    alert(`Something went sour while saving new category. ${error}`)
  }
}
const obj = { byWeek, byCategoryTitle, everyCatTitle, byId, everyTask, byCategoryId, everyCategory, saveTask, saveCategory };

export default obj;
