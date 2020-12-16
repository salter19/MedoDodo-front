import React from "react";
import Label from "./Label";
import TaskGetter from './TasksGetter'

class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: '', value: '', categories: [] } 
  }

  async componentDidMount() {
    const cats = await this.getCategories()
    this.setState( {categories: cats})
    this.createOptions()
  }

  getCategories = async() => {
    const data = await TaskGetter.everyCat()
    const res = data.map( obj => obj.title )
    return res;
  }

  createOptions = () => {
    const res = this.state.categories.map(cat => <option value="">{cat}</option>)
    console.log(res.length)
  }
  render() {
    return (
      <div className="drop-down">
        <div className="ui segment">
          <div className="ui grid">
            <div className="sixteen wide column">
              <Label
                labelName={this.props.labelName}
                textcolor={this.props.labelTextColor}
                labelAlign={this.props.labelAlign}
              />
            </div>
            <div className="ui row">
              <form className="ui form">
                <div className="fields">
                  <div className="field">

                    <select className="ui search dropdown">
                      <option value="">Choose category</option>
                      <option value="0">My Tasks</option>
                      <option value="1">School Stuff</option>
                      <option value="">Add new category</option>
                    </select>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DropDown;
