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
import Dropper from './Dropping'

class TaskView extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      task: '', 
      description: '', 
      due_date: '', 
      priority: priorityLevels[priorityLevels.length -1], 
      category: 1,
      inputFields: [],
      priorityTag: [],
      dropdownOptions: [],
      selectedCategory: ''
    }
  }

  async componentDidMount() {

    this.setDefaultsBasedOnPageType();
   
    const dropdownOptions = await this.setDropdownOptions();
    
    this.setState({
      dropdownOptions: dropdownOptions,
    });

    console.log(this.state)

  }

  setDefaultsBasedOnPageType = async() => {

    if (this.props.page === pagetypes.modifyTask) {
      const data = await this.setByTask()      
      this.createTextInputFields(data.title, data.description)
      this.setPriority(data.priority)
      const defCat = await this.setDefaultCategoryForDropdown(data.category_id)

      this.setState({
        task: data.title,
        description: data.description,
        priority: data.priority,
        category: data.category_id,
        selectedCategory: defCat
      })

    } else {      
      const tmp = [this.props.placeholder, this.props.description]
      this.createTextInputFields(tmp[0], tmp[1])
      const defCat = await this.setDefaultCategoryForDropdown(1)

      this.setState({
        selectedCategory: defCat
      })
    } 
  }

  setByTask = async() => {
    try {
      const taskObj = await this.getTaskData()
      return taskObj[0]
      
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
          key={task}
          onSubmit={this.onTextFieldSubmit}
          type="text"
          placeholder={task}
          labelName="Task"
        /> 
      )

      const descriptionField = (        
        <TextInputField
          key={description}
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

  setPriority = (taskPr) => {
    try {
      const br = (<PriorityButtonRow labelAlign="center" priorityValue={taskPr}/>)
      
      this.setState( { priority: taskPr, priorityTag: br } )
      
    } catch (error) {
      alert('something at loss in priority setting.')
    }
  }

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
        <DueTime labelName="Due date and time:" labelAlign="center" />
        <Dropper options={this.state.dropdownOptions} header="Select Category" selected={this.state.selectedCategory} onSelectedChange={this.setSelectedCategory} />
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
