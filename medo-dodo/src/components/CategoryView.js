import React from 'react'
import ViewBase from './ViewBase'
import TasksByCatTitle from './TasksByCatTitle'

class CategoryView extends React.Component {

    render() {
        return (
            <div className="cat-view">
                <ViewBase 
                    date={this.props.date} 
                    page={this.props.page}
                    onClickRight={this.props.onClickAdd} 
                    onClickLeft={this.props.onClickCats}
                    catTitle={this.props.title}
                    view={<TasksByCatTitle />}
                />
            </div>
        )
    }
}

export default CategoryView