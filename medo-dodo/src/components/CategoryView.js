import React from 'react'
import CatecoryIcon from './CategoryIcon'
import ViewBase from './ViewBase'

class CategoryView extends React.Component {
    render() {
        return (
            <div className="category-view">

                <ViewBase 
                    date={this.props.date} 
                    page={this.props.page}
                    onClickRight={this.props.onClickAdd} 
                    onClickLeft={this.props.onClickWeeks}
                    
                    view={<CatecoryIcon onClickCat={this.props.onClickCat} onClickCats={this.props.onClickCats} />}
                />
                
            </div>
        )
    }
}

export default CategoryView