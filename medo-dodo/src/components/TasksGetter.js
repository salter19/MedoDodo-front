import axios from "axios";
import Servers from "./Servers";

const address = Servers.local;
const options = ["week/", "category/", "categorytitles/", "id/"];

const byWeek = async (week, year) => {
  const result = await axios.get(`${address}${options[0]}${week}/${year}`);
  return result.data;
};

const byCategoryTitle = async (value) => {
  const result = await axios.get(`${address}${options[1]}${value}`);
  return result.data;
};

const everyCat = async () => {
  const result = await axios.get(`${address}${options[2]}`);
  return result.data;
};

const byCategoryId = async (value) => {
  const result = await axios.get(`${address}${options[1]}${options[3]}${value}`)
  return result.data;
} 

const byId = async (taskID) => {
  const result = await axios.get(`${address}${taskID}`)
  return result.data;
}

const everyTask = async() => {
  const result = await axios.get(`${address}`)
  return result.data;
}

const obj = { byWeek, byCategoryTitle, everyCat, byId, everyTask, byCategoryId};

export default obj;
