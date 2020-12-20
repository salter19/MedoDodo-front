import axios from "axios";
import Servers from "./Servers";

const address = Servers.remote;

const removeByTaskID = async (taskID, callback) => {
  await axios.delete(`${address}${taskID}`).then(
    (resp) => {
      callback();
    },
    (e) => {
      alert(`Something went wrong with delete\n${e}`)
    }
  );
};

const removeCatByID = async (catID, callback) => {
  await axios.delete(`${address}/category/${catID}`).then(
    (resp) => {
      callback();
    },
    (e) => {
      alert(`Something went wrong with delete\n${e}`)
    }
  );
};

const obj = { removeByTaskID, removeCatByID };

export default obj;
