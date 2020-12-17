import "./styles/TaskView.css";
import React from "react";
import ViewBase from "./ViewBase";
import TextInputField from "./TextInputField";
import PriorityButtonRow from "./PriorityButtonRow";
import priorityLevels from './prioritylevels'
import TaskGetter from './TasksGetter'
import pagetypes from './pagetypes'
import Dropdown from './Dropdown'
import DatePicker from './DatePicker'

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
      priorityTag: [],
      dropdownOptions: [],
      selectedCategory: []
    }
  }

  componentDidMount() {    
    this.getGoing();

  }
  
  componentDidUpdate() {
    console.log('something updated')
  }

  getGoing = async() => {
    this.setDefaultsByPagetype();
    const dropdownOptions = await this.setDropdownOptions();
    
    this.setState({
      dropdownOptions: dropdownOptions,
    });

    console.log(this.state)
  }
  
  setDefaultsByPagetype = async() => {
    if (this.props.page === pagetypes.modifyTask) {
      const data = await this.setByTask(); 
      this.setTaskTitle(data.title);
      this.setDescription(data.description);
      this.setDueTime(data.due_date);
      this.setPriorityAndTag(data.priority);
      this.setCategory(data.category_id);
      this.createTextInputFields(data.title, data.description);      
      const defCat = await this.setDefaultCategoryForDropdown(data.category_id);
      this.setSelectedCategory(defCat);
      
    } else {      
      const tmp = [this.props.placeholder, this.props.description]
      this.createTextInputFields(tmp[0], tmp[1])
      const defCat = await this.setDefaultCategoryForDropdown(1)
      this.setState({
        selectedCategory: defCat
      })
    } 
  }

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
    this.setState({task: title});
  }

  setDescription = (text) => {
    this.setState({description: text});
  }

  setDueTime = (time) => {
    console.log('t: ' + time)
    this.setState( { due_date: time } )
  }
  
  setPriorityAndTag = (taskPr) => {
    try {
      const br = (<PriorityButtonRow labelAlign="center" priorityValue={taskPr}/>)
      
      this.setState( { priority: taskPr, priorityTag: br } )
      
    } catch (error) {
      alert('something at loss in priority setting.')
    }
  }

  setCategory = (id) => {
    this.setState( { category: id } )
  }

  createTextInputFields = (task, description) => {
    try {
      const taskField = (
        <TextInputField
          key={task}
          onSubmit={this.onTextFieldSubmit}
          type="text"
          placeholder={task}
          labelName="Task"
        />
      );

      const descriptionField = (
        <TextInputField
          key={description}
          onSubmit={this.onTextFieldSubmit}
          type="text"
          placeholder={description}
          labelName="Description: "
        />
      );

      this.setState({ inputFields: [taskField, descriptionField] });
    } catch (error) {
      alert("something wrong at field creation");
    }
  };


  setDropdownOptions = async() => {
    const ops = await TaskGetter.everyCategory()
    const objs = ops.map(obj => {return [obj.id, obj.title]})
    
    return objs;
  }

  setSelectedCategory = (cat) => {
    this.setState( { selectedCategory: cat } )    
  }

  setDefaultCategoryForDropdown = async(id) => {
    
    const categories = await TaskGetter.everyCategory();
    let res = []
    categories.map((obj) => 
      obj.id === id ? res.push(obj.id, obj.title) : null
    );

    return res;
  }

  onTextFieldSubmit(term) {
    console.log(term);
  }

  view = () => {
    return (
      <div className="content">
        {this.state.inputFields}
        {this.state.priorityTag}
        <DatePicker onSelectedChange={this.setDueTime}/>
        <Dropdown options={this.state.dropdownOptions} header="Select Category" selected={this.state.selectedCategory} onSelectedChange={this.setSelectedCategory} />
      </div>
    );
  };

  render() {
    return (
      <div className="task-view">
        <ViewBase
          page={this.props.page}
          date={this.props.date}
          onSave={this.props.onSave}
          onSaveC={this.props.onSaveC}
          onDelete={this.props.onDelete}
          view={this.view()}
        />
      </div>
    );
  }
}

export default TaskView;
