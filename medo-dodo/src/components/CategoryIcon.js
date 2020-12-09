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
    
                        <MyButton className="modify" buttontype={buttontypes.category}  />
                    </div>
    
                </div>
            </div>
        )
    }
    
}

export default CategoryIcon