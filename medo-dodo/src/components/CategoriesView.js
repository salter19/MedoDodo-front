import React from 'react'
import CatecoryIcon from './CategoryIcon'
import ViewBase from './ViewBase'
import validCatTitles from './validCategoryTitles'

class CategoriesView extends React.Component {
    state = { titles: [], cards: []}

    componentDidMount() {
        this.setState({titles: validCatTitles()})
        this.createCards()
    }
    createCards = () => {

    }
    render() {
        return (
            <div className="categories-view">

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

export default CategoriesView