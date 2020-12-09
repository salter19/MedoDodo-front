import './styles/CategoryIcon.css'
import React from 'react'
import MyButton from './MyButton'
import pagetypes from './pagetypes'

class CategoryIcon extends React.Component {

    render () {
        return (
            <div className="category-icon">
                <div className="ui card">
                    <div className="blue box">
    
                        <MyButton className="modify" page={pagetypes.categories}  />
                    </div>
    
                </div>
            </div>
        )
    }
    
}

export default CategoryIcon