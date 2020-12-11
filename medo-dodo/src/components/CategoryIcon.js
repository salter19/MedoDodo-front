import './styles/CategoryIcon.css'
import React from 'react'
import MyButton from './MyButton'
import pagetypes from './pagetypes'
import buttontypes from './buttontypes'

class CategoryIcon extends React.Component {

    constructor({props}) {
        super(props)
        this.state = { tasks: [] }
    }

    componentDidMount() {
        const listItems = this.props.data.map(e => <li>{e}</li>)
        this.setState( { tasks: listItems } )
    }

    render () {
        return (
            <div className="category-icon">
                <div className="ui card">
                    <div className="blue box">
                        
                        <div className="header">
                            <h3>
                                {this.props.title}
                            </h3>
                        </div>

                        <div className="task">
                            <ul>
                                {this.state.tasks}
                            </ul>
                        </div>
    
                        <MyButton page={pagetypes.category} buttontype={buttontypes.category} onClickCat={this.props.onClickCat} category={this.props.title} />
                    </div>
    
                </div>
            </div>
        )
    }  
}

export default CategoryIcon