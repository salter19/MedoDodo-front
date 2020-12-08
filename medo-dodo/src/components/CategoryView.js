import React from 'react'
import CatecoryIcon from './CategoryIcon'
import Head from './Header'
import Footer from './Footer'

class CategoryView extends React.Component {
    render() {
        return (
            <div className="category-view">
                <Head date={this.props.date} page={this.props.page}/>
                CAT view
                <CatecoryIcon />
                <Footer 
                    key={2} 
                    page={this.props.page}
                    onClickRight={this.props.onClickAdd} 
                    onClickLeft={this.props.onClickWeeks}
                />
            </div>
        )
    }
}

export default CategoryView