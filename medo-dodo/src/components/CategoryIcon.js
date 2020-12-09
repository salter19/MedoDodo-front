import './styles/CategoryIcon.css'
import React from 'react'
import MyButton from './MyButton'

class CategoryIcon extends React.Component {

    render () {
        return (
            <div className="category-icon">
                <div className="ui card">
                    <div className="blue box">
    
                        <MyButton />
                    </div>
    
                </div>
            </div>
        )
    }
    
}

export default CategoryIcon