import React from "react";
import ViewBase from "./ViewBase";
import TextInputField from "./TextInputField";
import PrioritySegment from "./PrioritySegment";
import priorityLevels from "./prioritylevels";
import TaskGetter from "./ConnectToBackend";
import pagetypes from "./pagetypes";
import DatePicker from "./DatePicker";
import Dropdown from "./DropdownSegment";

class TaskView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      description: "",
      due_date: "",
      priority: priorityLevels[priorityLevels.length - 1],
      category: 1,
      inputFields: [],
      priorityRow: [],
      dropdownOptions: [],
      selectedCategory: [],
    };
  }

  async componentDidMount() {
    this.setDefaultsByPagetype();
  }

  saveTask = async () => {
    const task = {
      title: this.state.task,
      due_date: this.state.due_date,
      description: this.state.description,
      priority: this.state.priority,
      category_id: this.state.category,
      category_title: this.state.selectedCategory[1],
    };

    try {
      await TaskGetter.saveTask(task);
      this.props.onSave();
    } catch (error) {
      alert("Something went wrong with saving the task.");
    }
  };

  componentDidUpdate() {
    //console.log(this.state)
  }

  setDefaultsByPagetype = async () => {
    if (this.props.page !== pagetypes.modifyTask) {
      const dropdownOptions = await this.setDropdownOptions();

      this.setState({
        dropdownOptions: dropdownOptions,
      });

      const tmp = [this.props.placeholder, this.props.description];
      this.createTextInputFields(tmp[0], tmp[1]);
      const defCat = await this.setDefaultCategoryForDropdown(1);
      this.setPriorityRow(3);
      this.setSelectedCategory(defCat);
    }
  };

  setByTask = async () => {
    try {
      const taskObj = await this.getTaskData();
      return taskObj[0];
    } catch (error) {
      alert(`Something went wrong in default data setting.`);
    }
  };

  getTaskData = async () => {
    const task = await TaskGetter.byId(this.props.currentTaskID);
    return task;
  };

  setTaskTitle = (title) => {
    this.setState({ task: title });
  };

  setDescription = (text) => {
    this.setState({ description: text });
  };

  setDueTime = (time) => {
    this.setState({ due_date: time });
  };

  setNewPriority = (level) => {
    this.setState({ priority: level });
  };

  setPriorityRow = (taskPr) => {
    try {
      const br = (
        <PrioritySegment
          labelAlign="center"
          priorityValue={taskPr}
          onPriorityChange={this.setNewPriority}
        />
      );

      this.setState({ priority: taskPr, priorityRow: br });
    } catch (error) {
      alert("something at loss in priority setting.");
    }
  };

  setCategory = (id) => {
    this.setState({ category: id });
  };

  createTextInputFields = (task, description) => {
    try {
      const taskField = (
        <TextInputField
          key={task}
          onSubmit={(e) => this.setTaskTitle(e)}
          type="text"
          placeholder={task}
          labelName="Task"
          onInputChange={(e) => this.setTaskTitle(e)}
        />
      );

      const descriptionField = (
        <TextInputField
          key={description}
          onSubmit={(e) => this.setDescription(e)}
          type="text"
          placeholder={description}
          labelName="Description"
          onInputChange={(e) => this.setDescription(e)}
        />
      );

      this.setState({ inputFields: [taskField, descriptionField] });
    } catch (error) {
      alert("something wrong at field creation");
    }
  };

  setDropdownOptions = async () => {
    const ops = await TaskGetter.everyCategory();
    let objs = ops.map((obj) => {
      return [obj.id, obj.title];
    });
    objs.push([0, "Add new category"]);

    return objs;
  };

  setSelectedCategory = async (cat) => {
    if (cat[0] === 0) {
      const newCat = prompt("Add new category");

      const exists = await this.checkIfCatExists(newCat);
      exists
        ? await this.setToCorrespondingCategory(newCat)
        : this.saveNewCategory(newCat);
    } else {
      this.useExistingCategory(cat);
    }
  };

  setToCorrespondingCategory = async (newCat) => {
    let res;
    for (let i of this.state.dropdownOptions) {
      if (i[1] === newCat) {
        res = i;
      }
    }

    if (res) {
      this.useExistingCategory(res);
    }
  };
  useExistingCategory = (cat) => {
    this.setState({ category: cat[0], selectedCategory: cat });
  };

  saveNewCategory = async (title) => {
    const res = await TaskGetter.saveCategory(title);
    this.setState({ category: res, selectedCategory: [res, title] });
  };

  checkIfCatExists = async (title) => {
    const allCats = await TaskGetter.everyCategory();
    let res = false;
    allCats.forEach((e) => {
      if (e.title === title) {
        res = true;
        return;
      }
    });
    return res;
  };

  setDefaultCategoryForDropdown = async (id) => {
    const categories = await TaskGetter.everyCategory();
    let res = [];
    categories.map((obj) =>
      obj.id === id ? res.push(obj.id, obj.title) : null
    );

    return res;
  };

  view = () => {
    if (this.props.page === pagetypes.modifyTask) {
      return (
        <div className="empty content">
          <p>Sorry, no modify here, only delete is real.</p>
        </div>
      );
    } else {
      return (
        <div className="content">
          {this.state.inputFields}
          {this.state.priorityRow}
          <DatePicker onSelectedChange={this.setDueTime} now={new Date()} />
          <Dropdown
            options={this.state.dropdownOptions}
            header="Select category"
            selected={this.state.selectedCategory}
            onSelectedChange={this.setSelectedCategory}
          />
        </div>
      );
    }
  };

  render() {
    return (
      <div className="task-view">
        <ViewBase
          page={this.props.page}
          date={this.props.date}
          onSave={this.saveTask}
          onSaveC={this.props.onSaveC}
          onDelete={this.props.onDelete}
          goBack={this.props.goBack}
          view={this.view()}
        />
      </div>
    );
  }
}

export default TaskView;
