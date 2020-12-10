import './styles/CategoryIcon.css'
import React from 'react'
import MyButton from './MyButton'
import pagetypes from './pagetypes'
import buttontypes from './buttontypes'

class CategoryIcon extends React.Component {

    constructor({props}) {
        super(props)
    }
    render () {
        return (
            <div className="category-icon">
                <div className="ui card">
                    <div className="blue box">
                        
                        <div className="header">{this.props.title}</div>


    
                        <MyButton page={pagetypes.category} buttontype={buttontypes.category} onClickCat={this.props.onClickCat} />
                    </div>
    
                </div>
            </div>
        )
    }
    
}

export default CategoryIcon