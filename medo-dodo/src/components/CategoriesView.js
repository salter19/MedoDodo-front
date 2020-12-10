import React from 'react'
import ViewBase from './ViewBase'
import validCatTitles from './validCategoryTitles'
import TaskCard from './TaskCard'
import CategoryIcon from './CategoryIcon'

class CategoriesView extends React.Component {
    state = { titles: [], cards: []}

    componentDidMount() {
        this.getTitles()
        this.createCards()
    }
    getTitles = async() => {
        const tmp = await validCatTitles();
        console.log(tmp)
        this.setState({ titles: tmp })
        this.createCards()
    }
    createCards = () => {
    
        let i = 0;
        const taskCards = this.state.titles.map((e) => {
            return <CategoryIcon key={i++} title={e}/>;
        });
        this.setState({ cards: taskCards });
        console.log(this.state.titles.length)
    }
    
    render() {
        const view = (
                <div className="categories">
                    <ul>
                        {this.state.cards}
                    </ul>
                </div>
            )
        
        return (
            <div className="categories-view">

                <ViewBase 
                    date={this.props.date} 
                    page={this.props.page}
                    onClickRight={this.props.onClickAdd} 
                    onClickLeft={this.props.onClickWeeks}
                    
                    view={view}
                />
                
            </div>
        )
    }
}

export default CategoriesView