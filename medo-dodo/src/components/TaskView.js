import "./styles/TaskView.css";
import React from "react";
import ViewBase from './ViewBase'
import TextInputField from "./TextInputField";
import DueTime from "./DueTimeInput";
import PriorityButtonRow from "./PriorityButtonRow";
import DropDown from "./DropDown";
import priorityLevels from './prioritylevels'
import TaskGetter from './TasksGetter'
import pagetypes from './pagetypes'

class TaskView extends React.Component {

  state 
  constructor(props) {
    super(props)
    this.state = { 
      task: '', 
      description: '', 
      due_date: '', 
      priority: priorityLevels[priorityLevels.length -1], 
      category: 1,
      inputFields: []
    }
  }

  async componentDidMount() {
    if (this.props.page === pagetypes.modifyTask) {
      const data = await this.setByTask()
      
      this.createTextInputFields(data.title, data.description)

    } else {
      
      const tmp = [this.props.placeholder, this.props.description]

      this.createTextInputFields(tmp[0], tmp[1])
    }  
    
  }

  setByTask = async() => {
    try {
      const taskObj = await this.getTaskData()
      const data = taskObj[0]
      return data
      
    } catch (error) {
      alert(`Something went wrong in default data setting.`)
    }
  }

  getTaskData = async() => {
    const task = await TaskGetter.byId(this.props.currentTaskID)
    return task
  }

  createTextInputFields = (task, description) => {
    try {
      const taskField = ( 
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="text"
          placeholder={task}
          labelName="Task"
        /> 
      )

      const descriptionField = (        
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="text"
          placeholder={description}
          labelName="Description: "
        />
      )
      
      this.setState({ inputFields: [taskField, descriptionField] })
    
    } catch (error) {
      alert("something wrong at field creation")
    }
  }

  onTextFieldSubmit(term) {
    console.log(term);
  }

  view = () => {
    return (
      <div className="content">  
        
        {this.state.inputFields}
        <PriorityButtonRow labelAlign="center" />
        <DueTime labelName="Due date and time:" labelAlign="center" />
        <DropDown labelName="Category" labelAlign="center" />
      </div>
    )
  }

  render() {
   
    return (
      <div className="task-view">
        <ViewBase          
          page={this.props.page}
          date={this.props.date}
          onSave={this.props.onSave} 
          onSaveC={this.props.onSaveC}
          view={this.view()}
        />
        
      </div>
    );
  }
}

export default TaskView;
