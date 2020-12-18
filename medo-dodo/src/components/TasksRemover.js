import axios from "axios";
import Servers from "./Servers";

const address = Servers.local;

const removeByTaskID = async (taskID, callback) => {
  await axios.delete(`${address}${taskID}`).then(
    (resp) => {
      console.log(resp, "Removed Task " + taskID);
      callback();
    },
    (e) => {
      console.log(e);
    }
  );
};

const removeCatByID = async (catID) => {
  await axios.delete(`${address}${catID}`).then(
    (resp) => {
      console.log(resp, "Removed Category " + catID);
    },
    (e) => {
      console.log(e);
    }
  );
};

const obj = { removeByTaskID, removeCatByID };

export default obj;
