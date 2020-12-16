import React from "react";
import Label from "./Label";
import TaskGetter from './TasksGetter'

class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: '', value: '', categories: [], options: [], selection: '' } 
  }

  async componentDidMount() {
    const cats = await this.getCategories()
    this.setState( {categories: cats})
    const ops = this.createOptions()
    this.setState( { options: ops } )
  }

  getCategories = async() => {
    const data = await TaskGetter.everyCat()
    const res = data.map( obj => obj.title )
    return res;
  }

  createOptions = () => {
    const res = []
    this.state.categories.forEach(function(item, index, array) {
      res.push(<option key={index} value={index}> {item} </option>)
    })
    
    res.unshift(<option key="-1" value="">Choose category</option> )
    res.push(<option key="-2" value="">Add new category</option>)
    
    return res;
  }
q                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
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

                    <select id="my-select" className="ui selection dropdown visible active">                    
                      {this.state.options}
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
