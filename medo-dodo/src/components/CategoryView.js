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
                    onClickTask={this.props.onClickTask}
                    catTitle={this.props.title}
                    view={<TasksByCatTitle catTitle={this.props.title} onClickTask={this.props.onClickTask}/>}
                />
            </div>
        )
    }
}

export default CategoryView