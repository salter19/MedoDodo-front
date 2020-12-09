import React from 'react'
import ViewBase from './ViewBase'

class CatView extends React.Component {
    state = { view:'' }
    componentDidMount() {
        const tmp = this.getView();
        console.log(tmp.length)
    }

    getView = () => {
        console.log("getting view")
        return (
            <div className="ui segement">
                <ul>
                    <li>task 1</li>
                    <li>task 2</li>
                    <li>task 3</li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className="cat-view">
                <ViewBase 
                    date={this.props.date} 
                    page={this.props.page}
                    onClickRight={this.props.onClickAdd} 
                    onClickLeft={this.props.onClickCats}
                    catTitle="meow-1"
                    view={this.state.view}
                />
            </div>
        )
    }
}

export default CatView