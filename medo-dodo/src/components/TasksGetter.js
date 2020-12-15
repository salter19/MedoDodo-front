import axios from "axios";
import Servers from "./Servers";

const address = Servers.local;
const options = ["week/", "category/", "categorytitles/"];

const byWeek = async (week, year) => {
  //console.log(`${address}${options[0]}${week}/${year}`);
  const result = await axios.get(`${address}${options[0]}${week}/${year}`);
  console.log(result.data)
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

const obj = { byWeek, byCategoryTitle, everyCat };

export default obj;
