import './styles/CategoryIcon.css'
import React from 'react'
import MyButton from './MyButton'
import pagetypes from './pagetypes'
import buttontypes from './buttontypes'

class CategoryIcon extends React.Component {

    render () {
        return (
            <div className="category-icon">
                <div className="ui card">
                    <div className="blue box">
    
                        <MyButton page={pagetypes.category} buttontype={buttontypes.category} onClickCat={this.props.onClickCat} />
                    </div>
    
                </div>
            </div>
        )
    }
    
}

export default CategoryIcon