import React from 'react'
import ViewBase from './ViewBase'
import TasksByCat from './TasksByCat'

class CatView extends React.Component {

    render() {
        return (
            <div className="cat-view">
                <ViewBase 
                    date={this.props.date} 
                    page={this.props.page}
                    onClickRight={this.props.onClickAdd} 
                    onClickLeft={this.props.onClickCats}
                    catTitle="meow-1"
                    view={<TasksByCat />}
                />
            </div>
        )
    }
}

export default CatView